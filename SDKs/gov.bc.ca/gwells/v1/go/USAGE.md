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
            Limit: 4105802276156407248,
            Offset: 7219591670737759335,
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