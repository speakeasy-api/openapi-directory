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
    
    req := operations.DeparturesGetForStopRequest{
        PathParams: operations.DeparturesGetForStopPathParams{
            RouteType: 2729417514030567241,
            StopID: 2467764531831227751,
        },
        QueryParams: operations.DeparturesGetForStopQueryParams{
            DateUtc: "1976-12-05T11:08:08Z",
            Devid: "vero",
            DirectionID: 7857940956246050573,
            Expand: []DeparturesGetForStopExpandEnum{
                "Run",
                "Disruption",
            },
            Gtfs: true,
            IncludeCancelled: true,
            IncludeGeopath: false,
            LookBackwards: true,
            MaxResults: 3280036500610443897,
            PlatformNumbers: []int32{
                1207938721107635436,
            },
            Signature: "harum",
            Token: "officia",
        },
    }
    
    res, err := s.Departures.DeparturesGetForStop(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DeparturesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->