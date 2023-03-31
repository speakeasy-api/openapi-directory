# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/commentanalyzer/v1alpha1/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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
        DollarXgafv: "2",
        AnalyzeCommentRequest: &shared.AnalyzeCommentRequest{
            ClientToken: "provident",
            Comment: &shared.TextEntry{
                Text: "distinctio",
                Type: "HTML",
            },
            CommunityID: "unde",
            Context: &shared.Context{
                ArticleAndParentComment: &shared.ArticleAndParentComment{
                    Article: &shared.TextEntry{
                        Text: "nulla",
                        Type: "PLAIN_TEXT",
                    },
                    ParentComment: &shared.TextEntry{
                        Text: "illum",
                        Type: "PLAIN_TEXT",
                    },
                },
                Entries: []shared.TextEntry{
                    shared.TextEntry{
                        Text: "deserunt",
                        Type: "PLAIN_TEXT",
                    },
                    shared.TextEntry{
                        Text: "iure",
                        Type: "TEXT_TYPE_UNSPECIFIED",
                    },
                    shared.TextEntry{
                        Text: "debitis",
                        Type: "TEXT_TYPE_UNSPECIFIED",
                    },
                },
            },
            DoNotStore: false,
            DropUnsupportedAttributes: false,
            Languages: []string{
                "tempora",
                "suscipit",
                "molestiae",
                "minus",
            },
            RequestedAttributes: map[string]shared.AttributeParameters{
                "voluptatum": shared.AttributeParameters{
                    ScoreThreshold: 4799.77,
                    ScoreType: "STD_DEV_SCORE",
                },
                "nisi": shared.AttributeParameters{
                    ScoreThreshold: 9255.97,
                    ScoreType: "RAW",
                },
                "ab": shared.AttributeParameters{
                    ScoreThreshold: 3373.96,
                    ScoreType: "SCORE_TYPE_UNSPECIFIED",
                },
                "deserunt": shared.AttributeParameters{
                    ScoreThreshold: 202.18,
                    ScoreType: "PROBABILITY",
                },
            },
            SessionID: "repellendus",
            SpanAnnotations: false,
        },
        AccessToken: "sapiente",
        Alt: "proto",
        Callback: "odit",
        Fields: "at",
        Key: "at",
        OauthToken: "maiores",
        PrettyPrint: false,
        QuotaUser: "molestiae",
        UploadType: "quod",
        UploadProtocol: "quod",
    }

    ctx := context.Background()
    res, err := s.Comments.CommentanalyzerCommentsAnalyze(ctx, req, operations.CommentanalyzerCommentsAnalyzeSecurity{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Comments

* `CommentanalyzerCommentsAnalyze` - Analyzes the provided text and returns scores for requested attributes.
* `CommentanalyzerCommentsSuggestscore` - Suggest comment scores as training data.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
