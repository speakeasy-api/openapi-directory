<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TwoForMobileAppOptional.TripsTripDetails(ctx, operations.TripsTripDetailsRequest{
        TrackToken: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TripsTripDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->