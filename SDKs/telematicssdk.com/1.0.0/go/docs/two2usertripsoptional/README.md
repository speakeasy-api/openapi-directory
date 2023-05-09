# Two2UserTripsOptional

### Available Operations

* [TripsTripDetails](#tripstripdetails) - Trips - trip details

## TripsTripDetails

Trips - trip details

### Example Usage

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
    res, err := s.Two2UserTripsOptional.TripsTripDetails(ctx, operations.TripsTripDetailsRequest{
        TrackToken: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TripsTripDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```
