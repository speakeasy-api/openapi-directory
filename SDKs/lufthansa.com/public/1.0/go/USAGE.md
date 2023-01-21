<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest{
        Security: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity{
            Auth: shared.SchemeAuth{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams{
            Destination: "sit",
            FromDate: "voluptas",
            Origin: "culpa",
            ProductCode: "FUN",
        },
        Headers: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders{
            Accept: "consequuntur",
        },
    }
    
    res, err := s.Cargo.CargoGetRouteFromDateProductCodeByOriginAndDestinationGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->