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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    req := operations.GetEndpointsRequest{
        Openapi: true,
    }

    ctx := context.Background()
    res, err := s.APIInformation.GetEndpoints(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Endpoint != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->