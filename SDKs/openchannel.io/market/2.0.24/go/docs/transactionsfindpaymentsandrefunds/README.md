# TransactionsFindPaymentsAndRefunds

### Available Operations

* [DeleteTransactionsTransactionID](#deletetransactionstransactionid) - Deleted a transaction
* [GetTransactions](#gettransactions) - Returns a paginated list of transactions
* [GetTransactionsTransactionID](#gettransactionstransactionid) - Returns a transaction
* [PostTransactionsTransactionID](#posttransactionstransactionid) - Updates a transaction

## DeleteTransactionsTransactionID

- Results are returned for the market provided within the basic authentication credentials


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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TransactionsFindPaymentsAndRefunds.DeleteTransactionsTransactionID(ctx, operations.DeleteTransactionsTransactionIDRequest{
        TransactionID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTransactions

- Results are paginated and the default is value is 100 if no limit is provided


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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TransactionsFindPaymentsAndRefunds.GetTransactions(ctx, operations.GetTransactionsRequest{
        Limit: sdk.Int64(431418),
        PageNumber: sdk.Int64(221262),
        Query: sdk.String("necessitatibus"),
        Sort: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTransactionsTransactionID

- Results are returned for the market provided within the basic authentication credentials


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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TransactionsFindPaymentsAndRefunds.GetTransactionsTransactionID(ctx, operations.GetTransactionsTransactionIDRequest{
        TransactionID: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostTransactionsTransactionID

- Results are returned for the market provided within the basic authentication credentials


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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.TransactionsFindPaymentsAndRefunds.PostTransactionsTransactionID(ctx, operations.PostTransactionsTransactionIDRequest{
        CustomData: sdk.String("quasi"),
        TransactionID: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
