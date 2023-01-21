<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKey: shared.SchemeAPIKey{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest{
        PathParams: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams{
            ContentType: "xml",
            Origin: "voluptas",
            VersionNumber: 6050128673802995827,
        },
        QueryParams: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams{
            AccelerationEfficiency: 6.200000,
            ArriveAt: "dolor",
            AuxiliaryPowerInLitersPerHour: 67.199997,
            Avoid: "fugit",
            Callback: "et",
            ConstantSpeedConsumptionInLitersPerHundredkm: "nihil",
            ConstantSpeedConsumptionInkWhPerHundredkm: "rerum",
            CurrentFuelInLiters: 59.099998,
            DecelerationEfficiency: 52.099998,
            DepartAt: "ut",
            DownhillEfficiency: 50.099998,
            EnergyBudgetInkWh: 94.199997,
            FuelBudgetInLiters: 68.099998,
            FuelEnergyDensityInMJoulesPerLiter: 80.199997,
            Hilliness: "low",
            Report: "effectiveSettings",
            RouteType: "fastest",
            TimeBudgetInSec: 91.099998,
            Traffic: true,
            TravelMode: "van",
            UphillEfficiency: 45.099998,
            VehicleAxleWeight: 2897681629866238117,
            VehicleCommercial: false,
            VehicleEngineType: "combustion",
            VehicleHeight: 10.200000,
            VehicleLength: 14.200000,
            VehicleLoadType: "aut",
            VehicleMaxSpeed: 6972732843819909978,
            VehicleWeight: 5558237345453186302,
            VehicleWidth: 19.200001,
            Windingness: "low",
        },
    }
    
    res, err := s.Routing.GetRoutingVersionNumberCalculateReachableRangeOriginContentType(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->