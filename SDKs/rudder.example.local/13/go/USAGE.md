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
            APITokens: shared.SchemeAPITokens{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.APIInfo.APIGeneralInformations(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APIGeneralInformations200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->