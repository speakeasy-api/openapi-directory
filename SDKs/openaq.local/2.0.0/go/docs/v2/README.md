# V2

### Available Operations

* [AveragesV2GetV2AveragesGet](#averagesv2getv2averagesget) - Averages V2 Get
* [CitiesGetV2CitiesGet](#citiesgetv2citiesget) - Provides a simple listing of cities within the platform
* [CountriesGetV2CountriesCountryIDGet](#countriesgetv2countriescountryidget) - Countries Get
* [CountriesGetV2CountriesGet](#countriesgetv2countriesget) - Countries Get
* [DemoV2LocationsTilesViewerGet](#demov2locationstilesviewerget) - Demo
* [GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet](#getmobilegentilev2locationstilesmobilegeneralizedzxypbfget) - Get Mobilegentile
* [GetMobiletileV2LocationsTilesMobileZXYPbfGet](#getmobiletilev2locationstilesmobilezxypbfget) - Get Mobiletile
* [GetTileV2LocationsTilesZXYPbfGet](#gettilev2locationstileszxypbfget) - Get Tile
* [LatestGetV2LatestLocationIDGet](#latestgetv2latestlocationidget) - Latest Get
* [LatestGetV2LatestGet](#latestgetv2latestget) - Latest Get
* [LocationsGetV2LocationsLocationIDGet](#locationsgetv2locationslocationidget) - Locations Get
* [LocationsGetV2LocationsGet](#locationsgetv2locationsget) - Locations Get
* [MeasurementsGetV2MeasurementsGet](#measurementsgetv2measurementsget) - Measurements Get
* [MfrGetV2ManufacturersGet](#mfrgetv2manufacturersget) - Mfr Get
* [MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJSONGet](#mobilegentilejsonv2locationstilesmobilegeneralizedtilesjsonget) - Mobilegentilejson
* [MobiletilejsonV2LocationsTilesMobileTilesJSONGet](#mobiletilejsonv2locationstilesmobiletilesjsonget) - Mobiletilejson
* [ModelGetV2ModelsGet](#modelgetv2modelsget) - Model Get
* [ParametersGetV2ParametersGet](#parametersgetv2parametersget) - Parameters Get
* [ProjectsGetV2ProjectsProjectIDGet](#projectsgetv2projectsprojectidget) - Projects Get
* [ProjectsGetV2ProjectsGet](#projectsgetv2projectsget) - Projects Get
* [ReadmeGetV2SourcesReadmeSlugGet](#readmegetv2sourcesreadmeslugget) - Readme Get
* [SourcesGetV2SourcesGet](#sourcesgetv2sourcesget) - Sources Get
* [SummaryGetV2SummaryGet](#summarygetv2summaryget) - Summary Get
* [TilejsonV2LocationsTilesTilesJSONGet](#tilejsonv2locationstilestilesjsonget) - Tilejson

## AveragesV2GetV2AveragesGet

Averages V2 Get

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.AveragesV2GetV2AveragesGet(ctx, operations.AveragesV2GetV2AveragesGetRequest{
        Country: []string{
            "ad",
            "eum",
            "dolor",
        },
        CountryID: sdk.String("necessitatibus"),
        DateFrom: types.MustTimeFromString("2022-11-26T12:00:10.052Z"),
        DateTo: types.MustTimeFromString("2020-04-29T08:15:14.819Z"),
        Group: sdk.Bool(false),
        Limit: sdk.Int64(260341),
        Location: []string{
            "deleniti",
            "facilis",
            "in",
            "architecto",
        },
        Offset: sdk.Int64(99569),
        Page: sdk.Int64(919483),
        Parameter: []interface{}{
            "nihil",
            "quibusdam",
        },
        ParameterID: sdk.Int64(149448),
        Project: []interface{}{
            "accusantium",
            508315,
            "magni",
            779051,
        },
        ProjectID: sdk.Int64(848009),
        Sort: operations.AveragesV2GetV2AveragesGetSortSortEnumDesc.ToPointer(),
        Spatial: shared.SpatialEnumTotal,
        Temporal: shared.TemporalEnumYear,
        Unit: []string{
            "odit",
            "ea",
            "accusantium",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQResult != nil {
        // handle response
    }
}
```

## CitiesGetV2CitiesGet

Provides a simple listing of cities within the platform

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.CitiesGetV2CitiesGet(ctx, operations.CitiesGetV2CitiesGetRequest{
        City: []string{
            "maiores",
        },
        Country: []string{
            "ipsam",
            "voluptate",
            "autem",
        },
        CountryID: sdk.String("nam"),
        Entity: sdk.String("eaque"),
        Limit: sdk.Int64(866383),
        Offset: sdk.Int64(365496),
        OrderBy: operations.CitiesGetV2CitiesGetOrderByCitiesOrderEnumLastUpdated.ToPointer(),
        Page: sdk.Int64(16627),
        Sort: operations.CitiesGetV2CitiesGetSortSortEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQCitiesResult != nil {
        // handle response
    }
}
```

## CountriesGetV2CountriesCountryIDGet

Countries Get

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.CountriesGetV2CountriesCountryIDGet(ctx, operations.CountriesGetV2CountriesCountryIDGetRequest{
        Country: []string{
            "aut",
        },
        CountryID: "cumque",
        Limit: sdk.Int64(359978),
        Offset: sdk.Int64(944124),
        OrderBy: operations.CountriesGetV2CountriesCountryIDGetOrderByCountriesOrderEnumLocations.ToPointer(),
        Page: sdk.Int64(749999),
        Sort: operations.CountriesGetV2CountriesCountryIDGetSortSortEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQCountriesResult != nil {
        // handle response
    }
}
```

## CountriesGetV2CountriesGet

Countries Get

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.CountriesGetV2CountriesGet(ctx, operations.CountriesGetV2CountriesGetRequest{
        Country: []string{
            "totam",
            "dignissimos",
        },
        CountryID: sdk.String("eaque"),
        Limit: sdk.Int64(338985),
        Offset: sdk.Int64(199996),
        OrderBy: operations.CountriesGetV2CountriesGetOrderByCountriesOrderEnumCountry.ToPointer(),
        Page: sdk.Int64(18521),
        Sort: operations.CountriesGetV2CountriesGetSortSortEnumAsc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQCountriesResult != nil {
        // handle response
    }
}
```

## DemoV2LocationsTilesViewerGet

Demo

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.DemoV2LocationsTilesViewerGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.DemoV2LocationsTilesViewerGet200TextHTMLString != nil {
        // handle response
    }
}
```

## GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet

Get Mobilegentile

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet(ctx, operations.GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest{
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        LastUpdatedFrom: types.MustDateFromString("2022-10-11"),
        LastUpdatedTo: types.MustDateFromString("2022-01-21"),
        Location: []int64{
            608253,
            704415,
            596656,
            31838,
        },
        Parameter: sdk.String("consequuntur"),
        Project: sdk.Int64(500026),
        X: 621479,
        Y: 50370,
        Z: 577229,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMobiletileV2LocationsTilesMobileZXYPbfGet

Get Mobiletile

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.GetMobiletileV2LocationsTilesMobileZXYPbfGet(ctx, operations.GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest{
        DateFrom: types.MustDateFromString("2022-01-03"),
        DateTo: types.MustDateFromString("2022-05-21"),
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        LastUpdatedFrom: types.MustDateFromString("2021-04-10"),
        LastUpdatedTo: types.MustDateFromString("2020-10-23"),
        Location: []int64{
            311945,
            554242,
            398221,
            212390,
        },
        Parameter: sdk.Int64(222443),
        Project: sdk.Int64(186193),
        X: 218749,
        Y: 944373,
        Z: 569574,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTileV2LocationsTilesZXYPbfGet

Get Tile

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.GetTileV2LocationsTilesZXYPbfGet(ctx, operations.GetTileV2LocationsTilesZXYPbfGetRequest{
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        LastUpdatedFrom: types.MustDateFromString("2022-07-05"),
        LastUpdatedTo: types.MustDateFromString("2022-04-27"),
        Location: []int64{
            85295,
            58029,
        },
        Parameter: sdk.Int64(434417),
        Project: sdk.Int64(487838),
        X: 311796,
        Y: 881005,
        Z: 696344,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## LatestGetV2LatestLocationIDGet

Latest Get

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.LatestGetV2LatestLocationIDGet(ctx, operations.LatestGetV2LatestLocationIDGetRequest{
        City: []string{
            "voluptas",
            "natus",
            "eos",
            "atque",
        },
        Coordinates: sdk.String("sit"),
        Country: []string{
            "ab",
            "soluta",
            "dolorum",
            "iusto",
        },
        CountryID: sdk.String("voluptate"),
        DumpRaw: sdk.Bool(false),
        Entity: shared.EntityTypesEnumResearch.ToPointer(),
        HasGeo: sdk.Bool(false),
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        Limit: sdk.Int64(536579),
        Location: []interface{}{
            "distinctio",
            "nihil",
            456015,
        },
        LocationID: 663078,
        ManufacturerName: []string{
            "eius",
            "aspernatur",
            "perferendis",
            "amet",
        },
        ModelName: []string{
            "accusamus",
            "ad",
            "saepe",
            "suscipit",
        },
        Offset: sdk.Int64(645785),
        OrderBy: operations.LatestGetV2LatestLocationIDGetOrderByLocationsOrderEnumFirstUpdated.ToPointer(),
        Page: sdk.Int64(324683),
        Parameter: []interface{}{
            "similique",
            872651,
            273542,
            798047,
        },
        ParameterID: sdk.Int64(885338),
        Radius: sdk.Int64(185636),
        SensorType: shared.SensorTypesEnumLowCostSensor.ToPointer(),
        Sort: operations.LatestGetV2LatestLocationIDGetSortSortEnumDesc.ToPointer(),
        SourceName: []string{
            "harum",
            "iusto",
        },
        Unit: []string{
            "quisquam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQResult != nil {
        // handle response
    }
}
```

## LatestGetV2LatestGet

Latest Get

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.LatestGetV2LatestGet(ctx, operations.LatestGetV2LatestGetRequest{
        City: []string{
            "amet",
            "tempore",
            "accusamus",
            "numquam",
        },
        Coordinates: sdk.String("enim"),
        Country: []string{
            "sapiente",
        },
        CountryID: sdk.String("totam"),
        DumpRaw: sdk.Bool(false),
        Entity: shared.EntityTypesEnumCommunity.ToPointer(),
        HasGeo: sdk.Bool(false),
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        Limit: sdk.Int64(25662),
        Location: []interface{}{
            153694,
            730442,
            646265,
        },
        LocationID: sdk.Int64(463575),
        ManufacturerName: []string{
            "incidunt",
        },
        ModelName: []string{
            "cupiditate",
        },
        Offset: sdk.Int64(807581),
        OrderBy: operations.LatestGetV2LatestGetOrderByLocationsOrderEnumCount.ToPointer(),
        Page: sdk.Int64(747080),
        Parameter: []interface{}{
            "totam",
        },
        ParameterID: sdk.Int64(276894),
        Radius: sdk.Int64(132068),
        SensorType: shared.SensorTypesEnumReferenceGrade.ToPointer(),
        Sort: operations.LatestGetV2LatestGetSortSortEnumDesc.ToPointer(),
        SourceName: []string{
            "aliquid",
            "quam",
            "molestias",
        },
        Unit: []string{
            "qui",
            "neque",
            "fugit",
            "magni",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQResult != nil {
        // handle response
    }
}
```

## LocationsGetV2LocationsLocationIDGet

Locations Get

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.LocationsGetV2LocationsLocationIDGet(ctx, operations.LocationsGetV2LocationsLocationIDGetRequest{
        City: []string{
            "sunt",
            "ullam",
        },
        Coordinates: sdk.String("nam"),
        Country: []string{
            "voluptatem",
            "cumque",
            "soluta",
            "nobis",
        },
        CountryID: sdk.String("et"),
        DumpRaw: sdk.Bool(false),
        Entity: shared.EntityTypesEnumResearch.ToPointer(),
        HasGeo: sdk.Bool(false),
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        Limit: sdk.Int64(217450),
        Location: []interface{}{
            "quos",
        },
        LocationID: 731694,
        ManufacturerName: []string{
            "aperiam",
            "delectus",
            "dolorem",
        },
        ModelName: []string{
            "labore",
            "adipisci",
        },
        Offset: sdk.Int64(677263),
        OrderBy: operations.LocationsGetV2LocationsLocationIDGetOrderByLocationsOrderEnumCity.ToPointer(),
        Page: sdk.Int64(63038),
        Parameter: []interface{}{
            "itaque",
        },
        ParameterID: sdk.Int64(9240),
        Radius: sdk.Int64(669917),
        SensorType: shared.SensorTypesEnumLowCostSensor.ToPointer(),
        Sort: operations.LocationsGetV2LocationsLocationIDGetSortSortEnumDesc.ToPointer(),
        SourceName: []string{
            "ut",
            "facilis",
            "cupiditate",
            "qui",
        },
        Unit: []string{
            "laudantium",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQResult != nil {
        // handle response
    }
}
```

## LocationsGetV2LocationsGet

Locations Get

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.LocationsGetV2LocationsGet(ctx, operations.LocationsGetV2LocationsGetRequest{
        City: []string{
            "occaecati",
            "voluptatibus",
        },
        Coordinates: sdk.String("quisquam"),
        Country: []string{
            "omnis",
            "quis",
            "ipsum",
            "delectus",
        },
        CountryID: sdk.String("voluptate"),
        DumpRaw: sdk.Bool(false),
        Entity: shared.EntityTypesEnumGovernment.ToPointer(),
        HasGeo: sdk.Bool(false),
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        Limit: sdk.Int64(878870),
        Location: []interface{}{
            941378,
            "quod",
            630448,
            "vero",
        },
        LocationID: sdk.Int64(498140),
        ManufacturerName: []string{
            "quibusdam",
            "illum",
        },
        ModelName: []string{
            "natus",
        },
        Offset: sdk.Int64(773326),
        OrderBy: operations.LocationsGetV2LocationsGetOrderByLocationsOrderEnumCity.ToPointer(),
        Page: sdk.Int64(974259),
        Parameter: []interface{}{
            "fugit",
            "maiores",
        },
        ParameterID: sdk.Int64(985033),
        Radius: sdk.Int64(478370),
        SensorType: shared.SensorTypesEnumLowCostSensor.ToPointer(),
        Sort: operations.LocationsGetV2LocationsGetSortSortEnumAsc.ToPointer(),
        SourceName: []string{
            "officia",
        },
        Unit: []string{
            "ipsam",
            "ea",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQResult != nil {
        // handle response
    }
}
```

## MeasurementsGetV2MeasurementsGet

Measurements Get

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.MeasurementsGetV2MeasurementsGet(ctx, operations.MeasurementsGetV2MeasurementsGetRequest{
        City: []string{
            "vel",
        },
        Coordinates: sdk.String("possimus"),
        Country: []string{
            "ratione",
            "ex",
        },
        CountryID: sdk.String("laudantium"),
        DateFrom: types.MustTimeFromString("2022-01-08T01:04:15.076Z"),
        DateTo: types.MustTimeFromString("2022-02-20T07:12:08.273Z"),
        Entity: shared.EntityTypesEnumCommunity.ToPointer(),
        Format: sdk.String("voluptatibus"),
        HasGeo: sdk.Bool(false),
        IncludeFields: sdk.String("nostrum"),
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        Limit: sdk.Int64(960835),
        Location: []interface{}{
            "ea",
            "corporis",
            399499,
            301831,
        },
        LocationID: sdk.Int64(407241),
        Offset: sdk.Int64(775220),
        OrderBy: operations.MeasurementsGetV2MeasurementsGetOrderByMeasOrderEnumCity.ToPointer(),
        Page: sdk.Int64(926213),
        Parameter: []interface{}{
            53427,
        },
        ParameterID: sdk.Int64(952871),
        Project: sdk.Int64(725595),
        Radius: sdk.Int64(13948),
        SensorType: shared.SensorTypesEnumReferenceGrade.ToPointer(),
        Sort: operations.MeasurementsGetV2MeasurementsGetSortSortEnumDesc.ToPointer(),
        Unit: []string{
            "aliquam",
            "fugit",
            "accusamus",
            "inventore",
        },
        ValueFrom: sdk.Float64(2506.22),
        ValueTo: sdk.Float64(896.03),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MeasurementsGetV2MeasurementsGet200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## MfrGetV2ManufacturersGet

Mfr Get

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.MfrGetV2ManufacturersGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQResult != nil {
        // handle response
    }
}
```

## MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJSONGet

Mobilegentilejson

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJSONGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TileJSON != nil {
        // handle response
    }
}
```

## MobiletilejsonV2LocationsTilesMobileTilesJSONGet

Mobiletilejson

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.MobiletilejsonV2LocationsTilesMobileTilesJSONGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TileJSON != nil {
        // handle response
    }
}
```

## ModelGetV2ModelsGet

Model Get

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.ModelGetV2ModelsGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQResult != nil {
        // handle response
    }
}
```

## ParametersGetV2ParametersGet

Parameters Get

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.ParametersGetV2ParametersGet(ctx, operations.ParametersGetV2ParametersGetRequest{
        Limit: sdk.Int64(677412),
        Offset: sdk.Int64(672048),
        OrderBy: sdk.String("velit"),
        Page: sdk.Int64(432148),
        Sort: operations.ParametersGetV2ParametersGetSortSortEnumAsc.ToPointer(),
        SourceID: []int64{
            557369,
            829603,
            860552,
            379034,
        },
        SourceName: []string{
            "quasi",
            "tempora",
            "numquam",
        },
        SourceSlug: []string{
            "provident",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQParametersResult != nil {
        // handle response
    }
}
```

## ProjectsGetV2ProjectsProjectIDGet

Projects Get

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.ProjectsGetV2ProjectsProjectIDGet(ctx, operations.ProjectsGetV2ProjectsProjectIDGetRequest{
        Country: []string{
            "molestiae",
        },
        CountryID: sdk.String("magnam"),
        Entity: sdk.String("odio"),
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        Limit: sdk.Int64(262118),
        Offset: sdk.Int64(458515),
        OrderBy: operations.ProjectsGetV2ProjectsProjectIDGetOrderByProjectsOrderEnumSubtitle.ToPointer(),
        Page: sdk.Int64(524593),
        Parameter: []interface{}{
            695626,
            "ut",
            379927,
        },
        ParameterID: sdk.Int64(826871),
        Project: []interface{}{
            "quisquam",
        },
        ProjectID: 86377,
        SensorType: sdk.String("ipsa"),
        Sort: operations.ProjectsGetV2ProjectsProjectIDGetSortSortEnumDesc.ToPointer(),
        SourceName: []string{
            "neque",
            "quo",
            "illum",
        },
        Unit: []string{
            "fuga",
            "eius",
            "eos",
            "voluptas",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQProjectsResult != nil {
        // handle response
    }
}
```

## ProjectsGetV2ProjectsGet

Projects Get

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.ProjectsGetV2ProjectsGet(ctx, operations.ProjectsGetV2ProjectsGetRequest{
        Country: []string{
            "cupiditate",
        },
        CountryID: sdk.String("consequatur"),
        Entity: sdk.String("tempora"),
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        Limit: sdk.Int64(892050),
        Offset: sdk.Int64(370853),
        OrderBy: operations.ProjectsGetV2ProjectsGetOrderByProjectsOrderEnumID.ToPointer(),
        Page: sdk.Int64(197054),
        Parameter: []interface{}{
            925164,
            715179,
            "dignissimos",
            469498,
        },
        ParameterID: sdk.Int64(518835),
        Project: []interface{}{
            488410,
            "commodi",
            "dolores",
            "molestiae",
        },
        ProjectID: sdk.Int64(35362),
        SensorType: sdk.String("porro"),
        Sort: operations.ProjectsGetV2ProjectsGetSortSortEnumAsc.ToPointer(),
        SourceName: []string{
            "praesentium",
            "consequuntur",
            "deleniti",
        },
        Unit: []string{
            "fuga",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQProjectsResult != nil {
        // handle response
    }
}
```

## ReadmeGetV2SourcesReadmeSlugGet

Readme Get

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.ReadmeGetV2SourcesReadmeSlugGet(ctx, operations.ReadmeGetV2SourcesReadmeSlugGetRequest{
        Slug: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReadmeGetV2SourcesReadmeSlugGet200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## SourcesGetV2SourcesGet

Sources Get

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.SourcesGetV2SourcesGet(ctx, operations.SourcesGetV2SourcesGetRequest{
        Limit: sdk.Int64(277596),
        Offset: sdk.Int64(539224),
        OrderBy: operations.SourcesGetV2SourcesGetOrderBySourcesOrderEnumSourceName.ToPointer(),
        Page: sdk.Int64(325685),
        Sort: operations.SourcesGetV2SourcesGetSortSortEnumAsc.ToPointer(),
        SourceID: []int64{
            956406,
        },
        SourceName: []string{
            "ratione",
        },
        SourceSlug: []string{
            "saepe",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQResult != nil {
        // handle response
    }
}
```

## SummaryGetV2SummaryGet

Summary Get

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.SummaryGetV2SummaryGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQResult != nil {
        // handle response
    }
}
```

## TilejsonV2LocationsTilesTilesJSONGet

Tilejson

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V2.TilejsonV2LocationsTilesTilesJSONGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TileJSON != nil {
        // handle response
    }
}
```
