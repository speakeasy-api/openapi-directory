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
            RouteType: 8717895732742165505,
            StopID: 2259404117704393152,
        },
        QueryParams: operations.DeparturesGetForStopQueryParams{
            DateUtc: "1978-05-13T03:50:47Z",
            Devid: "expedita",
            DirectionID: 3390393562759376202,
            Expand: []DeparturesGetForStopExpandEnum{
                "VehiclePosition",
                "None",
            },
            Gtfs: true,
            IncludeCancelled: false,
            IncludeGeopath: true,
            LookBackwards: true,
            MaxResults: 7837839688282259259,
            PlatformNumbers: []int32{
                5617773211005988520,
            },
            Signature: "et",
            Token: "ut",
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