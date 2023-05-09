# Route

### Available Operations

* [GetOptimalRouteOutputFormat](#getoptimalrouteoutputformat) - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [GetRouteOutputFormat](#getrouteoutputformat) - Get the path, distance and travel time between a series of geographic points
* [GetTruckOptimalRouteOutputFormat](#gettruckoptimalrouteoutputformat) - Get the optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* [GetTruckRouteOutputFormat](#gettruckrouteoutputformat) - Get the path, distance and travel time between a series of geographic points for a commercial vehicle
* [PostOptimalRouteOutputFormat](#postoptimalrouteoutputformat) - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [PostRouteOutputFormat](#postrouteoutputformat) - Get the path, distance and travel time between a series of geographic points
* [PostTruckOptimalRouteOutputFormat](#posttruckoptimalrouteoutputformat) - Get the path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [PostTruckRouteOutputFormat](#posttruckrouteoutputformat) - Get the path, distance and travel time between a series of geographic points

## GetOptimalRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Route.GetOptimalRouteOutputFormat(ctx, operations.GetOptimalRouteOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.GetOptimalRouteOutputFormatCriteriaEnumShortest.ToPointer(),
        Departure: types.MustTimeFromString("2021-12-15T00:41:38.329Z"),
        Disable: sdk.String("voluptates"),
        DistanceUnit: operations.GetOptimalRouteOutputFormatDistanceUnitEnumKm.ToPointer(),
        OutputFormat: operations.GetOptimalRouteOutputFormatOutputFormatEnumHTML,
        OutputSRS: operations.GetOptimalRouteOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndEight.ToPointer(),
        Points: "veritatis",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Route.GetRouteOutputFormat(ctx, operations.GetRouteOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.GetRouteOutputFormatCriteriaEnumShortest.ToPointer(),
        Departure: types.MustTimeFromString("2022-12-28T14:02:06.064Z"),
        Disable: sdk.String("est"),
        DistanceUnit: operations.GetRouteOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.GetRouteOutputFormatOutputFormatEnumJSON,
        OutputSRS: operations.GetRouteOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndNine.ToPointer(),
        Points: "distinctio",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("quibusdam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTruckOptimalRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize distance or time for a commercial vehicle.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Route.GetTruckOptimalRouteOutputFormat(ctx, operations.GetTruckOptimalRouteOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.GetTruckOptimalRouteOutputFormatCriteriaEnumShortest.ToPointer(),
        Departure: types.MustTimeFromString("2022-10-26T03:14:36.345Z"),
        Disable: sdk.String("aliquid"),
        DistanceUnit: operations.GetTruckOptimalRouteOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.GetTruckOptimalRouteOutputFormatOutputFormatEnumKml,
        OutputSRS: operations.GetTruckOptimalRouteOutputFormatOutputSrsEnumFourThousandThreeHundredAndTwentySix.ToPointer(),
        Partition: sdk.String("magni"),
        Points: "assumenda",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("ipsam"),
        TruckRouteMultiplier: sdk.Int64(4695),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTruckRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points for a commercial vehicle.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Route.GetTruckRouteOutputFormat(ctx, operations.GetTruckRouteOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.GetTruckRouteOutputFormatCriteriaEnumShortest.ToPointer(),
        Departure: types.MustTimeFromString("2021-11-11T04:17:07.569Z"),
        Disable: sdk.String("tempora"),
        DistanceUnit: operations.GetTruckRouteOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.GetTruckRouteOutputFormatOutputFormatEnumHTML,
        OutputSRS: operations.GetTruckRouteOutputFormatOutputSrsEnumThreeThousandAndFive.ToPointer(),
        Partition: sdk.String("delectus"),
        Points: "eum",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("non"),
        TruckRouteMultiplier: sdk.Int64(756107),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostOptimalRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Route.PostOptimalRouteOutputFormat(ctx, operations.PostOptimalRouteOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.PostOptimalRouteOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2022-05-29T21:42:45.399Z"),
        Disable: sdk.String("necessitatibus"),
        DistanceUnit: operations.PostOptimalRouteOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.PostOptimalRouteOutputFormatOutputFormatEnumKml,
        OutputSRS: operations.PostOptimalRouteOutputFormatOutputSrsEnumFourThousandTwoHundredAndSixtyNine.ToPointer(),
        Points: "debitis",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Route.PostRouteOutputFormat(ctx, operations.PostRouteOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.PostRouteOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2022-07-21T01:01:39.776Z"),
        Disable: sdk.String("illum"),
        DistanceUnit: operations.PostRouteOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.PostRouteOutputFormatOutputFormatEnumHTML,
        OutputSRS: operations.PostRouteOutputFormatOutputSrsEnumFourThousandThreeHundredAndTwentySix.ToPointer(),
        Points: "magnam",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("cumque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostTruckOptimalRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between a start point and a series of end points which are reordered to minimize total distance or time.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Route.PostTruckOptimalRouteOutputFormat(ctx, operations.PostTruckOptimalRouteOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.PostTruckOptimalRouteOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2022-08-09T06:36:34.417Z"),
        Disable: sdk.String("laborum"),
        DistanceUnit: operations.PostTruckOptimalRouteOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.PostTruckOptimalRouteOutputFormatOutputFormatEnumJSON,
        OutputSRS: operations.PostTruckOptimalRouteOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndEight.ToPointer(),
        Partition: sdk.String("enim"),
        Points: "accusamus",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("delectus"),
        TruckRouteMultiplier: sdk.Int64(692532),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostTruckRouteOutputFormat

Represents the geometry, distance, and time of the shortest or fastest path between given start and end points.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Apikey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Route.PostTruckRouteOutputFormat(ctx, operations.PostTruckRouteOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.PostTruckRouteOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2021-09-06T10:36:33.442Z"),
        Disable: sdk.String("blanditiis"),
        DistanceUnit: operations.PostTruckRouteOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.PostTruckRouteOutputFormatOutputFormatEnumHTML,
        OutputSRS: operations.PostTruckRouteOutputFormatOutputSrsEnumFourThousandTwoHundredAndSixtyNine.ToPointer(),
        Partition: sdk.String("deserunt"),
        Points: "nisi",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("vel"),
        TruckRouteMultiplier: sdk.Int64(618809),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
