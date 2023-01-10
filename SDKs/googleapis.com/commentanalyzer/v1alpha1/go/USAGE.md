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
            DollarXgafv: "2",
            AccessToken: "cupiditate",
            Alt: "json",
            Callback: "aliquid",
            Fields: "et",
            Key: "adipisci",
            OauthToken: "et",
            PrettyPrint: false,
            QuotaUser: "itaque",
            UploadType: "illum",
            UploadProtocol: "voluptas",
        },
        Request: &shared.AnalyzeCommentRequest{
            ClientToken: "a",
            Comment: &shared.TextEntry{
                Text: "debitis",
                Type: "PLAIN_TEXT",
            },
            CommunityID: "molestiae",
            Context: &shared.Context{
                ArticleAndParentComment: &shared.ArticleAndParentComment{
                    Article: &shared.TextEntry{
                        Text: "labore",
                        Type: "PLAIN_TEXT",
                    },
                    ParentComment: &shared.TextEntry{
                        Text: "consectetur",
                        Type: "TEXT_TYPE_UNSPECIFIED",
                    },
                },
                Entries: []shared.TextEntry{
                    shared.TextEntry{
                        Text: "ipsam",
                        Type: "HTML",
                    },
                    shared.TextEntry{
                        Text: "cum",
                        Type: "PLAIN_TEXT",
                    },
                },
            },
            DoNotStore: true,
            Languages: []string{
                "repellat",
                "excepturi",
                "voluptatem",
            },
            RequestedAttributes: map[string]shared.AttributeParameters{
                "id": shared.AttributeParameters{
                    ScoreThreshold: 28.200001,
                    ScoreType: "RAW",
                },
            },
            SessionID: "consectetur",
            SpanAnnotations: false,
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