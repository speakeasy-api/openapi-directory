# Accounts

### Available Operations

* [GetAccounts](#getaccounts) - Get Accounts
* [GetAccountsAccountID](#getaccountsaccountid) - Get Accounts

## GetAccounts

Get Accounts

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
    res, err := s.Accounts.GetAccounts(ctx, operations.GetAccountsRequest{
        SandboxID: "at",
        XCustomerUserAgent: sdk.String("maiores"),
        XFapiAuthDate: sdk.String("molestiae"),
        XFapiCustomerIPAddress: sdk.String("quod"),
        XFapiInteractionID: sdk.String("quod"),
    }, operations.GetAccountsSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadAccount5 != nil {
        // handle response
    }
}
```

## GetAccountsAccountID

Get Accounts by Account ID

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
    res, err := s.Accounts.GetAccountsAccountID(ctx, operations.GetAccountsAccountIDRequest{
        AccountID: "esse",
        SandboxID: "totam",
        XCustomerUserAgent: sdk.String("porro"),
        XFapiAuthDate: sdk.String("dolorum"),
        XFapiCustomerIPAddress: sdk.String("dicta"),
        XFapiInteractionID: sdk.String("nam"),
    }, operations.GetAccountsAccountIDSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadAccount5 != nil {
        // handle response
    }
}
```
