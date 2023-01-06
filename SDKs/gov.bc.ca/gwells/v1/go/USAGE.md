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
                Bearer: shared.SchemeBearer{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AquiferCodesDemandListRequest{
        QueryParams: operations.AquiferCodesDemandListQueryParams{
            Limit: 1136478588472319679,
            Offset: 5563643603414320113,
        },
    }
    
    res, err := s.AquiferCodes.AquiferCodesDemandList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AquiferCodesDemandList200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->