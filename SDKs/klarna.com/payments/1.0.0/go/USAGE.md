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
    s := sdk.New()

    req := operations.CancelAuthorizationRequest{
        PathParams: operations.CancelAuthorizationPathParams{
            AuthorizationToken: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.Orders.CancelAuthorization(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->