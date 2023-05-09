# ThirdPartyTransmission

### Available Operations

* [DeleteThirdPartyTransaction](#deletethirdpartytransaction) - Delete third party transaction
* [GetThirdPartyTransaction](#getthirdpartytransaction) - Get a third party transaction
* [GetThirdPartyTransactions](#getthirdpartytransactions) - Get all third party transaction links

## DeleteThirdPartyTransaction

Deletes a third party transaction record from the given resource location

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
    res, err := s.ThirdPartyTransmission.DeleteThirdPartyTransaction(ctx, operations.DeleteThirdPartyTransactionRequest{
        APIVersion: "maxime",
        Authorization: "fuga",
        EmployerID: "ab",
        ThirdPartyTransactionID: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetThirdPartyTransaction

Get a third party transaction

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
    res, err := s.ThirdPartyTransmission.GetThirdPartyTransaction(ctx, operations.GetThirdPartyTransactionRequest{
        APIVersion: "consectetur",
        Authorization: "maiores",
        EmployerID: "sed",
        ThirdPartyTransactionID: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ThirdPartyTransaction != nil {
        // handle response
    }
}
```

## GetThirdPartyTransactions

Get all third party transaction links

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
    res, err := s.ThirdPartyTransmission.GetThirdPartyTransactions(ctx, operations.GetThirdPartyTransactionsRequest{
        APIVersion: "sequi",
        Authorization: "eligendi",
        EmployerID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```
