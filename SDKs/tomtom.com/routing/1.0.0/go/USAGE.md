<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Routing.GetRoutingVersionNumberCalculateReachableRangeOriginContentType(ctx, operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest{
        AccelerationEfficiency: sdk.Float32(5488.14),
        ArriveAt: sdk.String("provident"),
        AuxiliaryPowerInLitersPerHour: sdk.Float32(7151.9),
        Avoid: sdk.String("quibusdam"),
        Callback: sdk.String("unde"),
        ConstantSpeedConsumptionInLitersPerHundredkm: sdk.String("nulla"),
        ConstantSpeedConsumptionInkWhPerHundredkm: sdk.String("corrupti"),
        ContentType: shared.ContentTypeEnumJsonp,
        CurrentFuelInLiters: sdk.Float32(4236.55),
        DecelerationEfficiency: sdk.Float32(6235.64),
        DepartAt: sdk.String("deserunt"),
        DownhillEfficiency: sdk.Float32(3843.82),
        EnergyBudgetInkWh: sdk.Float32(4375.87),
        FuelBudgetInLiters: sdk.Float32(2975.34),
        FuelEnergyDensityInMJoulesPerLiter: sdk.Float32(8917.73),
        Hilliness: shared.HillinessEnumLow.ToPointer(),
        Origin: "delectus",
        Report: shared.ReportEnumEffectiveSettings.ToPointer(),
        RouteType: shared.RouteTypeEnumShortest.ToPointer(),
        TimeBudgetInSec: sdk.Float32(3834.41),
        Traffic: sdk.Bool(false),
        TravelMode: shared.TravelModeEnumBus.ToPointer(),
        UphillEfficiency: sdk.Float32(7917.25),
        VehicleAxleWeight: sdk.Int64(812169),
        VehicleCommercial: sdk.Bool(false),
        VehicleEngineType: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnumElectric.ToPointer(),
        VehicleHeight: sdk.Float32(4799.77),
        VehicleLength: sdk.Float32(5680.45),
        VehicleLoadType: sdk.String("nisi"),
        VehicleMaxSpeed: sdk.Int64(925597),
        VehicleWeight: sdk.Int64(836079),
        VehicleWidth: sdk.Float32(710.36),
        VersionNumber: shared.VersionNumberEnumOne,
        Windingness: shared.WindingnessEnumNormal.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->