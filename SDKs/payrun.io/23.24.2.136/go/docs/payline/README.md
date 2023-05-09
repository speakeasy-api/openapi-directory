# PayLine

### Available Operations

* [GetAllPayLineTags](#getallpaylinetags) - Get all pay line tags
* [GetPayLineFromEmployee](#getpaylinefromemployee) - Gets the specified pay line from the employee
* [GetPayLinesFromEmployee](#getpaylinesfromemployee) - Gets the pay lines from the specified employee
* [GetPayLinesFromPayRun](#getpaylinesfrompayrun) - Gets the pay lines from the specified pay run
* [GetPayLinesWithTag](#getpaylineswithtag) - Get pay lines with tag

## GetAllPayLineTags

Gets all the pay line tags

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
    res, err := s.PayLine.GetAllPayLineTags(ctx, operations.GetAllPayLineTagsRequest{
        APIVersion: "praesentium",
        Authorization: "odit",
        EmployeeID: "explicabo",
        EmployerID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPayLineFromEmployee

Returns the specified pay line from employee

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
    res, err := s.PayLine.GetPayLineFromEmployee(ctx, operations.GetPayLineFromEmployeeRequest{
        APIVersion: "error",
        Authorization: "earum",
        EmployeeID: "adipisci",
        EmployerID: "recusandae",
        PayLineID: "similique",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PayLine != nil {
        // handle response
    }
}
```

## GetPayLinesFromEmployee

Get links to all pay lines for the specified employee

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
    res, err := s.PayLine.GetPayLinesFromEmployee(ctx, operations.GetPayLinesFromEmployeeRequest{
        APIVersion: "ut",
        Authorization: "quidem",
        EmployeeID: "quis",
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

## GetPayLinesFromPayRun

Get links to all pay lines for the specified pay run

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
    res, err := s.PayLine.GetPayLinesFromPayRun(ctx, operations.GetPayLinesFromPayRunRequest{
        APIVersion: "unde",
        Authorization: "molestiae",
        EmployerID: "delectus",
        PayRunID: "cupiditate",
        PayScheduleID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetPayLinesWithTag

Gets the pay line with the tag

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
    res, err := s.PayLine.GetPayLinesWithTag(ctx, operations.GetPayLinesWithTagRequest{
        APIVersion: "numquam",
        Authorization: "numquam",
        EmployeeID: "nesciunt",
        EmployerID: "at",
        TagID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```
