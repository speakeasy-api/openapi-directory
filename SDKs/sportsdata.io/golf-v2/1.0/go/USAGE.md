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

    req := operations.CurrentSeasonRequest{
        Format: "JSON",
    }

    ctx := context.Background()
    res, err := s.CurrentSeason(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Season != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->