# Reports

## Overview

The reports API let you group checks into a single report and download the result as a PDF or CSV file.
It is also possible to upload a group of backgrounds check to be performed in batch and get a report about them later.

### Available Operations

* [BatchUpload](#batchupload) - Batch Upload
* [CreateReport](#createreport) - Create Report
* [GetReport](#getreport) - Get Report
* [ListReports](#listreports) - List Reports

## BatchUpload

Upload multiple checks and associate them to the report. The inputs for these checks must be sent in an xlsx file, please use the following templates:

**Person:** [Chile](https://app.truora.com/files/person/person-input-cl.xlsx), [Colombia](https://app.truora.com/files/person/person-input-co.xlsx), [Mexico](https://app.truora.com/files/person/person-input-mx.xlsx), [Peru](https://app.truora.com/files/person/person-input-pe.xlsx), [Costa Rica](https://app.truora.com/files/person/person-input-cr.xlsx), [Brazil](https://app.truora.com/files/person/person-input-br.xlsx)

**Vehicle:** [Chile](https://app.truora.com/files/vehicle/vehicle-input-cl.xlsx), [Colombia](https://app.truora.com/files/vehicle/vehicle-input-co.xlsx), [Mexico](https://app.truora.com/files/vehicle/vehicle-input-mx.xlsx), [Peru](https://app.truora.com/files/vehicle/vehicle-input-pe.xlsx)

**Company** [Colombia](https://app.truora.com/files/company/company-input-co.xlsx), [Mexico](https://app.truora.com/files/company/company-input-mx.xlsx), [Brazil](https://app.truora.com/files/company/company-input-br.xlsx)

Keep in mind that we currently do not support batch uploads for custom check types. Background checks created by batch upload are processed with low priority.

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
    res, err := s.Reports.BatchUpload(ctx, operations.BatchUploadRequest{
        BatchUploadInput: shared.BatchUploadInput{
            File: [][]byte{
                []byte("voluptatibus"),
                []byte("ipsa"),
                []byte("omnis"),
            },
        },
        ReportID: "voluptate",
    }, operations.BatchUploadSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportOutput != nil {
        // handle response
    }
}
```

## CreateReport

Creates a Report to which it is possible to associate multiple Checks.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.CreateReport(ctx, shared.CreateReportInput{
        Name: "Thomas Batz",
    }, operations.CreateReportSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportOutput != nil {
        // handle response
    }
}
```

## GetReport

Returns a report with the given ID.

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
    res, err := s.Reports.GetReport(ctx, operations.GetReportRequest{
        ReportID: "maiores",
    }, operations.GetReportSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportOutput != nil {
        // handle response
    }
}
```

## ListReports

Lists all reports asociated with the client or user requesting.

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Reports.ListReports(ctx, operations.ListReportsRequest{
        StartKey: sdk.String("dicta"),
        Username: sdk.String("Floy.Gulgowski"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportsOutput != nil {
        // handle response
    }
}
```
