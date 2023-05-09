# Reports

### Available Operations

* [ReportsCreate](#reportscreate) - Create a new report.
* [ReportsList](#reportslist) - Get user report list.
* [ReportsRead](#reportsread) - Get report details.

## ReportsCreate

This POST-Method creates a new report.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.ReportsCreate(ctx, shared.ReportRequest{
        FileID: "df7cc78c-a1ba-4928-bc81-6742cb739205",
        Process: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportResponse != nil {
        // handle response
    }
}
```

## ReportsList

This GET method lists the user's reports.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.ReportsList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```

## ReportsRead

This GET-Method returns the details of a specific report.

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
            Token: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.ReportsRead(ctx, operations.ReportsReadRequest{
        ReportNumber: "sed",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```
