<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CommentanalyzerCommentsAnalyzeRequest{
        Security: operations.CommentanalyzerCommentsAnalyzeSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.CommentanalyzerCommentsAnalyzeQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UploadType: "nihil",
            UploadProtocol: "fuga",
        },
        Request: &shared.AnalyzeCommentRequest{
            ClientToken: "facilis",
            Comment: &shared.TextEntry{
                Text: "eum",
                Type: "PLAIN_TEXT",
            },
            CommunityID: "ullam",
            Context: &shared.Context{
                ArticleAndParentComment: &shared.ArticleAndParentComment{
                    Article: &shared.TextEntry{
                        Text: "saepe",
                        Type: "TEXT_TYPE_UNSPECIFIED",
                    },
                    ParentComment: &shared.TextEntry{
                        Text: "sapiente",
                        Type: "TEXT_TYPE_UNSPECIFIED",
                    },
                },
                Entries: []shared.TextEntry{
                    shared.TextEntry{
                        Text: "voluptatum",
                        Type: "HTML",
                    },
                    shared.TextEntry{
                        Text: "vel",
                        Type: "PLAIN_TEXT",
                    },
                },
            },
            DoNotStore: false,
            DropUnsupportedAttributes: false,
            Languages: []string{
                "similique",
                "reprehenderit",
            },
            RequestedAttributes: map[string]shared.AttributeParameters{
                "quo": shared.AttributeParameters{
                    ScoreThreshold: 710.36,
                    ScoreType: "PROBABILITY",
                },
                "dicta": shared.AttributeParameters{
                    ScoreThreshold: 6481.72,
                    ScoreType: "SCORE_TYPE_UNSPECIFIED",
                },
                "consequatur": shared.AttributeParameters{
                    ScoreThreshold: 8326.2,
                    ScoreType: "RAW",
                },
                "omnis": shared.AttributeParameters{
                    ScoreThreshold: 1403.5,
                    ScoreType: "RAW",
                },
            },
            SessionID: "accusamus",
            SpanAnnotations: false,
        },
    }

    ctx := context.Background()
    res, err := s.Comments.CommentanalyzerCommentsAnalyze(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeCommentResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->