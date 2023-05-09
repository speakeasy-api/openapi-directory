# Road

### Available Operations

* [RoadDisruptedStreets](#roaddisruptedstreets) - Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.
* [RoadDisruption](#roaddisruption) - Get active disruptions, filtered by road ids
* [RoadDisruptionByID](#roaddisruptionbyid) - Gets a list of active disruptions filtered by disruption Ids.
* [RoadGet](#roadget) - Gets all roads managed by TfL
* [RoadMetaCategories](#roadmetacategories) - Gets a list of valid RoadDisruption categories
* [RoadMetaSeverities](#roadmetaseverities) - Gets a list of valid RoadDisruption severity codes
* [RoadStatus](#roadstatus) - Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.
* [GetRoadIds](#getroadids) - Gets the road with the specified id (e.g. A1)

## RoadDisruptedStreets

Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Road.RoadDisruptedStreets(ctx, operations.RoadDisruptedStreetsRequest{
        EndDate: types.MustTimeFromString("2022-04-27T14:25:42.204Z"),
        StartDate: types.MustTimeFromString("2022-11-30T20:48:38.083Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemObject != nil {
        // handle response
    }
}
```

## RoadDisruption

Get active disruptions, filtered by road ids

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
    res, err := s.Road.RoadDisruption(ctx, operations.RoadDisruptionRequest{
        Categories: []string{
            "ipsa",
        },
        Closures: sdk.Bool(false),
        Ids: []string{
            "odio",
            "quaerat",
        },
        Severities: []string{
            "quidem",
            "voluptatibus",
            "voluptas",
            "natus",
        },
        StripContent: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesRoadDisruptions != nil {
        // handle response
    }
}
```

## RoadDisruptionByID

Gets a list of active disruptions filtered by disruption Ids.

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
    res, err := s.Road.RoadDisruptionByID(ctx, operations.RoadDisruptionByIDRequest{
        DisruptionIds: []string{
            "atque",
        },
        StripContent: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesRoadDisruption != nil {
        // handle response
    }
}
```

## RoadGet

Gets all roads managed by TfL

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
    res, err := s.Road.RoadGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesRoadCorridors != nil {
        // handle response
    }
}
```

## RoadMetaCategories

Gets a list of valid RoadDisruption categories

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
    res, err := s.Road.RoadMetaCategories(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.RoadMetaCategories200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## RoadMetaSeverities

Gets a list of valid RoadDisruption severity codes

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
    res, err := s.Road.RoadMetaSeverities(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesStatusSeverities != nil {
        // handle response
    }
}
```

## RoadStatus

Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Road.RoadStatus(ctx, operations.RoadStatusRequest{
        DateRangeNullableEndDate: types.MustTimeFromString("2022-02-23T01:35:05.899Z"),
        DateRangeNullableStartDate: types.MustTimeFromString("2022-04-04T12:00:33.616Z"),
        Ids: []string{
            "iusto",
            "voluptate",
            "dolorum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesRoadCorridors != nil {
        // handle response
    }
}
```

## GetRoadIds

Gets the road with the specified id (e.g. A1)

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
    res, err := s.Road.GetRoadIds(ctx, operations.GetRoadIdsRequest{
        Ids: []string{
            "omnis",
            "necessitatibus",
            "distinctio",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesRoadCorridors != nil {
        // handle response
    }
}
```
