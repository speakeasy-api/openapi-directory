# SDK

## Overview

NFL schedules, scores, odds, weather, and news API.

### Available Operations

* [AreGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [ByeWeeks](#byeweeks) - Bye Weeks
* [DepthCharts](#depthcharts) - Depth Charts
* [GameStatsBySeasonDeprecatedUseTeamGameStatsInstead](#gamestatsbyseasondeprecateduseteamgamestatsinstead) - Game Stats by Season (Deprecated, use Team Game Stats instead)
* [GameStatsByWeekDeprecatedUseTeamGameStatsInstead](#gamestatsbyweekdeprecateduseteamgamestatsinstead) - Game Stats by Week (Deprecated, use Team Game Stats instead)
* [News](#news) - News
* [NewsByDate](#newsbydate) - News by Date
* [NewsByPlayer](#newsbyplayer) - News by Player
* [NewsByTeam](#newsbyteam) - News by Team
* [PlayerDetailsByAvailable](#playerdetailsbyavailable) - Player Details by Available
* [PlayerDetailsByFreeAgents](#playerdetailsbyfreeagents) - Player Details by Free Agents
* [PlayerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [PlayerDetailsByRookieDraftYear](#playerdetailsbyrookiedraftyear) - Player Details by Rookie Draft Year
* [PlayerDetailsByTeam](#playerdetailsbyteam) - Player Details by Team
* [PlayersByTeamBasic](#playersbyteambasic) - Players by Team (Basic)
* [Referees](#referees) - Referees
* [Schedule](#schedule) - Schedule
* [ScheduleBasic](#schedulebasic) - Schedule (Basic)
* [ScoresByDate](#scoresbydate) - Scores by Date
* [ScoresBySeason](#scoresbyseason) - Scores by Season 
* [ScoresByWeek](#scoresbyweek) - Scores by Week
* [ScoresByWeekBasic](#scoresbyweekbasic) - Scores by Week (Basic)
* [ScoresByWeekSimulation](#scoresbyweeksimulation) - Scores by Week Simulation
* [SeasonCurrent](#seasoncurrent) - Season Current
* [SeasonLastCompleted](#seasonlastcompleted) - Season Last Completed
* [SeasonUpcoming](#seasonupcoming) - Season Upcoming
* [Stadiums](#stadiums) - Stadiums
* [Standings](#standings) - Standings
* [TeamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [TeamGameStats](#teamgamestats) - Team Game Stats
* [TeamSeasonStats](#teamseasonstats) - Team Season Stats
* [TeamsActive](#teamsactive) - Teams (Active)
* [TeamsAll](#teamsall) - Teams (All)
* [TeamsBasic](#teamsbasic) - Teams (Basic)
* [TeamsBySeason](#teamsbyseason) - Teams by Season
* [Timeframes](#timeframes) - Timeframes
* [WeekCurrent](#weekcurrent) - Week Current
* [WeekLastCompleted](#weeklastcompleted) - Week Last Completed
* [WeekUpcoming](#weekupcoming) - Week Upcoming
* [XPing](#xping) - X Ping

## AreGamesInProgress

Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.

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
    res, err := s.SDK.AreGamesInProgress(ctx, operations.AreGamesInProgressRequest{
        Format: operations.AreGamesInProgressFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AreGamesInProgress200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## ByeWeeks

Get bye weeks for the teams during a specified NFL season. 

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
    res, err := s.SDK.ByeWeeks(ctx, operations.ByeWeeksRequest{
        Format: operations.ByeWeeksFormatEnumJSON,
        Season: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Byes != nil {
        // handle response
    }
}
```

## DepthCharts

Depth charts for all NFL teams split by offensive, defensive, and special teams position groupings.

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
    res, err := s.SDK.DepthCharts(ctx, operations.DepthChartsRequest{
        Format: operations.DepthChartsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamDepthCharts != nil {
        // handle response
    }
}
```

## GameStatsBySeasonDeprecatedUseTeamGameStatsInstead

Game Stats by Season (Deprecated, use Team Game Stats instead)

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
    res, err := s.SDK.GameStatsBySeasonDeprecatedUseTeamGameStatsInstead(ctx, operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest{
        Format: operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadFormatEnumJSON,
        Season: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
        // handle response
    }
}
```

## GameStatsByWeekDeprecatedUseTeamGameStatsInstead

Game Stats by Week (Deprecated, use Team Game Stats instead)

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
    res, err := s.SDK.GameStatsByWeekDeprecatedUseTeamGameStatsInstead(ctx, operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest{
        Format: operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnumJSON,
        Season: "vel",
        Week: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
        // handle response
    }
}
```

## News

News

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
    res, err := s.SDK.News(ctx, operations.NewsRequest{
        Format: operations.NewsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.News != nil {
        // handle response
    }
}
```

## NewsByDate

News by Date

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
    res, err := s.SDK.NewsByDate(ctx, operations.NewsByDateRequest{
        Date: "suscipit",
        Format: operations.NewsByDateFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.News != nil {
        // handle response
    }
}
```

## NewsByPlayer

News by Player

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
    res, err := s.SDK.NewsByPlayer(ctx, operations.NewsByPlayerRequest{
        Format: operations.NewsByPlayerFormatEnumXML,
        Playerid: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.News != nil {
        // handle response
    }
}
```

## NewsByTeam

News by Team

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
    res, err := s.SDK.NewsByTeam(ctx, operations.NewsByTeamRequest{
        Format: operations.NewsByTeamFormatEnumXML,
        Team: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.News != nil {
        // handle response
    }
}
```

## PlayerDetailsByAvailable

Player Details by Available

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
    res, err := s.SDK.PlayerDetailsByAvailable(ctx, operations.PlayerDetailsByAvailableRequest{
        Format: operations.PlayerDetailsByAvailableFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
        // handle response
    }
}
```

## PlayerDetailsByFreeAgents

Player Details by Free Agents

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
    res, err := s.SDK.PlayerDetailsByFreeAgents(ctx, operations.PlayerDetailsByFreeAgentsRequest{
        Format: operations.PlayerDetailsByFreeAgentsFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
        // handle response
    }
}
```

## PlayerDetailsByPlayer

Player Details by Player

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
    res, err := s.SDK.PlayerDetailsByPlayer(ctx, operations.PlayerDetailsByPlayerRequest{
        Format: operations.PlayerDetailsByPlayerFormatEnumXML,
        Playerid: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerDetail != nil {
        // handle response
    }
}
```

## PlayerDetailsByRookieDraftYear

Player Details by Rookie Draft Year

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
    res, err := s.SDK.PlayerDetailsByRookieDraftYear(ctx, operations.PlayerDetailsByRookieDraftYearRequest{
        Format: operations.PlayerDetailsByRookieDraftYearFormatEnumJSON,
        Season: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
        // handle response
    }
}
```

## PlayerDetailsByTeam

Player Details by Team

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
    res, err := s.SDK.PlayerDetailsByTeam(ctx, operations.PlayerDetailsByTeamRequest{
        Format: operations.PlayerDetailsByTeamFormatEnumXML,
        Team: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerDetails != nil {
        // handle response
    }
}
```

## PlayersByTeamBasic

Players by Team (Basic)

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
    res, err := s.SDK.PlayersByTeamBasic(ctx, operations.PlayersByTeamBasicRequest{
        Format: operations.PlayersByTeamBasicFormatEnumXML,
        Team: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayersByTeamBasic200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## Referees

Returns full list of NFL Referees

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
    res, err := s.SDK.Referees(ctx, operations.RefereesRequest{
        Format: operations.RefereesFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Referees != nil {
        // handle response
    }
}
```

## Schedule

Game schedule for a specified season.

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
        Format: operations.ScheduleFormatEnumXML,
        Season: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Schedules != nil {
        // handle response
    }
}
```

## ScheduleBasic

Game schedule for a specified season.

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
    res, err := s.SDK.ScheduleBasic(ctx, operations.ScheduleBasicRequest{
        Format: operations.ScheduleBasicFormatEnumXML,
        Season: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduleBasics != nil {
        // handle response
    }
}
```

## ScoresByDate

Get game scores for a specified week of a season.

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
    res, err := s.SDK.ScoresByDate(ctx, operations.ScoresByDateRequest{
        Date: "perferendis",
        Format: operations.ScoresByDateFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Scores != nil {
        // handle response
    }
}
```

## ScoresBySeason

Game scores for a specified season.

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
    res, err := s.SDK.ScoresBySeason(ctx, operations.ScoresBySeasonRequest{
        Format: operations.ScoresBySeasonFormatEnumJSON,
        Season: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Scores != nil {
        // handle response
    }
}
```

## ScoresByWeek

Get game scores for a specified week of a season.

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
    res, err := s.SDK.ScoresByWeek(ctx, operations.ScoresByWeekRequest{
        Format: operations.ScoresByWeekFormatEnumJSON,
        Season: "odit",
        Week: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Scores != nil {
        // handle response
    }
}
```

## ScoresByWeekBasic

Get game scores for a specified week of a season.

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
    res, err := s.SDK.ScoresByWeekBasic(ctx, operations.ScoresByWeekBasicRequest{
        Format: operations.ScoresByWeekBasicFormatEnumJSON,
        Season: "maiores",
        Week: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreBasics != nil {
        // handle response
    }
}
```

## ScoresByWeekSimulation

Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.

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
    res, err := s.SDK.ScoresByWeekSimulation(ctx, operations.ScoresByWeekSimulationRequest{
        Format: operations.ScoresByWeekSimulationFormatEnumJSON,
        Numberofplays: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Scores != nil {
        // handle response
    }
}
```

## SeasonCurrent

Year of the current NFL season. This value changes at the start of the new NFL league year. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.

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
    res, err := s.SDK.SeasonCurrent(ctx, operations.SeasonCurrentRequest{
        Format: operations.SeasonCurrentFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SeasonCurrent200ApplicationJSONInteger != nil {
        // handle response
    }
}
```

## SeasonLastCompleted

Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.

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
    res, err := s.SDK.SeasonLastCompleted(ctx, operations.SeasonLastCompletedRequest{
        Format: operations.SeasonLastCompletedFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SeasonLastCompleted200ApplicationJSONInteger != nil {
        // handle response
    }
}
```

## SeasonUpcoming

Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.

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
    res, err := s.SDK.SeasonUpcoming(ctx, operations.SeasonUpcomingRequest{
        Format: operations.SeasonUpcomingFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SeasonUpcoming200ApplicationJSONInteger != nil {
        // handle response
    }
}
```

## Stadiums

This method returns all stadiums.

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
    res, err := s.SDK.Stadiums(ctx, operations.StadiumsRequest{
        Format: operations.StadiumsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Stadiums != nil {
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
        Season: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Standings != nil {
        // handle response
    }
}
```

## TeamGameLogsBySeason

Game by game log of total team statistics.

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
    res, err := s.SDK.TeamGameLogsBySeason(ctx, operations.TeamGameLogsBySeasonRequest{
        Format: operations.TeamGameLogsBySeasonFormatEnumJSON,
        Numberofgames: "occaecati",
        Season: "fugit",
        Teamid: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamGames != nil {
        // handle response
    }
}
```

## TeamGameStats

Team Game Stats

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
    res, err := s.SDK.TeamGameStats(ctx, operations.TeamGameStatsRequest{
        Format: operations.TeamGameStatsFormatEnumJSON,
        Season: "optio",
        Week: "totam",
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
        Format: operations.TeamSeasonStatsFormatEnumXML,
        Season: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSeasons != nil {
        // handle response
    }
}
```

## TeamsActive

Gets all active teams.

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
    res, err := s.SDK.TeamsActive(ctx, operations.TeamsActiveRequest{
        Format: operations.TeamsActiveFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## TeamsAll

Gets all teams, including pro bowl teams.

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
    res, err := s.SDK.TeamsAll(ctx, operations.TeamsAllRequest{
        Format: operations.TeamsAllFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## TeamsBasic

Gets all teams, including pro bowl teams.

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
    res, err := s.SDK.TeamsBasic(ctx, operations.TeamsBasicRequest{
        Format: operations.TeamsBasicFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamBasics != nil {
        // handle response
    }
}
```

## TeamsBySeason

List of teams playing in a specified season.

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
    res, err := s.SDK.TeamsBySeason(ctx, operations.TeamsBySeasonRequest{
        Format: operations.TeamsBySeasonFormatEnumJSON,
        Season: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
        // handle response
    }
}
```

## Timeframes

Get detailed information about past, present, and future timeframes.

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
    res, err := s.SDK.Timeframes(ctx, operations.TimeframesRequest{
        Format: operations.TimeframesFormatEnumXML,
        Type: operations.TimeframesTypeEnumUpcoming,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Timeframes != nil {
        // handle response
    }
}
```

## WeekCurrent

Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

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
    res, err := s.SDK.WeekCurrent(ctx, operations.WeekCurrentRequest{
        Format: operations.WeekCurrentFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WeekCurrent200ApplicationJSONInteger != nil {
        // handle response
    }
}
```

## WeekLastCompleted

Number of the last completed week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

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
    res, err := s.SDK.WeekLastCompleted(ctx, operations.WeekLastCompletedRequest{
        Format: operations.WeekLastCompletedFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WeekLastCompleted200ApplicationJSONInteger != nil {
        // handle response
    }
}
```

## WeekUpcoming

Number of the upcoming week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.

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
    res, err := s.SDK.WeekUpcoming(ctx, operations.WeekUpcomingRequest{
        Format: operations.WeekUpcomingFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WeekUpcoming200ApplicationJSONInteger != nil {
        // handle response
    }
}
```

## XPing

Ping NFL API

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
    res, err := s.SDK.XPing(ctx, operations.XPingRequest{
        Format: operations.XPingFormatEnumXML,
        Seconds: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.XPing200ApplicationJSONAny != nil {
        // handle response
    }
}
```
