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

    req := operations.DeparturesGetForStopRequest{
        DateUtc: "2021-10-25T05:21:43.948Z",
        Devid: "distinctio",
        DirectionID: 844266,
        Expand: []DeparturesGetForStopExpandEnum{
            "VehiclePosition",
            "Direction",
            "VehiclePosition",
        },
        Gtfs: false,
        IncludeCancelled: false,
        IncludeGeopath: false,
        LookBackwards: false,
        MaxResults: 423655,
        PlatformNumbers: []int{
            645894,
            384382,
            437587,
        },
        RouteType: "1",
        Signature: "debitis",
        StopID: 56713,
        Token: "delectus",
    }

    ctx := context.Background()
    res, err := s.Departures.DeparturesGetForStop(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DeparturesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->