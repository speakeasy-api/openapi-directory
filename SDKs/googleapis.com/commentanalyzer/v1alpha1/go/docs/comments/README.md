# Comments

### Available Operations

* [CommentanalyzerCommentsAnalyze](#commentanalyzercommentsanalyze) - Analyzes the provided text and returns scores for requested attributes.
* [CommentanalyzerCommentsSuggestscore](#commentanalyzercommentssuggestscore) - Suggest comment scores as training data.

## CommentanalyzerCommentsAnalyze

Analyzes the provided text and returns scores for requested attributes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Comments.CommentanalyzerCommentsAnalyze(ctx, operations.CommentanalyzerCommentsAnalyzeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AnalyzeCommentRequest: &shared.AnalyzeCommentRequest{
            ClientToken: sdk.String("totam"),
            Comment: &shared.TextEntry{
                Text: sdk.String("porro"),
                Type: shared.TextEntryTypeEnumHTML.ToPointer(),
            },
            CommunityID: sdk.String("dicta"),
            Context: &shared.Context{
                ArticleAndParentComment: &shared.ArticleAndParentComment{
                    Article: &shared.TextEntry{
                        Text: sdk.String("nam"),
                        Type: shared.TextEntryTypeEnumPlainText.ToPointer(),
                    },
                    ParentComment: &shared.TextEntry{
                        Text: sdk.String("occaecati"),
                        Type: shared.TextEntryTypeEnumTextTypeUnspecified.ToPointer(),
                    },
                },
                Entries: []shared.TextEntry{
                    shared.TextEntry{
                        Text: sdk.String("hic"),
                        Type: shared.TextEntryTypeEnumHTML.ToPointer(),
                    },
                    shared.TextEntry{
                        Text: sdk.String("totam"),
                        Type: shared.TextEntryTypeEnumTextTypeUnspecified.ToPointer(),
                    },
                    shared.TextEntry{
                        Text: sdk.String("commodi"),
                        Type: shared.TextEntryTypeEnumPlainText.ToPointer(),
                    },
                },
            },
            DoNotStore: sdk.Bool(false),
            DropUnsupportedAttributes: sdk.Bool(false),
            Languages: []string{
                "qui",
                "impedit",
            },
            RequestedAttributes: map[string]shared.AttributeParameters{
                "esse": shared.AttributeParameters{
                    ScoreThreshold: sdk.Float32(2165.5),
                    ScoreType: shared.AttributeParametersScoreTypeEnumStdDevScore.ToPointer(),
                },
                "aspernatur": shared.AttributeParameters{
                    ScoreThreshold: sdk.Float32(187.89),
                    ScoreType: shared.AttributeParametersScoreTypeEnumProbability.ToPointer(),
                },
                "natus": shared.AttributeParameters{
                    ScoreThreshold: sdk.Float32(1496.75),
                    ScoreType: shared.AttributeParametersScoreTypeEnumPercentile.ToPointer(),
                },
            },
            SessionID: sdk.String("dolor"),
            SpanAnnotations: sdk.Bool(false),
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("hic"),
        Fields: sdk.String("saepe"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("in"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("iste"),
        UploadProtocol: sdk.String("iure"),
    }, operations.CommentanalyzerCommentsAnalyzeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeCommentResponse != nil {
        // handle response
    }
}
```

## CommentanalyzerCommentsSuggestscore

Suggest comment scores as training data.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Comments.CommentanalyzerCommentsSuggestscore(ctx, operations.CommentanalyzerCommentsSuggestscoreRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SuggestCommentScoreRequest: &shared.SuggestCommentScoreRequest{
            AttributeScores: map[string]shared.AttributeScores{
                "architecto": shared.AttributeScores{
                    SpanScores: []shared.SpanScore{
                        shared.SpanScore{
                            Begin: sdk.Int(969810),
                            End: sdk.Int(666767),
                            Score: &shared.Score{
                                Type: shared.ScoreTypeEnumPercentile.ToPointer(),
                                Value: sdk.Float32(6706.38),
                            },
                        },
                    },
                    SummaryScore: &shared.Score{
                        Type: shared.ScoreTypeEnumScoreTypeUnspecified.ToPointer(),
                        Value: sdk.Float32(2103.82),
                    },
                },
                "corporis": shared.AttributeScores{
                    SpanScores: []shared.SpanScore{
                        shared.SpanScore{
                            Begin: sdk.Int(750686),
                            End: sdk.Int(315428),
                            Score: &shared.Score{
                                Type: shared.ScoreTypeEnumPercentile.ToPointer(),
                                Value: sdk.Float32(3637.11),
                            },
                        },
                    },
                    SummaryScore: &shared.Score{
                        Type: shared.ScoreTypeEnumProbability.ToPointer(),
                        Value: sdk.Float32(5701.97),
                    },
                },
                "accusantium": shared.AttributeScores{
                    SpanScores: []shared.SpanScore{
                        shared.SpanScore{
                            Begin: sdk.Int(634274),
                            End: sdk.Int(988374),
                            Score: &shared.Score{
                                Type: shared.ScoreTypeEnumRaw.ToPointer(),
                                Value: sdk.Float32(1020.44),
                            },
                        },
                        shared.SpanScore{
                            Begin: sdk.Int(652790),
                            End: sdk.Int(208876),
                            Score: &shared.Score{
                                Type: shared.ScoreTypeEnumPercentile.ToPointer(),
                                Value: sdk.Float32(1613.09),
                            },
                        },
                    },
                    SummaryScore: &shared.Score{
                        Type: shared.ScoreTypeEnumRaw.ToPointer(),
                        Value: sdk.Float32(6531.08),
                    },
                },
            },
            ClientToken: sdk.String("occaecati"),
            Comment: &shared.TextEntry{
                Text: sdk.String("numquam"),
                Type: shared.TextEntryTypeEnumPlainText.ToPointer(),
            },
            CommunityID: sdk.String("quam"),
            Context: &shared.Context{
                ArticleAndParentComment: &shared.ArticleAndParentComment{
                    Article: &shared.TextEntry{
                        Text: sdk.String("molestiae"),
                        Type: shared.TextEntryTypeEnumTextTypeUnspecified.ToPointer(),
                    },
                    ParentComment: &shared.TextEntry{
                        Text: sdk.String("error"),
                        Type: shared.TextEntryTypeEnumTextTypeUnspecified.ToPointer(),
                    },
                },
                Entries: []shared.TextEntry{
                    shared.TextEntry{
                        Text: sdk.String("vitae"),
                        Type: shared.TextEntryTypeEnumHTML.ToPointer(),
                    },
                    shared.TextEntry{
                        Text: sdk.String("animi"),
                        Type: shared.TextEntryTypeEnumTextTypeUnspecified.ToPointer(),
                    },
                },
            },
            Languages: []string{
                "quo",
            },
            SessionID: sdk.String("sequi"),
        },
        AccessToken: sdk.String("tenetur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("possimus"),
        Key: sdk.String("aut"),
        OauthToken: sdk.String("quasi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("laborum"),
    }, operations.CommentanalyzerCommentsSuggestscoreSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SuggestCommentScoreResponse != nil {
        // handle response
    }
}
```
