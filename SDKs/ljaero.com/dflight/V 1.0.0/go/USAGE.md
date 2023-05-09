<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Aerodromes.AerodromesByDistanceUsV1AerodromesDistanceQueryPost(ctx, operations.AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest{
        AerodromesByDistance: shared.AerodromesByDistance{
            Distance: 592845,
            Latitude: 844266,
            Longitude: 857946,
        },
        XAPIKey: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AerodromeDistanceResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->