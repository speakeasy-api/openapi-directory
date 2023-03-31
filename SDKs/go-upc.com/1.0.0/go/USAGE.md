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
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetProductInfoRequest{
        Code: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Product.GetProductInfo(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetProductInfo200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->