# SDK

## Overview

NFL projected stats API.

### Available Operations

* [DfsSlateOwnershipProjectionsBySlateid](#dfsslateownershipprojectionsbyslateid) - DFS Slate Ownership Projections by SlateID
* [DfsSlatesByDate](#dfsslatesbydate) - DFS Slates by Date
* [DfsSlatesByWeek](#dfsslatesbyweek) - DFS Slates by Week
* [IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries](#idpprojectedplayergamestatsbyplayerwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* [IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries](#idpprojectedplayergamestatsbyteamwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* [IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries](#idpprojectedplayergamestatsbyweekwinjurieslineupsdfssalaries) - IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* [InjuredPlayers](#injuredplayers) - Injured Players
* [ProjectedFantasyDefenseGameStatsWDfsSalaries](#projectedfantasydefensegamestatswdfssalaries) - Projected Fantasy Defense Game Stats (w/ DFS Salaries)
* [ProjectedFantasyDefenseSeasonStatsWAdp](#projectedfantasydefenseseasonstatswadp) - Projected Fantasy Defense Season Stats (w/ ADP)
* [ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries](#projectedplayergamestatsbyplayerwinjurieslineupsdfssalaries) - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
* [ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries](#projectedplayergamestatsbyteamwinjurieslineupsdfssalaries) - Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
* [ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries](#projectedplayergamestatsbyweekwinjurieslineupsdfssalaries) - Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
* [ProjectedPlayerSeasonStatsByPlayerWAdp](#projectedplayerseasonstatsbyplayerwadp) - Projected Player Season Stats by Player (w/ ADP)
* [ProjectedPlayerSeasonStatsByTeamWAdp](#projectedplayerseasonstatsbyteamwadp) - Projected Player Season Stats by Team (w/ ADP)
* [ProjectedPlayerSeasonStatsWAdp](#projectedplayerseasonstatswadp) - Projected Player Season Stats (w/ ADP)
* [UpcomingDfsSlateOwnershipProjections](#upcomingdfsslateownershipprojections) - Upcoming DFS Slate Ownership Projections

## DfsSlateOwnershipProjectionsBySlateid

Slate Ownership Projections for a specific slate. Projections are for GPP format ownership. Will return an empty list if the slate is not yet projected or not a slate we have projections for.

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
    res, err := s.SDK.DfsSlateOwnershipProjectionsBySlateid(ctx, operations.DfsSlateOwnershipProjectionsBySlateidRequest{
        Format: operations.DfsSlateOwnershipProjectionsBySlateidFormatEnumJSON,
        SlateID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DfsSlateWithOwnershipProjection != nil {
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
        Date: "unde",
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
        Format: operations.DfsSlatesByWeekFormatEnumJSON,
        Season: "illum",
        Week: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DfsSlates != nil {
        // handle response
    }
}
```

## IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries

IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)

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
    res, err := s.SDK.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(ctx, operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest{
        Format: operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnumJSON,
        Playerid: "deserunt",
        Season: "suscipit",
        Week: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameProjection != nil {
        // handle response
    }
}
```

## IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries

IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)

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
    res, err := s.SDK.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(ctx, operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest{
        Format: operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnumXML,
        Season: "debitis",
        Team: "ipsa",
        Week: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameProjections != nil {
        // handle response
    }
}
```

## IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries

IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)

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
    res, err := s.SDK.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(ctx, operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest{
        Format: operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnumXML,
        Season: "suscipit",
        Week: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameProjections != nil {
        // handle response
    }
}
```

## InjuredPlayers

This endpoint provides all currently injured NFL players, along with injury details.

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

## ProjectedFantasyDefenseGameStatsWDfsSalaries

Projected Fantasy Defense Game Stats (w/ DFS Salaries)

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
    res, err := s.SDK.ProjectedFantasyDefenseGameStatsWDfsSalaries(ctx, operations.ProjectedFantasyDefenseGameStatsWDfsSalariesRequest{
        Format: operations.ProjectedFantasyDefenseGameStatsWDfsSalariesFormatEnumJSON,
        Season: "voluptatum",
        Week: "iusto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FantasyDefenseGameProjections != nil {
        // handle response
    }
}
```

## ProjectedFantasyDefenseSeasonStatsWAdp

Projected Fantasy Defense Season Stats (w/ ADP)

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
    res, err := s.SDK.ProjectedFantasyDefenseSeasonStatsWAdp(ctx, operations.ProjectedFantasyDefenseSeasonStatsWAdpRequest{
        Format: operations.ProjectedFantasyDefenseSeasonStatsWAdpFormatEnumJSON,
        Season: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FantasyDefenseSeasonProjections != nil {
        // handle response
    }
}
```

## ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries

Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)

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
    res, err := s.SDK.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(ctx, operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest{
        Format: operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesFormatEnumJSON,
        Playerid: "temporibus",
        Season: "ab",
        Week: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameProjection != nil {
        // handle response
    }
}
```

## ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries

Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)

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
    res, err := s.SDK.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(ctx, operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest{
        Format: operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesFormatEnumXML,
        Season: "deserunt",
        Team: "perferendis",
        Week: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameProjections != nil {
        // handle response
    }
}
```

## ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries

Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)

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
    res, err := s.SDK.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(ctx, operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest{
        Format: operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesFormatEnumJSON,
        Season: "sapiente",
        Week: "quo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameProjections != nil {
        // handle response
    }
}
```

## ProjectedPlayerSeasonStatsByPlayerWAdp

Projected Player Season Stats by Player (w/ ADP)

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
    res, err := s.SDK.ProjectedPlayerSeasonStatsByPlayerWAdp(ctx, operations.ProjectedPlayerSeasonStatsByPlayerWAdpRequest{
        Format: operations.ProjectedPlayerSeasonStatsByPlayerWAdpFormatEnumXML,
        Playerid: "at",
        Season: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasonProjection != nil {
        // handle response
    }
}
```

## ProjectedPlayerSeasonStatsByTeamWAdp

Projected Player Season Stats by Team (w/ ADP)

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
    res, err := s.SDK.ProjectedPlayerSeasonStatsByTeamWAdp(ctx, operations.ProjectedPlayerSeasonStatsByTeamWAdpRequest{
        Format: operations.ProjectedPlayerSeasonStatsByTeamWAdpFormatEnumJSON,
        Season: "molestiae",
        Team: "quod",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasonProjections != nil {
        // handle response
    }
}
```

## ProjectedPlayerSeasonStatsWAdp

Projected Player Season Stats (w/ ADP)

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
    res, err := s.SDK.ProjectedPlayerSeasonStatsWAdp(ctx, operations.ProjectedPlayerSeasonStatsWAdpRequest{
        Format: operations.ProjectedPlayerSeasonStatsWAdpFormatEnumJSON,
        Season: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerSeasonProjections != nil {
        // handle response
    }
}
```

## UpcomingDfsSlateOwnershipProjections

Grabs DFS Slates which have not yet started for which we have DFS Ownership projections. 

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
    res, err := s.SDK.UpcomingDfsSlateOwnershipProjections(ctx, operations.UpcomingDfsSlateOwnershipProjectionsRequest{
        Format: operations.UpcomingDfsSlateOwnershipProjectionsFormatEnumJSON,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DfsSlateWithOwnershipProjections != nil {
        // handle response
    }
}
```
