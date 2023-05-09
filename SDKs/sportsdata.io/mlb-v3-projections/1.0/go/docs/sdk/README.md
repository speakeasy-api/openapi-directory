# SDK

## Overview

MLB projections API.

### Available Operations

* [DepthCharts](#depthcharts) - Depth Charts
* [DfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [InjuredPlayers](#injuredplayers) - Injured Players
* [ProjectedPlayerGameStatsByDateWInjuriesDfsSalaries](#projectedplayergamestatsbydatewinjuriesdfssalaries) - Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
* [ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries](#projectedplayergamestatsbyplayerwinjuriesdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
* [ProjectedPlayerSeasonStatsWithAdp](#projectedplayerseasonstatswithadp) - Projected Player Season Stats (with ADP)
* [StartingLineupsByDate](#startinglineupsbydate) - Starting Lineups by Date

## DepthCharts

Returns Depth Charts for all active MLB teams.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
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

This endpoint provides all currently injured MLB players, along with injury details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
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

    if res.PlayerGameProjections != nil {
        // handle response
    }
}
```

## ProjectedPlayerSeasonStatsWithAdp

Projected Player Season Stats (with ADP)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ProjectedPlayerSeasonStatsWithAdp(ctx, operations.ProjectedPlayerSeasonStatsWithAdpRequest{
        Format: operations.ProjectedPlayerSeasonStatsWithAdpFormatEnumJSON,
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

## StartingLineupsByDate

Starting Lineups by Date

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
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
        Date: "iure",
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
