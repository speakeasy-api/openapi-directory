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
            JwtAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    req := operations.DeleteKeysIDRequest{
        ID: "jMXUw-BE_2vd",
    }

    ctx := context.Background()
    res, err := s.APIKeys.DeleteKeysID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->