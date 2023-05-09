# SDK

## Overview

LoL v3 Projections

### Available Operations

* [DfsSlatesByDate](#dfsslatesbydate) - Dfs Slates By Date
* [ProjectedPlayerGameStatsByDate](#projectedplayergamestatsbydate) - Projected Player Game Stats by Date
* [ProjectedPlayerGameStatsByPlayer](#projectedplayergamestatsbyplayer) - Projected Player Game Stats by Player

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
        Date: "unde",
        Format: operations.ProjectedPlayerGameStatsByDateFormatEnumJSON,
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
    res, err := s.SDK.ProjectedPlayerGameStatsByPlayer(ctx, operations.ProjectedPlayerGameStatsByPlayerRequest{
        Date: "corrupti",
        Format: operations.ProjectedPlayerGameStatsByPlayerFormatEnumJSON,
        Playerid: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayerGameProjections != nil {
        // handle response
    }
}
```
