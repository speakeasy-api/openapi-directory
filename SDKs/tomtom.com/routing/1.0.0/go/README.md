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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Routing](docs/routing/README.md)

* [GetRoutingVersionNumberCalculateReachableRangeOriginContentType](docs/routing/README.md#getroutingversionnumbercalculatereachablerangeorigincontenttype) - Reachable Range
* [GetRoutingVersionNumberCalculateRouteLocationsContentType](docs/routing/README.md#getroutingversionnumbercalculateroutelocationscontenttype) - Calculate Route
* [PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJSON](docs/routing/README.md#postroutingversionnumbercalculatereachablerangeorigincontenttypejson) - Reachable Range
* [PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw](docs/routing/README.md#postroutingversionnumbercalculatereachablerangeorigincontenttyperaw) - Reachable Range
* [PostRoutingVersionNumberCalculateRouteLocationsContentTypeJSON](docs/routing/README.md#postroutingversionnumbercalculateroutelocationscontenttypejson) - Calculate Route
* [PostRoutingVersionNumberCalculateRouteLocationsContentTypeRaw](docs/routing/README.md#postroutingversionnumbercalculateroutelocationscontenttyperaw) - Calculate Route
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
