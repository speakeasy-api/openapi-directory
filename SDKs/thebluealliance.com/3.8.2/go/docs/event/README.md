# Event

## Overview

Calls that return event, or event-specific information.

### Available Operations

* [GetDistrictEvents](#getdistrictevents) - Gets a list of events in the given district.
* [GetDistrictEventsKeys](#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [GetDistrictEventsSimple](#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [GetEvent](#getevent) - Gets an Event.
* [GetEventAlliances](#geteventalliances) - Gets a list of Elimination Alliances for the given Event.
* [GetEventAwards](#geteventawards) - Gets a list of awards from the given event.
* [GetEventDistrictPoints](#geteventdistrictpoints) - Gets a list of team rankings for the Event.
* [GetEventInsights](#geteventinsights) - Gets a set of Event-specific insights for the given Event.
* [GetEventMatchTimeseries](#geteventmatchtimeseries) - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [GetEventMatches](#geteventmatches) - Gets a list of matches for the given event.
* [GetEventMatchesKeys](#geteventmatcheskeys) - Gets a list of match keys for the given event.
* [GetEventMatchesSimple](#geteventmatchessimple) - Gets a short-form list of matches for the given event.
* [GetEventOPRs](#geteventoprs) - Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.
* [GetEventPredictions](#geteventpredictions) - Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.
* [GetEventRankings](#geteventrankings) - Gets a list of team rankings for the Event.
* [GetEventSimple](#geteventsimple) - Gets a short-form Event.
* [GetEventTeams](#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [GetEventTeamsKeys](#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [GetEventTeamsSimple](#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [GetEventTeamsStatuses](#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [GetEventsByYear](#geteventsbyyear) - Gets a list of events in the given year.
* [GetEventsByYearKeys](#geteventsbyyearkeys) - Gets a list of event keys in the given year.
* [GetEventsByYearSimple](#geteventsbyyearsimple) - Gets a short-form list of events in the given year.
* [GetTeamEventAwards](#getteameventawards) - Gets a list of awards the given team won at the given event.
* [GetTeamEventMatches](#getteameventmatches) - Gets a list of matches for the given team and event.
* [GetTeamEventMatchesKeys](#getteameventmatcheskeys) - Gets a list of match keys for matches for the given team and event.
* [GetTeamEventMatchesSimple](#getteameventmatchessimple) - Gets a short-form list of matches for the given team and event.
* [GetTeamEventStatus](#getteameventstatus) - Gets the competition rank and status of the team at the given event.
* [GetTeamEvents](#getteamevents) - Gets a list of all events this team has competed at.
* [GetTeamEventsByYear](#getteameventsbyyear) - Gets a list of events this team has competed at in the given year.
* [GetTeamEventsByYearKeys](#getteameventsbyyearkeys) - Gets a list of the event keys for events this team has competed at in the given year.
* [GetTeamEventsByYearSimple](#getteameventsbyyearsimple) - Gets a short-form list of events this team has competed at in the given year.
* [GetTeamEventsKeys](#getteameventskeys) - Gets a list of the event keys for all events this team has competed at.
* [GetTeamEventsSimple](#getteameventssimple) - Gets a short-form list of all events this team has competed at.
* [GetTeamEventsStatusesByYear](#getteameventsstatusesbyyear) - Gets a key-value list of the event statuses for events this team has competed at in the given year.

## GetDistrictEvents

Gets a list of events in the given district.

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
    res, err := s.Event.GetDistrictEvents(ctx, operations.GetDistrictEventsRequest{
        IfNoneMatch: sdk.String("voluptatum"),
        DistrictKey: "iusto",
    }, operations.GetDistrictEventsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## GetDistrictEventsKeys

Gets a list of event keys for events in the given district.

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
    res, err := s.Event.GetDistrictEventsKeys(ctx, operations.GetDistrictEventsKeysRequest{
        IfNoneMatch: sdk.String("excepturi"),
        DistrictKey: "nisi",
    }, operations.GetDistrictEventsKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDistrictEventsKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetDistrictEventsSimple

Gets a short-form list of events in the given district.

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
    res, err := s.Event.GetDistrictEventsSimple(ctx, operations.GetDistrictEventsSimpleRequest{
        IfNoneMatch: sdk.String("recusandae"),
        DistrictKey: "temporibus",
    }, operations.GetDistrictEventsSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSimples != nil {
        // handle response
    }
}
```

## GetEvent

Gets an Event.

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
    res, err := s.Event.GetEvent(ctx, operations.GetEventRequest{
        IfNoneMatch: sdk.String("ab"),
        EventKey: "quis",
    }, operations.GetEventSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Event != nil {
        // handle response
    }
}
```

## GetEventAlliances

Gets a list of Elimination Alliances for the given Event.

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
    res, err := s.Event.GetEventAlliances(ctx, operations.GetEventAlliancesRequest{
        IfNoneMatch: sdk.String("veritatis"),
        EventKey: "deserunt",
    }, operations.GetEventAlliancesSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EliminationAlliances != nil {
        // handle response
    }
}
```

## GetEventAwards

Gets a list of awards from the given event.

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
    res, err := s.Event.GetEventAwards(ctx, operations.GetEventAwardsRequest{
        IfNoneMatch: sdk.String("perferendis"),
        EventKey: "ipsam",
    }, operations.GetEventAwardsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Awards != nil {
        // handle response
    }
}
```

## GetEventDistrictPoints

Gets a list of team rankings for the Event.

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
    res, err := s.Event.GetEventDistrictPoints(ctx, operations.GetEventDistrictPointsRequest{
        IfNoneMatch: sdk.String("repellendus"),
        EventKey: "sapiente",
    }, operations.GetEventDistrictPointsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventDistrictPoints != nil {
        // handle response
    }
}
```

## GetEventInsights

Gets a set of Event-specific insights for the given Event.

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
    res, err := s.Event.GetEventInsights(ctx, operations.GetEventInsightsRequest{
        IfNoneMatch: sdk.String("quo"),
        EventKey: "odit",
    }, operations.GetEventInsightsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventInsights != nil {
        // handle response
    }
}
```

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
    res, err := s.Event.GetEventMatchTimeseries(ctx, operations.GetEventMatchTimeseriesRequest{
        IfNoneMatch: sdk.String("at"),
        EventKey: "at",
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
    res, err := s.Event.GetEventMatches(ctx, operations.GetEventMatchesRequest{
        IfNoneMatch: sdk.String("maiores"),
        EventKey: "molestiae",
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
    res, err := s.Event.GetEventMatchesKeys(ctx, operations.GetEventMatchesKeysRequest{
        IfNoneMatch: sdk.String("quod"),
        EventKey: "quod",
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
    res, err := s.Event.GetEventMatchesSimple(ctx, operations.GetEventMatchesSimpleRequest{
        IfNoneMatch: sdk.String("esse"),
        EventKey: "totam",
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

## GetEventOPRs

Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.

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
    res, err := s.Event.GetEventOPRs(ctx, operations.GetEventOPRsRequest{
        IfNoneMatch: sdk.String("porro"),
        EventKey: "dolorum",
    }, operations.GetEventOPRsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventOPRs != nil {
        // handle response
    }
}
```

## GetEventPredictions

Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.

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
    res, err := s.Event.GetEventPredictions(ctx, operations.GetEventPredictionsRequest{
        IfNoneMatch: sdk.String("dicta"),
        EventKey: "nam",
    }, operations.GetEventPredictionsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventPredictions != nil {
        // handle response
    }
}
```

## GetEventRankings

Gets a list of team rankings for the Event.

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
    res, err := s.Event.GetEventRankings(ctx, operations.GetEventRankingsRequest{
        IfNoneMatch: sdk.String("officia"),
        EventKey: "occaecati",
    }, operations.GetEventRankingsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventRanking != nil {
        // handle response
    }
}
```

## GetEventSimple

Gets a short-form Event.

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
    res, err := s.Event.GetEventSimple(ctx, operations.GetEventSimpleRequest{
        IfNoneMatch: sdk.String("fugit"),
        EventKey: "deleniti",
    }, operations.GetEventSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSimple != nil {
        // handle response
    }
}
```

## GetEventTeams

Gets a list of `Team` objects that competed in the given event.

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
    res, err := s.Event.GetEventTeams(ctx, operations.GetEventTeamsRequest{
        IfNoneMatch: sdk.String("hic"),
        EventKey: "optio",
    }, operations.GetEventTeamsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## GetEventTeamsKeys

Gets a list of `Team` keys that competed in the given event.

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
    res, err := s.Event.GetEventTeamsKeys(ctx, operations.GetEventTeamsKeysRequest{
        IfNoneMatch: sdk.String("totam"),
        EventKey: "beatae",
    }, operations.GetEventTeamsKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEventTeamsKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetEventTeamsSimple

Gets a short-form list of `Team` objects that competed in the given event.

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
    res, err := s.Event.GetEventTeamsSimple(ctx, operations.GetEventTeamsSimpleRequest{
        IfNoneMatch: sdk.String("commodi"),
        EventKey: "molestiae",
    }, operations.GetEventTeamsSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSimples != nil {
        // handle response
    }
}
```

## GetEventTeamsStatuses

Gets a key-value list of the event statuses for teams competing at the given event.

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
    res, err := s.Event.GetEventTeamsStatuses(ctx, operations.GetEventTeamsStatusesRequest{
        IfNoneMatch: sdk.String("modi"),
        EventKey: "qui",
    }, operations.GetEventTeamsStatusesSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEventTeamsStatuses200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetEventsByYear

Gets a list of events in the given year.

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
    res, err := s.Event.GetEventsByYear(ctx, operations.GetEventsByYearRequest{
        IfNoneMatch: sdk.String("impedit"),
        Year: 736918,
    }, operations.GetEventsByYearSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## GetEventsByYearKeys

Gets a list of event keys in the given year.

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
    res, err := s.Event.GetEventsByYearKeys(ctx, operations.GetEventsByYearKeysRequest{
        IfNoneMatch: sdk.String("esse"),
        Year: 216550,
    }, operations.GetEventsByYearKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEventsByYearKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetEventsByYearSimple

Gets a short-form list of events in the given year.

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
    res, err := s.Event.GetEventsByYearSimple(ctx, operations.GetEventsByYearSimpleRequest{
        IfNoneMatch: sdk.String("excepturi"),
        Year: 135218,
    }, operations.GetEventsByYearSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSimples != nil {
        // handle response
    }
}
```

## GetTeamEventAwards

Gets a list of awards the given team won at the given event.

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
    res, err := s.Event.GetTeamEventAwards(ctx, operations.GetTeamEventAwardsRequest{
        IfNoneMatch: sdk.String("perferendis"),
        EventKey: "ad",
        TeamKey: "natus",
    }, operations.GetTeamEventAwardsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Awards != nil {
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
    res, err := s.Event.GetTeamEventMatches(ctx, operations.GetTeamEventMatchesRequest{
        IfNoneMatch: sdk.String("sed"),
        EventKey: "iste",
        TeamKey: "dolor",
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
    res, err := s.Event.GetTeamEventMatchesKeys(ctx, operations.GetTeamEventMatchesKeysRequest{
        IfNoneMatch: sdk.String("natus"),
        EventKey: "laboriosam",
        TeamKey: "hic",
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
    res, err := s.Event.GetTeamEventMatchesSimple(ctx, operations.GetTeamEventMatchesSimpleRequest{
        IfNoneMatch: sdk.String("saepe"),
        EventKey: "fuga",
        TeamKey: "in",
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

## GetTeamEventStatus

Gets the competition rank and status of the team at the given event.

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
    res, err := s.Event.GetTeamEventStatus(ctx, operations.GetTeamEventStatusRequest{
        IfNoneMatch: sdk.String("corporis"),
        EventKey: "iste",
        TeamKey: "iure",
    }, operations.GetTeamEventStatusSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamEventStatus != nil {
        // handle response
    }
}
```

## GetTeamEvents

Gets a list of all events this team has competed at.

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
    res, err := s.Event.GetTeamEvents(ctx, operations.GetTeamEventsRequest{
        IfNoneMatch: sdk.String("saepe"),
        TeamKey: "quidem",
    }, operations.GetTeamEventsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## GetTeamEventsByYear

Gets a list of events this team has competed at in the given year.

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
    res, err := s.Event.GetTeamEventsByYear(ctx, operations.GetTeamEventsByYearRequest{
        IfNoneMatch: sdk.String("architecto"),
        TeamKey: "ipsa",
        Year: 969810,
    }, operations.GetTeamEventsByYearSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Events != nil {
        // handle response
    }
}
```

## GetTeamEventsByYearKeys

Gets a list of the event keys for events this team has competed at in the given year.

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
    res, err := s.Event.GetTeamEventsByYearKeys(ctx, operations.GetTeamEventsByYearKeysRequest{
        IfNoneMatch: sdk.String("est"),
        TeamKey: "mollitia",
        Year: 670638,
    }, operations.GetTeamEventsByYearKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamEventsByYearKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetTeamEventsByYearSimple

Gets a short-form list of events this team has competed at in the given year.

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
    res, err := s.Event.GetTeamEventsByYearSimple(ctx, operations.GetTeamEventsByYearSimpleRequest{
        IfNoneMatch: sdk.String("dolores"),
        TeamKey: "dolorem",
        Year: 358152,
    }, operations.GetTeamEventsByYearSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSimples != nil {
        // handle response
    }
}
```

## GetTeamEventsKeys

Gets a list of the event keys for all events this team has competed at.

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
    res, err := s.Event.GetTeamEventsKeys(ctx, operations.GetTeamEventsKeysRequest{
        IfNoneMatch: sdk.String("explicabo"),
        TeamKey: "nobis",
    }, operations.GetTeamEventsKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamEventsKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetTeamEventsSimple

Gets a short-form list of all events this team has competed at.

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
    res, err := s.Event.GetTeamEventsSimple(ctx, operations.GetTeamEventsSimpleRequest{
        IfNoneMatch: sdk.String("enim"),
        TeamKey: "omnis",
    }, operations.GetTeamEventsSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventSimples != nil {
        // handle response
    }
}
```

## GetTeamEventsStatusesByYear

Gets a key-value list of the event statuses for events this team has competed at in the given year.

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
    res, err := s.Event.GetTeamEventsStatusesByYear(ctx, operations.GetTeamEventsStatusesByYearRequest{
        IfNoneMatch: sdk.String("nemo"),
        TeamKey: "minima",
        Year: 570197,
    }, operations.GetTeamEventsStatusesByYearSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamEventsStatusesByYear200ApplicationJSONObject != nil {
        // handle response
    }
}
```
