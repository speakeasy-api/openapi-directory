# Shoppingadsprogram

### Available Operations

* [ContentShoppingadsprogramGet](#contentshoppingadsprogramget) - Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.
* [ContentShoppingadsprogramRequestreview](#contentshoppingadsprogramrequestreview) - Requests a review of Shopping ads in a specific region. This method is only available to selected merchants.

## ContentShoppingadsprogramGet

Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.

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
    res, err := s.Shoppingadsprogram.ContentShoppingadsprogramGet(ctx, operations.ContentShoppingadsprogramGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("culpa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("minus"),
        Key: sdk.String("sint"),
        MerchantID: "occaecati",
        OauthToken: sdk.String("voluptatem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("labore"),
        UploadType: sdk.String("maxime"),
        UploadProtocol: sdk.String("ad"),
    }, operations.ContentShoppingadsprogramGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ShoppingAdsProgramStatus != nil {
        // handle response
    }
}
```

## ContentShoppingadsprogramRequestreview

Requests a review of Shopping ads in a specific region. This method is only available to selected merchants.

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
    res, err := s.Shoppingadsprogram.ContentShoppingadsprogramRequestreview(ctx, operations.ContentShoppingadsprogramRequestreviewRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestReviewShoppingAdsRequest: &shared.RequestReviewShoppingAdsRequest{
            RegionCode: sdk.String("provident"),
        },
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("labore"),
        MerchantID: "praesentium",
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officiis"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.ContentShoppingadsprogramRequestreviewSecurity{
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
