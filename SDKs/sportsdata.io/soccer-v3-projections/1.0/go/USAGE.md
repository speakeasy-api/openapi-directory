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
            APIKeyHeader: &shared.SchemeAPIKeyHeader{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.DfsSlatesByDateRequest{
        PathParams: operations.DfsSlatesByDatePathParams{
            Date: "corrupti",
            Format: "xml",
        },
    }

    ctx := context.Background()
    res, err := s.DfsSlatesByDate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DfsSlates != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->