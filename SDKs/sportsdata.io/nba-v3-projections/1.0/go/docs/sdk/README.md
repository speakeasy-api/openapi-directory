# SDK

### Available Operations

* [DepthCharts](#depthcharts) - Depth Charts
* [DfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [InjuredPlayers](#injuredplayers) - Injured Players
* [ProjectedPlayerGameStatsByDateWInjuriesDfsSalaries](#projectedplayergamestatsbydatewinjuriesdfssalaries) - Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
* [ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries](#projectedplayergamestatsbyplayerwinjuriesdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
* [ProjectedPlayerSeasonStats](#projectedplayerseasonstats) - Projected Player Season Stats
* [ProjectedPlayerSeasonStatsByPlayer](#projectedplayerseasonstatsbyplayer) - Projected Player Season Stats by Player
* [ProjectedPlayerSeasonStatsByTeam](#projectedplayerseasonstatsbyteam) - Projected Player Season Stats by Team
* [StartingLineupsByDate](#startinglineupsbydate) - Starting Lineups by Date

## DepthCharts

This endpoint provides a depth chart for each NBA team.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
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
        Date: "distinctio",
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

## InjuredPlayers

This endpoint provides all currently injured NBA players, along with injury details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
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

## ProjectedPlayerGameStatsByDateWInjuriesDfsSalaries

Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ProjectedPlayerGameStatsByDateWInjuriesDfsSalaries(ctx, operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest{
        Date: "nulla",
        Format: operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameProjections != nil {
        // handle response
    }
}
```

## ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries

Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries(ctx, operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest{
        Date: "illum",
        Format: operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesFormatEnumXML,
        Playerid: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameProjection != nil {
        // handle response
    }
}
```

## ProjectedPlayerSeasonStats

Projected Player Season Stats

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ProjectedPlayerSeasonStats(ctx, operations.ProjectedPlayerSeasonStatsRequest{
        Format: operations.ProjectedPlayerSeasonStatsFormatEnumJSON,
        Season: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasonProjections != nil {
        // handle response
    }
}
```

## ProjectedPlayerSeasonStatsByPlayer

Projected Player Season Stats by Player

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ProjectedPlayerSeasonStatsByPlayer(ctx, operations.ProjectedPlayerSeasonStatsByPlayerRequest{
        Format: operations.ProjectedPlayerSeasonStatsByPlayerFormatEnumXML,
        Playerid: "magnam",
        Season: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasonProjection != nil {
        // handle response
    }
}
```

## ProjectedPlayerSeasonStatsByTeam

Projected Player Season Stats by Team

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ProjectedPlayerSeasonStatsByTeam(ctx, operations.ProjectedPlayerSeasonStatsByTeamRequest{
        Format: operations.ProjectedPlayerSeasonStatsByTeamFormatEnumXML,
        Season: "delectus",
        Team: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasonProjections != nil {
        // handle response
    }
}
```

## StartingLineupsByDate

This endpoint provides the projected & confirmed starting lineups for NBA games on a given date.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartingLineupsByDate(ctx, operations.StartingLineupsByDateRequest{
        Date: "suscipit",
        Format: operations.StartingLineupsByDateFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartingLineups != nil {
        // handle response
    }
}
```
