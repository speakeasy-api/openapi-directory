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
        AccountID: "sunt",
        Alt: shared.AltEnumJSON.ToPointer(),
        EndDateTime: "blanditiis",
        Fields: sdk.String("iste"),
        Key: sdk.String("accusamus"),
        MaxResults: sdk.Int64(716410),
        OauthToken: sdk.String("incidunt"),
        PageToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("blanditiis"),
        StartDateTime: "ducimus",
        UserIP: sdk.String("consectetur"),
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
