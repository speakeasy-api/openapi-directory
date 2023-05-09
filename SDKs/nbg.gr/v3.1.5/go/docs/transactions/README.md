# Transactions

### Available Operations

* [GetAccountsAccountIDStatementsStatementIDTransactions](#getaccountsaccountidstatementsstatementidtransactions) - Get Transactions
* [GetAccountsAccountIDTransactions](#getaccountsaccountidtransactions) - Get Transactions

## GetAccountsAccountIDStatementsStatementIDTransactions

Get Transactions by Account ID and Statement ID

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
    res, err := s.Transactions.GetAccountsAccountIDStatementsStatementIDTransactions(ctx, operations.GetAccountsAccountIDStatementsStatementIDTransactionsRequest{
        AccountID: "saepe",
        SandboxID: "autem",
        StatementID: "quo",
        XCustomerUserAgent: sdk.String("nesciunt"),
        XFapiAuthDate: sdk.String("illum"),
        XFapiCustomerIPAddress: sdk.String("nemo"),
        XFapiInteractionID: sdk.String("illum"),
    }, operations.GetAccountsAccountIDStatementsStatementIDTransactionsSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadTransaction6 != nil {
        // handle response
    }
}
```

## GetAccountsAccountIDTransactions

Get Transactions by Account ID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Transactions.GetAccountsAccountIDTransactions(ctx, operations.GetAccountsAccountIDTransactionsRequest{
        AccountID: "facilis",
        FromBookingDateTime: types.MustTimeFromString("2022-05-08T22:04:48.396Z"),
        SandboxID: "assumenda",
        ToBookingDateTime: types.MustTimeFromString("2020-11-04T17:10:36.315Z"),
        XCustomerUserAgent: sdk.String("pariatur"),
        XFapiAuthDate: sdk.String("ad"),
        XFapiCustomerIPAddress: sdk.String("facere"),
        XFapiInteractionID: sdk.String("laborum"),
    }, operations.GetAccountsAccountIDTransactionsSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadTransaction6 != nil {
        // handle response
    }
}
```
