# PerformanceReport

### Available Operations

* [AdexchangebuyerPerformanceReportList](#adexchangebuyerperformancereportlist) - Retrieves the authenticated user's list of performance metrics.

## AdexchangebuyerPerformanceReportList

Retrieves the authenticated user's list of performance metrics.

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
    res, err := s.PerformanceReport.AdexchangebuyerPerformanceReportList(ctx, operations.AdexchangebuyerPerformanceReportListRequest{
        AccountID: "excepturi",
        Alt: shared.AltEnumJSON.ToPointer(),
        EndDateTime: "odit",
        Fields: sdk.String("ea"),
        Key: sdk.String("accusantium"),
        MaxResults: sdk.Int64(69167),
        OauthToken: sdk.String("maiores"),
        PageToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        StartDateTime: "voluptate",
        UserIP: sdk.String("autem"),
    }, operations.AdexchangebuyerPerformanceReportListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PerformanceReportList != nil {
        // handle response
    }
}
```
