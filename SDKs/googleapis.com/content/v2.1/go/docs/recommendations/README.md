# Recommendations

### Available Operations

* [ContentRecommendationsGenerate](#contentrecommendationsgenerate) - Generates recommendations for a merchant.
* [ContentRecommendationsReportInteraction](#contentrecommendationsreportinteraction) - Reports an interaction on a recommendation for a merchant.

## ContentRecommendationsGenerate

Generates recommendations for a merchant.

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
    res, err := s.Recommendations.ContentRecommendationsGenerate(ctx, operations.ContentRecommendationsGenerateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("dolore"),
        AllowedTag: []string{
            "nostrum",
            "ex",
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("molestias"),
        Key: sdk.String("voluptatibus"),
        LanguageCode: sdk.String("ipsum"),
        MerchantID: "hic",
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.ContentRecommendationsGenerateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenerateRecommendationsResponse != nil {
        // handle response
    }
}
```

## ContentRecommendationsReportInteraction

Reports an interaction on a recommendation for a merchant.

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
    res, err := s.Recommendations.ContentRecommendationsReportInteraction(ctx, operations.ContentRecommendationsReportInteractionRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ReportInteractionRequest: &shared.ReportInteractionRequest{
            InteractionType: shared.ReportInteractionRequestInteractionTypeEnumInteractionTypeUnspecified.ToPointer(),
            ResponseToken: sdk.String("doloribus"),
            Subtype: sdk.String("praesentium"),
            Type: sdk.String("aliquid"),
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("soluta"),
        MerchantID: "ipsum",
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("vel"),
    }, operations.ContentRecommendationsReportInteractionSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
