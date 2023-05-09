<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.GetForecast(ctx, operations.GetForecastRequest{
        Alt: sdk.Float64(1050),
        Dt: types.MustTimeFromString("2018-02-04T04:39:06.467Z"),
        Lat: 78.67,
        Lng: 115.67,
        Ozone: sdk.Float64(304.5),
        XAccessToken: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ForecastResults != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->