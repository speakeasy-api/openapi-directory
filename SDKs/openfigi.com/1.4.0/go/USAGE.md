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
            APIKeyAuth: &shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetMappingValuesKeyRequest{
        PathParams: operations.GetMappingValuesKeyPathParams{
            Key: "currency",
        },
    }

    ctx := context.Background()
    res, err := s.GetMappingValuesKey(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMappingValuesKey200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->