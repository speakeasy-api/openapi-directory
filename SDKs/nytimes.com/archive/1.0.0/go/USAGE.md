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

    req := operations.GetYearMonthJSONRequest{
        PathParams: operations.GetYearMonthJSONPathParams{
            Month: 548814,
            Year: 592845,
        },
    }

    ctx := context.Background()
    res, err := s.Archive.GetYearMonthJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetYearMonthJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->