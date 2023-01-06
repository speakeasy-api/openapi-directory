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
            Alt: 41.200001,
            Dt: "1972-06-23T23:14:18Z",
            Lat: 52.200001,
            Lng: 15.100000,
            Ozone: 93.199997,
        },
        Headers: operations.GetForecastHeaders{
            XAccessToken: "accusamus",
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