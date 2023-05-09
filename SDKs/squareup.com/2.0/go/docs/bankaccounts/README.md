# BankAccounts

### Available Operations

* [GetBankAccount](#getbankaccount) - GetBankAccount
* [GetBankAccountByV1ID](#getbankaccountbyv1id) - GetBankAccountByV1Id
* [ListBankAccounts](#listbankaccounts) - ListBankAccounts

## GetBankAccount

Returns details of a [BankAccount](https://developer.squareup.com/reference/square_2021-08-18/objects/BankAccount)
linked to a Square account.

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
    res, err := s.BankAccounts.GetBankAccount(ctx, operations.GetBankAccountRequest{
        BankAccountID: "distinctio",
    }, operations.GetBankAccountSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBankAccountResponse != nil {
        // handle response
    }
}
```

## GetBankAccountByV1ID

Returns details of a [BankAccount](https://developer.squareup.com/reference/square_2021-08-18/objects/BankAccount) identified by V1 bank account ID.

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
    res, err := s.BankAccounts.GetBankAccountByV1ID(ctx, operations.GetBankAccountByV1IDRequest{
        V1BankAccountID: "quibusdam",
    }, operations.GetBankAccountByV1IDSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBankAccountByV1IDResponse != nil {
        // handle response
    }
}
```

## ListBankAccounts

Returns a list of [BankAccount](https://developer.squareup.com/reference/square_2021-08-18/objects/BankAccount) objects linked to a Square account.

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
    res, err := s.BankAccounts.ListBankAccounts(ctx, operations.ListBankAccountsRequest{
        Cursor: sdk.String("unde"),
        Limit: sdk.Int64(857946),
        LocationID: sdk.String("corrupti"),
    }, operations.ListBankAccountsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBankAccountsResponse != nil {
        // handle response
    }
}
```
