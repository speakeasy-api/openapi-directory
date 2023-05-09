# Invoice

### Available Operations

* [GetInvoice](#getinvoice) - List a specific invoice of project Level
* [GetInvoiceFiles](#getinvoicefiles) - List files of invoice Level
* [GetInvoices](#getinvoices) - List invoices by a specific order

## GetInvoice

List a specific invoice of project Level

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
    res, err := s.Invoice.GetInvoice(ctx, operations.GetInvoiceRequest{
        InvoiceID: "id",
        ProjectID: "possimus",
        WorkgroupID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetInvoiceFiles

List files of invoice Level

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
    res, err := s.Invoice.GetInvoiceFiles(ctx, operations.GetInvoiceFilesRequest{
        InvoiceID: "quasi",
        ProjectID: "error",
        WorkgroupID: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetInvoices

List invoices by a specific order

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
    res, err := s.Invoice.GetInvoices(ctx, operations.GetInvoicesRequest{
        OrderID: "laborum",
        ProjectID: "quasi",
        WorkgroupID: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
