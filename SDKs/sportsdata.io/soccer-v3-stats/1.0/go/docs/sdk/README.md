# SDK

### Available Operations

* [AreasCountries](#areascountries) - Areas (Countries)
* [BoxScore](#boxscore) - Box Score
* [BoxScoresByDate](#boxscoresbydate) - Box Scores by Date
* [BoxScoresByDateByCompetition](#boxscoresbydatebycompetition) - Box Scores by Date by Competition
* [BoxScoresByDateDelta](#boxscoresbydatedelta) - Box Scores by Date Delta
* [BoxScoresDeltaByDateByCompetition](#boxscoresdeltabydatebycompetition) - Box Scores Delta by Date by Competition
* [CompetitionFixturesLeagueDetails](#competitionfixturesleaguedetails) - Competition Fixtures (League Details)
* [CompetitionHierarchyLeagueHierarchy](#competitionhierarchyleaguehierarchy) - Competition Hierarchy (League Hierarchy)
* [CompetitionsLeagues](#competitionsleagues) - Competitions (Leagues)
* [DfsSlatesByDate](#dfsslatesbydate) - Dfs Slates By Date
* [GamesByDate](#gamesbydate) - Games by Date
* [MembershipsActive](#membershipsactive) - Memberships (Active)
* [MembershipsByCompetitionActive](#membershipsbycompetitionactive) - Memberships by Competition (Active)
* [MembershipsByCompetitionHistorical](#membershipsbycompetitionhistorical) - Memberships by Competition (Historical)
* [MembershipsByTeamActive](#membershipsbyteamactive) - Memberships by Team (Active)
* [MembershipsByTeamHistorical](#membershipsbyteamhistorical) - Memberships by Team (Historical)
* [MembershipsHistorical](#membershipshistorical) - Memberships (Historical)
* [MembershipsRecentlyChanged](#membershipsrecentlychanged) - Memberships (Recently Changed)
* [Player](#player) - Player
* [PlayerGameStatsByDate](#playergamestatsbydate) - Player Game Stats by Date
* [PlayerGameStatsByPlayer](#playergamestatsbyplayer) - Player Game Stats by Player
* [PlayerSeasonStats](#playerseasonstats) - Player Season Stats
* [PlayerSeasonStatsByPlayer](#playerseasonstatsbyplayer) - Player Season Stats by Player
* [PlayerSeasonStatsByTeam](#playerseasonstatsbyteam) - Player Season Stats by Team
* [Players](#players) - Players
* [PlayersByTeam](#playersbyteam) - Players by Team
* [Schedule](#schedule) - Schedule
* [SeasonTeams](#seasonteams) - Season Teams
* [Standings](#standings) - Standings
* [TeamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
* [TeamSeasonStats](#teamseasonstats) - Team Season Stats
* [Teams](#teams) - Teams
* [UpcomingDfsSlatesByCompetition](#upcomingdfsslatesbycompetition) - Upcoming Dfs Slates By Competition
* [UpcomingScheduleByPlayer](#upcomingschedulebyplayer) - Upcoming Schedule By Player
* [Venues](#venues) - Venues

## AreasCountries

Areas (Countries)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AreasCountries(ctx, operations.AreasCountriesRequest{
        Format: operations.AreasCountriesFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Areas != nil {
        // handle response
    }
}
```

## BoxScore

Box Score

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BoxScore(ctx, operations.BoxScoreRequest{
        Format: operations.BoxScoreFormatEnumJSON,
        Gameid: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScore != nil {
        // handle response
    }
}
```

## BoxScoresByDate

Box Scores by Date

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BoxScoresByDate(ctx, operations.BoxScoresByDateRequest{
        Date: "unde",
        Format: operations.BoxScoresByDateFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScores != nil {
        // handle response
    }
}
```

## BoxScoresByDateByCompetition

Box Scores by Date by Competition

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BoxScoresByDateByCompetition(ctx, operations.BoxScoresByDateByCompetitionRequest{
        Competition: "corrupti",
        Date: "illum",
        Format: operations.BoxScoresByDateByCompetitionFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScores != nil {
        // handle response
    }
}
```

## BoxScoresByDateDelta

Box Scores by Date Delta

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BoxScoresByDateDelta(ctx, operations.BoxScoresByDateDeltaRequest{
        Date: "error",
        Format: operations.BoxScoresByDateDeltaFormatEnumJSON,
        Minutes: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScores != nil {
        // handle response
    }
}
```

## BoxScoresDeltaByDateByCompetition

Box Scores Delta by Date by Competition

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BoxScoresDeltaByDateByCompetition(ctx, operations.BoxScoresDeltaByDateByCompetitionRequest{
        Competition: "iure",
        Date: "magnam",
        Format: operations.BoxScoresDeltaByDateByCompetitionFormatEnumJSON,
        Minutes: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScores != nil {
        // handle response
    }
}
```

## CompetitionFixturesLeagueDetails

Competition Fixtures (League Details)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CompetitionFixturesLeagueDetails(ctx, operations.CompetitionFixturesLeagueDetailsRequest{
        Competition: "delectus",
        Format: operations.CompetitionFixturesLeagueDetailsFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompetitionDetail != nil {
        // handle response
    }
}
```

## CompetitionHierarchyLeagueHierarchy

Competition Hierarchy (League Hierarchy)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CompetitionHierarchyLeagueHierarchy(ctx, operations.CompetitionHierarchyLeagueHierarchyRequest{
        Format: operations.CompetitionHierarchyLeagueHierarchyFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Areas != nil {
        // handle response
    }
}
```

## CompetitionsLeagues

Competitions (Leagues)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CompetitionsLeagues(ctx, operations.CompetitionsLeaguesRequest{
        Format: operations.CompetitionsLeaguesFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Competitions != nil {
        // handle response
    }
}
```

## DfsSlatesByDate

Dfs Slates By Date

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DfsSlatesByDate(ctx, operations.DfsSlatesByDateRequest{
        Date: "minus",
        Format: operations.DfsSlatesByDateFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DfsSlates != nil {
        // handle response
    }
}
```

## GamesByDate

Games by Date

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GamesByDate(ctx, operations.GamesByDateRequest{
        Date: "voluptatum",
        Format: operations.GamesByDateFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
        // handle response
    }
}
```

## MembershipsActive

Memberships (Active)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MembershipsActive(ctx, operations.MembershipsActiveRequest{
        Format: operations.MembershipsActiveFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Memberships != nil {
        // handle response
    }
}
```

## MembershipsByCompetitionActive

Memberships by Competition (Active)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MembershipsByCompetitionActive(ctx, operations.MembershipsByCompetitionActiveRequest{
        Competition: "nisi",
        Format: operations.MembershipsByCompetitionActiveFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Memberships != nil {
        // handle response
    }
}
```

## MembershipsByCompetitionHistorical

Memberships by Competition (Historical)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MembershipsByCompetitionHistorical(ctx, operations.MembershipsByCompetitionHistoricalRequest{
        Competition: "temporibus",
        Format: operations.MembershipsByCompetitionHistoricalFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Memberships != nil {
        // handle response
    }
}
```

## MembershipsByTeamActive

Memberships by Team (Active)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MembershipsByTeamActive(ctx, operations.MembershipsByTeamActiveRequest{
        Format: operations.MembershipsByTeamActiveFormatEnumXML,
        Teamid: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Memberships != nil {
        // handle response
    }
}
```

## MembershipsByTeamHistorical

Memberships by Team (Historical)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MembershipsByTeamHistorical(ctx, operations.MembershipsByTeamHistoricalRequest{
        Format: operations.MembershipsByTeamHistoricalFormatEnumJSON,
        Teamid: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Memberships != nil {
        // handle response
    }
}
```

## MembershipsHistorical

Memberships (Historical)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MembershipsHistorical(ctx, operations.MembershipsHistoricalRequest{
        Format: operations.MembershipsHistoricalFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Memberships != nil {
        // handle response
    }
}
```

## MembershipsRecentlyChanged

Memberships (Recently Changed)

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.MembershipsRecentlyChanged(ctx, operations.MembershipsRecentlyChangedRequest{
        Days: "repellendus",
        Format: operations.MembershipsRecentlyChangedFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Memberships != nil {
        // handle response
    }
}
```

## Player

Player

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Player(ctx, operations.PlayerRequest{
        Format: operations.PlayerFormatEnumJSON,
        Playerid: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Player != nil {
        // handle response
    }
}
```

## PlayerGameStatsByDate

Player Game Stats by Date

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PlayerGameStatsByDate(ctx, operations.PlayerGameStatsByDateRequest{
        Date: "at",
        Format: operations.PlayerGameStatsByDateFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGames != nil {
        // handle response
    }
}
```

## PlayerGameStatsByPlayer

Player Game Stats by Player

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PlayerGameStatsByPlayer(ctx, operations.PlayerGameStatsByPlayerRequest{
        Date: "maiores",
        Format: operations.PlayerGameStatsByPlayerFormatEnumXML,
        Playerid: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGames != nil {
        // handle response
    }
}
```

## PlayerSeasonStats

Player Season Stats

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PlayerSeasonStats(ctx, operations.PlayerSeasonStatsRequest{
        Format: operations.PlayerSeasonStatsFormatEnumJSON,
        Roundid: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasons != nil {
        // handle response
    }
}
```

## PlayerSeasonStatsByPlayer

Player Season Stats by Player

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PlayerSeasonStatsByPlayer(ctx, operations.PlayerSeasonStatsByPlayerRequest{
        Format: operations.PlayerSeasonStatsByPlayerFormatEnumJSON,
        Playerid: "porro",
        Roundid: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasons != nil {
        // handle response
    }
}
```

## PlayerSeasonStatsByTeam

Player Season Stats by Team

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PlayerSeasonStatsByTeam(ctx, operations.PlayerSeasonStatsByTeamRequest{
        Format: operations.PlayerSeasonStatsByTeamFormatEnumXML,
        Roundid: "nam",
        Team: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasons != nil {
        // handle response
    }
}
```

## Players

Players

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Players(ctx, operations.PlayersRequest{
        Format: operations.PlayersFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
        // handle response
    }
}
```

## PlayersByTeam

Players by Team

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PlayersByTeam(ctx, operations.PlayersByTeamRequest{
        Format: operations.PlayersByTeamFormatEnumXML,
        Teamid: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
        // handle response
    }
}
```

## Schedule

Schedule

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Schedule(ctx, operations.ScheduleRequest{
        Format: operations.ScheduleFormatEnumJSON,
        Roundid: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
        // handle response
    }
}
```

## SeasonTeams

Season Teams

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.SeasonTeams(ctx, operations.SeasonTeamsRequest{
        Format: operations.SeasonTeamsFormatEnumJSON,
        Seasonid: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SeasonTeams != nil {
        // handle response
    }
}
```

## Standings

Standings

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Standings(ctx, operations.StandingsRequest{
        Format: operations.StandingsFormatEnumXML,
        Roundid: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Standings != nil {
        // handle response
    }
}
```

## TeamGameStatsByDate

Team Game Stats by Date

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TeamGameStatsByDate(ctx, operations.TeamGameStatsByDateRequest{
        Date: "modi",
        Format: operations.TeamGameStatsByDateFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamGames != nil {
        // handle response
    }
}
```

## TeamSeasonStats

Team Season Stats

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TeamSeasonStats(ctx, operations.TeamSeasonStatsRequest{
        Format: operations.TeamSeasonStatsFormatEnumJSON,
        Roundid: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSeasons != nil {
        // handle response
    }
}
```

## Teams

Teams

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Teams(ctx, operations.TeamsRequest{
        Format: operations.TeamsFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## UpcomingDfsSlatesByCompetition

Upcoming Dfs Slates By Competition

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpcomingDfsSlatesByCompetition(ctx, operations.UpcomingDfsSlatesByCompetitionRequest{
        CompetitionID: "ipsum",
        Format: operations.UpcomingDfsSlatesByCompetitionFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DfsSlates != nil {
        // handle response
    }
}
```

## UpcomingScheduleByPlayer

Upcoming Schedule By Player

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpcomingScheduleByPlayer(ctx, operations.UpcomingScheduleByPlayerRequest{
        Format: operations.UpcomingScheduleByPlayerFormatEnumXML,
        Playerid: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
        // handle response
    }
}
```

## Venues

Venues

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Venues(ctx, operations.VenuesRequest{
        Format: operations.VenuesFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Venues != nil {
        // handle response
    }
}
```
