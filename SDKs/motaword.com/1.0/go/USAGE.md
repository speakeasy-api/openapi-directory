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
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    req := operations.DeleteCacheRequest{
        Key: "corrupti",
    }

    ctx := context.Background()
    res, err := s.DeleteCache(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.OperationStatus != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->