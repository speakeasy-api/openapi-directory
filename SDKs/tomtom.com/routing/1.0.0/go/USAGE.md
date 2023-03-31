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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest{
        AccelerationEfficiency: 5488.14,
        ArriveAt: "provident",
        AuxiliaryPowerInLitersPerHour: 7151.9,
        Avoid: "quibusdam",
        Callback: "unde",
        ConstantSpeedConsumptionInLitersPerHundredkm: "nulla",
        ConstantSpeedConsumptionInkWhPerHundredkm: "corrupti",
        ContentType: "jsonp",
        CurrentFuelInLiters: 4236.55,
        DecelerationEfficiency: 6235.64,
        DepartAt: "deserunt",
        DownhillEfficiency: 3843.82,
        EnergyBudgetInkWh: 4375.87,
        FuelBudgetInLiters: 2975.34,
        FuelEnergyDensityInMJoulesPerLiter: 8917.73,
        Hilliness: "low",
        Origin: "delectus",
        Report: "effectiveSettings",
        RouteType: "shortest",
        TimeBudgetInSec: 3834.41,
        Traffic: false,
        TravelMode: "bus",
        UphillEfficiency: 7917.25,
        VehicleAxleWeight: 812169,
        VehicleCommercial: false,
        VehicleEngineType: "electric",
        VehicleHeight: 4799.77,
        VehicleLength: 5680.45,
        VehicleLoadType: "nisi",
        VehicleMaxSpeed: 925597,
        VehicleWeight: 836079,
        VehicleWidth: 710.36,
        VersionNumber: "1",
        Windingness: "normal",
    }

    ctx := context.Background()
    res, err := s.Routing.GetRoutingVersionNumberCalculateReachableRangeOriginContentType(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->