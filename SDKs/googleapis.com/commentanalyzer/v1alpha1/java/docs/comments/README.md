# comments

### Available Operations

* [commentanalyzerCommentsAnalyze](#commentanalyzercommentsanalyze) - Analyzes the provided text and returns scores for requested attributes.
* [commentanalyzerCommentsSuggestscore](#commentanalyzercommentssuggestscore) - Suggest comment scores as training data.

## commentanalyzerCommentsAnalyze

Analyzes the provided text and returns scores for requested attributes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommentanalyzerCommentsAnalyzeRequest;
import org.openapis.openapi.models.operations.CommentanalyzerCommentsAnalyzeResponse;
import org.openapis.openapi.models.operations.CommentanalyzerCommentsAnalyzeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AnalyzeCommentRequest;
import org.openapis.openapi.models.shared.ArticleAndParentComment;
import org.openapis.openapi.models.shared.AttributeParameters;
import org.openapis.openapi.models.shared.AttributeParametersScoreTypeEnum;
import org.openapis.openapi.models.shared.Context;
import org.openapis.openapi.models.shared.TextEntry;
import org.openapis.openapi.models.shared.TextEntryTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CommentanalyzerCommentsAnalyzeRequest req = new CommentanalyzerCommentsAnalyzeRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                analyzeCommentRequest = new AnalyzeCommentRequest() {{
                    clientToken = "dolorum";
                    comment = new TextEntry() {{
                        text = "dicta";
                        type = TextEntryTypeEnum.HTML;
                    }};;
                    communityId = "officia";
                    context = new Context() {{
                        articleAndParentComment = new ArticleAndParentComment() {{
                            article = new TextEntry() {{
                                text = "occaecati";
                                type = TextEntryTypeEnum.TEXT_TYPE_UNSPECIFIED;
                            }};;
                            parentComment = new TextEntry() {{
                                text = "deleniti";
                                type = TextEntryTypeEnum.HTML;
                            }};;
                        }};;
                        entries = new org.openapis.openapi.models.shared.TextEntry[]{{
                            add(new TextEntry() {{
                                text = "totam";
                                type = TextEntryTypeEnum.TEXT_TYPE_UNSPECIFIED;
                            }}),
                            add(new TextEntry() {{
                                text = "commodi";
                                type = TextEntryTypeEnum.PLAIN_TEXT;
                            }}),
                            add(new TextEntry() {{
                                text = "modi";
                                type = TextEntryTypeEnum.TEXT_TYPE_UNSPECIFIED;
                            }}),
                            add(new TextEntry() {{
                                text = "impedit";
                                type = TextEntryTypeEnum.HTML;
                            }}),
                        }};
                    }};;
                    doNotStore = false;
                    dropUnsupportedAttributes = false;
                    languages = new String[]{{
                        add("ipsum"),
                        add("excepturi"),
                    }};
                    requestedAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeParameters>() {{
                        put("perferendis", new AttributeParameters() {{
                            scoreThreshold = 3241.41;
                            scoreType = AttributeParametersScoreTypeEnum.PERCENTILE;
                        }});
                    }};
                    sessionId = "sed";
                    spanAnnotations = false;
                }};;
                accessToken = "iste";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "laboriosam";
                key = "hic";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "in";
                uploadProtocol = "corporis";
            }};            

            CommentanalyzerCommentsAnalyzeResponse res = sdk.comments.commentanalyzerCommentsAnalyze(req, new CommentanalyzerCommentsAnalyzeSecurity("iste", "iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.analyzeCommentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## commentanalyzerCommentsSuggestscore

Suggest comment scores as training data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommentanalyzerCommentsSuggestscoreRequest;
import org.openapis.openapi.models.operations.CommentanalyzerCommentsSuggestscoreResponse;
import org.openapis.openapi.models.operations.CommentanalyzerCommentsSuggestscoreSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ArticleAndParentComment;
import org.openapis.openapi.models.shared.AttributeScores;
import org.openapis.openapi.models.shared.Context;
import org.openapis.openapi.models.shared.Score;
import org.openapis.openapi.models.shared.ScoreTypeEnum;
import org.openapis.openapi.models.shared.SpanScore;
import org.openapis.openapi.models.shared.SuggestCommentScoreRequest;
import org.openapis.openapi.models.shared.TextEntry;
import org.openapis.openapi.models.shared.TextEntryTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CommentanalyzerCommentsSuggestscoreRequest req = new CommentanalyzerCommentsSuggestscoreRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                suggestCommentScoreRequest = new SuggestCommentScoreRequest() {{
                    attributeScores = new java.util.HashMap<String, org.openapis.openapi.models.shared.AttributeScores>() {{
                        put("architecto", new AttributeScores() {{
                            spanScores = new org.openapis.openapi.models.shared.SpanScore[]{{
                                add(new SpanScore() {{
                                    begin = 969810;
                                    end = 666767;
                                    score = new Score() {{
                                        type = ScoreTypeEnum.PERCENTILE;
                                        value = 6706.38;
                                    }};
                                }}),
                            }};
                            summaryScore = new Score() {{
                                type = ScoreTypeEnum.SCORE_TYPE_UNSPECIFIED;
                                value = 2103.82;
                            }};
                        }});
                        put("corporis", new AttributeScores() {{
                            spanScores = new org.openapis.openapi.models.shared.SpanScore[]{{
                                add(new SpanScore() {{
                                    begin = 750686;
                                    end = 315428;
                                    score = new Score() {{
                                        type = ScoreTypeEnum.PERCENTILE;
                                        value = 3637.11;
                                    }};
                                }}),
                            }};
                            summaryScore = new Score() {{
                                type = ScoreTypeEnum.PROBABILITY;
                                value = 5701.97;
                            }};
                        }});
                        put("accusantium", new AttributeScores() {{
                            spanScores = new org.openapis.openapi.models.shared.SpanScore[]{{
                                add(new SpanScore() {{
                                    begin = 634274;
                                    end = 988374;
                                    score = new Score() {{
                                        type = ScoreTypeEnum.RAW;
                                        value = 1020.44;
                                    }};
                                }}),
                                add(new SpanScore() {{
                                    begin = 652790;
                                    end = 208876;
                                    score = new Score() {{
                                        type = ScoreTypeEnum.PERCENTILE;
                                        value = 1613.09;
                                    }};
                                }}),
                            }};
                            summaryScore = new Score() {{
                                type = ScoreTypeEnum.RAW;
                                value = 6531.08;
                            }};
                        }});
                    }};
                    clientToken = "occaecati";
                    comment = new TextEntry() {{
                        text = "numquam";
                        type = TextEntryTypeEnum.PLAIN_TEXT;
                    }};;
                    communityId = "quam";
                    context = new Context() {{
                        articleAndParentComment = new ArticleAndParentComment() {{
                            article = new TextEntry() {{
                                text = "molestiae";
                                type = TextEntryTypeEnum.TEXT_TYPE_UNSPECIFIED;
                            }};;
                            parentComment = new TextEntry() {{
                                text = "error";
                                type = TextEntryTypeEnum.TEXT_TYPE_UNSPECIFIED;
                            }};;
                        }};;
                        entries = new org.openapis.openapi.models.shared.TextEntry[]{{
                            add(new TextEntry() {{
                                text = "vitae";
                                type = TextEntryTypeEnum.HTML;
                            }}),
                            add(new TextEntry() {{
                                text = "animi";
                                type = TextEntryTypeEnum.TEXT_TYPE_UNSPECIFIED;
                            }}),
                        }};
                    }};;
                    languages = new String[]{{
                        add("quo"),
                    }};
                    sessionId = "sequi";
                }};;
                accessToken = "tenetur";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "possimus";
                key = "aut";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "temporibus";
                uploadProtocol = "laborum";
            }};            

            CommentanalyzerCommentsSuggestscoreResponse res = sdk.comments.commentanalyzerCommentsSuggestscore(req, new CommentanalyzerCommentsSuggestscoreSecurity("quasi", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.suggestCommentScoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
