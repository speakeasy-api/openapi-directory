# SDK

### Available Operations

* [DfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [InjuredPlayers](#injuredplayers) - Injured Players
* [ProjectedPlayerGameStatsByDateWInjuriesDfsSalaries](#projectedplayergamestatsbydatewinjuriesdfssalaries) - Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
* [ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalaries](#projectedplayergamestatsbyplayerwinjuriesdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
* [StartingGoaltendersByDate](#startinggoaltendersbydate) - Starting Goaltenders by Date

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

This endpoint provides all currently injured NHL players, along with injury details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
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

## StartingGoaltendersByDate

This endpoint provides the projected & confirmed starting goaltenders for NHL games on a given date.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartingGoaltendersByDate(ctx, operations.StartingGoaltendersByDateRequest{
        Date: "deserunt",
        Format: operations.StartingGoaltendersByDateFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartingGoaltenders != nil {
        // handle response
    }
}
```
