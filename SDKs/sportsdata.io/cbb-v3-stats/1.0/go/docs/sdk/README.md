# SDK

### Available Operations

* [AreGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [BoxScore](#boxscore) - Box Score
* [BoxScoresByDate](#boxscoresbydate) - Box Scores by Date
* [BoxScoresByDateDelta](#boxscoresbydatedelta) - Box Scores by Date Delta
* [CurrentSeason](#currentseason) - Current Season
* [GamesByDate](#gamesbydate) - Games by Date
* [InjuredPlayers](#injuredplayers) - Injured Players
* [LeagueHierarchy](#leaguehierarchy) - League Hierarchy
* [PlayerDetailsByActive](#playerdetailsbyactive) - Player Details by Active
* [PlayerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [PlayerDetailsByTeam](#playerdetailsbyteam) - Player Details by Team
* [PlayerGameLogsBySeason](#playergamelogsbyseason) - Player Game Logs By Season
* [PlayerGameStatsByDate](#playergamestatsbydate) - Player Game Stats by Date
* [PlayerGameStatsByPlayer](#playergamestatsbyplayer) - Player Game Stats by Player
* [PlayerSeasonStats](#playerseasonstats) - Player Season Stats
* [PlayerSeasonStatsByPlayer](#playerseasonstatsbyplayer) - Player Season Stats By Player
* [PlayerSeasonStatsByTeam](#playerseasonstatsbyteam) - Player Season Stats by Team
* [ProjectedPlayerGameStatsByDate](#projectedplayergamestatsbydate) - Projected Player Game Stats by Date
* [ProjectedPlayerGameStatsByPlayer](#projectedplayergamestatsbyplayer) - Projected Player Game Stats by Player
* [Schedules](#schedules) - Schedules
* [Stadiums](#stadiums) - Stadiums
* [TeamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [TeamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
* [TeamSeasonStats](#teamseasonstats) - Team Season Stats
* [Teams](#teams) - Teams
* [TournamentHierarchy](#tournamenthierarchy) - Tournament Hierarchy

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
        Date: "deserunt",
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

## InjuredPlayers

This endpoint provides all currently injured college basketball players, along with injury details.

### Example Usage

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
    res, err := s.SDK.InjuredPlayers(ctx, operations.InjuredPlayersRequest{
        Format: operations.InjuredPlayersFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
        // handle response
    }
}
```

## LeagueHierarchy

League Hierarchy

### Example Usage

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
    res, err := s.SDK.LeagueHierarchy(ctx, operations.LeagueHierarchyRequest{
        Format: operations.LeagueHierarchyFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Conferences != nil {
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
        Playerid: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Player != nil {
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
        Team: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
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
        Numberofgames: "minus",
        Playerid: "placeat",
        Season: "voluptatum",
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
        Date: "iusto",
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
        Date: "nisi",
        Format: operations.PlayerGameStatsByPlayerFormatEnumJSON,
        Playerid: "temporibus",
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
        Format: operations.PlayerSeasonStatsFormatEnumXML,
        Season: "quis",
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
        Playerid: "deserunt",
        Season: "perferendis",
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
        Format: operations.PlayerSeasonStatsByTeamFormatEnumXML,
        Season: "repellendus",
        Team: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasons != nil {
        // handle response
    }
}
```

## ProjectedPlayerGameStatsByDate

Projected Player Game Stats by Date

### Example Usage

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
    res, err := s.SDK.ProjectedPlayerGameStatsByDate(ctx, operations.ProjectedPlayerGameStatsByDateRequest{
        Date: "quo",
        Format: operations.ProjectedPlayerGameStatsByDateFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameProjections != nil {
        // handle response
    }
}
```

## ProjectedPlayerGameStatsByPlayer

Projected Player Game Stats by Player

### Example Usage

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
    res, err := s.SDK.ProjectedPlayerGameStatsByPlayer(ctx, operations.ProjectedPlayerGameStatsByPlayerRequest{
        Date: "at",
        Format: operations.ProjectedPlayerGameStatsByPlayerFormatEnumJSON,
        Playerid: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameProjection != nil {
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
        Format: operations.TeamGameLogsBySeasonFormatEnumXML,
        Numberofgames: "totam",
        Season: "porro",
        Teamid: "dolorum",
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
        Date: "dicta",
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
        Season: "occaecati",
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

## TournamentHierarchy

Tournament Hierarchy

### Example Usage

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
    res, err := s.SDK.TournamentHierarchy(ctx, operations.TournamentHierarchyRequest{
        Format: operations.TournamentHierarchyFormatEnumJSON,
        Season: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tournament != nil {
        // handle response
    }
}
```
