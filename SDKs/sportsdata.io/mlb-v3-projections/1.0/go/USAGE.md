<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    req := operations.DepthChartsRequest{
        Format: "JSON",
    }

    ctx := context.Background()
    res, err := s.DepthCharts(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDepthCharts != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->