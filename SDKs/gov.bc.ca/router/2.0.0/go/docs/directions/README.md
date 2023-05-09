# Directions

### Available Operations

* [GetDirectionsOutputFormat](#getdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [GetOptimalDirectionsOutputFormat](#getoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
* [GetTruckDirectionsOutputFormat](#gettruckdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points for a commercial vehicle
* [GetTruckOptimalDirectionsOutputFormat](#gettruckoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
* [PostDirectionsOutputFormat](#postdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [PostOptimalDirectionsOutputFormat](#postoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
* [PostTruckDirectionsOutputFormat](#posttruckdirectionsoutputformat) - Get the directions, path, distance and travel time between a series of geographic points
* [PostTruckOptimalDirectionsOutputFormat](#posttruckoptimaldirectionsoutputformat) - Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.

## GetDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points

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
    res, err := s.Directions.GetDirectionsOutputFormat(ctx, operations.GetDirectionsOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.GetDirectionsOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2022-03-26T09:37:56.283Z"),
        Disable: sdk.String("iure"),
        DistanceUnit: operations.GetDirectionsOutputFormatDistanceUnitEnumKm.ToPointer(),
        OutputFormat: operations.GetDirectionsOutputFormatOutputFormatEnumHTML,
        OutputSRS: operations.GetDirectionsOutputFormatOutputSrsEnumFourThousandThreeHundredAndTwentySix.ToPointer(),
        Points: "delectus",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOptimalDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time

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
    res, err := s.Directions.GetOptimalDirectionsOutputFormat(ctx, operations.GetOptimalDirectionsOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.GetOptimalDirectionsOutputFormatCriteriaEnumShortest.ToPointer(),
        Departure: types.MustTimeFromString("2022-03-18T00:29:19.137Z"),
        Disable: sdk.String("placeat"),
        DistanceUnit: operations.GetOptimalDirectionsOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.GetOptimalDirectionsOutputFormatOutputFormatEnumKml,
        OutputSRS: operations.GetOptimalDirectionsOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndEight.ToPointer(),
        Points: "nisi",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTruckDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points for a commercial vehicle

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
    res, err := s.Directions.GetTruckDirectionsOutputFormat(ctx, operations.GetTruckDirectionsOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.GetTruckDirectionsOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2022-08-30T20:24:33.984Z"),
        Disable: sdk.String("veritatis"),
        DistanceUnit: operations.GetTruckDirectionsOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.GetTruckDirectionsOutputFormatOutputFormatEnumJSON,
        OutputSRS: operations.GetTruckDirectionsOutputFormatOutputSrsEnumThreeThousandAndFive.ToPointer(),
        Partition: sdk.String("repellendus"),
        Points: "sapiente",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("quo"),
        TruckRouteMultiplier: sdk.Int64(140350),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTruckOptimalDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time for a commercial vehicle.

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
    res, err := s.Directions.GetTruckOptimalDirectionsOutputFormat(ctx, operations.GetTruckOptimalDirectionsOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.GetTruckOptimalDirectionsOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2020-01-25T09:54:35.794Z"),
        Disable: sdk.String("molestiae"),
        DistanceUnit: operations.GetTruckOptimalDirectionsOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.GetTruckOptimalDirectionsOutputFormatOutputFormatEnumHTML,
        OutputSRS: operations.GetTruckOptimalDirectionsOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndSeven.ToPointer(),
        Partition: sdk.String("totam"),
        Points: "porro",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("dolorum"),
        TruckRouteMultiplier: sdk.Int64(118274),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points

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
    res, err := s.Directions.PostDirectionsOutputFormat(ctx, operations.PostDirectionsOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.PostDirectionsOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2021-11-02T03:00:47.309Z"),
        Disable: sdk.String("fugit"),
        DistanceUnit: operations.PostDirectionsOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.PostDirectionsOutputFormatOutputFormatEnumHTML,
        OutputSRS: operations.PostDirectionsOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndTen.ToPointer(),
        Points: "totam",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostOptimalDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.

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
    res, err := s.Directions.PostOptimalDirectionsOutputFormat(ctx, operations.PostOptimalDirectionsOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.PostOptimalDirectionsOutputFormatCriteriaEnumShortest.ToPointer(),
        Departure: types.MustTimeFromString("2022-09-26T10:29:33.503Z"),
        Disable: sdk.String("qui"),
        DistanceUnit: operations.PostOptimalDirectionsOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.PostOptimalDirectionsOutputFormatOutputFormatEnumHTML,
        OutputSRS: operations.PostOptimalDirectionsOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndSeven.ToPointer(),
        Points: "ipsum",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostTruckDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points

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
    res, err := s.Directions.PostTruckDirectionsOutputFormat(ctx, operations.PostTruckDirectionsOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.PostTruckDirectionsOutputFormatCriteriaEnumShortest.ToPointer(),
        Departure: types.MustTimeFromString("2022-09-04T16:31:28.618Z"),
        Disable: sdk.String("natus"),
        DistanceUnit: operations.PostTruckDirectionsOutputFormatDistanceUnitEnumKm.ToPointer(),
        OutputFormat: operations.PostTruckDirectionsOutputFormatOutputFormatEnumKml,
        OutputSRS: operations.PostTruckDirectionsOutputFormatOutputSrsEnumFourThousandTwoHundredAndSixtyNine.ToPointer(),
        Partition: sdk.String("natus"),
        Points: "laboriosam",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("hic"),
        TruckRouteMultiplier: sdk.Int64(902599),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostTruckOptimalDirectionsOutputFormat

Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.

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
    res, err := s.Directions.PostTruckOptimalDirectionsOutputFormat(ctx, operations.PostTruckOptimalDirectionsOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.PostTruckOptimalDirectionsOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2022-08-22T18:42:38.160Z"),
        Disable: sdk.String("iste"),
        DistanceUnit: operations.PostTruckOptimalDirectionsOutputFormatDistanceUnitEnumKm.ToPointer(),
        OutputFormat: operations.PostTruckOptimalDirectionsOutputFormatOutputFormatEnumHTML,
        OutputSRS: operations.PostTruckOptimalDirectionsOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndNine.ToPointer(),
        Partition: sdk.String("architecto"),
        Points: "ipsa",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("reiciendis"),
        TruckRouteMultiplier: sdk.Int64(666767),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
