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
    
    req := operations.GetweatherzipcodeRequest{
        QueryParams: operations.GetweatherzipcodeQueryParams{
            License: "sit",
            Zip: "voluptas",
        },
    }
    
    res, err := s.WeatherByZipCode.Getweatherzipcode(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getweatherzipcode200ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->