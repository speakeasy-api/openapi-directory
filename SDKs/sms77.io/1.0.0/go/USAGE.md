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
            APIKeyAuth: shared.SchemeAPIKeyAuth{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AnalyticsRequest{
        QueryParams: operations.AnalyticsQueryParams{
            End: "corrupti",
            GroupBy: "subaccount",
            Label: "distinctio",
            Start: "quibusdam",
            Subaccounts: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.Analytics.Analytics(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Analytics200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->