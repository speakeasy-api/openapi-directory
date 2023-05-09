# Transactions

## Overview

Transactions represent the movement of money into and out of an
account. They have many characteristics that vary depending on
the kind of transaction. Transactions may be temporarily `HELD`
(pending) or `SETTLED`, typically depending on which payment
method was used at the point of sale.


### Available Operations

* [GetAccountsAccountIDTransactions](#getaccountsaccountidtransactions) - List transactions by account
* [GetTransactions](#gettransactions) - List transactions
* [GetTransactionsID](#gettransactionsid) - Retrieve transaction

## GetAccountsAccountIDTransactions

Retrieve a list of all transactions for a specific account. The returned
list is [paginated](#pagination) and can be scrolled by following the
`next` and `prev` links where present. To narrow the results to a
specific date range pass one or both of `filter[since]` and
`filter[until]` in the query string. These filter parameters
**should not** be used for pagination. Results are ordered newest first
to oldest last.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetAccountsAccountIDTransactions(ctx, operations.GetAccountsAccountIDTransactionsRequest{
        AccountID: "quibusdam",
        FilterCategory: sdk.String("sed"),
        FilterSince: types.MustTimeFromString("2020-05-25T09:38:49.528Z"),
        FilterStatus: shared.TransactionStatusEnumEnumHeld.ToPointer(),
        FilterTag: sdk.String("consequuntur"),
        FilterUntil: types.MustTimeFromString("2021-10-08T15:23:46.576Z"),
        PageSize: sdk.Int64(166847),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTransactionsResponse != nil {
        // handle response
    }
}
```

## GetTransactions

Retrieve a list of all transactions across all accounts for the currently
authenticated user. The returned list is [paginated](#pagination) and can
be scrolled by following the `next` and `prev` links where present. To
narrow the results to a specific date range pass one or both of
`filter[since]` and `filter[until]` in the query string. These filter
parameters **should not** be used for pagination. Results are ordered
newest first to oldest last.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetTransactions(ctx, operations.GetTransactionsRequest{
        FilterCategory: sdk.String("sunt"),
        FilterSince: types.MustTimeFromString("2020-06-16T10:20:37.479Z"),
        FilterStatus: shared.TransactionStatusEnumEnumSettled.ToPointer(),
        FilterTag: sdk.String("maxime"),
        FilterUntil: types.MustTimeFromString("2022-06-07T06:40:38.496Z"),
        PageSize: sdk.Int64(139972),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTransactionsResponse != nil {
        // handle response
    }
}
```

## GetTransactionsID

Retrieve a specific transaction by providing its unique identifier.


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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Transactions.GetTransactionsID(ctx, operations.GetTransactionsIDRequest{
        ID: "601fb576-b0d5-4f0d-b0c5-fbb258705320",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTransactionResponse != nil {
        // handle response
    }
}
```
