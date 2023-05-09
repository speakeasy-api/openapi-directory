# FareEstimate

### Available Operations

* [FareEstimateGetFareEstimateByZone](#fareestimategetfareestimatebyzone) - Estimate a fare by zone

## FareEstimateGetFareEstimateByZone

Estimate a fare by zone

### Example Usage

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
    res, err := s.FareEstimate.FareEstimateGetFareEstimateByZone(ctx, operations.FareEstimateGetFareEstimateByZoneRequest{
        Devid: sdk.String("nobis"),
        IsJourneyInFreeTramZone: sdk.Bool(false),
        JourneyTouchOffUtc: types.MustTimeFromString("2022-05-24T03:24:11.703Z"),
        JourneyTouchOnUtc: types.MustTimeFromString("2022-09-04T08:35:09.957Z"),
        MaxZone: 570197,
        MinZone: 38425,
        Signature: sdk.String("iure"),
        Token: sdk.String("culpa"),
        TravelledRouteTypes: []FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnum{
            operations.FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnumFour,
            operations.FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnumZero,
            operations.FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnumThree,
            operations.FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnumOne,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3FareEstimateResponse != nil {
        // handle response
    }
}
```
