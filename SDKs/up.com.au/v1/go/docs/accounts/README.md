# Accounts

## Overview

Accounts represent the underlying store used to track balances
and the transactions that have occurred to modify those balances
over time. Up currently has two types of account: `SAVER`—used to
earn interest and to hit savings goals, and `TRANSACTIONAL`—used
for everyday spending.


### Available Operations

* [GetAccounts](#getaccounts) - List accounts
* [GetAccountsID](#getaccountsid) - Retrieve account

## GetAccounts

Retrieve a paginated list of all accounts for the currently
authenticated user. The returned list is paginated and can be scrolled
by following the `prev` and `next` links where present.


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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Accounts.GetAccounts(ctx, operations.GetAccountsRequest{
        FilterAccountType: shared.AccountTypeEnumEnumTransactional.ToPointer(),
        FilterOwnershipType: shared.OwnershipTypeEnumEnumJoint.ToPointer(),
        PageSize: sdk.Int64(857946),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountsResponse != nil {
        // handle response
    }
}
```

## GetAccountsID

Retrieve a specific account by providing its unique identifier.


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
    res, err := s.Accounts.GetAccountsID(ctx, operations.GetAccountsIDRequest{
        ID: "8d69a674-e0f4-467c-8879-6ed151a05dfc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAccountResponse != nil {
        // handle response
    }
}
```
