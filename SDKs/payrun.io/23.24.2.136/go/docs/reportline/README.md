# ReportLine

### Available Operations

* [GetReportLineFromEmployer](#getreportlinefromemployer) - Gets the specified report line from the employer
* [GetReportLinesFromEmployer](#getreportlinesfromemployer) - Gets the report lines from the specified employer
* [GetReportLinesFromPayRun](#getreportlinesfrompayrun) - Gets the report lines from the specified pay run

## GetReportLineFromEmployer

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
    res, err := s.ReportLine.GetReportLineFromEmployer(ctx, operations.GetReportLineFromEmployerRequest{
        APIVersion: "libero",
        Authorization: "totam",
        EmployerID: "sequi",
        ReportLineID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportLine != nil {
        // handle response
    }
}
```

## GetReportLinesFromEmployer

Get links to all report lines for the specified employee

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
    res, err := s.ReportLine.GetReportLinesFromEmployer(ctx, operations.GetReportLinesFromEmployerRequest{
        APIVersion: "ea",
        Authorization: "impedit",
        EmployerID: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```

## GetReportLinesFromPayRun

Returns all report lines associated with the specified pay run

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
    res, err := s.ReportLine.GetReportLinesFromPayRun(ctx, operations.GetReportLinesFromPayRunRequest{
        APIVersion: "odit",
        Authorization: "velit",
        EmployerID: "reiciendis",
        PayRunID: "repellat",
        PayScheduleID: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LinkCollection != nil {
        // handle response
    }
}
```
