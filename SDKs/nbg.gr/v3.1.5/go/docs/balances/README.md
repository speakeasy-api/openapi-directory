# Balances

### Available Operations

* [GetAccountsAccountIDBalances](#getaccountsaccountidbalances) - Get Balances

## GetAccountsAccountIDBalances

Get Balances by Account ID

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
    res, err := s.Balances.GetAccountsAccountIDBalances(ctx, operations.GetAccountsAccountIDBalancesRequest{
        AccountID: "officia",
        SandboxID: "occaecati",
        XCustomerUserAgent: sdk.String("fugit"),
        XFapiAuthDate: sdk.String("deleniti"),
        XFapiCustomerIPAddress: sdk.String("hic"),
        XFapiInteractionID: sdk.String("optio"),
    }, operations.GetAccountsAccountIDBalancesSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadBalance1 != nil {
        // handle response
    }
}
```
