# Transaction

## Overview

Transaction operations

Transaction Services
<https://netlicensing.io/wiki/transaction-services>
### Available Operations

* [CreateTransaction](#createtransaction) - Create Transaction
* [GetTransaction](#gettransaction) - Get Transaction 
* [ListTransactions](#listtransactions) - List Transactions
* [UpdateTransaction](#updatetransaction) - Update Transaction

## CreateTransaction

Creates a new Transaction

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
    res, err := s.Transaction.CreateTransaction(ctx, operations.CreateTransactionRequestBody{
        Active: false,
        DateClosed: types.MustTimeFromString("2022-09-26T08:57:48.803Z"),
        DateCreated: types.MustTimeFromString("2022-08-08T19:05:24.174Z"),
        LicenseeNumber: sdk.String("cupiditate"),
        Number: sdk.String("quos"),
        PaymentMethod: sdk.String("perferendis"),
        Source: operations.CreateTransactionRequestBodySourceEnumShop,
        Status: operations.CreateTransactionRequestBodyStatusEnumCancelled,
    }, operations.CreateTransactionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## GetTransaction

Return a Transaction by 'transactionNumber'

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
    res, err := s.Transaction.GetTransaction(ctx, operations.GetTransactionRequest{
        TransactionNumber: "assumenda",
    }, operations.GetTransactionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## ListTransactions

Return a list of all Transactions for the current Vendor

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
    res, err := s.Transaction.ListTransactions(ctx, operations.ListTransactionsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensings != nil {
        // handle response
    }
}
```

## UpdateTransaction

Sets the provided properties to a Transaction. Return an updated Transaction

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
    res, err := s.Transaction.UpdateTransaction(ctx, operations.UpdateTransactionRequest{
        RequestBody: &operations.UpdateTransactionRequestBody{
            Active: sdk.Bool(false),
            DateClosed: types.MustTimeFromString("2022-12-30T06:52:02.282Z"),
            DateCreated: types.MustTimeFromString("2022-04-28T14:19:37.294Z"),
            Number: sdk.String("excepturi"),
            PaymentMethod: sdk.String("tempora"),
            Source: operations.UpdateTransactionRequestBodySourceEnumShop.ToPointer(),
            Status: operations.UpdateTransactionRequestBodyStatusEnumPending.ToPointer(),
        },
        TransactionNumber: "tempore",
    }, operations.UpdateTransactionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```
