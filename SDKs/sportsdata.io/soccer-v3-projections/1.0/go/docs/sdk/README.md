# SDK

### Available Operations

* [DfsSlatesByDate](#dfsslatesbydate) - Dfs Slates By Date
* [InjuredPlayersByCompetition](#injuredplayersbycompetition) - Injured Players By Competition
* [ProjectedPlayerGameStatsByCompetitionWDfsSalaries](#projectedplayergamestatsbycompetitionwdfssalaries) - Projected Player Game Stats by Competition (w/ DFS Salaries)
* [ProjectedPlayerGameStatsByDateWDfsSalaries](#projectedplayergamestatsbydatewdfssalaries) - Projected Player Game Stats by Date (w/ DFS Salaries)
* [ProjectedPlayerGameStatsByPlayerWDfsSalaries](#projectedplayergamestatsbyplayerwdfssalaries) - Projected Player Game Stats by Player (w/ DFS Salaries)
* [UpcomingDfsSlatesByCompetition](#upcomingdfsslatesbycompetition) - Upcoming Dfs Slates By Competition

## DfsSlatesByDate

Dfs Slates By Date

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
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

## InjuredPlayersByCompetition

This endpoint provides all currently injured soccer players by competition, along with injury details.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.InjuredPlayersByCompetition(ctx, operations.InjuredPlayersByCompetitionRequest{
        Competition: "unde",
        Format: operations.InjuredPlayersByCompetitionFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Players != nil {
        // handle response
    }
}
```

## ProjectedPlayerGameStatsByCompetitionWDfsSalaries

Projected Player Game Stats by Competition (w/ DFS Salaries)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ProjectedPlayerGameStatsByCompetitionWDfsSalaries(ctx, operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest{
        Competition: "corrupti",
        Date: "illum",
        Format: operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesFormatEnumXML,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameProjections != nil {
        // handle response
    }
}
```

## ProjectedPlayerGameStatsByDateWDfsSalaries

Projected Player Game Stats by Date (w/ DFS Salaries)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ProjectedPlayerGameStatsByDateWDfsSalaries(ctx, operations.ProjectedPlayerGameStatsByDateWDfsSalariesRequest{
        Date: "error",
        Format: operations.ProjectedPlayerGameStatsByDateWDfsSalariesFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameProjections != nil {
        // handle response
    }
}
```

## ProjectedPlayerGameStatsByPlayerWDfsSalaries

Projected Player Game Stats by Player (w/ DFS Salaries)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ProjectedPlayerGameStatsByPlayerWDfsSalaries(ctx, operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesRequest{
        Date: "suscipit",
        Format: operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnumXML,
        Playerid: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameProjections != nil {
        // handle response
    }
}
```

## UpcomingDfsSlatesByCompetition

Upcoming Dfs Slates By Competition

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyHeader: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpcomingDfsSlatesByCompetition(ctx, operations.UpcomingDfsSlatesByCompetitionRequest{
        CompetitionID: "debitis",
        Format: operations.UpcomingDfsSlatesByCompetitionFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DfsSlates != nil {
        // handle response
    }
}
```
