<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Cargo.CargoGetRouteFromDateProductCodeByOriginAndDestinationGet(ctx, operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest{
        Accept: "corrupti",
        Destination: "provident",
        FromDate: "distinctio",
        Origin: "quibusdam",
        ProductCode: operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnumYnb,
    }, operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity{
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