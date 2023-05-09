# Distance

### Available Operations

* [GetDistanceOutputFormat](#getdistanceoutputformat) - Get distance and travel time between two geographic points
* [GetDistanceBetweenPairsOutputFormat](#getdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points
* [GetTruckDistanceOutputFormat](#gettruckdistanceoutputformat) - Get distance and travel time between two geographic points for a commercial vehicle
* [GetTruckDistanceBetweenPairsOutputFormat](#gettruckdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points for a commercial vehicle
* [PostDistanceOutputFormat](#postdistanceoutputformat) - Get distance and travel time between two geographic points
* [PostDistanceBetweenPairsOutputFormat](#postdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points
* [PostTruckDistanceOutputFormat](#posttruckdistanceoutputformat) - Get distance and travel time between two geographic points
* [PostTruckDistanceBetweenPairsOutputFormat](#posttruckdistancebetweenpairsoutputformat) - Get distance and travel time between each pair of geographic points

## GetDistanceOutputFormat

Represents the distance and time of the shortest or fastest path between given start and end points.

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
    res, err := s.Distance.GetDistanceOutputFormat(ctx, operations.GetDistanceOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.GetDistanceOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2022-08-29T05:39:49.755Z"),
        Disable: sdk.String("dolorem"),
        DistanceUnit: operations.GetDistanceOutputFormatDistanceUnitEnumKm.ToPointer(),
        OutputFormat: operations.GetDistanceOutputFormatOutputFormatEnumJSON,
        OutputSRS: operations.GetDistanceOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndTen.ToPointer(),
        Points: "enim",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDistanceBetweenPairsOutputFormat

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

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
    res, err := s.Distance.GetDistanceBetweenPairsOutputFormat(ctx, operations.GetDistanceBetweenPairsOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.GetDistanceBetweenPairsOutputFormatCriteriaEnumShortest.ToPointer(),
        Departure: types.MustTimeFromString("2022-06-06T21:04:34.044Z"),
        Disable: sdk.String("accusantium"),
        DistanceUnit: operations.GetDistanceBetweenPairsOutputFormatDistanceUnitEnumKm.ToPointer(),
        FromPoints: "culpa",
        MaxPairs: sdk.Int64(988374),
        OutputFormat: operations.GetDistanceBetweenPairsOutputFormatOutputFormatEnumHTML,
        OutputSRS: operations.GetDistanceBetweenPairsOutputFormatOutputSrsEnumFourThousandThreeHundredAndTwentySix.ToPointer(),
        RouteDescription: sdk.String("mollitia"),
        ToPoints: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTruckDistanceOutputFormat

Represents the distance and time of the shortest or fastest path between given start and end points.

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
    res, err := s.Distance.GetTruckDistanceOutputFormat(ctx, operations.GetTruckDistanceOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.GetTruckDistanceOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2022-01-02T17:10:32.894Z"),
        Disable: sdk.String("mollitia"),
        DistanceUnit: operations.GetTruckDistanceOutputFormatDistanceUnitEnumMi.ToPointer(),
        OutputFormat: operations.GetTruckDistanceOutputFormatOutputFormatEnumJSON,
        OutputSRS: operations.GetTruckDistanceOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndSeven.ToPointer(),
        Points: "quam",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("molestiae"),
        TruckRouteMultiplier: sdk.Int64(244425),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetTruckDistanceBetweenPairsOutputFormat

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints for a commercial vehicle. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

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
    res, err := s.Distance.GetTruckDistanceBetweenPairsOutputFormat(ctx, operations.GetTruckDistanceBetweenPairsOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.GetTruckDistanceBetweenPairsOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2022-08-30T15:03:11.112Z"),
        Disable: sdk.String("vitae"),
        DistanceUnit: operations.GetTruckDistanceBetweenPairsOutputFormatDistanceUnitEnumMi.ToPointer(),
        FromPoints: "animi",
        MaxPairs: sdk.Int64(317202),
        OutputFormat: operations.GetTruckDistanceBetweenPairsOutputFormatOutputFormatEnumJSON,
        OutputSRS: operations.GetTruckDistanceBetweenPairsOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndTen.ToPointer(),
        RouteDescription: sdk.String("sequi"),
        ToPoints: "tenetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostDistanceOutputFormat

Represents the distance and time of the shortest or fastest path between given start and end points.

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
    res, err := s.Distance.PostDistanceOutputFormat(ctx, operations.PostDistanceOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.PostDistanceOutputFormatCriteriaEnumShortest.ToPointer(),
        Departure: types.MustTimeFromString("2021-05-11T16:11:54.761Z"),
        Disable: sdk.String("aut"),
        DistanceUnit: operations.PostDistanceOutputFormatDistanceUnitEnumKm.ToPointer(),
        OutputFormat: operations.PostDistanceOutputFormatOutputFormatEnumKml,
        OutputSRS: operations.PostDistanceOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndTen.ToPointer(),
        Points: "laborum",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostDistanceBetweenPairsOutputFormat

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

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
    res, err := s.Distance.PostDistanceBetweenPairsOutputFormat(ctx, operations.PostDistanceBetweenPairsOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.PostDistanceBetweenPairsOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2020-05-14T09:04:32.205Z"),
        Disable: sdk.String("nihil"),
        DistanceUnit: operations.PostDistanceBetweenPairsOutputFormatDistanceUnitEnumMi.ToPointer(),
        FromPoints: "voluptatibus",
        MaxPairs: sdk.Int64(55714),
        OutputFormat: operations.PostDistanceBetweenPairsOutputFormatOutputFormatEnumHTML,
        OutputSRS: operations.PostDistanceBetweenPairsOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndSeven.ToPointer(),
        RouteDescription: sdk.String("cum"),
        ToPoints: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostTruckDistanceOutputFormat

Represents the distance and time of the shortest or fastest path between given start and end points.

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
    res, err := s.Distance.PostTruckDistanceOutputFormat(ctx, operations.PostTruckDistanceOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.PostTruckDistanceOutputFormatCriteriaEnumShortest.ToPointer(),
        Departure: types.MustTimeFromString("2022-09-19T18:36:39.009Z"),
        Disable: sdk.String("maiores"),
        DistanceUnit: operations.PostTruckDistanceOutputFormatDistanceUnitEnumKm.ToPointer(),
        OutputFormat: operations.PostTruckDistanceOutputFormatOutputFormatEnumKml,
        OutputSRS: operations.PostTruckDistanceOutputFormatOutputSrsEnumThreeThousandAndFive.ToPointer(),
        Points: "iusto",
        RoundTrip: sdk.Bool(false),
        RouteDescription: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostTruckDistanceBetweenPairsOutputFormat

Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.

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
    res, err := s.Distance.PostTruckDistanceBetweenPairsOutputFormat(ctx, operations.PostTruckDistanceBetweenPairsOutputFormatRequest{
        CorrectSide: sdk.Bool(false),
        Criteria: operations.PostTruckDistanceBetweenPairsOutputFormatCriteriaEnumFastest.ToPointer(),
        Departure: types.MustTimeFromString("2022-02-13T15:01:52.114Z"),
        Disable: sdk.String("commodi"),
        DistanceUnit: operations.PostTruckDistanceBetweenPairsOutputFormatDistanceUnitEnumMi.ToPointer(),
        FromPoints: "quae",
        MaxPairs: sdk.Int64(216822),
        OutputFormat: operations.PostTruckDistanceBetweenPairsOutputFormatOutputFormatEnumHTML,
        OutputSRS: operations.PostTruckDistanceBetweenPairsOutputFormatOutputSrsEnumTwentySixThousandNineHundredAndEight.ToPointer(),
        RouteDescription: sdk.String("excepturi"),
        ToPoints: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
