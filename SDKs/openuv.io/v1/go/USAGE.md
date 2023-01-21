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
    
    req := operations.GetForecastRequest{
        QueryParams: operations.GetForecastQueryParams{
            Alt: 74.099998,
            Dt: "1978-05-13T03:50:47Z",
            Lat: 6.200000,
            Lng: 96.199997,
            Ozone: 77.099998,
        },
        Headers: operations.GetForecastHeaders{
            XAccessToken: "et",
        },
    }
    
    res, err := s.GetForecast(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ForecastResults != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->