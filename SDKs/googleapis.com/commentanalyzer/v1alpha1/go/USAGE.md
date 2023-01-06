<!-- Start SDK Example Usage -->
```go
package main

import (
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
            DollarXgafv: "1",
            AccessToken: "aut",
            Alt: "json",
            Callback: "reiciendis",
            Fields: "voluptas",
            Key: "dolorem",
            OauthToken: "rem",
            PrettyPrint: false,
            QuotaUser: "voluptatum",
            UploadType: "veritatis",
            UploadProtocol: "quisquam",
        },
        Request: &shared.AnalyzeCommentRequest{
            ClientToken: "ducimus",
            Comment: &shared.TextEntry{
                Text: "omnis",
                Type: "HTML",
            },
            CommunityID: "fugit",
            Context: &shared.Context{
                ArticleAndParentComment: &shared.ArticleAndParentComment{
                    Article: &shared.TextEntry{
                        Text: "hic",
                        Type: "HTML",
                    },
                    ParentComment: &shared.TextEntry{
                        Text: "quis",
                        Type: "HTML",
                    },
                },
                Entries: []shared.TextEntry{
                    shared.TextEntry{
                        Text: "facere",
                        Type: "HTML",
                    },
                    shared.TextEntry{
                        Text: "dolorem",
                        Type: "HTML",
                    },
                    shared.TextEntry{
                        Text: "quis",
                        Type: "TEXT_TYPE_UNSPECIFIED",
                    },
                },
            },
            DoNotStore: true,
            Languages: []string{
                "eius",
            },
            RequestedAttributes: map[string]shared.AttributeParameters{
                "ipsa": shared.AttributeParameters{
                    ScoreThreshold: 54.200001,
                    ScoreType: "SCORE_TYPE_UNSPECIFIED",
                },
            },
            SessionID: "consequatur",
            SpanAnnotations: true,
        },
    }
    
    res, err := s.Comments.CommentanalyzerCommentsAnalyze(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AnalyzeCommentResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->