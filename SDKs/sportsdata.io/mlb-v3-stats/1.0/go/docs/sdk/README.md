# SDK

## Overview

MLB scores, stats, and news API.

### Available Operations

* [AreGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [BatterVsPitcherStats](#battervspitcherstats) - Batter vs. Pitcher Stats
* [BoxScore](#boxscore) - Box Score
* [BoxScoresByDate](#boxscoresbydate) - Box Scores by Date
* [BoxScoresByDateDelta](#boxscoresbydatedelta) - Box Scores by Date Delta
* [CurrentSeason](#currentseason) - Current Season
* [DfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [GamesByDate](#gamesbydate) - Games by Date
* [News](#news) - News
* [NewsByDate](#newsbydate) - News by Date
* [NewsByPlayer](#newsbyplayer) - News by Player
* [PlayerDetailsByActive](#playerdetailsbyactive) - Player Details by Active
* [PlayerDetailsByFreeAgents](#playerdetailsbyfreeagents) - Player Details by Free Agents
* [PlayerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [PlayerGameLogsBySeason](#playergamelogsbyseason) - Player Game Logs By Season
* [PlayerGameStatsByDate](#playergamestatsbydate) - Player Game Stats by Date
* [PlayerGameStatsByPlayer](#playergamestatsbyplayer) - Player Game Stats by Player
* [PlayerSeasonAwayStats](#playerseasonawaystats) - Player Season Away Stats
* [PlayerSeasonHomeStats](#playerseasonhomestats) - Player Season Home Stats
* [PlayerSeasonSplitStats](#playerseasonsplitstats) - Player Season Split Stats
* [PlayerSeasonStats](#playerseasonstats) - Player Season Stats
* [PlayerSeasonStatsByPlayer](#playerseasonstatsbyplayer) - Player Season Stats By Player
* [PlayerSeasonStatsByTeam](#playerseasonstatsbyteam) - Player Season Stats by Team
* [PlayerSeasonStatsSplitByTeam](#playerseasonstatssplitbyteam) - Player Season Stats Split By Team
* [PlayersByTeam](#playersbyteam) - Players by Team
* [Schedules](#schedules) - Schedules
* [Stadiums](#stadiums) - Stadiums
* [Standings](#standings) - Standings
* [TeamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [TeamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
* [TeamHittingVsStartingPitcher](#teamhittingvsstartingpitcher) - Team Hitting vs. Starting Pitcher
* [TeamSeasonStats](#teamseasonstats) - Team Season Stats
* [TeamsActive](#teamsactive) - Teams (Active)
* [TeamsAll](#teamsall) - Teams (All)

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

## BatterVsPitcherStats

Batter vs. Pitcher Stats

### Example Usage

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
    res, err := s.SDK.BatterVsPitcherStats(ctx, operations.BatterVsPitcherStatsRequest{
        Format: operations.BatterVsPitcherStatsFormatEnumJSON,
        Hitterid: "quibusdam",
        Pitcherid: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasons != nil {
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
        Gameid: "corrupti",
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
        Date: "illum",
        Format: operations.BoxScoresByDateFormatEnumXML,
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

## CurrentSeason

Current Season

### Example Usage

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
    res, err := s.SDK.CurrentSeason(ctx, operations.CurrentSeasonRequest{
        Format: operations.CurrentSeasonFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Season != nil {
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
        Date: "magnam",
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
        Date: "ipsa",
        Format: operations.GamesByDateFormatEnumJSON,
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
        Format: operations.NewsFormatEnumXML,
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
        Format: operations.NewsByPlayerFormatEnumJSON,
        Playerid: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.News != nil {
        // handle response
    }
}
```

## PlayerDetailsByActive

Player Details by Active

### Example Usage

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
    res, err := s.SDK.PlayerDetailsByActive(ctx, operations.PlayerDetailsByActiveRequest{
        Format: operations.PlayerDetailsByActiveFormatEnumJSON,
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
        Format: operations.PlayerDetailsByPlayerFormatEnumJSON,
        Playerid: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Player != nil {
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
        Numberofgames: "temporibus",
        Playerid: "ab",
        Season: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGames != nil {
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
        Date: "veritatis",
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
        Date: "perferendis",
        Format: operations.PlayerGameStatsByPlayerFormatEnumXML,
        Playerid: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGame != nil {
        // handle response
    }
}
```

## PlayerSeasonAwayStats

Player Season Away Stats

### Example Usage

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
    res, err := s.SDK.PlayerSeasonAwayStats(ctx, operations.PlayerSeasonAwayStatsRequest{
        Format: operations.PlayerSeasonAwayStatsFormatEnumJSON,
        Season: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasons != nil {
        // handle response
    }
}
```

## PlayerSeasonHomeStats

Player Season Home Stats

### Example Usage

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
    res, err := s.SDK.PlayerSeasonHomeStats(ctx, operations.PlayerSeasonHomeStatsRequest{
        Format: operations.PlayerSeasonHomeStatsFormatEnumXML,
        Season: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasons != nil {
        // handle response
    }
}
```

## PlayerSeasonSplitStats

Player Season Split Stats

### Example Usage

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
    res, err := s.SDK.PlayerSeasonSplitStats(ctx, operations.PlayerSeasonSplitStatsRequest{
        Format: operations.PlayerSeasonSplitStatsFormatEnumJSON,
        Season: "maiores",
        Split: operations.PlayerSeasonSplitStatsSplitEnumR,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasons != nil {
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
        Season: "quod",
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

Player Season Stats By Player

### Example Usage

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
        Playerid: "totam",
        Season: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeason != nil {
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
        Season: "dicta",
        Team: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasons != nil {
        // handle response
    }
}
```

## PlayerSeasonStatsSplitByTeam

Player Season Stats Split By Team

### Example Usage

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
    res, err := s.SDK.PlayerSeasonStatsSplitByTeam(ctx, operations.PlayerSeasonStatsSplitByTeamRequest{
        Format: operations.PlayerSeasonStatsSplitByTeamFormatEnumJSON,
        Season: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasons != nil {
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
        Team: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
        // handle response
    }
}
```

## Schedules

Schedules

### Example Usage

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
    res, err := s.SDK.Schedules(ctx, operations.SchedulesRequest{
        Format: operations.SchedulesFormatEnumJSON,
        Season: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
        // handle response
    }
}
```

## Stadiums

Stadiums

### Example Usage

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
        Season: "commodi",
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
        Numberofgames: "modi",
        Season: "qui",
        Teamid: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamGames != nil {
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
        Date: "cum",
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

## TeamHittingVsStartingPitcher

Team Hitting vs. Starting Pitcher

### Example Usage

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
    res, err := s.SDK.TeamHittingVsStartingPitcher(ctx, operations.TeamHittingVsStartingPitcherRequest{
        Format: operations.TeamHittingVsStartingPitcherFormatEnumXML,
        Gameid: "excepturi",
        Team: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasons != nil {
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
        Season: "ad",
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

Teams (Active)

### Example Usage

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
        Format: operations.TeamsActiveFormatEnumJSON,
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

Teams (All)

### Example Usage

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
