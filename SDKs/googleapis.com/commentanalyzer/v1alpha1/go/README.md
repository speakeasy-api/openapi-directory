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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AnalyzeCommentRequest: &shared.AnalyzeCommentRequest{
            ClientToken: sdk.String("provident"),
            Comment: &shared.TextEntry{
                Text: sdk.String("distinctio"),
                Type: shared.TextEntryTypeEnumHTML.ToPointer(),
            },
            CommunityID: sdk.String("unde"),
            Context: &shared.Context{
                ArticleAndParentComment: &shared.ArticleAndParentComment{
                    Article: &shared.TextEntry{
                        Text: sdk.String("nulla"),
                        Type: shared.TextEntryTypeEnumPlainText.ToPointer(),
                    },
                    ParentComment: &shared.TextEntry{
                        Text: sdk.String("illum"),
                        Type: shared.TextEntryTypeEnumPlainText.ToPointer(),
                    },
                },
                Entries: []shared.TextEntry{
                    shared.TextEntry{
                        Text: sdk.String("deserunt"),
                        Type: shared.TextEntryTypeEnumPlainText.ToPointer(),
                    },
                    shared.TextEntry{
                        Text: sdk.String("iure"),
                        Type: shared.TextEntryTypeEnumTextTypeUnspecified.ToPointer(),
                    },
                    shared.TextEntry{
                        Text: sdk.String("debitis"),
                        Type: shared.TextEntryTypeEnumTextTypeUnspecified.ToPointer(),
                    },
                },
            },
            DoNotStore: sdk.Bool(false),
            DropUnsupportedAttributes: sdk.Bool(false),
            Languages: []string{
                "tempora",
                "suscipit",
                "molestiae",
                "minus",
            },
            RequestedAttributes: map[string]shared.AttributeParameters{
                "voluptatum": shared.AttributeParameters{
                    ScoreThreshold: sdk.Float32(4799.77),
                    ScoreType: shared.AttributeParametersScoreTypeEnumStdDevScore.ToPointer(),
                },
                "nisi": shared.AttributeParameters{
                    ScoreThreshold: sdk.Float32(9255.97),
                    ScoreType: shared.AttributeParametersScoreTypeEnumRaw.ToPointer(),
                },
                "ab": shared.AttributeParameters{
                    ScoreThreshold: sdk.Float32(3373.96),
                    ScoreType: shared.AttributeParametersScoreTypeEnumScoreTypeUnspecified.ToPointer(),
                },
                "deserunt": shared.AttributeParameters{
                    ScoreThreshold: sdk.Float32(202.18),
                    ScoreType: shared.AttributeParametersScoreTypeEnumProbability.ToPointer(),
                },
            },
            SessionID: sdk.String("repellendus"),
            SpanAnnotations: sdk.Bool(false),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("at"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("quod"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Comments](docs/comments/README.md)

* [CommentanalyzerCommentsAnalyze](docs/comments/README.md#commentanalyzercommentsanalyze) - Analyzes the provided text and returns scores for requested attributes.
* [CommentanalyzerCommentsSuggestscore](docs/comments/README.md#commentanalyzercommentssuggestscore) - Suggest comment scores as training data.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
