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
import org.openapis.openapi.models.operations.CommentanalyzerCommentsAnalyzeQueryParams;
import org.openapis.openapi.models.operations.CommentanalyzerCommentsAnalyzeRequest;
import org.openapis.openapi.models.operations.CommentanalyzerCommentsAnalyzeResponse;
import org.openapis.openapi.models.shared.AnalyzeCommentRequest;
import org.openapis.openapi.models.shared.AttributeParametersScoreTypeEnum;
import org.openapis.openapi.models.shared.AttributeParameters;
import org.openapis.openapi.models.shared.Context;
import org.openapis.openapi.models.shared.TextEntryTypeEnum;
import org.openapis.openapi.models.shared.TextEntry;
import org.openapis.openapi.models.shared.ArticleAndParentComment;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CommentanalyzerCommentsAnalyzeRequest req = new CommentanalyzerCommentsAnalyzeRequest() {{
                security = new CommentanalyzerCommentsAnalyzeSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new CommentanalyzerCommentsAnalyzeQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new AnalyzeCommentRequest() {{
                    clientToken = "deserunt";
                    comment = new TextEntry() {{
                        text = "suscipit";
                        type = "PLAIN_TEXT";
                    }};
                    communityId = "magnam";
                    context = new Context() {{
                        articleAndParentComment = new ArticleAndParentComment() {{
                            article = new TextEntry() {{
                                text = "debitis";
                                type = "TEXT_TYPE_UNSPECIFIED";
                            }};
                            parentComment = new TextEntry() {{
                                text = "delectus";
                                type = "TEXT_TYPE_UNSPECIFIED";
                            }};
                        }};
                        entries = new org.openapis.openapi.models.shared.TextEntry[]{{
                            add(new TextEntry() {{
                                text = "molestiae";
                                type = "HTML";
                            }}),
                            add(new TextEntry() {{
                                text = "placeat";
                                type = "PLAIN_TEXT";
                            }}),
                        }};
                    }};
                    doNotStore = false;
                    dropUnsupportedAttributes = false;
                    languages = new String[]{{
                        add("excepturi"),
                        add("nisi"),
                    }};
                    requestedAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeParameters>() {{
                        put("temporibus", new AttributeParameters() {{
                            scoreThreshold = 710.36;
                            scoreType = "PROBABILITY";
                        }});
                        put("veritatis", new AttributeParameters() {{
                            scoreThreshold = 6481.72;
                            scoreType = "SCORE_TYPE_UNSPECIFIED";
                        }});
                        put("ipsam", new AttributeParameters() {{
                            scoreThreshold = 8326.2;
                            scoreType = "RAW";
                        }});
                        put("quo", new AttributeParameters() {{
                            scoreThreshold = 1403.5;
                            scoreType = "RAW";
                        }});
                    }};
                    sessionId = "at";
                    spanAnnotations = false;
                }};
            }};            

            CommentanalyzerCommentsAnalyzeResponse res = sdk.comments.commentanalyzerCommentsAnalyze(req);

            if (res.analyzeCommentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


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
