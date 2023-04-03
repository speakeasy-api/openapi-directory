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