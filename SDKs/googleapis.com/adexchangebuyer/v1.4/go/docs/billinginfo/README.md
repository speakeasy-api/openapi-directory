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
        AccountID: 324141,
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("natus"),
        Key: sdk.String("sed"),
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UserIP: sdk.String("natus"),
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
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UserIP: sdk.String("in"),
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
