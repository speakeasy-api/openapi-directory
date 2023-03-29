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

    req := operations.GetForecastRequest{
        QueryParams: operations.GetForecastQueryParams{
            Alt: 1050,
            Dt: "2018-02-04T04:39:06.467Z",
            Lat: 78.67,
            Lng: 115.67,
            Ozone: 304.5,
        },
        Headers: operations.GetForecastHeaders{
            XAccessToken: "unde",
        },
    }

    ctx := context.Background()
    res, err := s.GetForecast(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ForecastResults != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->