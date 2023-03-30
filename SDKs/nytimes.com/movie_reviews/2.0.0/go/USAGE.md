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
            Apikey: shared.SchemeApikey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetCriticsResourceTypeJSONRequest{
        PathParams: operations.GetCriticsResourceTypeJSONPathParams{
            ResourceType: "corrupti",
        },
    }

    ctx := context.Background()
    res, err := s.GetCriticsResourceTypeJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCriticsResourceTypeJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->