# StandingOrders

### Available Operations

* [GetAccountsAccountIDStandingOrders](#getaccountsaccountidstandingorders) - Get Standing Orders

## GetAccountsAccountIDStandingOrders

Get Standing Orders by Account ID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.StandingOrders.GetAccountsAccountIDStandingOrders(ctx, operations.GetAccountsAccountIDStandingOrdersRequest{
        AccountID: "quibusdam",
        SandboxID: "quod",
        XCustomerUserAgent: sdk.String("nemo"),
        XFapiAuthDate: sdk.String("recusandae"),
        XFapiCustomerIPAddress: sdk.String("velit"),
        XFapiInteractionID: sdk.String("magnam"),
    }, operations.GetAccountsAccountIDStandingOrdersSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadStandingOrder6 != nil {
        // handle response
    }
}
```
