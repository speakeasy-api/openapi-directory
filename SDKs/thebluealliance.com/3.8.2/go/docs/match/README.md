# Match

## Overview

Calls that return match, or match-specific information.

### Available Operations

* [GetEventMatchTimeseries](#geteventmatchtimeseries) - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [GetEventMatches](#geteventmatches) - Gets a list of matches for the given event.
* [GetEventMatchesKeys](#geteventmatcheskeys) - Gets a list of match keys for the given event.
* [GetEventMatchesSimple](#geteventmatchessimple) - Gets a short-form list of matches for the given event.
* [GetMatch](#getmatch) - Gets a `Match` object for the given match key.
* [GetMatchSimple](#getmatchsimple) - Gets a short-form `Match` object for the given match key.
* [GetMatchTimeseries](#getmatchtimeseries) - Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [GetMatchZebra](#getmatchzebra) - Gets Zebra MotionWorks data for a Match for the given match key.
* [GetTeamEventMatches](#getteameventmatches) - Gets a list of matches for the given team and event.
* [GetTeamEventMatchesKeys](#getteameventmatcheskeys) - Gets a list of match keys for matches for the given team and event.
* [GetTeamEventMatchesSimple](#getteameventmatchessimple) - Gets a short-form list of matches for the given team and event.
* [GetTeamMatchesByYear](#getteammatchesbyyear) - Gets a list of matches for the given team and year.
* [GetTeamMatchesByYearKeys](#getteammatchesbyyearkeys) - Gets a list of match keys for matches for the given team and year.
* [GetTeamMatchesByYearSimple](#getteammatchesbyyearsimple) - Gets a short-form list of matches for the given team and year.

## GetEventMatchTimeseries

Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.

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
    res, err := s.Match.GetEventMatchTimeseries(ctx, operations.GetEventMatchTimeseriesRequest{
        IfNoneMatch: sdk.String("voluptate"),
        EventKey: "cum",
    }, operations.GetEventMatchTimeseriesSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEventMatchTimeseries200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetEventMatches

Gets a list of matches for the given event.

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
    res, err := s.Match.GetEventMatches(ctx, operations.GetEventMatchesRequest{
        IfNoneMatch: sdk.String("perferendis"),
        EventKey: "doloremque",
    }, operations.GetEventMatchesSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Matches != nil {
        // handle response
    }
}
```

## GetEventMatchesKeys

Gets a list of match keys for the given event.

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
    res, err := s.Match.GetEventMatchesKeys(ctx, operations.GetEventMatchesKeysRequest{
        IfNoneMatch: sdk.String("reprehenderit"),
        EventKey: "ut",
    }, operations.GetEventMatchesKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEventMatchesKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetEventMatchesSimple

Gets a short-form list of matches for the given event.

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
    res, err := s.Match.GetEventMatchesSimple(ctx, operations.GetEventMatchesSimpleRequest{
        IfNoneMatch: sdk.String("maiores"),
        EventKey: "dicta",
    }, operations.GetEventMatchesSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MatchSimples != nil {
        // handle response
    }
}
```

## GetMatch

Gets a `Match` object for the given match key.

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
    res, err := s.Match.GetMatch(ctx, operations.GetMatchRequest{
        IfNoneMatch: sdk.String("corporis"),
        MatchKey: "dolore",
    }, operations.GetMatchSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Match != nil {
        // handle response
    }
}
```

## GetMatchSimple

Gets a short-form `Match` object for the given match key.

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
    res, err := s.Match.GetMatchSimple(ctx, operations.GetMatchSimpleRequest{
        IfNoneMatch: sdk.String("iusto"),
        MatchKey: "dicta",
    }, operations.GetMatchSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MatchSimple != nil {
        // handle response
    }
}
```

## GetMatchTimeseries

Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.

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
    res, err := s.Match.GetMatchTimeseries(ctx, operations.GetMatchTimeseriesRequest{
        IfNoneMatch: sdk.String("harum"),
        MatchKey: "enim",
    }, operations.GetMatchTimeseriesSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMatchTimeseries200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetMatchZebra

Gets Zebra MotionWorks data for a Match for the given match key.

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
    res, err := s.Match.GetMatchZebra(ctx, operations.GetMatchZebraRequest{
        IfNoneMatch: sdk.String("accusamus"),
        MatchKey: "commodi",
    }, operations.GetMatchZebraSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Zebra != nil {
        // handle response
    }
}
```

## GetTeamEventMatches

Gets a list of matches for the given team and event.

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
    res, err := s.Match.GetTeamEventMatches(ctx, operations.GetTeamEventMatchesRequest{
        IfNoneMatch: sdk.String("repudiandae"),
        EventKey: "quae",
        TeamKey: "ipsum",
    }, operations.GetTeamEventMatchesSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Matches != nil {
        // handle response
    }
}
```

## GetTeamEventMatchesKeys

Gets a list of match keys for matches for the given team and event.

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
    res, err := s.Match.GetTeamEventMatchesKeys(ctx, operations.GetTeamEventMatchesKeysRequest{
        IfNoneMatch: sdk.String("quidem"),
        EventKey: "molestias",
        TeamKey: "excepturi",
    }, operations.GetTeamEventMatchesKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamEventMatchesKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetTeamEventMatchesSimple

Gets a short-form list of matches for the given team and event.

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
    res, err := s.Match.GetTeamEventMatchesSimple(ctx, operations.GetTeamEventMatchesSimpleRequest{
        IfNoneMatch: sdk.String("pariatur"),
        EventKey: "modi",
        TeamKey: "praesentium",
    }, operations.GetTeamEventMatchesSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Matches != nil {
        // handle response
    }
}
```

## GetTeamMatchesByYear

Gets a list of matches for the given team and year.

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
    res, err := s.Match.GetTeamMatchesByYear(ctx, operations.GetTeamMatchesByYearRequest{
        IfNoneMatch: sdk.String("rem"),
        TeamKey: "voluptates",
        Year: 93940,
    }, operations.GetTeamMatchesByYearSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Matches != nil {
        // handle response
    }
}
```

## GetTeamMatchesByYearKeys

Gets a list of match keys for matches for the given team and year.

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
    res, err := s.Match.GetTeamMatchesByYearKeys(ctx, operations.GetTeamMatchesByYearKeysRequest{
        IfNoneMatch: sdk.String("repudiandae"),
        TeamKey: "sint",
        Year: 83112,
    }, operations.GetTeamMatchesByYearKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamMatchesByYearKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetTeamMatchesByYearSimple

Gets a short-form list of matches for the given team and year.

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
    res, err := s.Match.GetTeamMatchesByYearSimple(ctx, operations.GetTeamMatchesByYearSimpleRequest{
        IfNoneMatch: sdk.String("itaque"),
        TeamKey: "incidunt",
        Year: 318569,
    }, operations.GetTeamMatchesByYearSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MatchSimples != nil {
        // handle response
    }
}
```
