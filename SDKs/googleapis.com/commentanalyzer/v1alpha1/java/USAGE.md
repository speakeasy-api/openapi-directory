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
                    alt = "proto";
                    callback = "recusandae";
                    fields = "consequuntur";
                    key = "sit";
                    oauthToken = "aut";
                    prettyPrint = false;
                    quotaUser = "inventore";
                    uploadType = "est";
                    uploadProtocol = "consequuntur";
                }};
                request = new AnalyzeCommentRequest() {{
                    clientToken = "maiores";
                    comment = new TextEntry() {{
                        text = "dolor";
                        type = "HTML";
                    }};
                    communityId = "et";
                    context = new Context() {{
                        articleAndParentComment = new ArticleAndParentComment() {{
                            article = new TextEntry() {{
                                text = "odio";
                                type = "PLAIN_TEXT";
                            }};
                            parentComment = new TextEntry() {{
                                text = "earum";
                                type = "TEXT_TYPE_UNSPECIFIED";
                            }};
                        }};
                        entries = new openapisdk.models.shared.TextEntry[]() {{
                            add(new TextEntry() {{
                                text = "magnam";
                                type = "PLAIN_TEXT";
                            }}),
                            add(new TextEntry() {{
                                text = "explicabo";
                                type = "HTML";
                            }}),
                            add(new TextEntry() {{
                                text = "modi";
                                type = "TEXT_TYPE_UNSPECIFIED";
                            }}),
                        }};
                    }};
                    doNotStore = true;
                    languages = new String[]() {{
                        add("ut"),
                        add("eos"),
                    }};
                    requestedAttributes = new java.util.HashMap<String, openapisdk.models.shared.AttributeParameters>() {{
                        put("porro", new AttributeParameters() {{
                            scoreThreshold = 97.099998;
                            scoreType = "PROBABILITY";
                        }});
                        put("similique", new AttributeParameters() {{
                            scoreThreshold = 36.099998;
                            scoreType = "SCORE_TYPE_UNSPECIFIED";
                        }});
                        put("explicabo", new AttributeParameters() {{
                            scoreThreshold = 33.200001;
                            scoreType = "RAW";
                        }});
                    }};
                    sessionId = "deleniti";
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