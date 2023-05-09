# Conversionsources

### Available Operations

* [ContentConversionsourcesCreate](#contentconversionsourcescreate) - Creates a new conversion source.
* [ContentConversionsourcesDelete](#contentconversionsourcesdelete) - Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.
* [ContentConversionsourcesGet](#contentconversionsourcesget) - Fetches a conversion source.
* [ContentConversionsourcesList](#contentconversionsourceslist) - Retrieves the list of conversion sources the caller has access to.
* [ContentConversionsourcesPatch](#contentconversionsourcespatch) - Updates information of an existing conversion source.
* [ContentConversionsourcesUndelete](#contentconversionsourcesundelete) - Re-enables an archived conversion source.

## ContentConversionsourcesCreate

Creates a new conversion source.

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
    res, err := s.Conversionsources.ContentConversionsourcesCreate(ctx, operations.ContentConversionsourcesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ConversionSourceInput: &shared.ConversionSourceInput{
            GoogleAnalyticsLink: &shared.GoogleAnalyticsLinkInput{
                AttributionSettings: &shared.AttributionSettingsInput{
                    AttributionLookbackWindowInDays: sdk.Int(695270),
                    AttributionModel: shared.AttributionSettingsAttributionModelEnumCrossChannelFirstClick.ToPointer(),
                },
                PropertyID: sdk.String("laborum"),
            },
            MerchantCenterDestination: &shared.MerchantCenterDestinationInput{
                AttributionSettings: &shared.AttributionSettingsInput{
                    AttributionLookbackWindowInDays: sdk.Int(724148),
                    AttributionModel: shared.AttributionSettingsAttributionModelEnumCrossChannelTimeDecay.ToPointer(),
                },
                CurrencyCode: sdk.String("laboriosam"),
                DisplayName: sdk.String("alias"),
            },
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("unde"),
        Key: sdk.String("reiciendis"),
        MerchantID: "provident",
        OauthToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.ContentConversionsourcesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversionSource != nil {
        // handle response
    }
}
```

## ContentConversionsourcesDelete

Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.

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
    res, err := s.Conversionsources.ContentConversionsourcesDelete(ctx, operations.ContentConversionsourcesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facere"),
        ConversionSourceID: "fuga",
        Fields: sdk.String("praesentium"),
        Key: sdk.String("mollitia"),
        MerchantID: "veniam",
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quisquam"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.ContentConversionsourcesDeleteSecurity{
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

## ContentConversionsourcesGet

Fetches a conversion source.

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
    res, err := s.Conversionsources.ContentConversionsourcesGet(ctx, operations.ContentConversionsourcesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        ConversionSourceID: "suscipit",
        Fields: sdk.String("quidem"),
        Key: sdk.String("maxime"),
        MerchantID: "et",
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("ea"),
    }, operations.ContentConversionsourcesGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversionSource != nil {
        // handle response
    }
}
```

## ContentConversionsourcesList

Retrieves the list of conversion sources the caller has access to.

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
    res, err := s.Conversionsources.ContentConversionsourcesList(ctx, operations.ContentConversionsourcesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("natus"),
        MerchantID: "minima",
        OauthToken: sdk.String("aspernatur"),
        PageSize: sdk.Int64(404425),
        PageToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        ShowDeleted: sdk.Bool(false),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("error"),
    }, operations.ContentConversionsourcesListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConversionSourcesResponse != nil {
        // handle response
    }
}
```

## ContentConversionsourcesPatch

Updates information of an existing conversion source.

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
    res, err := s.Conversionsources.ContentConversionsourcesPatch(ctx, operations.ContentConversionsourcesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ConversionSourceInput: &shared.ConversionSourceInput{
            GoogleAnalyticsLink: &shared.GoogleAnalyticsLinkInput{
                AttributionSettings: &shared.AttributionSettingsInput{
                    AttributionLookbackWindowInDays: sdk.Int(379356),
                    AttributionModel: shared.AttributionSettingsAttributionModelEnumCrossChannelTimeDecay.ToPointer(),
                },
                PropertyID: sdk.String("atque"),
            },
            MerchantCenterDestination: &shared.MerchantCenterDestinationInput{
                AttributionSettings: &shared.AttributionSettingsInput{
                    AttributionLookbackWindowInDays: sdk.Int(541381),
                    AttributionModel: shared.AttributionSettingsAttributionModelEnumAttributionModelUnspecified.ToPointer(),
                },
                CurrencyCode: sdk.String("recusandae"),
                DisplayName: sdk.String("dolorum"),
            },
        },
        AccessToken: sdk.String("repellendus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        ConversionSourceID: "doloremque",
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("dicta"),
        MerchantID: "accusantium",
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UpdateMask: sdk.String("enim"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("velit"),
    }, operations.ContentConversionsourcesPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversionSource != nil {
        // handle response
    }
}
```

## ContentConversionsourcesUndelete

Re-enables an archived conversion source.

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
    res, err := s.Conversionsources.ContentConversionsourcesUndelete(ctx, operations.ContentConversionsourcesUndeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "magnam": "saepe",
            "consequuntur": "occaecati",
            "officiis": "perspiciatis",
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eveniet"),
        ConversionSourceID: "occaecati",
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("fugit"),
        MerchantID: "id",
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reprehenderit"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("illo"),
    }, operations.ContentConversionsourcesUndeleteSecurity{
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
