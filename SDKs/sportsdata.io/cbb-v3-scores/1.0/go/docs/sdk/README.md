# SDK

### Available Operations

* [AreGamesInProgress](#aregamesinprogress) - Are Games In Progress
* [CurrentSeason](#currentseason) - Current Season
* [GamesByDate](#gamesbydate) - Games by Date
* [GamesByDateBasic](#gamesbydatebasic) - Games by Date (Basic)
* [InjuredPlayers](#injuredplayers) - Injured Players
* [LeagueHierarchy](#leaguehierarchy) - League Hierarchy
* [PlayerDetailsByActive](#playerdetailsbyactive) - Player Details by Active
* [PlayerDetailsByPlayer](#playerdetailsbyplayer) - Player Details by Player
* [PlayerDetailsByTeam](#playerdetailsbyteam) - Player Details by Team
* [PlayersByTeamBasic](#playersbyteambasic) - Players by Team (Basic)
* [Schedules](#schedules) - Schedules
* [SchedulesBasic](#schedulesbasic) - Schedules (Basic)
* [Stadiums](#stadiums) - Stadiums
* [TeamGameLogsBySeason](#teamgamelogsbyseason) - Team Game Logs By Season
* [TeamGameStatsByDate](#teamgamestatsbydate) - Team Game Stats by Date
* [TeamSchedule](#teamschedule) - Team Schedule
* [TeamSeasonStats](#teamseasonstats) - Team Season Stats
* [Teams](#teams) - Teams
* [TeamsBasic](#teamsbasic) - Teams (Basic)
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
        Date: "quibusdam",
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

## GamesByDateBasic

Games by Date (Basic)

### Example Usage

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
    res, err := s.SDK.GamesByDateBasic(ctx, operations.GamesByDateBasicRequest{
        Date: "nulla",
        Format: operations.GamesByDateBasicFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreBasics != nil {
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
        Format: operations.InjuredPlayersFormatEnumJSON,
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
        Format: operations.PlayerDetailsByPlayerFormatEnumJSON,
        Playerid: "suscipit",
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
        Team: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
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
        Format: operations.PlayersByTeamBasicFormatEnumJSON,
        Team: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerBasics != nil {
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
        Season: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
        // handle response
    }
}
```

## SchedulesBasic

Schedules (Basic)

### Example Usage

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
    res, err := s.SDK.SchedulesBasic(ctx, operations.SchedulesBasicRequest{
        Format: operations.SchedulesBasicFormatEnumXML,
        Season: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScheduleBasics != nil {
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
        Format: operations.TeamGameLogsBySeasonFormatEnumJSON,
        Numberofgames: "voluptatum",
        Season: "iusto",
        Teamid: "excepturi",
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
        Date: "nisi",
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

## TeamSchedule

Team Schedule

### Example Usage

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
    res, err := s.SDK.TeamSchedule(ctx, operations.TeamScheduleRequest{
        Format: operations.TeamScheduleFormatEnumJSON,
        Season: "ab",
        Team: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Games != nil {
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
        Season: "deserunt",
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

## TeamsBasic

Teams (Basic)

### Example Usage

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
        Season: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tournament != nil {
        // handle response
    }
}
```
