# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CommentanalyzerCommentsAnalyzeSecurity;
import org.openapis.openapi.models.operations.CommentanalyzerCommentsAnalyzeRequest;
import org.openapis.openapi.models.operations.CommentanalyzerCommentsAnalyzeResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AnalyzeCommentRequest;
import org.openapis.openapi.models.shared.AttributeParametersScoreTypeEnum;
import org.openapis.openapi.models.shared.AttributeParameters;
import org.openapis.openapi.models.shared.Context;
import org.openapis.openapi.models.shared.TextEntryTypeEnum;
import org.openapis.openapi.models.shared.TextEntry;
import org.openapis.openapi.models.shared.ArticleAndParentComment;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CommentanalyzerCommentsAnalyzeRequest req = new CommentanalyzerCommentsAnalyzeRequest() {{
                dollarXgafv = "2";
                analyzeCommentRequest = new AnalyzeCommentRequest() {{
                    clientToken = "provident";
                    comment = new TextEntry() {{
                        text = "distinctio";
                        type = "HTML";
                    }};
                    communityId = "unde";
                    context = new Context() {{
                        articleAndParentComment = new ArticleAndParentComment() {{
                            article = new TextEntry() {{
                                text = "nulla";
                                type = "PLAIN_TEXT";
                            }};
                            parentComment = new TextEntry() {{
                                text = "illum";
                                type = "PLAIN_TEXT";
                            }};
                        }};
                        entries = new org.openapis.openapi.models.shared.TextEntry[]{{
                            add(new TextEntry() {{
                                text = "deserunt";
                                type = "PLAIN_TEXT";
                            }}),
                            add(new TextEntry() {{
                                text = "iure";
                                type = "TEXT_TYPE_UNSPECIFIED";
                            }}),
                            add(new TextEntry() {{
                                text = "debitis";
                                type = "TEXT_TYPE_UNSPECIFIED";
                            }}),
                        }};
                    }};
                    doNotStore = false;
                    dropUnsupportedAttributes = false;
                    languages = new String[]{{
                        add("tempora"),
                        add("suscipit"),
                        add("molestiae"),
                        add("minus"),
                    }};
                    requestedAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeParameters>() {{
                        put("voluptatum", new AttributeParameters() {{
                            scoreThreshold = 4799.77;
                            scoreType = "STD_DEV_SCORE";
                        }});
                        put("nisi", new AttributeParameters() {{
                            scoreThreshold = 9255.97;
                            scoreType = "RAW";
                        }});
                        put("ab", new AttributeParameters() {{
                            scoreThreshold = 3373.96;
                            scoreType = "SCORE_TYPE_UNSPECIFIED";
                        }});
                        put("deserunt", new AttributeParameters() {{
                            scoreThreshold = 202.18;
                            scoreType = "PROBABILITY";
                        }});
                    }};
                    sessionId = "repellendus";
                    spanAnnotations = false;
                }};
                accessToken = "sapiente";
                alt = "proto";
                callback = "odit";
                fields = "at";
                key = "at";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "quod";
                uploadProtocol = "quod";
            }}            

            CommentanalyzerCommentsAnalyzeResponse res = sdk.comments.commentanalyzerCommentsAnalyze(req, new CommentanalyzerCommentsAnalyzeSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.analyzeCommentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### comments

* `commentanalyzerCommentsAnalyze` - Analyzes the provided text and returns scores for requested attributes.
* `commentanalyzerCommentsSuggestscore` - Suggest comment scores as training data.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
