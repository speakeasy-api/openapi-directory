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
    s := sdk.New()

    req := operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest{
        Accept: "corrupti",
        Destination: "provident",
        FromDate: "distinctio",
        Origin: "quibusdam",
        ProductCode: "YNB",
    }

    ctx := context.Background()
    res, err := s.Cargo.CargoGetRouteFromDateProductCodeByOriginAndDestinationGet(ctx, req, operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity{
        Auth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->