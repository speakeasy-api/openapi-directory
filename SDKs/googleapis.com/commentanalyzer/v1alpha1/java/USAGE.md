<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new AnalyzeCommentRequest() {{
                    clientToken = "rerum";
                    comment = new TextEntry() {{
                        text = "dicta";
                        type = "TEXT_TYPE_UNSPECIFIED";
                    }};
                    communityId = "voluptatum";
                    context = new Context() {{
                        articleAndParentComment = new ArticleAndParentComment() {{
                            article = new TextEntry() {{
                                text = "et";
                                type = "HTML";
                            }};
                            parentComment = new TextEntry() {{
                                text = "dolorem";
                                type = "PLAIN_TEXT";
                            }};
                        }};
                        entries = new openapisdk.models.shared.TextEntry[]() {{
                            add(new TextEntry() {{
                                text = "iste";
                                type = "TEXT_TYPE_UNSPECIFIED";
                            }}),
                        }};
                    }};
                    doNotStore = true;
                    languages = new String[]() {{
                        add("illum"),
                    }};
                    requestedAttributes = new java.util.HashMap<String, openapisdk.models.shared.AttributeParameters>() {{
                        put("vel", new AttributeParameters() {{
                            scoreThreshold = 20.200001;
                            scoreType = "STD_DEV_SCORE";
                        }});
                    }};
                    sessionId = "aspernatur";
                    spanAnnotations = true;
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