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
            APIKey: shared.SchemeAPIKey{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest{
        PathParams: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams{
            ContentType: "json",
            Origin: "deserunt",
            VersionNumber: "1",
        },
        QueryParams: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams{
            AccelerationEfficiency: 8442.66,
            ArriveAt: "id",
            AuxiliaryPowerInLitersPerHour: 8579.46,
            Avoid: "perspiciatis",
            Callback: "nulla",
            ConstantSpeedConsumptionInLitersPerHundredkm: "nihil",
            ConstantSpeedConsumptionInkWhPerHundredkm: "fuga",
            CurrentFuelInLiters: 6458.94,
            DecelerationEfficiency: 3843.82,
            DepartAt: "iusto",
            DownhillEfficiency: 2975.34,
            EnergyBudgetInkWh: 8917.73,
            FuelBudgetInLiters: 567.13,
            FuelEnergyDensityInMJoulesPerLiter: 9636.63,
            Hilliness: "low",
            Report: "effectiveSettings",
            RouteType: "shortest",
            TimeBudgetInSec: 7917.25,
            Traffic: false,
            TravelMode: "bicycle",
            UphillEfficiency: 5288.95,
            VehicleAxleWeight: 479977,
            VehicleCommercial: false,
            VehicleEngineType: "electric",
            VehicleHeight: 3927.85,
            VehicleLength: 9255.97,
            VehicleLoadType: "quo",
            VehicleMaxSpeed: 71036,
            VehicleWeight: 337396,
            VehicleWidth: 871.29,
            Windingness: "normal",
        },
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