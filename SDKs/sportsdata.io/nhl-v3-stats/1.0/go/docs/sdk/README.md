# SDK

### Available Operations

* [AreGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [BoxScore](#boxscore) - Box Score
* [BoxScoresByDate](#boxscoresbydate) - Box Scores by Date
* [BoxScoresByDateDelta](#boxscoresbydatedelta) - Box Scores by Date Delta
* [CurrentSeason](#currentseason) - Current Season
* [DfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [GamesByDate](#gamesbydate) - Games by Date
* [LineCombinationsBySeason](#linecombinationsbyseason) - Line Combinations by Season
* [News](#news) - News
* [NewsByDate](#newsbydate) - News by Date
* [NewsByPlayer](#newsbyplayer) - News by Player
* [PlayerDetailsByActive](#playerdetailsbyactive) - Player Details by Active
* [PlayerDetailsByFreeAgent](#playerdetailsbyfreeagent) - Player Details by Free Agent
* [PlayerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [PlayerGameLogsBySeason](#playergamelogsbyseason) - Player Game Logs By Season
* [PlayerGameStatsByDate](#playergamestatsbydate) - Player Game Stats by Date
* [PlayerGameStatsByPlayer](#playergamestatsbyplayer) - Player Game Stats by Player
* [PlayerSeasonStats](#playerseasonstats) - Player Season Stats
* [PlayerSeasonStatsByPlayer](#playerseasonstatsbyplayer) - Player Season Stats By Player
* [PlayerSeasonStatsByTeam](#playerseasonstatsbyteam) - Player Season Stats by Team
* [PlayersByTeam](#playersbyteam) - Players by Team
* [Schedules](#schedules) - Schedules
* [Stadiums](#stadiums) - Stadiums
* [Standings](#standings) - Standings
* [TeamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [TeamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
* [TeamSeasonStats](#teamseasonstats) - Team Season Stats
* [TeamStatsAllowedByPosition](#teamstatsallowedbyposition) - Team Stats Allowed by Position
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
        Date: "corrupti",
        Format: operations.BoxScoresByDateDeltaFormatEnumJSON,
        Minutes: "vel",
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
        Format: operations.CurrentSeasonFormatEnumJSON,
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
        Date: "deserunt",
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
        Date: "iure",
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

## LineCombinationsBySeason

Line Combinations by Season

### Example Usage

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
    res, err := s.SDK.LineCombinationsBySeason(ctx, operations.LineCombinationsBySeasonRequest{
        Format: operations.LineCombinationsBySeasonFormatEnumJSON,
        Season: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamLines != nil {
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
        Date: "tempora",
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
        Playerid: "minus",
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

## PlayerDetailsByFreeAgent

Player Details by Free Agent

### Example Usage

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
    res, err := s.SDK.PlayerDetailsByFreeAgent(ctx, operations.PlayerDetailsByFreeAgentRequest{
        Format: operations.PlayerDetailsByFreeAgentFormatEnumJSON,
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
        Playerid: "excepturi",
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
        Numberofgames: "recusandae",
        Playerid: "temporibus",
        Season: "ab",
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
        Date: "quis",
        Format: operations.PlayerGameStatsByDateFormatEnumXML,
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
        Date: "deserunt",
        Format: operations.PlayerGameStatsByPlayerFormatEnumXML,
        Playerid: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGame != nil {
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
        Season: "sapiente",
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
        Format: operations.PlayerSeasonStatsByPlayerFormatEnumJSON,
        Playerid: "odit",
        Season: "at",
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
        Season: "maiores",
        Team: "molestiae",
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
        Format: operations.PlayersByTeamFormatEnumJSON,
        Team: "quod",
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
        Format: operations.SchedulesFormatEnumXML,
        Season: "totam",
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
        Format: operations.StandingsFormatEnumJSON,
        Season: "dicta",
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
        Numberofgames: "officia",
        Season: "occaecati",
        Teamid: "fugit",
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
        Date: "deleniti",
        Format: operations.TeamGameStatsByDateFormatEnumJSON,
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
        Season: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamSeasons != nil {
        // handle response
    }
}
```

## TeamStatsAllowedByPosition

Team Stats Allowed by Position

### Example Usage

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
    res, err := s.SDK.TeamStatsAllowedByPosition(ctx, operations.TeamStatsAllowedByPositionRequest{
        Format: operations.TeamStatsAllowedByPositionFormatEnumXML,
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
