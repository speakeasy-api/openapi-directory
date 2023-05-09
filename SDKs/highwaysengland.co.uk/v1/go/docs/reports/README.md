# Reports

### Available Operations

* [ReportsIndex](#reportsindex) - Gets the daily report.
* [GetVVersionReportsStartDateToEndDateReportType](#getvversionreportsstartdatetoenddatereporttype) - Gets the daily report.

## ReportsIndex

Get's the report.

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
    res, err := s.Reports.ReportsIndex(ctx, operations.ReportsIndexRequest{
        EndDate: "iure",
        Page: 297534,
        PageSize: 891773,
        ReportSubTypeID: sdk.Int(56713),
        ReportType: "delectus",
        Sites: "tempora",
        StartDate: "suscipit",
        Version: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## GetVVersionReportsStartDateToEndDateReportType

Get's the report.

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
    res, err := s.Reports.GetVVersionReportsStartDateToEndDateReportType(ctx, operations.GetVVersionReportsStartDateToEndDateReportTypeRequest{
        EndDate: "minus",
        Page: 812169,
        PageSize: 528895,
        ReportSubTypeID: sdk.Int(479977),
        ReportType: "excepturi",
        Sites: "nisi",
        StartDate: "recusandae",
        Version: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```
