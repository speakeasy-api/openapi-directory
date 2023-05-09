# Buyongoogleprograms

### Available Operations

* [ContentBuyongoogleprogramsActivate](#contentbuyongoogleprogramsactivate) - Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.
* [ContentBuyongoogleprogramsGet](#contentbuyongoogleprogramsget) - Retrieves a status of the BoG program for your Merchant Center account.
* [ContentBuyongoogleprogramsOnboard](#contentbuyongoogleprogramsonboard) - Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.
* [ContentBuyongoogleprogramsPatch](#contentbuyongoogleprogramspatch) - Updates the status of the BoG program for your Merchant Center account.
* [ContentBuyongoogleprogramsPause](#contentbuyongoogleprogramspause) - Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.
* [ContentBuyongoogleprogramsRequestreview](#contentbuyongoogleprogramsrequestreview) - Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.

## ContentBuyongoogleprogramsActivate

Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.

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
    res, err := s.Buyongoogleprograms.ContentBuyongoogleprogramsActivate(ctx, operations.ContentBuyongoogleprogramsActivateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "aperiam": "ea",
            "quaerat": "consequuntur",
            "repellendus": "officia",
            "maxime": "dignissimos",
        },
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("quae"),
        Key: sdk.String("quaerat"),
        MerchantID: "porro",
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        RegionCode: "ab",
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("fuga"),
    }, operations.ContentBuyongoogleprogramsActivateSecurity{
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

## ContentBuyongoogleprogramsGet

Retrieves a status of the BoG program for your Merchant Center account.

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
    res, err := s.Buyongoogleprograms.ContentBuyongoogleprogramsGet(ctx, operations.ContentBuyongoogleprogramsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("est"),
        Key: sdk.String("recusandae"),
        MerchantID: "totam",
        OauthToken: sdk.String("fugiat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        RegionCode: "ducimus",
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("vel"),
    }, operations.ContentBuyongoogleprogramsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuyOnGoogleProgramStatus != nil {
        // handle response
    }
}
```

## ContentBuyongoogleprogramsOnboard

Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.

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
    res, err := s.Buyongoogleprograms.ContentBuyongoogleprogramsOnboard(ctx, operations.ContentBuyongoogleprogramsOnboardRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        OnboardBuyOnGoogleProgramRequest: &shared.OnboardBuyOnGoogleProgramRequest{
            CustomerServiceEmail: sdk.String("possimus"),
        },
        AccessToken: sdk.String("facilis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("commodi"),
        Fields: sdk.String("in"),
        Key: sdk.String("corporis"),
        MerchantID: "reiciendis",
        OauthToken: sdk.String("assumenda"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        RegionCode: "recusandae",
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("aperiam"),
    }, operations.ContentBuyongoogleprogramsOnboardSecurity{
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

## ContentBuyongoogleprogramsPatch

Updates the status of the BoG program for your Merchant Center account.

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
    res, err := s.Buyongoogleprograms.ContentBuyongoogleprogramsPatch(ctx, operations.ContentBuyongoogleprogramsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BuyOnGoogleProgramStatusInput: &shared.BuyOnGoogleProgramStatusInput{
            BusinessModel: []shared.BuyOnGoogleProgramStatusBusinessModelEnum{
                shared.BuyOnGoogleProgramStatusBusinessModelEnumImporter,
            },
            CustomerServicePendingEmail: sdk.String("exercitationem"),
            CustomerServicePendingPhoneNumber: sdk.String("earum"),
            CustomerServicePendingPhoneRegionCode: sdk.String("facere"),
            OnlineSalesChannel: shared.BuyOnGoogleProgramStatusOnlineSalesChannelEnumOnlineSalesChannelUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("doloribus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("saepe"),
        MerchantID: "necessitatibus",
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        RegionCode: "asperiores",
        UpdateMask: sdk.String("adipisci"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("amet"),
    }, operations.ContentBuyongoogleprogramsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BuyOnGoogleProgramStatus != nil {
        // handle response
    }
}
```

## ContentBuyongoogleprogramsPause

Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.

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
    res, err := s.Buyongoogleprograms.ContentBuyongoogleprogramsPause(ctx, operations.ContentBuyongoogleprogramsPauseRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "a": "debitis",
            "consectetur": "corporis",
        },
        AccessToken: sdk.String("harum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("voluptates"),
        Key: sdk.String("libero"),
        MerchantID: "vitae",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("similique"),
        RegionCode: "tempora",
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("voluptas"),
    }, operations.ContentBuyongoogleprogramsPauseSecurity{
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

## ContentBuyongoogleprogramsRequestreview

Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.

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
    res, err := s.Buyongoogleprograms.ContentBuyongoogleprogramsRequestreview(ctx, operations.ContentBuyongoogleprogramsRequestreviewRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "minima": "nobis",
            "dolorum": "adipisci",
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("blanditiis"),
        Fields: sdk.String("in"),
        Key: sdk.String("dolore"),
        MerchantID: "aliquam",
        OauthToken: sdk.String("officiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        RegionCode: "ullam",
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("cum"),
    }, operations.ContentBuyongoogleprogramsRequestreviewSecurity{
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
