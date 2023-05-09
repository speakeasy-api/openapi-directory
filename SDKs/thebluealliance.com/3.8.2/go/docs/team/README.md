# Team

## Overview

Calls that return team or team-specific information.

### Available Operations

* [GetDistrictRankings](#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [GetDistrictTeams](#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [GetDistrictTeamsKeys](#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [GetDistrictTeamsSimple](#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [GetEventTeams](#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [GetEventTeamsKeys](#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [GetEventTeamsSimple](#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [GetEventTeamsStatuses](#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [GetTeam](#getteam) - Gets a `Team` object for the team referenced by the given key.
* [GetTeamAwards](#getteamawards) - Gets a list of awards the given team has won.
* [GetTeamAwardsByYear](#getteamawardsbyyear) - Gets a list of awards the given team has won in a given year.
* [GetTeamDistricts](#getteamdistricts) - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
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
* [GetTeamMatchesByYear](#getteammatchesbyyear) - Gets a list of matches for the given team and year.
* [GetTeamMatchesByYearKeys](#getteammatchesbyyearkeys) - Gets a list of match keys for matches for the given team and year.
* [GetTeamMatchesByYearSimple](#getteammatchesbyyearsimple) - Gets a short-form list of matches for the given team and year.
* [GetTeamMediaByTag](#getteammediabytag) - Gets a list of Media (videos / pictures) for the given team and tag.
* [GetTeamMediaByTagYear](#getteammediabytagyear) - Gets a list of Media (videos / pictures) for the given team, tag and year.
* [GetTeamMediaByYear](#getteammediabyyear) - Gets a list of Media (videos / pictures) for the given team and year.
* [GetTeamRobots](#getteamrobots) - Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
* [GetTeamSimple](#getteamsimple) - Gets a `Team_Simple` object for the team referenced by the given key.
* [GetTeamSocialMedia](#getteamsocialmedia) - Gets a list of Media (social media) for the given team.
* [GetTeamYearsParticipated](#getteamyearsparticipated) - Gets a list of years in which the team participated in at least one competition.
* [GetTeams](#getteams) - Gets a list of `Team` objects, paginated in groups of 500.
* [GetTeamsByYear](#getteamsbyyear) - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* [GetTeamsByYearKeys](#getteamsbyyearkeys) - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* [GetTeamsByYearSimple](#getteamsbyyearsimple) - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* [GetTeamsKeys](#getteamskeys) - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* [GetTeamsSimple](#getteamssimple) - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

## GetDistrictRankings

Gets a list of team district rankings for the given district.

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
    res, err := s.Team.GetDistrictRankings(ctx, operations.GetDistrictRankingsRequest{
        IfNoneMatch: sdk.String("consequatur"),
        DistrictKey: "est",
    }, operations.GetDistrictRankingsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictRankings != nil {
        // handle response
    }
}
```

## GetDistrictTeams

Gets a list of `Team` objects that competed in events in the given district.

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
    res, err := s.Team.GetDistrictTeams(ctx, operations.GetDistrictTeamsRequest{
        IfNoneMatch: sdk.String("quibusdam"),
        DistrictKey: "explicabo",
    }, operations.GetDistrictTeamsSecurity{
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

## GetDistrictTeamsKeys

Gets a list of `Team` objects that competed in events in the given district.

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
    res, err := s.Team.GetDistrictTeamsKeys(ctx, operations.GetDistrictTeamsKeysRequest{
        IfNoneMatch: sdk.String("deserunt"),
        DistrictKey: "distinctio",
    }, operations.GetDistrictTeamsKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDistrictTeamsKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetDistrictTeamsSimple

Gets a short-form list of `Team` objects that competed in events in the given district.

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
    res, err := s.Team.GetDistrictTeamsSimple(ctx, operations.GetDistrictTeamsSimpleRequest{
        IfNoneMatch: sdk.String("quibusdam"),
        DistrictKey: "labore",
    }, operations.GetDistrictTeamsSimpleSecurity{
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
    res, err := s.Team.GetEventTeams(ctx, operations.GetEventTeamsRequest{
        IfNoneMatch: sdk.String("modi"),
        EventKey: "qui",
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
    res, err := s.Team.GetEventTeamsKeys(ctx, operations.GetEventTeamsKeysRequest{
        IfNoneMatch: sdk.String("aliquid"),
        EventKey: "cupiditate",
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
    res, err := s.Team.GetEventTeamsSimple(ctx, operations.GetEventTeamsSimpleRequest{
        IfNoneMatch: sdk.String("quos"),
        EventKey: "perferendis",
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
    res, err := s.Team.GetEventTeamsStatuses(ctx, operations.GetEventTeamsStatusesRequest{
        IfNoneMatch: sdk.String("magni"),
        EventKey: "assumenda",
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

## GetTeam

Gets a `Team` object for the team referenced by the given key.

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
    res, err := s.Team.GetTeam(ctx, operations.GetTeamRequest{
        IfNoneMatch: sdk.String("ipsam"),
        TeamKey: "alias",
    }, operations.GetTeamSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Team != nil {
        // handle response
    }
}
```

## GetTeamAwards

Gets a list of awards the given team has won.

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
    res, err := s.Team.GetTeamAwards(ctx, operations.GetTeamAwardsRequest{
        IfNoneMatch: sdk.String("fugit"),
        TeamKey: "dolorum",
    }, operations.GetTeamAwardsSecurity{
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

## GetTeamAwardsByYear

Gets a list of awards the given team has won in a given year.

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
    res, err := s.Team.GetTeamAwardsByYear(ctx, operations.GetTeamAwardsByYearRequest{
        IfNoneMatch: sdk.String("excepturi"),
        TeamKey: "tempora",
        Year: 703737,
    }, operations.GetTeamAwardsByYearSecurity{
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

## GetTeamDistricts

Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

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
    res, err := s.Team.GetTeamDistricts(ctx, operations.GetTeamDistrictsRequest{
        IfNoneMatch: sdk.String("tempore"),
        TeamKey: "labore",
    }, operations.GetTeamDistrictsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistrictLists != nil {
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
    res, err := s.Team.GetTeamEventAwards(ctx, operations.GetTeamEventAwardsRequest{
        IfNoneMatch: sdk.String("delectus"),
        EventKey: "eum",
        TeamKey: "non",
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
    res, err := s.Team.GetTeamEventMatches(ctx, operations.GetTeamEventMatchesRequest{
        IfNoneMatch: sdk.String("eligendi"),
        EventKey: "sint",
        TeamKey: "aliquid",
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
    res, err := s.Team.GetTeamEventMatchesKeys(ctx, operations.GetTeamEventMatchesKeysRequest{
        IfNoneMatch: sdk.String("provident"),
        EventKey: "necessitatibus",
        TeamKey: "sint",
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
    res, err := s.Team.GetTeamEventMatchesSimple(ctx, operations.GetTeamEventMatchesSimpleRequest{
        IfNoneMatch: sdk.String("officia"),
        EventKey: "dolor",
        TeamKey: "debitis",
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
    res, err := s.Team.GetTeamEventStatus(ctx, operations.GetTeamEventStatusRequest{
        IfNoneMatch: sdk.String("a"),
        EventKey: "dolorum",
        TeamKey: "in",
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
    res, err := s.Team.GetTeamEvents(ctx, operations.GetTeamEventsRequest{
        IfNoneMatch: sdk.String("in"),
        TeamKey: "illum",
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
    res, err := s.Team.GetTeamEventsByYear(ctx, operations.GetTeamEventsByYearRequest{
        IfNoneMatch: sdk.String("maiores"),
        TeamKey: "rerum",
        Year: 116202,
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
    res, err := s.Team.GetTeamEventsByYearKeys(ctx, operations.GetTeamEventsByYearKeysRequest{
        IfNoneMatch: sdk.String("magnam"),
        TeamKey: "cumque",
        Year: 813798,
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
    res, err := s.Team.GetTeamEventsByYearSimple(ctx, operations.GetTeamEventsByYearSimpleRequest{
        IfNoneMatch: sdk.String("ea"),
        TeamKey: "aliquid",
        Year: 675439,
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
    res, err := s.Team.GetTeamEventsKeys(ctx, operations.GetTeamEventsKeysRequest{
        IfNoneMatch: sdk.String("accusamus"),
        TeamKey: "non",
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
    res, err := s.Team.GetTeamEventsSimple(ctx, operations.GetTeamEventsSimpleRequest{
        IfNoneMatch: sdk.String("occaecati"),
        TeamKey: "enim",
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
    res, err := s.Team.GetTeamEventsStatusesByYear(ctx, operations.GetTeamEventsStatusesByYearRequest{
        IfNoneMatch: sdk.String("accusamus"),
        TeamKey: "delectus",
        Year: 692532,
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
    res, err := s.Team.GetTeamMatchesByYear(ctx, operations.GetTeamMatchesByYearRequest{
        IfNoneMatch: sdk.String("provident"),
        TeamKey: "nam",
        Year: 659669,
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
    res, err := s.Team.GetTeamMatchesByYearKeys(ctx, operations.GetTeamMatchesByYearKeysRequest{
        IfNoneMatch: sdk.String("blanditiis"),
        TeamKey: "deleniti",
        Year: 956084,
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
    res, err := s.Team.GetTeamMatchesByYearSimple(ctx, operations.GetTeamMatchesByYearSimpleRequest{
        IfNoneMatch: sdk.String("amet"),
        TeamKey: "deserunt",
        Year: 394869,
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

## GetTeamMediaByTag

Gets a list of Media (videos / pictures) for the given team and tag.

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
    res, err := s.Team.GetTeamMediaByTag(ctx, operations.GetTeamMediaByTagRequest{
        IfNoneMatch: sdk.String("vel"),
        MediaTag: "natus",
        TeamKey: "omnis",
    }, operations.GetTeamMediaByTagSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Media != nil {
        // handle response
    }
}
```

## GetTeamMediaByTagYear

Gets a list of Media (videos / pictures) for the given team, tag and year.

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
    res, err := s.Team.GetTeamMediaByTagYear(ctx, operations.GetTeamMediaByTagYearRequest{
        IfNoneMatch: sdk.String("molestiae"),
        MediaTag: "perferendis",
        TeamKey: "nihil",
        Year: 301575,
    }, operations.GetTeamMediaByTagYearSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Media != nil {
        // handle response
    }
}
```

## GetTeamMediaByYear

Gets a list of Media (videos / pictures) for the given team and year.

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
    res, err := s.Team.GetTeamMediaByYear(ctx, operations.GetTeamMediaByYearRequest{
        IfNoneMatch: sdk.String("distinctio"),
        TeamKey: "id",
        Year: 287991,
    }, operations.GetTeamMediaByYearSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Media != nil {
        // handle response
    }
}
```

## GetTeamRobots

Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.

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
    res, err := s.Team.GetTeamRobots(ctx, operations.GetTeamRobotsRequest{
        IfNoneMatch: sdk.String("labore"),
        TeamKey: "suscipit",
    }, operations.GetTeamRobotsSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamRobots != nil {
        // handle response
    }
}
```

## GetTeamSimple

Gets a `Team_Simple` object for the team referenced by the given key.

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
    res, err := s.Team.GetTeamSimple(ctx, operations.GetTeamSimpleRequest{
        IfNoneMatch: sdk.String("natus"),
        TeamKey: "nobis",
    }, operations.GetTeamSimpleSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSimple != nil {
        // handle response
    }
}
```

## GetTeamSocialMedia

Gets a list of Media (social media) for the given team.

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
    res, err := s.Team.GetTeamSocialMedia(ctx, operations.GetTeamSocialMediaRequest{
        IfNoneMatch: sdk.String("eum"),
        TeamKey: "vero",
    }, operations.GetTeamSocialMediaSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Media != nil {
        // handle response
    }
}
```

## GetTeamYearsParticipated

Gets a list of years in which the team participated in at least one competition.

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
    res, err := s.Team.GetTeamYearsParticipated(ctx, operations.GetTeamYearsParticipatedRequest{
        IfNoneMatch: sdk.String("aspernatur"),
        TeamKey: "architecto",
    }, operations.GetTeamYearsParticipatedSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamYearsParticipated200ApplicationJSONIntegers != nil {
        // handle response
    }
}
```

## GetTeams

Gets a list of `Team` objects, paginated in groups of 500.

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
    res, err := s.Team.GetTeams(ctx, operations.GetTeamsRequest{
        IfNoneMatch: sdk.String("magnam"),
        PageNum: 92373,
    }, operations.GetTeamsSecurity{
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

## GetTeamsByYear

Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.

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
    res, err := s.Team.GetTeamsByYear(ctx, operations.GetTeamsByYearRequest{
        IfNoneMatch: sdk.String("excepturi"),
        PageNum: 354047,
        Year: 590873,
    }, operations.GetTeamsByYearSecurity{
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

## GetTeamsByYearKeys

Gets a list Team Keys that competed in the given year, paginated in groups of 500.

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
    res, err := s.Team.GetTeamsByYearKeys(ctx, operations.GetTeamsByYearKeysRequest{
        IfNoneMatch: sdk.String("quos"),
        PageNum: 574325,
        Year: 33625,
    }, operations.GetTeamsByYearKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamsByYearKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetTeamsByYearSimple

Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.

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
    res, err := s.Team.GetTeamsByYearSimple(ctx, operations.GetTeamsByYearSimpleRequest{
        IfNoneMatch: sdk.String("mollitia"),
        PageNum: 968962,
        Year: 652103,
    }, operations.GetTeamsByYearSimpleSecurity{
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

## GetTeamsKeys

Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)

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
    res, err := s.Team.GetTeamsKeys(ctx, operations.GetTeamsKeysRequest{
        IfNoneMatch: sdk.String("ad"),
        PageNum: 431418,
    }, operations.GetTeamsKeysSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTeamsKeys200ApplicationJSONStrings != nil {
        // handle response
    }
}
```

## GetTeamsSimple

Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

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
    res, err := s.Team.GetTeamsSimple(ctx, operations.GetTeamsSimpleRequest{
        IfNoneMatch: sdk.String("dolor"),
        PageNum: 896547,
    }, operations.GetTeamsSimpleSecurity{
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
