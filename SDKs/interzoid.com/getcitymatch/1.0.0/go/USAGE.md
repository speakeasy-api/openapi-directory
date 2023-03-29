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

    req := operations.GetcitymatchRequest{
        QueryParams: operations.GetcitymatchQueryParams{
            City: "Larrychester",
            License: "nulla",
        },
    }

    ctx := context.Background()
    res, err := s.CityNameSimilarityKey.Getcitymatch(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcitymatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->