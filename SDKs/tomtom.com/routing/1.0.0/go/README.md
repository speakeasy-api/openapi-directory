# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/tomtom.com/routing/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Routing

* `GetRoutingVersionNumberCalculateReachableRangeOriginContentType` - Reachable Range
* `GetRoutingVersionNumberCalculateRouteLocationsContentType` - Calculate Route
* `PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJSON` - Reachable Range
* `PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw` - Reachable Range
* `PostRoutingVersionNumberCalculateRouteLocationsContentTypeJSON` - Calculate Route
* `PostRoutingVersionNumberCalculateRouteLocationsContentTypeRaw` - Calculate Route
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
