# Orders

### Available Operations

* [AndroidpublisherOrdersRefund](#androidpublisherordersrefund) - Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.

## AndroidpublisherOrdersRefund

Refunds a user's subscription or in-app purchase order. Orders older than 1 year cannot be refunded.

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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("neque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("earum"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("ipsam"),
        OauthToken: sdk.String("eaque"),
        OrderID: "exercitationem",
        PackageName: "veniam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        Revoke: sdk.Bool(false),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("nisi"),
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
