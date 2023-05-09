# SDK

### Available Operations

* [CurrentSeason](#currentseason) - Current Season
* [DfsSlates](#dfsslates) - DFS Slates
* [Injuries](#injuries) - Injuries
* [InjuriesHistorical](#injurieshistorical) - Injuries (Historical)
* [Leaderboard](#leaderboard) - Leaderboard
* [News](#news) - News
* [NewsByDate](#newsbydate) - News by Date
* [NewsByPlayer](#newsbyplayer) - News by Player
* [Player](#player) - Player
* [PlayerSeasonStatsWWorldGolfRankings](#playerseasonstatswworldgolfrankings) - Player Season Stats (w/ World Golf Rankings)
* [PlayerTournamentProjectedStatsWDraftkingsSalaries](#playertournamentprojectedstatswdraftkingssalaries) - Player Tournament Projected Stats (w/ DraftKings Salaries)
* [PlayerTournamentStatsByPlayer](#playertournamentstatsbyplayer) - Player Tournament Stats By Player
* [Players](#players) - Players
* [Schedule](#schedule) - Schedule
* [ScheduleBySeason](#schedulebyseason) - Schedule by Season

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

## DfsSlates

DFS Slates

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DfsSlates(ctx, operations.DfsSlatesRequest{
        Format: operations.DfsSlatesFormatEnumJSON,
        Tournamentid: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DfsSlates != nil {
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
        Format: operations.InjuriesFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Injuries != nil {
        // handle response
    }
}
```

## InjuriesHistorical

Injuries (Historical)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.InjuriesHistorical(ctx, operations.InjuriesHistoricalRequest{
        Format: operations.InjuriesHistoricalFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Injuries != nil {
        // handle response
    }
}
```

## Leaderboard

Leaderboard

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.Leaderboard(ctx, operations.LeaderboardRequest{
        Format: operations.LeaderboardFormatEnumJSON,
        Tournamentid: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Leaderboard != nil {
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
        Date: "error",
        Format: operations.NewsByDateFormatEnumJSON,
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
        Playerid: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.News != nil {
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
        Format: operations.PlayerFormatEnumXML,
        Playerid: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Player != nil {
        // handle response
    }
}
```

## PlayerSeasonStatsWWorldGolfRankings

Player Season Stats (w/ World Golf Rankings)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PlayerSeasonStatsWWorldGolfRankings(ctx, operations.PlayerSeasonStatsWWorldGolfRankingsRequest{
        Format: operations.PlayerSeasonStatsWWorldGolfRankingsFormatEnumXML,
        Season: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasons != nil {
        // handle response
    }
}
```

## PlayerTournamentProjectedStatsWDraftkingsSalaries

Player Tournament Projected Stats (w/ DraftKings Salaries)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PlayerTournamentProjectedStatsWDraftkingsSalaries(ctx, operations.PlayerTournamentProjectedStatsWDraftkingsSalariesRequest{
        Format: operations.PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnumXML,
        Tournamentid: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerTournamentProjections != nil {
        // handle response
    }
}
```

## PlayerTournamentStatsByPlayer

Player Tournament Stats By Player

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PlayerTournamentStatsByPlayer(ctx, operations.PlayerTournamentStatsByPlayerRequest{
        Format: operations.PlayerTournamentStatsByPlayerFormatEnumXML,
        Playerid: "minus",
        Tournamentid: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerTournament != nil {
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
        Format: operations.ScheduleFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tournaments != nil {
        // handle response
    }
}
```

## ScheduleBySeason

Schedule by Season

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ScheduleBySeason(ctx, operations.ScheduleBySeasonRequest{
        Format: operations.ScheduleBySeasonFormatEnumJSON,
        Season: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tournaments != nil {
        // handle response
    }
}
```
