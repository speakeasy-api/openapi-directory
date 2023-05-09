# Routing

### Available Operations

* [GetRoutingVersionNumberCalculateReachableRangeOriginContentType](#getroutingversionnumbercalculatereachablerangeorigincontenttype) - Reachable Range
* [GetRoutingVersionNumberCalculateRouteLocationsContentType](#getroutingversionnumbercalculateroutelocationscontenttype) - Calculate Route
* [PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJSON](#postroutingversionnumbercalculatereachablerangeorigincontenttypejson) - Reachable Range
* [PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw](#postroutingversionnumbercalculatereachablerangeorigincontenttyperaw) - Reachable Range
* [PostRoutingVersionNumberCalculateRouteLocationsContentTypeJSON](#postroutingversionnumbercalculateroutelocationscontenttypejson) - Calculate Route
* [PostRoutingVersionNumberCalculateRouteLocationsContentTypeRaw](#postroutingversionnumbercalculateroutelocationscontenttyperaw) - Calculate Route

## GetRoutingVersionNumberCalculateReachableRangeOriginContentType

Calculates a set of locations that can be reached from the origin point.

### Example Usage

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
        AccelerationEfficiency: sdk.Float32(871.29),
        ArriveAt: sdk.String("deserunt"),
        AuxiliaryPowerInLitersPerHour: sdk.Float32(202.18),
        Avoid: sdk.String("ipsam"),
        Callback: sdk.String("repellendus"),
        ConstantSpeedConsumptionInLitersPerHundredkm: sdk.String("sapiente"),
        ConstantSpeedConsumptionInkWhPerHundredkm: sdk.String("quo"),
        ContentType: shared.ContentTypeEnumXML,
        CurrentFuelInLiters: sdk.Float32(8700.13),
        DecelerationEfficiency: sdk.Float32(8700.88),
        DepartAt: sdk.String("maiores"),
        DownhillEfficiency: sdk.Float32(4736.08),
        EnergyBudgetInkWh: sdk.Float32(7991.59),
        FuelBudgetInLiters: sdk.Float32(8009.11),
        FuelEnergyDensityInMJoulesPerLiter: sdk.Float32(4614.79),
        Hilliness: shared.HillinessEnumNormal.ToPointer(),
        Origin: "porro",
        Report: shared.ReportEnumEffectiveSettings.ToPointer(),
        RouteType: shared.RouteTypeEnumEco.ToPointer(),
        TimeBudgetInSec: sdk.Float32(1182.74),
        Traffic: sdk.Bool(false),
        TravelMode: shared.TravelModeEnumMotorcycle.ToPointer(),
        UphillEfficiency: sdk.Float32(6399.21),
        VehicleAxleWeight: sdk.Int64(582020),
        VehicleCommercial: sdk.Bool(false),
        VehicleEngineType: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnumCombustion.ToPointer(),
        VehicleHeight: sdk.Float32(5373.73),
        VehicleLength: sdk.Float32(9446.69),
        VehicleLoadType: sdk.String("optio"),
        VehicleMaxSpeed: sdk.Int64(521848),
        VehicleWeight: sdk.Int64(105907),
        VehicleWidth: sdk.Float32(4146.62),
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

## GetRoutingVersionNumberCalculateRouteLocationsContentType

Calculates a route between an origin and a destination.

### Example Usage

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
    res, err := s.Routing.GetRoutingVersionNumberCalculateRouteLocationsContentType(ctx, operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest{
        AccelerationEfficiency: sdk.Float32(2645.55),
        AlternativeType: shared.AlternativeTypeEnumAnyRoute.ToPointer(),
        ArriveAt: sdk.String("impedit"),
        AuxiliaryPowerInLitersPerHour: sdk.Float32(7369.18),
        Avoid: sdk.String("esse"),
        Callback: sdk.String("ipsum"),
        ComputeBestOrder: sdk.Bool(false),
        ComputeTravelTimeFor: shared.ComputeTravelTimeForEnumAll.ToPointer(),
        ConstantSpeedConsumptionInLitersPerHundredkm: sdk.String("aspernatur"),
        ConstantSpeedConsumptionInkWhPerHundredkm: sdk.String("perferendis"),
        ContentType: shared.ContentTypeEnumXML,
        CurrentFuelInLiters: sdk.Float32(6176.36),
        DecelerationEfficiency: sdk.Float32(1496.75),
        DepartAt: sdk.String("iste"),
        DownhillEfficiency: sdk.Float32(2223.21),
        FuelEnergyDensityInMJoulesPerLiter: sdk.Float32(6169.34),
        Hilliness: shared.HillinessEnumNormal.ToPointer(),
        InstructionsType: shared.InstructionsTypeEnumTagged.ToPointer(),
        Language: sdk.String("saepe"),
        Locations: "fuga",
        MaxAlternatives: sdk.Int64(449950),
        MinDeviationDistance: sdk.Int64(359508),
        MinDeviationTime: sdk.Int64(613064),
        Report: shared.ReportEnumEffectiveSettings.ToPointer(),
        RouteRepresentation: shared.RouteRepresentationEnumPolyline.ToPointer(),
        RouteType: shared.RouteTypeEnumThrilling.ToPointer(),
        SectionType: sdk.String("quidem"),
        Traffic: sdk.Bool(false),
        TravelMode: shared.TravelModeEnumCar.ToPointer(),
        UphillEfficiency: sdk.Float32(602.25),
        VehicleAxleWeight: sdk.Int64(969810),
        VehicleCommercial: sdk.Bool(false),
        VehicleEngineType: shared.VehicleEngineTypeEnumElectric.ToPointer(),
        VehicleHeading: sdk.Int64(653140),
        VehicleHeight: sdk.Float32(6706.38),
        VehicleLength: sdk.Float32(1709.09),
        VehicleLoadType: sdk.String("dolorem"),
        VehicleMaxSpeed: sdk.Int64(358152),
        VehicleWeight: sdk.Int64(128926),
        VehicleWidth: sdk.Float32(7506.86),
        VersionNumber: shared.VersionNumberEnumOne,
        Windingness: shared.WindingnessEnumLow.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJSON

Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

### Example Usage

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
    res, err := s.Routing.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJSON(ctx, operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJSONRequest{
        AccelerationEfficiency: sdk.Float32(6078.31),
        ArriveAt: sdk.String("nemo"),
        AuxiliaryPowerInLitersPerHour: sdk.Float32(3250.47),
        Avoid: sdk.String("excepturi"),
        CalculateReachableRangePostDataParameters: &shared.CalculateReachableRangePostDataParameters{
            AllowVignette: []string{
                "iure",
            },
            AvoidAreas: &shared.CalculateReachableRangePostDataParametersAvoidAreas{
                Rectangles: []shared.CalculateReachableRangePostDataParametersAvoidAreasRectangles{
                    shared.CalculateReachableRangePostDataParametersAvoidAreasRectangles{
                        NorthEastCorner: &shared.CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner{
                            Latitude: sdk.String("doloribus"),
                            Longitude: sdk.String("sapiente"),
                        },
                        SouthWestCorner: &shared.CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner{
                            Latitude: sdk.String("architecto"),
                            Longitude: sdk.String("mollitia"),
                        },
                    },
                    shared.CalculateReachableRangePostDataParametersAvoidAreasRectangles{
                        NorthEastCorner: &shared.CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner{
                            Latitude: sdk.String("dolorem"),
                            Longitude: sdk.String("culpa"),
                        },
                        SouthWestCorner: &shared.CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner{
                            Latitude: sdk.String("consequuntur"),
                            Longitude: sdk.String("repellat"),
                        },
                    },
                    shared.CalculateReachableRangePostDataParametersAvoidAreasRectangles{
                        NorthEastCorner: &shared.CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner{
                            Latitude: sdk.String("mollitia"),
                            Longitude: sdk.String("occaecati"),
                        },
                        SouthWestCorner: &shared.CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner{
                            Latitude: sdk.String("numquam"),
                            Longitude: sdk.String("commodi"),
                        },
                    },
                },
            },
            AvoidVignette: []string{
                "molestiae",
                "velit",
            },
        },
        Callback: sdk.String("error"),
        ConstantSpeedConsumptionInLitersPerHundredkm: sdk.String("quia"),
        ConstantSpeedConsumptionInkWhPerHundredkm: sdk.String("quis"),
        ContentType: shared.ContentTypeEnumXML,
        CurrentFuelInLiters: sdk.Float32(6747.52),
        DecelerationEfficiency: sdk.Float32(6563.3),
        DepartAt: sdk.String("enim"),
        DownhillEfficiency: sdk.Float32(1381.83),
        EnergyBudgetInkWh: sdk.Float32(7783.46),
        FuelBudgetInLiters: sdk.Float32(1965.82),
        FuelEnergyDensityInMJoulesPerLiter: sdk.Float32(9495.72),
        Hilliness: shared.HillinessEnumNormal.ToPointer(),
        Origin: "id",
        Report: shared.ReportEnumEffectiveSettings.ToPointer(),
        RouteType: shared.RouteTypeEnumThrilling.ToPointer(),
        TimeBudgetInSec: sdk.Float32(135.71),
        Traffic: sdk.Bool(false),
        TravelMode: shared.TravelModeEnumCar.ToPointer(),
        UphillEfficiency: sdk.Float32(6228.46),
        VehicleAxleWeight: sdk.Int64(837945),
        VehicleCommercial: sdk.Bool(false),
        VehicleEngineType: operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJSONVehicleEngineTypeEnumElectric.ToPointer(),
        VehicleHeight: sdk.Float32(960.98),
        VehicleLength: sdk.Float32(9719.45),
        VehicleLoadType: sdk.String("voluptatibus"),
        VehicleMaxSpeed: sdk.Int64(878194),
        VehicleWeight: sdk.Int64(468651),
        VehicleWidth: sdk.Float32(5096.24),
        VersionNumber: shared.VersionNumberEnumOne,
        Windingness: shared.WindingnessEnumHigh.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw

Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

### Example Usage

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
    res, err := s.Routing.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw(ctx, operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawRequest{
        RequestBody: []byte("ipsa"),
        AccelerationEfficiency: sdk.Float32(6048.46),
        ArriveAt: sdk.String("voluptate"),
        AuxiliaryPowerInLitersPerHour: sdk.Float32(7392.64),
        Avoid: sdk.String("perferendis"),
        Callback: sdk.String("doloremque"),
        ConstantSpeedConsumptionInLitersPerHundredkm: sdk.String("reprehenderit"),
        ConstantSpeedConsumptionInkWhPerHundredkm: sdk.String("ut"),
        ContentType: shared.ContentTypeEnumJsonp,
        CurrentFuelInLiters: sdk.Float32(1201.96),
        DecelerationEfficiency: sdk.Float32(3594.44),
        DepartAt: sdk.String("dolore"),
        DownhillEfficiency: sdk.Float32(4808.94),
        EnergyBudgetInkWh: sdk.Float32(1187.27),
        FuelBudgetInLiters: sdk.Float32(6886.61),
        FuelEnergyDensityInMJoulesPerLiter: sdk.Float32(3179.83),
        Hilliness: shared.HillinessEnumHigh.ToPointer(),
        Origin: "commodi",
        Report: shared.ReportEnumEffectiveSettings.ToPointer(),
        RouteType: shared.RouteTypeEnumThrilling.ToPointer(),
        TimeBudgetInSec: sdk.Float32(641.47),
        Traffic: sdk.Bool(false),
        TravelMode: shared.TravelModeEnumTruck.ToPointer(),
        UphillEfficiency: sdk.Float32(6924.72),
        VehicleAxleWeight: sdk.Int64(565189),
        VehicleCommercial: sdk.Bool(false),
        VehicleEngineType: operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawVehicleEngineTypeEnumElectric.ToPointer(),
        VehicleHeight: sdk.Float32(8651.03),
        VehicleLength: sdk.Float32(2653.89),
        VehicleLoadType: sdk.String("praesentium"),
        VehicleMaxSpeed: sdk.Int64(523248),
        VehicleWeight: sdk.Int64(916723),
        VehicleWidth: sdk.Float32(939.4),
        VersionNumber: shared.VersionNumberEnumOne,
        Windingness: shared.WindingnessEnumHigh.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostRoutingVersionNumberCalculateRouteLocationsContentTypeJSON

Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

### Example Usage

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
    res, err := s.Routing.PostRoutingVersionNumberCalculateRouteLocationsContentTypeJSON(ctx, operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeJSONRequest{
        AccelerationEfficiency: sdk.Float32(5759.47),
        AlternativeType: shared.AlternativeTypeEnumAnyRoute.ToPointer(),
        ArriveAt: sdk.String("itaque"),
        AuxiliaryPowerInLitersPerHour: sdk.Float32(2777.18),
        Avoid: sdk.String("enim"),
        CalculateRoutePostDataParameters: &shared.CalculateRoutePostDataParameters{
            AllowVignette: []string{
                "est",
            },
            AvoidAreas: &shared.CalculateRoutePostDataParametersAvoidAreas{
                Rectangles: []shared.CalculateRoutePostDataParametersAvoidAreasRectangles{
                    shared.CalculateRoutePostDataParametersAvoidAreasRectangles{
                        NorthEastCorner: &shared.CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner{
                            Latitude: sdk.String("explicabo"),
                            Longitude: sdk.String("deserunt"),
                        },
                        SouthWestCorner: &shared.CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner{
                            Latitude: sdk.String("distinctio"),
                            Longitude: sdk.String("quibusdam"),
                        },
                    },
                    shared.CalculateRoutePostDataParametersAvoidAreasRectangles{
                        NorthEastCorner: &shared.CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner{
                            Latitude: sdk.String("labore"),
                            Longitude: sdk.String("modi"),
                        },
                        SouthWestCorner: &shared.CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner{
                            Latitude: sdk.String("qui"),
                            Longitude: sdk.String("aliquid"),
                        },
                    },
                    shared.CalculateRoutePostDataParametersAvoidAreasRectangles{
                        NorthEastCorner: &shared.CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner{
                            Latitude: sdk.String("cupiditate"),
                            Longitude: sdk.String("quos"),
                        },
                        SouthWestCorner: &shared.CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner{
                            Latitude: sdk.String("perferendis"),
                            Longitude: sdk.String("magni"),
                        },
                    },
                    shared.CalculateRoutePostDataParametersAvoidAreasRectangles{
                        NorthEastCorner: &shared.CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner{
                            Latitude: sdk.String("assumenda"),
                            Longitude: sdk.String("ipsam"),
                        },
                        SouthWestCorner: &shared.CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner{
                            Latitude: sdk.String("alias"),
                            Longitude: sdk.String("fugit"),
                        },
                    },
                },
            },
            AvoidVignette: []string{
                "excepturi",
                "tempora",
                "facilis",
            },
            SupportingPoints: []shared.CalculateRoutePostDataParametersSupportingPoints{
                shared.CalculateRoutePostDataParametersSupportingPoints{
                    Latitude: sdk.String("labore"),
                    Longitude: sdk.String("delectus"),
                },
                shared.CalculateRoutePostDataParametersSupportingPoints{
                    Latitude: sdk.String("eum"),
                    Longitude: sdk.String("non"),
                },
                shared.CalculateRoutePostDataParametersSupportingPoints{
                    Latitude: sdk.String("eligendi"),
                    Longitude: sdk.String("sint"),
                },
            },
        },
        Callback: sdk.String("aliquid"),
        ComputeBestOrder: sdk.Bool(false),
        ComputeTravelTimeFor: shared.ComputeTravelTimeForEnumAll.ToPointer(),
        ConstantSpeedConsumptionInLitersPerHundredkm: sdk.String("necessitatibus"),
        ConstantSpeedConsumptionInkWhPerHundredkm: sdk.String("sint"),
        ContentType: shared.ContentTypeEnumJSON,
        CurrentFuelInLiters: sdk.Float32(2230.81),
        DecelerationEfficiency: sdk.Float32(8915.55),
        DepartAt: sdk.String("a"),
        DownhillEfficiency: sdk.Float32(6800.56),
        FuelEnergyDensityInMJoulesPerLiter: sdk.Float32(4471.25),
        Hilliness: shared.HillinessEnumNormal.ToPointer(),
        InstructionsType: shared.InstructionsTypeEnumTagged.ToPointer(),
        Language: sdk.String("maiores"),
        Locations: "rerum",
        MaxAlternatives: sdk.Int64(116202),
        MinDeviationDistance: sdk.Int64(297437),
        MinDeviationTime: sdk.Int64(767024),
        Report: shared.ReportEnumEffectiveSettings.ToPointer(),
        RouteRepresentation: shared.RouteRepresentationEnumNone.ToPointer(),
        RouteType: shared.RouteTypeEnumShortest.ToPointer(),
        SectionType: sdk.String("aliquid"),
        Traffic: sdk.Bool(false),
        TravelMode: shared.TravelModeEnumMotorcycle.ToPointer(),
        UphillEfficiency: sdk.Float32(8811.04),
        VehicleAxleWeight: sdk.Int64(249796),
        VehicleCommercial: sdk.Bool(false),
        VehicleEngineType: shared.VehicleEngineTypeEnumElectric.ToPointer(),
        VehicleHeading: sdk.Int64(313218),
        VehicleHeight: sdk.Float32(8817.36),
        VehicleLength: sdk.Float32(9654.17),
        VehicleLoadType: sdk.String("quidem"),
        VehicleMaxSpeed: sdk.Int64(588465),
        VehicleWeight: sdk.Int64(725255),
        VehicleWidth: sdk.Float32(6596.69),
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

## PostRoutingVersionNumberCalculateRouteLocationsContentTypeRaw

Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

### Example Usage

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
    res, err := s.Routing.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRaw(ctx, operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRawRequest{
        RequestBody: []byte("deleniti"),
        AccelerationEfficiency: sdk.Float32(9560.84),
        AlternativeType: shared.AlternativeTypeEnumAnyRoute.ToPointer(),
        ArriveAt: sdk.String("deserunt"),
        AuxiliaryPowerInLitersPerHour: sdk.Float32(3948.69),
        Avoid: sdk.String("vel"),
        Callback: sdk.String("natus"),
        ComputeBestOrder: sdk.Bool(false),
        ComputeTravelTimeFor: shared.ComputeTravelTimeForEnumAll.ToPointer(),
        ConstantSpeedConsumptionInLitersPerHundredkm: sdk.String("molestiae"),
        ConstantSpeedConsumptionInkWhPerHundredkm: sdk.String("perferendis"),
        ContentType: shared.ContentTypeEnumJSON,
        CurrentFuelInLiters: sdk.Float32(3015.75),
        DecelerationEfficiency: sdk.Float32(7160.75),
        DepartAt: sdk.String("id"),
        DownhillEfficiency: sdk.Float32(2879.91),
        FuelEnergyDensityInMJoulesPerLiter: sdk.Float32(2900.77),
        Hilliness: shared.HillinessEnumNormal.ToPointer(),
        InstructionsType: shared.InstructionsTypeEnumText.ToPointer(),
        Language: sdk.String("nobis"),
        Locations: "eum",
        MaxAlternatives: sdk.Int64(878453),
        MinDeviationDistance: sdk.Int64(135474),
        MinDeviationTime: sdk.Int64(102863),
        Report: shared.ReportEnumEffectiveSettings.ToPointer(),
        RouteRepresentation: shared.RouteRepresentationEnumPolyline.ToPointer(),
        RouteType: shared.RouteTypeEnumFastest.ToPointer(),
        SectionType: sdk.String("excepturi"),
        Traffic: sdk.Bool(false),
        TravelMode: shared.TravelModeEnumTaxi.ToPointer(),
        UphillEfficiency: sdk.Float32(5908.73),
        VehicleAxleWeight: sdk.Int64(551816),
        VehicleCommercial: sdk.Bool(false),
        VehicleEngineType: shared.VehicleEngineTypeEnumElectric.ToPointer(),
        VehicleHeading: sdk.Int64(33625),
        VehicleHeight: sdk.Float32(6532.01),
        VehicleLength: sdk.Float32(9689.62),
        VehicleLoadType: sdk.String("mollitia"),
        VehicleMaxSpeed: sdk.Int64(320997),
        VehicleWeight: sdk.Int64(431418),
        VehicleWidth: sdk.Float32(2212.62),
        VersionNumber: shared.VersionNumberEnumOne,
        Windingness: shared.WindingnessEnumHigh.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
