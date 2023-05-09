# SDK

## Overview

NFL rosters, player stats, team stats, and fantasy stats API.

### Available Operations

* [AreGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [BoxScoreByScoreidV](#boxscorebyscoreidv) - Box Score by ScoreID V3
* [BoxScoreV](#boxscorev) - Box Score V3
* [BoxScoresDeltaV](#boxscoresdeltav) - Box Scores Delta V3
* [BoxScoresVSimulation](#boxscoresvsimulation) - Box Scores V3 Simulation
* [ByeWeeks](#byeweeks) - Bye Weeks
* [DailyFantasyPlayers](#dailyfantasyplayers) - Daily Fantasy Players
* [DailyFantasyScoring](#dailyfantasyscoring) - Daily Fantasy Scoring
* [DfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [DfsSlatesByWeek](#dfsslatesbyweek) - DFS Slates by Week
* [FantasyDefenseGameStats](#fantasydefensegamestats) - Fantasy Defense Game Stats
* [FantasyDefenseGameStatsByTeam](#fantasydefensegamestatsbyteam) - Fantasy Defense Game Stats by Team
* [FantasyDefenseSeasonStats](#fantasydefenseseasonstats) - Fantasy Defense Season Stats
* [FantasyDefenseSeasonStatsByTeam](#fantasydefenseseasonstatsbyteam) - Fantasy Defense Season Stats by Team
* [FantasyPlayerOwnershipPercentagesSeasonLong](#fantasyplayerownershippercentagesseasonlong) - Fantasy Player Ownership Percentages (Season-Long)
* [FantasyPlayersWithAdp](#fantasyplayerswithadp) - Fantasy Players with ADP
* [GameStatsBySeasonDeprecatedUseTeamGameStatsInstead](#gamestatsbyseasondeprecateduseteamgamestatsinstead) - Game Stats by Season (Deprecated, use Team Game Stats instead)
* [GameStatsByWeekDeprecatedUseTeamGameStatsInstead](#gamestatsbyweekdeprecateduseteamgamestatsinstead) - Game Stats by Week (Deprecated, use Team Game Stats instead)
* [IdpFantasyPlayersWithAdp](#idpfantasyplayerswithadp) - IDP Fantasy Players with ADP
* [Injuries](#injuries) - Injuries
* [InjuriesByTeam](#injuriesbyteam) - Injuries by Team
* [LeagueLeadersBySeason](#leagueleadersbyseason) - League Leaders by Season
* [LeagueLeadersByWeek](#leagueleadersbyweek) - League Leaders by Week
* [LegacyBoxScore](#legacyboxscore) - Legacy Box Score
* [LegacyBoxScores](#legacyboxscores) - Legacy Box Scores
* [LegacyBoxScoresActive](#legacyboxscoresactive) - Legacy Box Scores Active
* [LegacyBoxScoresDelta](#legacyboxscoresdelta) - Legacy Box Scores Delta
* [LegacyBoxScoresDeltaCurrentWeek](#legacyboxscoresdeltacurrentweek) - Legacy Box Scores Delta (Current Week)
* [LegacyBoxScoresFinal](#legacyboxscoresfinal) - Legacy Box Scores Final
* [LegacyBoxScoresLive](#legacyboxscoreslive) - Legacy Box Scores Live
* [News](#news) - News
* [NewsByDate](#newsbydate) - News by Date
* [NewsByPlayer](#newsbyplayer) - News by Player
* [NewsByTeam](#newsbyteam) - News by Team
* [PlayerDetailsByAvailable](#playerdetailsbyavailable) - Player Details by Available
* [PlayerDetailsByFreeAgents](#playerdetailsbyfreeagents) - Player Details by Free Agents
* [PlayerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [PlayerDetailsByRookieDraftYear](#playerdetailsbyrookiedraftyear) - Player Details by Rookie Draft Year
* [PlayerDetailsByTeam](#playerdetailsbyteam) - Player Details by Team
* [PlayerGameLogsBySeason](#playergamelogsbyseason) - Player Game Logs By Season
* [PlayerGameRedZoneStats](#playergameredzonestats) - Player Game Red Zone Stats
* [PlayerGameRedZoneStatsInsideFive](#playergameredzonestatsinsidefive) - Player Game Red Zone Stats Inside Five
* [PlayerGameRedZoneStatsInsideTen](#playergameredzonestatsinsideten) - Player Game Red Zone Stats Inside Ten
* [PlayerGameStatsByPlayer](#playergamestatsbyplayer) - Player Game Stats by Player
* [PlayerGameStatsByTeam](#playergamestatsbyteam) - Player Game Stats by Team
* [PlayerGameStatsByWeek](#playergamestatsbyweek) - Player Game Stats by Week
* [PlayerGameStatsByWeekDelta](#playergamestatsbyweekdelta) - Player Game Stats by Week Delta
* [PlayerGameStatsDelta](#playergamestatsdelta) - Player Game Stats Delta
* [PlayerSeasonRedZoneStats](#playerseasonredzonestats) - Player Season Red Zone Stats
* [PlayerSeasonRedZoneStatsInsideFive](#playerseasonredzonestatsinsidefive) - Player Season Red Zone Stats Inside Five
* [PlayerSeasonRedZoneStatsInsideTen](#playerseasonredzonestatsinsideten) - Player Season Red Zone Stats Inside Ten
* [PlayerSeasonStats](#playerseasonstats) - Player Season Stats
* [PlayerSeasonStatsByPlayer](#playerseasonstatsbyplayer) - Player Season Stats by Player
* [PlayerSeasonStatsByTeam](#playerseasonstatsbyteam) - Player Season Stats by Team
* [PlayerSeasonThirdDownStats](#playerseasonthirddownstats) - Player Season Third Down Stats
* [ProBowlers](#probowlers) - Pro Bowlers
* [Schedule](#schedule) - Schedule
* [ScoresByDate](#scoresbydate) - Scores by Date
* [ScoresBySeason](#scoresbyseason) - Scores by Season 
* [ScoresByWeek](#scoresbyweek) - Scores by Week
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
* [TeamsBySeason](#teamsbyseason) - Teams by Season
* [Timeframes](#timeframes) - Timeframes
* [WeekCurrent](#weekcurrent) - Week Current
* [WeekLastCompleted](#weeklastcompleted) - Week Last Completed
* [WeekUpcoming](#weekupcoming) - Week Upcoming

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

## BoxScoreByScoreidV

Box Score by ScoreID V3

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
    res, err := s.SDK.BoxScoreByScoreidV(ctx, operations.BoxScoreByScoreidVRequest{
        Format: operations.BoxScoreByScoreidVFormatEnumJSON,
        Scoreid: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScoreV3 != nil {
        // handle response
    }
}
```

## BoxScoreV

Box Score V3

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
    res, err := s.SDK.BoxScoreV(ctx, operations.BoxScoreVRequest{
        Format: operations.BoxScoreVFormatEnumJSON,
        Hometeam: "nulla",
        Season: "corrupti",
        Week: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScoreV3 != nil {
        // handle response
    }
}
```

## BoxScoresDeltaV

This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes. You can also filter by type of player stats to include, such as traditional fantasy players, IDP players or all players.

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
    res, err := s.SDK.BoxScoresDeltaV(ctx, operations.BoxScoresDeltaVRequest{
        Format: operations.BoxScoresDeltaVFormatEnumXML,
        Minutes: "error",
        Playerstoinclude: operations.BoxScoresDeltaVPlayerstoincludeEnumFantasy,
        Season: "suscipit",
        Week: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScoreV3s != nil {
        // handle response
    }
}
```

## BoxScoresVSimulation

Gets simulated live box scores of NFL games, covering the Conference Championship games on January 21, 2018.

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
    res, err := s.SDK.BoxScoresVSimulation(ctx, operations.BoxScoresVSimulationRequest{
        Format: operations.BoxScoresVSimulationFormatEnumXML,
        Numberofplays: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScoreV3s != nil {
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
        Format: "ipsa",
        Season: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Byes != nil {
        // handle response
    }
}
```

## DailyFantasyPlayers

Daily Fantasy Players

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
    res, err := s.SDK.DailyFantasyPlayers(ctx, operations.DailyFantasyPlayersRequest{
        Date: "tempora",
        Format: operations.DailyFantasyPlayersFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DailyFantasyPlayers != nil {
        // handle response
    }
}
```

## DailyFantasyScoring

Daily Fantasy Scoring

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
    res, err := s.SDK.DailyFantasyScoring(ctx, operations.DailyFantasyScoringRequest{
        Date: "molestiae",
        Format: operations.DailyFantasyScoringFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DailyFantasyScorings != nil {
        // handle response
    }
}
```

## DfsSlatesByDate

DFS Slates by Date

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
        Date: "placeat",
        Format: operations.DfsSlatesByDateFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DfsSlates != nil {
        // handle response
    }
}
```

## DfsSlatesByWeek

DFS Slates by Week

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
    res, err := s.SDK.DfsSlatesByWeek(ctx, operations.DfsSlatesByWeekRequest{
        Format: operations.DfsSlatesByWeekFormatEnumXML,
        Season: "excepturi",
        Week: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DfsSlates != nil {
        // handle response
    }
}
```

## FantasyDefenseGameStats

Fantasy Defense Game Stats

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
    res, err := s.SDK.FantasyDefenseGameStats(ctx, operations.FantasyDefenseGameStatsRequest{
        Format: operations.FantasyDefenseGameStatsFormatEnumJSON,
        Season: "temporibus",
        Week: "ab",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FantasyDefenseGames != nil {
        // handle response
    }
}
```

## FantasyDefenseGameStatsByTeam

Fantasy Defense Game Stats by Team

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
    res, err := s.SDK.FantasyDefenseGameStatsByTeam(ctx, operations.FantasyDefenseGameStatsByTeamRequest{
        Format: operations.FantasyDefenseGameStatsByTeamFormatEnumXML,
        Season: "veritatis",
        Team: "deserunt",
        Week: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FantasyDefenseGame != nil {
        // handle response
    }
}
```

## FantasyDefenseSeasonStats

Fantasy Defense Season Stats

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
    res, err := s.SDK.FantasyDefenseSeasonStats(ctx, operations.FantasyDefenseSeasonStatsRequest{
        Format: operations.FantasyDefenseSeasonStatsFormatEnumXML,
        Season: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FantasyDefenseSeasons != nil {
        // handle response
    }
}
```

## FantasyDefenseSeasonStatsByTeam

Fantasy Defense Season Stats by Team

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
    res, err := s.SDK.FantasyDefenseSeasonStatsByTeam(ctx, operations.FantasyDefenseSeasonStatsByTeamRequest{
        Format: operations.FantasyDefenseSeasonStatsByTeamFormatEnumJSON,
        Season: "quo",
        Team: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FantasyDefenseSeason != nil {
        // handle response
    }
}
```

## FantasyPlayerOwnershipPercentagesSeasonLong

Fantasy Player Ownership Percentages (Season-Long)

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
    res, err := s.SDK.FantasyPlayerOwnershipPercentagesSeasonLong(ctx, operations.FantasyPlayerOwnershipPercentagesSeasonLongRequest{
        Format: operations.FantasyPlayerOwnershipPercentagesSeasonLongFormatEnumJSON,
        Season: "at",
        Week: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerOwnerships != nil {
        // handle response
    }
}
```

## FantasyPlayersWithAdp

This method returns a comprehensive list of draftable fantasy football players, including QB, RB, WR, TE, K and DEF.  Players are sorted by ADP (AverageDraftPosition).

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
    res, err := s.SDK.FantasyPlayersWithAdp(ctx, operations.FantasyPlayersWithAdpRequest{
        Format: operations.FantasyPlayersWithAdpFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FantasyPlayers != nil {
        // handle response
    }
}
```

## GameStatsBySeasonDeprecatedUseTeamGameStatsInstead

Game stats for a specified season.

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
        Season: "quod",
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

Game stats for a specified season and week.

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
        Format: operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadFormatEnumXML,
        Season: "totam",
        Week: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
        // handle response
    }
}
```

## IdpFantasyPlayersWithAdp

This method returns the top 300+ IDP Fantasy Players for the current or upcoming season, ordered by AverageDraftPositionIDP.

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
    res, err := s.SDK.IdpFantasyPlayersWithAdp(ctx, operations.IdpFantasyPlayersWithAdpRequest{
        Format: operations.IdpFantasyPlayersWithAdpFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FantasyPlayers != nil {
        // handle response
    }
}
```

## Injuries

Injuries

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
    res, err := s.SDK.Injuries(ctx, operations.InjuriesRequest{
        Format: operations.InjuriesFormatEnumXML,
        Season: "nam",
        Week: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Injuries != nil {
        // handle response
    }
}
```

## InjuriesByTeam

Injuries by Team

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
    res, err := s.SDK.InjuriesByTeam(ctx, operations.InjuriesByTeamRequest{
        Format: operations.InjuriesByTeamFormatEnumJSON,
        Season: "fugit",
        Team: "deleniti",
        Week: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Injuries != nil {
        // handle response
    }
}
```

## LeagueLeadersBySeason

League Leaders by Season

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
    res, err := s.SDK.LeagueLeadersBySeason(ctx, operations.LeagueLeadersBySeasonRequest{
        Column: operations.LeagueLeadersBySeasonColumnEnumInterceptions,
        Format: operations.LeagueLeadersBySeasonFormatEnumJSON,
        Position: operations.LeagueLeadersBySeasonPositionEnumOffense,
        Season: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasons != nil {
        // handle response
    }
}
```

## LeagueLeadersByWeek

League Leaders by Week

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
    res, err := s.SDK.LeagueLeadersByWeek(ctx, operations.LeagueLeadersByWeekRequest{
        Column: operations.LeagueLeadersByWeekColumnEnumReceptions,
        Format: operations.LeagueLeadersByWeekFormatEnumXML,
        Position: operations.LeagueLeadersByWeekPositionEnumQb,
        Season: "impedit",
        Week: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGames != nil {
        // handle response
    }
}
```

## LegacyBoxScore

Legacy Box Score

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
    res, err := s.SDK.LegacyBoxScore(ctx, operations.LegacyBoxScoreRequest{
        Format: operations.LegacyBoxScoreFormatEnumXML,
        Hometeam: "ipsum",
        Season: "excepturi",
        Week: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScore != nil {
        // handle response
    }
}
```

## LegacyBoxScores

This method returns all box scores for a given season and week.

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
    res, err := s.SDK.LegacyBoxScores(ctx, operations.LegacyBoxScoresRequest{
        Format: operations.LegacyBoxScoresFormatEnumXML,
        Season: "ad",
        Week: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScores != nil {
        // handle response
    }
}
```

## LegacyBoxScoresActive

This method returns box scores for all games that are either in-progress or have been updated within the last 30 minutes.

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
    res, err := s.SDK.LegacyBoxScoresActive(ctx, operations.LegacyBoxScoresActiveRequest{
        Format: operations.LegacyBoxScoresActiveFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScores != nil {
        // handle response
    }
}
```

## LegacyBoxScoresDelta

This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes.

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
    res, err := s.SDK.LegacyBoxScoresDelta(ctx, operations.LegacyBoxScoresDeltaRequest{
        Format: operations.LegacyBoxScoresDeltaFormatEnumJSON,
        Minutes: "dolor",
        Season: "natus",
        Week: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScores != nil {
        // handle response
    }
}
```

## LegacyBoxScoresDeltaCurrentWeek

Legacy Box Scores Delta (Current Week)

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
    res, err := s.SDK.LegacyBoxScoresDeltaCurrentWeek(ctx, operations.LegacyBoxScoresDeltaCurrentWeekRequest{
        Format: operations.LegacyBoxScoresDeltaCurrentWeekFormatEnumJSON,
        Minutes: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScores != nil {
        // handle response
    }
}
```

## LegacyBoxScoresFinal

Legacy Box Scores Final

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
    res, err := s.SDK.LegacyBoxScoresFinal(ctx, operations.LegacyBoxScoresFinalRequest{
        Format: operations.LegacyBoxScoresFinalFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScores != nil {
        // handle response
    }
}
```

## LegacyBoxScoresLive

Legacy Box Scores Live

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
    res, err := s.SDK.LegacyBoxScoresLive(ctx, operations.LegacyBoxScoresLiveRequest{
        Format: operations.LegacyBoxScoresLiveFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BoxScores != nil {
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
        Format: "corporis",
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
        Date: "iste",
        Format: "iure",
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
        Format: "saepe",
        Playerid: "quidem",
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
        Format: "architecto",
        Team: "ipsa",
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
        Format: operations.PlayerDetailsByAvailableFormatEnumJSON,
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
        Format: operations.PlayerDetailsByFreeAgentsFormatEnumJSON,
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
        Format: operations.PlayerDetailsByPlayerFormatEnumJSON,
        Playerid: "laborum",
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
        Format: "dolores",
        Season: "dolorem",
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
        Team: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerDetails != nil {
        // handle response
    }
}
```

## PlayerGameLogsBySeason

Player Game Logs By Season

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
    res, err := s.SDK.PlayerGameLogsBySeason(ctx, operations.PlayerGameLogsBySeasonRequest{
        Format: operations.PlayerGameLogsBySeasonFormatEnumXML,
        Numberofgames: "enim",
        Playerid: "omnis",
        Season: "nemo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGames != nil {
        // handle response
    }
}
```

## PlayerGameRedZoneStats

Player Game Red Zone Stats

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
    res, err := s.SDK.PlayerGameRedZoneStats(ctx, operations.PlayerGameRedZoneStatsRequest{
        Format: operations.PlayerGameRedZoneStatsFormatEnumXML,
        Season: "excepturi",
        Week: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameRedZones != nil {
        // handle response
    }
}
```

## PlayerGameRedZoneStatsInsideFive

Player Game Red Zone Stats Inside Five

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
    res, err := s.SDK.PlayerGameRedZoneStatsInsideFive(ctx, operations.PlayerGameRedZoneStatsInsideFiveRequest{
        Format: operations.PlayerGameRedZoneStatsInsideFiveFormatEnumXML,
        Season: "culpa",
        Week: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameRedZones != nil {
        // handle response
    }
}
```

## PlayerGameRedZoneStatsInsideTen

Player Game Red Zone Stats Inside Ten

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
    res, err := s.SDK.PlayerGameRedZoneStatsInsideTen(ctx, operations.PlayerGameRedZoneStatsInsideTenRequest{
        Format: operations.PlayerGameRedZoneStatsInsideTenFormatEnumJSON,
        Season: "architecto",
        Week: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameRedZones != nil {
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
        Format: operations.PlayerGameStatsByPlayerFormatEnumXML,
        Playerid: "culpa",
        Season: "consequuntur",
        Week: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGame != nil {
        // handle response
    }
}
```

## PlayerGameStatsByTeam

Player Game Stats by Team

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
    res, err := s.SDK.PlayerGameStatsByTeam(ctx, operations.PlayerGameStatsByTeamRequest{
        Format: operations.PlayerGameStatsByTeamFormatEnumJSON,
        Season: "occaecati",
        Team: "numquam",
        Week: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGames != nil {
        // handle response
    }
}
```

## PlayerGameStatsByWeek

Player Game Stats by Week

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
    res, err := s.SDK.PlayerGameStatsByWeek(ctx, operations.PlayerGameStatsByWeekRequest{
        Format: operations.PlayerGameStatsByWeekFormatEnumXML,
        Season: "molestiae",
        Week: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGames != nil {
        // handle response
    }
}
```

## PlayerGameStatsByWeekDelta

Player Game Stats by Week Delta

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
    res, err := s.SDK.PlayerGameStatsByWeekDelta(ctx, operations.PlayerGameStatsByWeekDeltaRequest{
        Format: operations.PlayerGameStatsByWeekDeltaFormatEnumJSON,
        Minutes: "quia",
        Season: "quis",
        Week: "vitae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGames != nil {
        // handle response
    }
}
```

## PlayerGameStatsDelta

Player Game Stats Delta

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
    res, err := s.SDK.PlayerGameStatsDelta(ctx, operations.PlayerGameStatsDeltaRequest{
        Format: operations.PlayerGameStatsDeltaFormatEnumJSON,
        Minutes: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGames != nil {
        // handle response
    }
}
```

## PlayerSeasonRedZoneStats

Player Season Red Zone Stats

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
    res, err := s.SDK.PlayerSeasonRedZoneStats(ctx, operations.PlayerSeasonRedZoneStatsRequest{
        Format: operations.PlayerSeasonRedZoneStatsFormatEnumXML,
        Season: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasonRedZones != nil {
        // handle response
    }
}
```

## PlayerSeasonRedZoneStatsInsideFive

Player Season Red Zone Stats Inside Five

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
    res, err := s.SDK.PlayerSeasonRedZoneStatsInsideFive(ctx, operations.PlayerSeasonRedZoneStatsInsideFiveRequest{
        Format: operations.PlayerSeasonRedZoneStatsInsideFiveFormatEnumJSON,
        Season: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasonRedZones != nil {
        // handle response
    }
}
```

## PlayerSeasonRedZoneStatsInsideTen

Player Season Red Zone Stats Inside Ten

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
    res, err := s.SDK.PlayerSeasonRedZoneStatsInsideTen(ctx, operations.PlayerSeasonRedZoneStatsInsideTenRequest{
        Format: operations.PlayerSeasonRedZoneStatsInsideTenFormatEnumJSON,
        Season: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasonRedZones != nil {
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
        Season: "possimus",
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
        Format: operations.PlayerSeasonStatsByPlayerFormatEnumXML,
        Playerid: "quasi",
        Season: "error",
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
        Format: operations.PlayerSeasonStatsByTeamFormatEnumJSON,
        Season: "laborum",
        Team: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasons != nil {
        // handle response
    }
}
```

## PlayerSeasonThirdDownStats

Player Season Third Down Stats

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
    res, err := s.SDK.PlayerSeasonThirdDownStats(ctx, operations.PlayerSeasonThirdDownStatsRequest{
        Format: operations.PlayerSeasonThirdDownStatsFormatEnumJSON,
        Season: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasonThirdDowns != nil {
        // handle response
    }
}
```

## ProBowlers

Pro Bowlers

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
    res, err := s.SDK.ProBowlers(ctx, operations.ProBowlersRequest{
        Format: operations.ProBowlersFormatEnumJSON,
        Season: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerInfos != nil {
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
        Format: "praesentium",
        Season: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Schedules != nil {
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
        Date: "ipsa",
        Format: "omnis",
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
        Format: "voluptate",
        Season: "cum",
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
        Format: "perferendis",
        Season: "doloremque",
        Week: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Scores != nil {
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
        Format: operations.ScoresByWeekSimulationFormatEnumXML,
        Numberofplays: "maiores",
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
        Format: "dicta",
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
        Format: "corporis",
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
        Format: "dolore",
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
        Format: "iusto",
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
        Format: "dicta",
        Season: "harum",
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
        Numberofgames: "accusamus",
        Season: "commodi",
        Teamid: "repudiandae",
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
        Format: operations.TeamGameStatsFormatEnumXML,
        Season: "ipsum",
        Week: "quidem",
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
        Season: "excepturi",
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
        Format: "pariatur",
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
        Format: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Teams != nil {
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
        Format: "praesentium",
        Season: "rem",
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
        Format: "voluptates",
        Type: "quasi",
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
        Format: "repudiandae",
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
    res, err := s.SDK.WeekLastCompleted(ctx, operations.WeekLastCompletedRequest{
        Format: "sint",
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
    res, err := s.SDK.WeekUpcoming(ctx, operations.WeekUpcomingRequest{
        Format: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WeekUpcoming200ApplicationJSONInteger != nil {
        // handle response
    }
}
```
