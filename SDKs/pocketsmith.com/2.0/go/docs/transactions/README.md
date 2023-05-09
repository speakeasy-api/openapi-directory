# Transactions

### Available Operations

* [DeleteTransactionsID](#deletetransactionsid) - Delete transaction
* [GetAccountsIDTransactions](#getaccountsidtransactions) - List transactions in account
* [GetCategoriesIDTransactions](#getcategoriesidtransactions) - List transactions in categories
* [GetTransactionAccountsIDTransactions](#gettransactionaccountsidtransactions) - List transactions in transaction account
* [GetTransactionsID](#gettransactionsid) - Get a transaction
* [GetUsersIDTransactions](#getusersidtransactions) - List transactions in user
* [PostTransactionAccountsIDTransactions](#posttransactionaccountsidtransactions) - Create a transaction in transaction account
* [PutTransactionsID](#puttransactionsid) - Update a transaction

## DeleteTransactionsID

Deletes a transaction and all its data by ID.

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
    res, err := s.Transactions.DeleteTransactionsID(ctx, operations.DeleteTransactionsIDRequest{
        ID: 699479,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAccountsIDTransactions

Lists transactions belonging to an account by its ID.

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
    res, err := s.Transactions.GetAccountsIDTransactions(ctx, operations.GetAccountsIDTransactionsRequest{
        EndDate: sdk.String("dicta"),
        ID: 297437,
        NeedsReview: sdk.Int64(767024),
        Page: sdk.Int64(813798),
        Search: sdk.String("ea"),
        StartDate: sdk.String("aliquid"),
        Type: operations.GetAccountsIDTransactionsTypeEnumCredit.ToPointer(),
        Uncategorised: sdk.Int64(881104),
        UpdatedSince: sdk.String("non"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Transactions != nil {
        // handle response
    }
}
```

## GetCategoriesIDTransactions

Lists transactions belonging to one or more categories by their IDs.

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
    res, err := s.Transactions.GetCategoriesIDTransactions(ctx, operations.GetCategoriesIDTransactionsRequest{
        EndDate: sdk.String("occaecati"),
        ID: "5efb9ba8-8f3a-4669-9707-4ba4469b6e21",
        NeedsReview: sdk.Int64(298282),
        Page: sdk.Int64(92373),
        Search: sdk.String("excepturi"),
        StartDate: sdk.String("ullam"),
        Type: operations.GetCategoriesIDTransactionsTypeEnumCredit.ToPointer(),
        Uncategorised: sdk.Int64(551816),
        UpdatedSince: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Transactions != nil {
        // handle response
    }
}
```

## GetTransactionAccountsIDTransactions

Lists transactions belonging to a transaction account by its ID.

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
    res, err := s.Transactions.GetTransactionAccountsIDTransactions(ctx, operations.GetTransactionAccountsIDTransactionsRequest{
        EndDate: sdk.String("accusantium"),
        ID: 653201,
        NeedsReview: sdk.Int64(968962),
        Page: sdk.Int64(652103),
        Search: sdk.String("ad"),
        StartDate: sdk.String("eum"),
        Type: operations.GetTransactionAccountsIDTransactionsTypeEnumDebit.ToPointer(),
        Uncategorised: sdk.Int64(896547),
        UpdatedSince: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Transactions != nil {
        // handle response
    }
}
```

## GetTransactionsID

Gets a transaction by its ID.

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
    res, err := s.Transactions.GetTransactionsID(ctx, operations.GetTransactionsIDRequest{
        ID: 367562,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Transaction != nil {
        // handle response
    }
}
```

## GetUsersIDTransactions

Lists transactions belonging to a user by their ID.

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
    res, err := s.Transactions.GetUsersIDTransactions(ctx, operations.GetUsersIDTransactionsRequest{
        EndDate: sdk.String("quasi"),
        ID: 435865,
        NeedsReview: sdk.Int64(984043),
        Page: sdk.Int64(891924),
        Search: sdk.String("eius"),
        StartDate: sdk.String("maxime"),
        Type: operations.GetUsersIDTransactionsTypeEnumCredit.ToPointer(),
        Uncategorised: sdk.Int64(703889),
        UpdatedSince: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Transactions != nil {
        // handle response
    }
}
```

## PostTransactionAccountsIDTransactions

Creates a transaction in a transaction account by its ID.

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
    res, err := s.Transactions.PostTransactionAccountsIDTransactions(ctx, operations.PostTransactionAccountsIDTransactionsRequest{
        RequestBody: &operations.PostTransactionAccountsIDTransactionsRequestBody{
            Amount: 11.5,
            CategoryID: sdk.Int64(42),
            ChequeNumber: sdk.String("architecto"),
            Date: "2018-02-27",
            IsTransfer: sdk.Bool(false),
            Labels: sdk.String("lunch,mexican"),
            Memo: sdk.String("architecto"),
            NeedsReview: sdk.Bool(false),
            Note: sdk.String("I really enjoyed the loaded corn chips"),
            Payee: "Tex Otago",
        },
        ID: 919483,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Transaction != nil {
        // handle response
    }
}
```

## PutTransactionsID

Updates a transaction by its ID.

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
    res, err := s.Transactions.PutTransactionsID(ctx, operations.PutTransactionsIDRequest{
        RequestBody: &operations.PutTransactionsIDRequestBody{
            Amount: sdk.Float64(225),
            CategoryID: sdk.Int64(42),
            ChequeNumber: sdk.String("503113643691"),
            Date: sdk.String("2018-02-27"),
            IsTransfer: sdk.Bool(false),
            Labels: sdk.String("foo,bar,baz"),
            Memo: sdk.String("Rent"),
            NeedsReview: sdk.Bool(false),
            Note: sdk.String("ullam"),
            Payee: sdk.String("Bill"),
        },
        ID: 714242,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Transaction != nil {
        // handle response
    }
}
```
