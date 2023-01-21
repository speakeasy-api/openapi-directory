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
                Apikey: shared.SchemeApikey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetYearMonthJSONRequest{
        PathParams: operations.GetYearMonthJSONPathParams{
            Month: 8717895732742165505,
            Year: 2259404117704393152,
        },
    }
    
    res, err := s.Archive.GetYearMonthJSON(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetYearMonthJSON200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->