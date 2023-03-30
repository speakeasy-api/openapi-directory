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

    req := operations.AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest{
        Headers: operations.AerodromesByDistanceUsV1AerodromesDistanceQueryPostHeaders{
            XAPIKey: "corrupti",
        },
        Request: shared.AerodromesByDistance{
            Distance: 715190,
            Latitude: 602763,
            Longitude: 544883,
        },
    }

    ctx := context.Background()
    res, err := s.Aerodromes.AerodromesByDistanceUsV1AerodromesDistanceQueryPost(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AerodromeDistanceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->