# BillingInfo

### Available Operations

* [AdexchangebuyerBillingInfoGet](#adexchangebuyerbillinginfoget) - Returns the billing information for one account specified by account ID.
* [AdexchangebuyerBillingInfoList](#adexchangebuyerbillinginfolist) - Retrieves a list of billing information for all accounts of the authenticated user.

## AdexchangebuyerBillingInfoGet

Returns the billing information for one account specified by account ID.

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
    res, err := s.BillingInfo.AdexchangebuyerBillingInfoGet(ctx, operations.AdexchangebuyerBillingInfoGetRequest{
        AccountID: 944669,
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("optio"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UserIP: sdk.String("molestiae"),
    }, operations.AdexchangebuyerBillingInfoGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingInfo != nil {
        // handle response
    }
}
```

## AdexchangebuyerBillingInfoList

Retrieves a list of billing information for all accounts of the authenticated user.

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
    res, err := s.BillingInfo.AdexchangebuyerBillingInfoList(ctx, operations.AdexchangebuyerBillingInfoListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("modi"),
        Key: sdk.String("qui"),
        OauthToken: sdk.String("impedit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UserIP: sdk.String("esse"),
    }, operations.AdexchangebuyerBillingInfoListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingInfoList != nil {
        // handle response
    }
}
```
