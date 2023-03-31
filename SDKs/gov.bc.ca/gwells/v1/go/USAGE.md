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
            Bearer: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AquiferCodesDemandListRequest{
        Limit: 548814,
        Offset: 592845,
    }

    ctx := context.Background()
    res, err := s.AquiferCodes.AquiferCodesDemandList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AquiferCodesDemandList200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->