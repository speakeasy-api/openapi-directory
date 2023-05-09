# Statements

### Available Operations

* [GetAccountsAccountIDStatements](#getaccountsaccountidstatements) - Get Statements
* [GetAccountsAccountIDStatementsStatementID](#getaccountsaccountidstatementsstatementid) - Get Statements
* [GetAccountsAccountIDStatementsStatementIDFile](#getaccountsaccountidstatementsstatementidfile) - Get Statements

## GetAccountsAccountIDStatements

Get Statements by Account ID

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
    res, err := s.Statements.GetAccountsAccountIDStatements(ctx, operations.GetAccountsAccountIDStatementsRequest{
        AccountID: "dignissimos",
        FromStatementDateTime: types.MustTimeFromString("2022-11-06T09:59:59.144Z"),
        SandboxID: "odio",
        ToStatementDateTime: types.MustTimeFromString("2021-10-28T15:35:10.950Z"),
        XCustomerUserAgent: sdk.String("cum"),
        XFapiAuthDate: sdk.String("doloribus"),
        XFapiCustomerIPAddress: sdk.String("facilis"),
        XFapiInteractionID: sdk.String("quidem"),
    }, operations.GetAccountsAccountIDStatementsSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadStatement2 != nil {
        // handle response
    }
}
```

## GetAccountsAccountIDStatementsStatementID

Get Statements by Account ID and Statement ID

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
    res, err := s.Statements.GetAccountsAccountIDStatementsStatementID(ctx, operations.GetAccountsAccountIDStatementsStatementIDRequest{
        AccountID: "itaque",
        SandboxID: "laboriosam",
        StatementID: "unde",
        XCustomerUserAgent: sdk.String("modi"),
        XFapiAuthDate: sdk.String("perspiciatis"),
        XFapiCustomerIPAddress: sdk.String("hic"),
        XFapiInteractionID: sdk.String("cum"),
    }, operations.GetAccountsAccountIDStatementsStatementIDSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OBReadStatement2 != nil {
        // handle response
    }
}
```

## GetAccountsAccountIDStatementsStatementIDFile

Get Statement PDF File by Account ID and Statement ID

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
    res, err := s.Statements.GetAccountsAccountIDStatementsStatementIDFile(ctx, operations.GetAccountsAccountIDStatementsStatementIDFileRequest{
        AccountID: "aspernatur",
        SandboxID: "libero",
        StatementID: "nam",
        XCustomerUserAgent: sdk.String("incidunt"),
        XFapiAuthDate: sdk.String("recusandae"),
        XFapiCustomerIPAddress: sdk.String("quod"),
        XFapiInteractionID: sdk.String("id"),
    }, operations.GetAccountsAccountIDStatementsStatementIDFileSecurity{
        AuthorizationCodeToken: "Bearer YOUR_ACCESS_TOKEN_HERE",
        ClientID: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountsAccountIDStatementsStatementIDFile200ApplicationPdfBinaryString != nil {
        // handle response
    }
}
```
