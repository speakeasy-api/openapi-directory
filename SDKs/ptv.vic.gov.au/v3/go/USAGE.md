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
        PathParams: operations.DeparturesGetForStopPathParams{
            RouteType: "2",
            StopID: 592845,
        },
        QueryParams: operations.DeparturesGetForStopQueryParams{
            DateUtc: "2022-07-11T23:46:58.096Z",
            Devid: "nulla",
            DirectionID: 602763,
            Expand: []DeparturesGetForStopExpandEnum{
                "Direction",
                "VehiclePosition",
                "Run",
                "Disruption",
            },
            Gtfs: false,
            IncludeCancelled: false,
            IncludeGeopath: false,
            LookBackwards: false,
            MaxResults: 645894,
            PlatformNumbers: []int{
                437587,
                297534,
            },
            Signature: "saepe",
            Token: "inventore",
        },
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