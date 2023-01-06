<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKeyAuth: shared.SchemeAPIKeyAuth{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AnalyticsRequest{
        QueryParams: operations.AnalyticsQueryParams{
            End: "id",
            GroupBy: "country",
            Label: "nam",
            Start: "voluptatem",
            Subaccounts: "unde",
        },
    }
    
    res, err := s.Analytics.Analytics(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Analytics200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->