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
    
    req := operations.GetweatherRequest{
        QueryParams: operations.GetweatherQueryParams{
            City: "officiis",
            License: "sunt",
            State: "aut",
        },
    }
    
    res, err := s.WeatherByCityAndState.Getweather(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getweather200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->