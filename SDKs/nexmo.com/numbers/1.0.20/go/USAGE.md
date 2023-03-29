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
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
            APISecret: shared.SchemeAPISecret{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.BuyANumberRequest{
        Request: shared.NumberDetails{
            Country: "GB",
            Msisdn: "447700900000",
            TargetAPIKey: "1a2345b7",
        },
    }

    ctx := context.Background()
    res, err := s.BuyANumber(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Response != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->