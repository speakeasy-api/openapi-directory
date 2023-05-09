<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Departures.DeparturesGetForStop(ctx, operations.DeparturesGetForStopRequest{
        DateUtc: types.MustTimeFromString("2021-10-25T05:21:43.948Z"),
        Devid: sdk.String("distinctio"),
        DirectionID: sdk.Int(844266),
        Expand: []DeparturesGetForStopExpandEnum{
            operations.DeparturesGetForStopExpandEnumVehiclePosition,
            operations.DeparturesGetForStopExpandEnumDirection,
            operations.DeparturesGetForStopExpandEnumVehiclePosition,
        },
        Gtfs: sdk.Bool(false),
        IncludeCancelled: sdk.Bool(false),
        IncludeGeopath: sdk.Bool(false),
        LookBackwards: sdk.Bool(false),
        MaxResults: sdk.Int(423655),
        PlatformNumbers: []int{
            645894,
            384382,
            437587,
        },
        RouteType: operations.DeparturesGetForStopRouteTypeEnumOne,
        Signature: sdk.String("debitis"),
        StopID: 56713,
        Token: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3DeparturesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->