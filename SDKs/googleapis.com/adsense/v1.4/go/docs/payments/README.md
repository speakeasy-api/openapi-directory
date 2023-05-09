# Payments

### Available Operations

* [AdsensePaymentsList](#adsensepaymentslist) - List the payments for this AdSense account.

## AdsensePaymentsList

List the payments for this AdSense account.

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
    res, err := s.Payments.AdsensePaymentsList(ctx, operations.AdsensePaymentsListRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UserIP: sdk.String("magni"),
    }, operations.AdsensePaymentsListSecurity{
        Option1: &operations.AdsensePaymentsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Payments != nil {
        // handle response
    }
}
```
