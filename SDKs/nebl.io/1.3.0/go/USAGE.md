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

    req := operations.GetAddressRequest{
        PathParams: operations.GetAddressPathParams{
            Address: "5786 Roselyn Throughway",
        },
    }

    ctx := context.Background()
    res, err := s.Insight.GetAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->