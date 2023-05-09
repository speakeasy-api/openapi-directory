# V1

### Available Operations

* [CitiesGetv1V1CitiesGet](#citiesgetv1v1citiesget) - Provides a simple listing of cities within the platform
* [CountriesGetV1CountriesCountryIDGet](#countriesgetv1countriescountryidget) - Countries Get
* [CountriesGetv1V1CountriesGet](#countriesgetv1v1countriesget) - Countries Getv1
* [LatestV1GetV1LatestLocationIDGet](#latestv1getv1latestlocationidget) - Latest V1 Get
* [LatestV1GetV1LatestGet](#latestv1getv1latestget) - Latest V1 Get
* [Locationsv1GetV1LocationsLocationIDGet](#locationsv1getv1locationslocationidget) - Locationsv1 Get
* [Locationsv1GetV1LocationsGet](#locationsv1getv1locationsget) - Locationsv1 Get
* [MeasurementsGetV1V1MeasurementsGet](#measurementsgetv1v1measurementsget) - Measurements Get V1
* [ParametersGetv1V1ParametersGet](#parametersgetv1v1parametersget) - Parameters Getv1
* [SourcesV1GetV1SourcesGet](#sourcesv1getv1sourcesget) - Sources V1 Get

## CitiesGetv1V1CitiesGet

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
    res, err := s.V1.CitiesGetv1V1CitiesGet(ctx, operations.CitiesGetv1V1CitiesGetRequest{
        City: []string{
            "provident",
            "distinctio",
            "quibusdam",
        },
        Country: []string{
            "nulla",
            "corrupti",
            "illum",
        },
        CountryID: sdk.String("vel"),
        Entity: sdk.String("error"),
        Limit: sdk.Int64(645894),
        Offset: sdk.Int64(384382),
        OrderBy: operations.CitiesGetv1V1CitiesGetOrderByCitiesOrderEnumCountry.ToPointer(),
        Page: sdk.Int64(297534),
        Sort: operations.CitiesGetv1V1CitiesGetSortSortEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQCitiesResult != nil {
        // handle response
    }
}
```

## CountriesGetV1CountriesCountryIDGet

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
    res, err := s.V1.CountriesGetV1CountriesCountryIDGet(ctx, operations.CountriesGetV1CountriesCountryIDGetRequest{
        Country: []string{
            "delectus",
        },
        CountryID: "tempora",
        Limit: sdk.Int64(383441),
        Offset: sdk.Int64(477665),
        OrderBy: operations.CountriesGetV1CountriesCountryIDGetOrderByCountriesOrderEnumLocations.ToPointer(),
        Page: sdk.Int64(812169),
        Sort: operations.CountriesGetV1CountriesCountryIDGetSortSortEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQCountriesResult != nil {
        // handle response
    }
}
```

## CountriesGetv1V1CountriesGet

Countries Getv1

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
    res, err := s.V1.CountriesGetv1V1CountriesGet(ctx, operations.CountriesGetv1V1CountriesGetRequest{
        Country: []string{
            "excepturi",
            "nisi",
        },
        CountryID: sdk.String("recusandae"),
        Limit: sdk.Int64(836079),
        Offset: sdk.Int64(71036),
        OrderBy: operations.CountriesGetv1V1CountriesGetOrderByCountriesOrderEnumFirstUpdated.ToPointer(),
        Page: sdk.Int64(87129),
        Sort: operations.CountriesGetv1V1CountriesGetSortSortEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQCountriesResult != nil {
        // handle response
    }
}
```

## LatestV1GetV1LatestLocationIDGet

Latest V1 Get

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
    res, err := s.V1.LatestV1GetV1LatestLocationIDGet(ctx, operations.LatestV1GetV1LatestLocationIDGetRequest{
        City: []string{
            "ipsam",
        },
        Coordinates: sdk.String("repellendus"),
        Country: []string{
            "quo",
            "odit",
            "at",
            "at",
        },
        CountryID: sdk.String("maiores"),
        DumpRaw: sdk.Bool(false),
        Entity: shared.EntityTypesEnumCommunity.ToPointer(),
        HasGeo: sdk.Bool(false),
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        Limit: sdk.Int64(799159),
        Location: []interface{}{
            520478,
            "dolorum",
            720633,
            "occaecati",
        },
        LocationID: 143353,
        ManufacturerName: []string{
            "hic",
            "optio",
            "totam",
        },
        ModelName: []string{
            "commodi",
        },
        Offset: sdk.Int64(473600),
        OrderBy: operations.LatestV1GetV1LatestLocationIDGetOrderByLocationsOrderEnumLocation.ToPointer(),
        Page: sdk.Int64(186332),
        Parameter: []interface{}{
            "esse",
            568434,
            18789,
            617636,
        },
        ParameterID: sdk.Int64(149675),
        Radius: sdk.Int64(612096),
        SensorType: shared.SensorTypesEnumReferenceGrade.ToPointer(),
        Sort: operations.LatestV1GetV1LatestLocationIDGetSortSortEnumDesc.ToPointer(),
        SourceName: []string{
            "hic",
            "saepe",
        },
        Unit: []string{
            "in",
            "corporis",
            "iste",
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

## LatestV1GetV1LatestGet

Latest V1 Get

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
    res, err := s.V1.LatestV1GetV1LatestGet(ctx, operations.LatestV1GetV1LatestGetRequest{
        City: []string{
            "saepe",
            "quidem",
        },
        Coordinates: sdk.String("architecto"),
        Country: []string{
            "reiciendis",
        },
        CountryID: sdk.String("est"),
        DumpRaw: sdk.Bool(false),
        Entity: shared.EntityTypesEnumCommunity.ToPointer(),
        HasGeo: sdk.Bool(false),
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        Limit: sdk.Int64(670638),
        Location: []interface{}{
            358152,
        },
        LocationID: sdk.Int64(128926),
        ManufacturerName: []string{
            "enim",
            "omnis",
            "nemo",
            "minima",
        },
        ModelName: []string{
            "accusantium",
            "iure",
            "culpa",
        },
        Offset: sdk.Int64(988374),
        OrderBy: operations.LatestV1GetV1LatestGetOrderByLocationsOrderEnumRandom.ToPointer(),
        Page: sdk.Int64(102044),
        Parameter: []interface{}{
            635059,
            995300,
            "occaecati",
        },
        ParameterID: sdk.Int64(253291),
        Radius: sdk.Int64(414369),
        SensorType: shared.SensorTypesEnumReferenceGrade.ToPointer(),
        Sort: operations.LatestV1GetV1LatestGetSortSortEnumAsc.ToPointer(),
        SourceName: []string{
            "error",
        },
        Unit: []string{
            "quis",
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

## Locationsv1GetV1LocationsLocationIDGet

Locationsv1 Get

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
    res, err := s.V1.Locationsv1GetV1LocationsLocationIDGet(ctx, operations.Locationsv1GetV1LocationsLocationIDGetRequest{
        City: []string{
            "laborum",
        },
        Coordinates: sdk.String("animi"),
        Country: []string{
            "odit",
            "quo",
        },
        CountryID: sdk.String("sequi"),
        DumpRaw: sdk.Bool(false),
        Entity: shared.EntityTypesEnumResearch.ToPointer(),
        HasGeo: sdk.Bool(false),
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        Limit: sdk.Int64(368725),
        Location: []interface{}{
            "aut",
            622846,
            "laborum",
        },
        LocationID: 96098,
        ManufacturerName: []string{
            "voluptatibus",
            "vero",
            "nihil",
            "praesentium",
        },
        ModelName: []string{
            "ipsa",
            "omnis",
            "voluptate",
            "cum",
        },
        Offset: sdk.Int64(19987),
        OrderBy: operations.Locationsv1GetV1LocationsLocationIDGetOrderByLocationsOrderEnumCity.ToPointer(),
        Page: sdk.Int64(441711),
        Parameter: []interface{}{
            "dicta",
            296140,
        },
        ParameterID: sdk.Int64(480894),
        Radius: sdk.Int64(118727),
        SensorType: shared.SensorTypesEnumLowCostSensor.ToPointer(),
        Sort: operations.Locationsv1GetV1LocationsLocationIDGetSortSortEnumAsc.ToPointer(),
        SourceName: []string{
            "commodi",
            "repudiandae",
            "quae",
            "ipsum",
        },
        Unit: []string{
            "molestias",
            "excepturi",
            "pariatur",
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

## Locationsv1GetV1LocationsGet

Locationsv1 Get

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
    res, err := s.V1.Locationsv1GetV1LocationsGet(ctx, operations.Locationsv1GetV1LocationsGetRequest{
        City: []string{
            "praesentium",
            "rem",
        },
        Coordinates: sdk.String("voluptates"),
        Country: []string{
            "repudiandae",
        },
        CountryID: sdk.String("sint"),
        DumpRaw: sdk.Bool(false),
        Entity: shared.EntityTypesEnumGovernment.ToPointer(),
        HasGeo: sdk.Bool(false),
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        Limit: sdk.Int64(929297),
        Location: []interface{}{
            9356,
            "quibusdam",
        },
        LocationID: sdk.Int64(131797),
        ManufacturerName: []string{
            "distinctio",
            "quibusdam",
            "labore",
        },
        ModelName: []string{
            "qui",
            "aliquid",
        },
        Offset: sdk.Int64(586513),
        OrderBy: operations.Locationsv1GetV1LocationsGetOrderByLocationsOrderEnumFirstUpdated.ToPointer(),
        Page: sdk.Int64(20107),
        Parameter: []interface{}{
            "ipsam",
        },
        ParameterID: sdk.Int64(4695),
        Radius: sdk.Int64(146441),
        SensorType: shared.SensorTypesEnumLowCostSensor.ToPointer(),
        Sort: operations.Locationsv1GetV1LocationsGetSortSortEnumDesc.ToPointer(),
        SourceName: []string{
            "facilis",
            "tempore",
        },
        Unit: []string{
            "delectus",
            "eum",
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

## MeasurementsGetV1V1MeasurementsGet

Measurements Get V1

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
    res, err := s.V1.MeasurementsGetV1V1MeasurementsGet(ctx, operations.MeasurementsGetV1V1MeasurementsGetRequest{
        City: []string{
            "eligendi",
        },
        Coordinates: sdk.String("sint"),
        Country: []string{
            "provident",
            "necessitatibus",
        },
        CountryID: sdk.String("sint"),
        DateFrom: types.MustDateFromString("2022-02-09"),
        DateTo: types.MustDateFromString("2022-02-08"),
        Entity: shared.EntityTypesEnumCommunity.ToPointer(),
        Format: sdk.String("illum"),
        HasGeo: sdk.Bool(false),
        IncludeFields: sdk.String("maiores"),
        IsAnalysis: sdk.Bool(false),
        IsMobile: sdk.Bool(false),
        Limit: sdk.Int64(699479),
        Location: []interface{}{
            767024,
        },
        LocationID: sdk.Int64(813798),
        Offset: sdk.Int64(411820),
        OrderBy: operations.MeasurementsGetV1V1MeasurementsGetOrderByMeasOrderEnumCountry.ToPointer(),
        Page: sdk.Int64(675439),
        Parameter: []interface{}{
            581273,
            881736,
            "quidem",
            "nam",
        },
        ParameterID: sdk.Int64(659669),
        Project: sdk.Int64(501324),
        Radius: sdk.Int64(533206),
        SensorType: shared.SensorTypesEnumLowCostSensor.ToPointer(),
        Sort: operations.MeasurementsGetV1V1MeasurementsGetSortSortEnumAsc.ToPointer(),
        Unit: []string{
            "nisi",
            "vel",
            "natus",
        },
        ValueFrom: sdk.Float64(6063.93),
        ValueTo: sdk.Float64(4748.67),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MeasurementsGetV1V1MeasurementsGet200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## ParametersGetv1V1ParametersGet

Parameters Getv1

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
    res, err := s.V1.ParametersGetv1V1ParametersGet(ctx, operations.ParametersGetv1V1ParametersGetRequest{
        Limit: sdk.Int64(19193),
        Offset: sdk.Int64(470132),
        OrderBy: sdk.String("distinctio"),
        Page: sdk.Int64(660174),
        Sort: operations.ParametersGetv1V1ParametersGetSortSortEnumAsc.ToPointer(),
        SourceID: []int64{
            383462,
            618016,
        },
        SourceName: []string{
            "eum",
            "vero",
            "aspernatur",
        },
        SourceSlug: []string{
            "magnam",
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

## SourcesV1GetV1SourcesGet

Sources V1 Get

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
    res, err := s.V1.SourcesV1GetV1SourcesGet(ctx, operations.SourcesV1GetV1SourcesGetRequest{
        Limit: sdk.Int64(92373),
        Name: sdk.String("Derrick McLaughlin"),
        Offset: sdk.Int64(33625),
        OrderBy: operations.SourcesV1GetV1SourcesGetOrderBySourcesV1OrderEnumName.ToPointer(),
        Page: sdk.Int64(653201),
        Sort: operations.SourcesV1GetV1SourcesGetSortSortEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenAQResult != nil {
        // handle response
    }
}
```
