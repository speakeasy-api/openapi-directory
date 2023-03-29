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

    req := operations.GetcitystandardRequest{
        QueryParams: operations.GetcitystandardQueryParams{
            City: "Larrychester",
            License: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.CityDataStandardization.Getcitystandard(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcitystandard200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->