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

    req := operations.TripsTripDetailsRequest{
        TrackToken: "corrupti",
    }

    ctx := context.Background()
    res, err := s.TwoForMobileAppOptional.TripsTripDetails(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TripsTripDetails200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->