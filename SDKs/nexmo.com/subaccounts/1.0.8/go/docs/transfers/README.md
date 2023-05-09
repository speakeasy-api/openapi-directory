# Transfers

## Overview

This section shows how you execute credit, balance and number transfers, as well as viewing past transactions.

### Available Operations

* [RetrieveBalanceTransfers](#retrievebalancetransfers) - Retrieve list of balance transfers
* [RetrieveCreditTransfers](#retrievecredittransfers) - Retrieve list of credit transfers
* [TransferBalance](#transferbalance) - Transfer balance
* [TransferCredit](#transfercredit) - Transfer credit
* [TransferNumber](#transfernumber) - Transfer number

## RetrieveBalanceTransfers

Retrieve a list of balance transfers that have taken place for a primary account within a specified time period.


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
    res, err := s.Transfers.RetrieveBalanceTransfers(ctx, operations.RetrieveBalanceTransfersRequest{
        APIKey: "illum",
        EndDate: sdk.String("vel"),
        StartDate: "error",
        Subaccount: sdk.String("deserunt"),
    }, operations.RetrieveBalanceTransfersSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBalanceTransfersResponse != nil {
        // handle response
    }
}
```

## RetrieveCreditTransfers

Retrieve a list of credit transfers that have taken place for a primary account within a specified time period.


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
    res, err := s.Transfers.RetrieveCreditTransfers(ctx, operations.RetrieveCreditTransfersRequest{
        APIKey: "suscipit",
        EndDate: sdk.String("iure"),
        StartDate: "magnam",
        Subaccount: sdk.String("debitis"),
    }, operations.RetrieveCreditTransfersSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCreditTransfersResponse != nil {
        // handle response
    }
}
```

## TransferBalance

Transfer balance between a primary account and one of its subaccounts. Note that balance_available_for_transfer = |account_balance - credit_limit| of the source account.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Transfers.TransferBalance(ctx, operations.TransferBalanceRequest{
        TransferBalanceOrCreditRequest: shared.TransferBalanceOrCreditRequest{
            Amount: 123.45,
            From: "7c9738e6",
            Reference: sdk.String("This gets added to the audit log"),
            To: "ad6dc56f",
        },
        APIKey: "ipsa",
    }, operations.TransferBalanceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferBalanceResponse != nil {
        // handle response
    }
}
```

## TransferCredit

Transfer credit limit between a primary account and one of its subaccounts.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Transfers.TransferCredit(ctx, operations.TransferCreditRequest{
        TransferBalanceOrCreditRequest: shared.TransferBalanceOrCreditRequest{
            Amount: 123.45,
            From: "7c9738e6",
            Reference: sdk.String("This gets added to the audit log"),
            To: "ad6dc56f",
        },
        APIKey: "delectus",
    }, operations.TransferCreditSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferCreditResponse != nil {
        // handle response
    }
}
```

## TransferNumber

Transfer number from one account to another.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Transfers.TransferNumber(ctx, operations.TransferNumberRequest{
        TransferNumberRequest: shared.TransferNumberRequest{
            Country: sdk.String("GB"),
            From: sdk.String("7c9738e6"),
            Number: sdk.Float64(23507703696),
            To: sdk.String("ad6dc56f"),
        },
        APIKey: "tempora",
    }, operations.TransferNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TransferNumberResponse != nil {
        // handle response
    }
}
```
