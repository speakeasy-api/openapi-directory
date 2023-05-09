# Orders

### Available Operations

* [AndroidpublisherOrdersRefund](#androidpublisherordersrefund) - Refund a user's subscription or in-app purchase order.

## AndroidpublisherOrdersRefund

Refund a user's subscription or in-app purchase order.

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
    res, err := s.Orders.AndroidpublisherOrdersRefund(ctx, operations.AndroidpublisherOrdersRefundRequest{
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("tempora"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("ea"),
        OrderID: "aspernatur",
        PackageName: "vel",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("possimus"),
        Revoke: sdk.Bool(false),
        UserIP: sdk.String("magnam"),
    }, operations.AndroidpublisherOrdersRefundSecurity{
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
