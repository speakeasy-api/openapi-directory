# Rti

### Available Operations

* [DeleteRtiTransaction](#deletertitransaction) - Delete the RTI transaction
* [GetAllRtiTransactionTags](#getallrtitransactiontags) - Get all RTI transaction tags
* [GetRtiTransactionFromEmployer](#getrtitransactionfromemployer) - Get the RTI transaction
* [GetRtiTransactionSummariesFromEmployer](#getrtitransactionsummariesfromemployer) - Get all RTI transaction summaries for the employer
* [GetRtiTransactionSummaryFromEmployer](#getrtitransactionsummaryfromemployer) - Get the RTI transaction summary
* [GetRtiTransactionsFromEmployer](#getrtitransactionsfromemployer) - Get all RTI transactions for the employer
* [GetRtiTransactionsWithTag](#getrtitransactionswithtag) - Get RTI transactions with tag

## DeleteRtiTransaction

Deletes the specified RTI transaction

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
    res, err := s.Rti.DeleteRtiTransaction(ctx, operations.DeleteRtiTransactionRequest{
        APIVersion: "veritatis",
        Authorization: "quae",
        EmployerID: "eaque",
        RtiTransactionID: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAllRtiTransactionTags

Gets all the RTI transaction tags

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
    res, err := s.Rti.GetAllRtiTransactionTags(ctx, operations.GetAllRtiTransactionTagsRequest{
        APIVersion: "delectus",
        Authorization: "mollitia",
        EmployerID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetRtiTransactionFromEmployer

Returns the specified RTI transaction

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
    res, err := s.Rti.GetRtiTransactionFromEmployer(ctx, operations.GetRtiTransactionFromEmployerRequest{
        APIVersion: "officia",
        Authorization: "sed",
        EmployerID: "voluptatem",
        RtiTransactionID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RtiTransactionBase != nil {
        // handle response
    }
}
```

## GetRtiTransactionSummariesFromEmployer

Get links for all RTI transaction summaries for the specified employer

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
    res, err := s.Rti.GetRtiTransactionSummariesFromEmployer(ctx, operations.GetRtiTransactionSummariesFromEmployerRequest{
        APIVersion: "eveniet",
        Authorization: "hic",
        EmployerID: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetRtiTransactionSummaryFromEmployer

Returns the specified RTI transaction summary data excluding some poroperties

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
    res, err := s.Rti.GetRtiTransactionSummaryFromEmployer(ctx, operations.GetRtiTransactionSummaryFromEmployerRequest{
        APIVersion: "incidunt",
        Authorization: "qui",
        EmployerID: "qui",
        RtiTransactionID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RtiTransactionBase != nil {
        // handle response
    }
}
```

## GetRtiTransactionsFromEmployer

Get links for all RTI transactions for the specified employer

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
    res, err := s.Rti.GetRtiTransactionsFromEmployer(ctx, operations.GetRtiTransactionsFromEmployerRequest{
        APIVersion: "harum",
        Authorization: "explicabo",
        EmployerID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetRtiTransactionsWithTag

Gets the RTI transactions with the tag

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
    res, err := s.Rti.GetRtiTransactionsWithTag(ctx, operations.GetRtiTransactionsWithTagRequest{
        APIVersion: "aliquid",
        Authorization: "modi",
        EmployerID: "optio",
        TagID: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```
