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

    req := operations.DfsSlateOwnershipProjectionsBySlateidRequest{
        PathParams: operations.DfsSlateOwnershipProjectionsBySlateidPathParams{
            Format: "JSON",
            SlateID: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.DfsSlateOwnershipProjectionsBySlateid(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DfsSlateWithOwnershipProjection != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->