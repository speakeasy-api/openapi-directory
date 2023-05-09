# Line

### Available Operations

* [LineArrivals](#linearrivals) - Get the list of arrival predictions for given line ids based at the given stop
* [LineDisruption](#linedisruption) - Get disruptions for the given line ids
* [LineDisruptionByMode](#linedisruptionbymode) - Get disruptions for all lines of the given modes.
* [LineGet](#lineget) - Gets lines that match the specified line ids.
* [LineGetByMode](#linegetbymode) - Gets lines that serve the given modes.
* [LineLineRoutesByIds](#linelineroutesbyids) - Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.
* [LineMetaDisruptionCategories](#linemetadisruptioncategories) - Gets a list of valid disruption categories
* [LineMetaModes](#linemetamodes) - Gets a list of valid modes
* [LineMetaServiceTypes](#linemetaservicetypes) - Gets a list of valid ServiceTypes to filter on
* [LineMetaSeverity](#linemetaseverity) - Gets a list of valid severity codes
* [LineRoute](#lineroute) - Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.
* [LineRouteByMode](#lineroutebymode) - Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route
* [LineRouteSequence](#lineroutesequence) - Gets all valid routes for given line id, including the sequence of stops on each route.
* [LineSearch](#linesearch) - Search for lines or routes matching the query string
* [LineStatus](#linestatus) - Gets the line status for given line ids during the provided dates e.g Minor Delays
* [LineStatusByIds](#linestatusbyids) - Gets the line status of for given line ids e.g Minor Delays
* [LineStatusByMode](#linestatusbymode) - Gets the line status of for all lines for the given modes
* [LineStatusBySeverity](#linestatusbyseverity) - Gets the line status for all lines with a given severity
            A list of valid severity codes can be obtained from a call to Line/Meta/Severity
* [LineStopPoints](#linestoppoints) - Gets a list of the stations that serve the given line id
* [LineTimetable](#linetimetable) - Gets the timetable for a specified station on the give line
* [LineTimetableTo](#linetimetableto) - Gets the timetable for a specified station on the give line with specified destination

## LineArrivals

Get the list of arrival predictions for given line ids based at the given stop

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
    res, err := s.Line.LineArrivals(ctx, operations.LineArrivalsRequest{
        DestinationStationID: sdk.String("natus"),
        Direction: operations.LineArrivalsDirectionEnumInbound.ToPointer(),
        Ids: []string{
            "dolor",
            "natus",
            "laboriosam",
        },
        StopPointID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPredictions != nil {
        // handle response
    }
}
```

## LineDisruption

Get disruptions for the given line ids

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
    res, err := s.Line.LineDisruption(ctx, operations.LineDisruptionRequest{
        Ids: []string{
            "fuga",
            "in",
            "corporis",
            "iste",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesDisruptions != nil {
        // handle response
    }
}
```

## LineDisruptionByMode

Get disruptions for all lines of the given modes.

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
    res, err := s.Line.LineDisruptionByMode(ctx, operations.LineDisruptionByModeRequest{
        Modes: []string{
            "saepe",
            "quidem",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesDisruptions != nil {
        // handle response
    }
}
```

## LineGet

Gets lines that match the specified line ids.

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
    res, err := s.Line.LineGet(ctx, operations.LineGetRequest{
        Ids: []string{
            "ipsa",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesLines != nil {
        // handle response
    }
}
```

## LineGetByMode

Gets lines that serve the given modes.

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
    res, err := s.Line.LineGetByMode(ctx, operations.LineGetByModeRequest{
        Modes: []string{
            "est",
            "mollitia",
            "laborum",
            "dolores",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesLines != nil {
        // handle response
    }
}
```

## LineLineRoutesByIds

Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.

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
    res, err := s.Line.LineLineRoutesByIds(ctx, operations.LineLineRoutesByIdsRequest{
        Ids: []string{
            "corporis",
        },
        ServiceTypes: []LineLineRoutesByIdsServiceTypesEnum{
            operations.LineLineRoutesByIdsServiceTypesEnumNight,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesLines != nil {
        // handle response
    }
}
```

## LineMetaDisruptionCategories

Gets a list of valid disruption categories

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
    res, err := s.Line.LineMetaDisruptionCategories(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.LineMetaDisruptionCategories200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## LineMetaModes

Gets a list of valid modes

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
    res, err := s.Line.LineMetaModes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesModes != nil {
        // handle response
    }
}
```

## LineMetaServiceTypes

Gets a list of valid ServiceTypes to filter on

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
    res, err := s.Line.LineMetaServiceTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.LineMetaServiceTypes200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## LineMetaSeverity

Gets a list of valid severity codes

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
    res, err := s.Line.LineMetaSeverity(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesStatusSeverities != nil {
        // handle response
    }
}
```

## LineRoute

Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.

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
    res, err := s.Line.LineRoute(ctx, operations.LineRouteRequest{
        ServiceTypes: []LineRouteServiceTypesEnum{
            operations.LineRouteServiceTypesEnumNight,
            operations.LineRouteServiceTypesEnumRegular,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesLines != nil {
        // handle response
    }
}
```

## LineRouteByMode

Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route

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
    res, err := s.Line.LineRouteByMode(ctx, operations.LineRouteByModeRequest{
        Modes: []string{
            "excepturi",
            "accusantium",
        },
        ServiceTypes: []LineRouteByModeServiceTypesEnum{
            operations.LineRouteByModeServiceTypesEnumNight,
            operations.LineRouteByModeServiceTypesEnumNight,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesLines != nil {
        // handle response
    }
}
```

## LineRouteSequence

Gets all valid routes for given line id, including the sequence of stops on each route.

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
    res, err := s.Line.LineRouteSequence(ctx, operations.LineRouteSequenceRequest{
        Direction: operations.LineRouteSequenceDirectionEnumAll,
        ExcludeCrowding: sdk.Bool(false),
        ID: "1a3a2fa9-4677-4392-91aa-52c3f5ad019d",
        ServiceTypes: []LineRouteSequenceServiceTypesEnum{
            operations.LineRouteSequenceServiceTypesEnumRegular,
            operations.LineRouteSequenceServiceTypesEnumNight,
            operations.LineRouteSequenceServiceTypesEnumNight,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesRouteSequence != nil {
        // handle response
    }
}
```

## LineSearch

Search for lines or routes matching the query string

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
    res, err := s.Line.LineSearch(ctx, operations.LineSearchRequest{
        Modes: []string{
            "nihil",
            "praesentium",
            "voluptatibus",
            "ipsa",
        },
        Query: "omnis",
        ServiceTypes: []LineSearchServiceTypesEnum{
            operations.LineSearchServiceTypesEnumNight,
            operations.LineSearchServiceTypesEnumRegular,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesRouteSearchResponse != nil {
        // handle response
    }
}
```

## LineStatus

Gets the line status for given line ids during the provided dates e.g Minor Delays

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
    res, err := s.Line.LineStatus(ctx, operations.LineStatusRequest{
        EndDatePathParameter: "doloremque",
        StartDatePathParameter: "reprehenderit",
        DateRangeEndDate: types.MustTimeFromString("2022-01-08T10:49:12.847Z"),
        DateRangeStartDate: types.MustTimeFromString("2022-08-22T19:15:58.586Z"),
        Detail: sdk.Bool(false),
        EndDateQueryParameter: "dolore",
        Ids: []string{
            "dicta",
            "harum",
        },
        StartDateQueryParameter: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesLines != nil {
        // handle response
    }
}
```

## LineStatusByIds

Gets the line status of for given line ids e.g Minor Delays

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
    res, err := s.Line.LineStatusByIds(ctx, operations.LineStatusByIdsRequest{
        Detail: sdk.Bool(false),
        Ids: []string{
            "commodi",
            "repudiandae",
            "quae",
            "ipsum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesLines != nil {
        // handle response
    }
}
```

## LineStatusByMode

Gets the line status of for all lines for the given modes

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
    res, err := s.Line.LineStatusByMode(ctx, operations.LineStatusByModeRequest{
        Detail: sdk.Bool(false),
        Modes: []string{
            "molestias",
            "excepturi",
            "pariatur",
        },
        SeverityLevel: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesLines != nil {
        // handle response
    }
}
```

## LineStatusBySeverity

Gets the line status for all lines with a given severity
            A list of valid severity codes can be obtained from a call to Line/Meta/Severity

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
    res, err := s.Line.LineStatusBySeverity(ctx, operations.LineStatusBySeverityRequest{
        Severity: 508969,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesLines != nil {
        // handle response
    }
}
```

## LineStopPoints

Gets a list of the stations that serve the given line id

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
    res, err := s.Line.LineStopPoints(ctx, operations.LineStopPointsRequest{
        ID: "8e1e91e4-50ad-42ab-9442-69802d502a94",
        TflOperatedNationalRailStationsOnly: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesStopPoints != nil {
        // handle response
    }
}
```

## LineTimetable

Gets the timetable for a specified station on the give line

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
    res, err := s.Line.LineTimetable(ctx, operations.LineTimetableRequest{
        FromStopPointID: "facilis",
        ID: "b4f63c96-9e9a-43ef-a77d-fb14cd66ae39",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesTimetableResponse != nil {
        // handle response
    }
}
```

## LineTimetableTo

Gets the timetable for a specified station on the give line with specified destination

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
    res, err := s.Line.LineTimetableTo(ctx, operations.LineTimetableToRequest{
        FromStopPointID: "enim",
        ID: "efb9ba88-f3a6-4699-b074-ba4469b6e214",
        ToStopPointID: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesTimetableResponse != nil {
        // handle response
    }
}
```
