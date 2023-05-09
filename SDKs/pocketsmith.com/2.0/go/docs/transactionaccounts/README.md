# TransactionAccounts

### Available Operations

* [GetTransactionAccountsID](#gettransactionaccountsid) - Get transaction account
* [GetUsersIDTransactionAccounts](#getusersidtransactionaccounts) - List transaction accounts in user
* [PutTransactionAccountsID](#puttransactionaccountsid) - Update transaction account

## GetTransactionAccountsID

Gets a transaction account by its ID.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TransactionAccounts.GetTransactionAccountsID(ctx, operations.GetTransactionAccountsIDRequest{
        ID: 449198,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionAccount != nil {
        // handle response
    }
}
```

## GetUsersIDTransactionAccounts

List all transaction accounts belonging to a user.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TransactionAccounts.GetUsersIDTransactionAccounts(ctx, operations.GetUsersIDTransactionAccountsRequest{
        ID: 846409,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionAccounts != nil {
        // handle response
    }
}
```

## PutTransactionAccountsID

Updates the transaction account by its ID.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            DeveloperKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TransactionAccounts.PutTransactionAccountsID(ctx, operations.PutTransactionAccountsIDRequest{
        RequestBody: &operations.PutTransactionAccountsIDRequestBody{
            InstitutionID: sdk.Int64(42),
            StartingBalance: sdk.Float64(3547.45),
            StartingBalanceDate: sdk.String("2015-03-15"),
        },
        ID: 978571,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransactionAccount != nil {
        // handle response
    }
}
```
