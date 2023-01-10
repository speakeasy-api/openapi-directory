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
            Alt: 15.200000,
            Dt: "2004-08-16T00:16:18Z",
            Lat: 10.200000,
            Lng: 75.099998,
            Ozone: 85.099998,
        },
        Headers: operations.GetForecastHeaders{
            XAccessToken: "tempora",
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