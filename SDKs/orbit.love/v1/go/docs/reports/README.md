# Reports

### Available Operations

* [GetWorkspaceSlugReports](#getworkspaceslugreports) - Get a workspace stats

## GetWorkspaceSlugReports

Get a workspace stats

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
    res, err := s.Reports.GetWorkspaceSlugReports(ctx, operations.GetWorkspaceSlugReportsRequest{
        ActivityType: sdk.String("ad"),
        EndDate: sdk.String("saepe"),
        Properties: sdk.String("suscipit"),
        Relative: sdk.String("deserunt"),
        StartDate: sdk.String("provident"),
        Type: sdk.String("minima"),
        WorkspaceSlug: "repellendus",
    }, operations.GetWorkspaceSlugReportsSecurity{
        Bearer: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
