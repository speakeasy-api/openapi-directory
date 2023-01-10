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
            RouteType: 7191447943873783343,
            StopID: 5184739520645517328,
        },
        QueryParams: operations.DeparturesGetForStopQueryParams{
            DateUtc: "1978-07-16T07:01:39Z",
            Devid: "sapiente",
            DirectionID: 4122159384933783933,
            Expand: []DeparturesGetForStopExpandEnum{
                "None",
            },
            Gtfs: false,
            IncludeCancelled: true,
            IncludeGeopath: false,
            LookBackwards: false,
            MaxResults: 3667407268721385014,
            PlatformNumbers: []int32{
                2999443024173756696,
                4335001580442025170,
                7516829928812896570,
            },
            Signature: "ut",
            Token: "aut",
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