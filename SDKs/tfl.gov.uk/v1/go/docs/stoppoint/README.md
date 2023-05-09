# StopPoint

### Available Operations

* [StopPointArrivalDepartures](#stoppointarrivaldepartures) - Gets the list of arrival and departure predictions for the given stop point id (overground, Elizabeth line and thameslink only)
* [StopPointArrivals](#stoppointarrivals) - Gets the list of arrival predictions for the given stop point id
* [StopPointCrowding](#stoppointcrowding) - Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.
* [StopPointDirection](#stoppointdirection) - Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.
* [StopPointDisruption](#stoppointdisruption) - Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.
* [StopPointDisruptionByMode](#stoppointdisruptionbymode) - Gets a distinct list of disrupted stop points for the given modes
* [StopPointGet](#stoppointget) - Gets a list of StopPoints corresponding to the given list of stop ids.
* [StopPointGetByGeoPoint](#stoppointgetbygeopoint) - Gets a list of StopPoints within {radius} by the specified criteria
* [StopPointGetByMode](#stoppointgetbymode) - Gets a list of StopPoints filtered by the modes available at that StopPoint.
* [StopPointGetBySms](#stoppointgetbysms) - Gets a StopPoint for a given sms code.
* [StopPointGetByType](#stoppointgetbytype) - Gets all stop points of a given type
* [StopPointGetByTypeWithPagination](#stoppointgetbytypewithpagination) - Gets all the stop points of given type(s) with a page number
* [StopPointGetCarParksByID](#stoppointgetcarparksbyid) - Get car parks corresponding to the given stop point id.
* [StopPointGetServiceTypes](#stoppointgetservicetypes) - Gets the service types for a given stoppoint
* [StopPointGetTaxiRanksByIds](#stoppointgettaxiranksbyids) - Gets a list of taxi ranks corresponding to the given stop point id.
* [StopPointMetaCategories](#stoppointmetacategories) - Gets the list of available StopPoint additional information categories
* [StopPointMetaModes](#stoppointmetamodes) - Gets the list of available StopPoint modes
* [StopPointMetaStopTypes](#stoppointmetastoptypes) - Gets the list of available StopPoint types
* [StopPointReachableFrom](#stoppointreachablefrom) - Gets Stopoints that are reachable from a station/line combination.
* [StopPointRoute](#stoppointroute) - Returns the route sections for all the lines that service the given stop point ids
* [StopPointSearch](#stoppointsearch) - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* [GetStopPointSearch](#getstoppointsearch) - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* [GetStopPointIDPlaceTypes](#getstoppointidplacetypes) - Get a list of places corresponding to a given id and place types.

## StopPointArrivalDepartures

Gets the list of arrival and departure predictions for the given stop point id (overground, Elizabeth line and thameslink only)

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
    res, err := s.StopPoint.StopPointArrivalDepartures(ctx, operations.StopPointArrivalDeparturesRequest{
        ID: "37ae4203-ce5e-46a9-9d8a-0d446ce2af7a",
        LineIds: []string{
            "ipsum",
            "quisquam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesArrivalDepartures != nil {
        // handle response
    }
}
```

## StopPointArrivals

Gets the list of arrival predictions for the given stop point id

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
    res, err := s.StopPoint.StopPointArrivals(ctx, operations.StopPointArrivalsRequest{
        ID: "f3be453f-870b-4326-b5a7-3429cdb1a842",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPredictions != nil {
        // handle response
    }
}
```

## StopPointCrowding

Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.

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
    res, err := s.StopPoint.StopPointCrowding(ctx, operations.StopPointCrowdingRequest{
        Direction: operations.StopPointCrowdingDirectionEnumInbound,
        ID: "bb679d23-2271-45bf-8cbb-1e31b8b90f34",
        Line: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesStopPoints != nil {
        // handle response
    }
}
```

## StopPointDirection

Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.

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
    res, err := s.StopPoint.StopPointDirection(ctx, operations.StopPointDirectionRequest{
        ID: "3a1108e0-adcf-44b9-a187-9fce953f73ef",
        LineID: sdk.String("dignissimos"),
        ToStopPointID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopPointDirection200ApplicationJSONString != nil {
        // handle response
    }
}
```

## StopPointDisruption

Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.

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
    res, err := s.StopPoint.StopPointDisruption(ctx, operations.StopPointDisruptionRequest{
        FlattenResponse: sdk.Bool(false),
        GetFamily: sdk.Bool(false),
        Ids: []string{
            "quod",
            "odio",
            "similique",
        },
        IncludeRouteBlockedStops: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesDisruptedPoints != nil {
        // handle response
    }
}
```

## StopPointDisruptionByMode

Gets a distinct list of disrupted stop points for the given modes

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
    res, err := s.StopPoint.StopPointDisruptionByMode(ctx, operations.StopPointDisruptionByModeRequest{
        IncludeRouteBlockedStops: sdk.Bool(false),
        Modes: []string{
            "vero",
            "ducimus",
            "dolore",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesDisruptedPoints != nil {
        // handle response
    }
}
```

## StopPointGet

Gets a list of StopPoints corresponding to the given list of stop ids.

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
    res, err := s.StopPoint.StopPointGet(ctx, operations.StopPointGetRequest{
        Ids: []string{
            "illum",
            "sequi",
            "natus",
            "impedit",
        },
        IncludeCrowdingData: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesStopPoints != nil {
        // handle response
    }
}
```

## StopPointGetByGeoPoint

Gets a list of StopPoints within {radius} by the specified criteria

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
    res, err := s.StopPoint.StopPointGetByGeoPoint(ctx, operations.StopPointGetByGeoPointRequest{
        Categories: []string{
            "voluptatibus",
        },
        LocationLat: 3472.33,
        LocationLon: 8623.1,
        Modes: []string{
            "porro",
        },
        Radius: sdk.Int(981830),
        ReturnLines: sdk.Bool(false),
        StopTypes: []string{
            "iusto",
            "eligendi",
            "ducimus",
            "alias",
        },
        UseStopPointHierarchy: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesStopPointsResponse != nil {
        // handle response
    }
}
```

## StopPointGetByMode

Gets a list of StopPoints filtered by the modes available at that StopPoint.

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
    res, err := s.StopPoint.StopPointGetByMode(ctx, operations.StopPointGetByModeRequest{
        Modes: []string{
            "tempora",
            "ipsam",
            "ea",
        },
        Page: sdk.Int(136900),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesStopPointsResponse != nil {
        // handle response
    }
}
```

## StopPointGetBySms

Gets a StopPoint for a given sms code.

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
    res, err := s.StopPoint.StopPointGetBySms(ctx, operations.StopPointGetBySmsRequest{
        ID: "6d436813-f16d-49f5-bce6-c556146c3e25",
        Output: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemObject != nil {
        // handle response
    }
}
```

## StopPointGetByType

Gets all stop points of a given type

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
    res, err := s.StopPoint.StopPointGetByType(ctx, operations.StopPointGetByTypeRequest{
        Types: []string{
            "libero",
            "aut",
            "aut",
            "deleniti",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesStopPoints != nil {
        // handle response
    }
}
```

## StopPointGetByTypeWithPagination

Gets all the stop points of given type(s) with a page number

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
    res, err := s.StopPoint.StopPointGetByTypeWithPagination(ctx, operations.StopPointGetByTypeWithPaginationRequest{
        Page: 770581,
        Types: []string{
            "fugit",
            "accusamus",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesStopPoints != nil {
        // handle response
    }
}
```

## StopPointGetCarParksByID

Get car parks corresponding to the given stop point id.

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
    res, err := s.StopPoint.StopPointGetCarParksByID(ctx, operations.StopPointGetCarParksByIDRequest{
        StopPointID: "inventore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPlaces != nil {
        // handle response
    }
}
```

## StopPointGetServiceTypes

Gets the service types for a given stoppoint

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
    res, err := s.StopPoint.StopPointGetServiceTypes(ctx, operations.StopPointGetServiceTypesRequest{
        ID: "41aac366-c8dd-46b1-8429-07474778a7bd",
        LineIds: []string{
            "eum",
            "suscipit",
        },
        Modes: []string{
            "eos",
            "praesentium",
            "quisquam",
            "veritatis",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesLineServiceTypes != nil {
        // handle response
    }
}
```

## StopPointGetTaxiRanksByIds

Gets a list of taxi ranks corresponding to the given stop point id.

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
    res, err := s.StopPoint.StopPointGetTaxiRanksByIds(ctx, operations.StopPointGetTaxiRanksByIdsRequest{
        StopPointID: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPlaces != nil {
        // handle response
    }
}
```

## StopPointMetaCategories

Gets the list of available StopPoint additional information categories

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
    res, err := s.StopPoint.StopPointMetaCategories(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesStopPointCategories != nil {
        // handle response
    }
}
```

## StopPointMetaModes

Gets the list of available StopPoint modes

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
    res, err := s.StopPoint.StopPointMetaModes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesModes != nil {
        // handle response
    }
}
```

## StopPointMetaStopTypes

Gets the list of available StopPoint types

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
    res, err := s.StopPoint.StopPointMetaStopTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StopPointMetaStopTypes200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## StopPointReachableFrom

Gets Stopoints that are reachable from a station/line combination.

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
    res, err := s.StopPoint.StopPointReachableFrom(ctx, operations.StopPointReachableFromRequest{
        ID: "ab3cdca4-2519-404e-923c-7e0bc7178e47",
        LineID: "occaecati",
        ServiceTypes: []StopPointReachableFromServiceTypesEnum{
            operations.StopPointReachableFromServiceTypesEnumNight,
            operations.StopPointReachableFromServiceTypesEnumRegular,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesStopPoints != nil {
        // handle response
    }
}
```

## StopPointRoute

Returns the route sections for all the lines that service the given stop point ids

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
    res, err := s.StopPoint.StopPointRoute(ctx, operations.StopPointRouteRequest{
        ID: "a70c6882-82aa-4482-962f-222e9817ee17",
        ServiceTypes: []StopPointRouteServiceTypesEnum{
            operations.StopPointRouteServiceTypesEnumNight,
            operations.StopPointRouteServiceTypesEnumNight,
            operations.StopPointRouteServiceTypesEnumRegular,
            operations.StopPointRouteServiceTypesEnumRegular,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesStopPointRouteSections != nil {
        // handle response
    }
}
```

## StopPointSearch

Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.

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
    res, err := s.StopPoint.StopPointSearch(ctx, operations.StopPointSearchRequest{
        FaresOnly: sdk.Bool(false),
        IncludeHubs: sdk.Bool(false),
        Lines: []string{
            "vel",
            "harum",
            "molestiae",
            "rerum",
        },
        MaxResults: sdk.Int(580197),
        Modes: []string{
            "distinctio",
            "eligendi",
        },
        Query: "sit",
        TflOperatedNationalRailStationsOnly: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesSearchResponse != nil {
        // handle response
    }
}
```

## GetStopPointSearch

Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.

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
    res, err := s.StopPoint.GetStopPointSearch(ctx, operations.GetStopPointSearchRequest{
        FaresOnly: sdk.Bool(false),
        IncludeHubs: sdk.Bool(false),
        Lines: []string{
            "tempore",
            "adipisci",
            "cumque",
        },
        MaxResults: sdk.Int(160538),
        Modes: []string{
            "minus",
        },
        Query: "quaerat",
        TflOperatedNationalRailStationsOnly: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesSearchResponse != nil {
        // handle response
    }
}
```

## GetStopPointIDPlaceTypes

Get a list of places corresponding to a given id and place types.

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
    res, err := s.StopPoint.GetStopPointIDPlaceTypes(ctx, operations.GetStopPointIDPlaceTypesRequest{
        ID: "f3789fd8-71f9-49dd-aefd-121aa6f1e674",
        PlaceTypes: []string{
            "illum",
            "soluta",
            "accusantium",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPlaces != nil {
        // handle response
    }
}
```
