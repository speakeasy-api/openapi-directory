# SDK

## Overview

NFL play-by-play API.

### Available Operations

* [PlayByPlay](#playbyplay) - Play By Play
* [PlayByPlayDelta](#playbyplaydelta) - Play By Play Delta
* [PlayByPlaySimulation](#playbyplaysimulation) - Play By Play Simulation

## PlayByPlay

Play By Play

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
    res, err := s.SDK.PlayByPlay(ctx, operations.PlayByPlayRequest{
        Format: operations.PlayByPlayFormatEnumJSON,
        Hometeam: "nulla",
        Season: "corrupti",
        Week: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayByPlay != nil {
        // handle response
    }
}
```

## PlayByPlayDelta

Play By Play Delta

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
    res, err := s.SDK.PlayByPlayDelta(ctx, operations.PlayByPlayDeltaRequest{
        Format: operations.PlayByPlayDeltaFormatEnumXML,
        Minutes: "error",
        Season: "deserunt",
        Week: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayByPlays != nil {
        // handle response
    }
}
```

## PlayByPlaySimulation

Gets simulated live play-by-play of NFL games, covering the Conference Championship games on January 21, 2018.

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
    res, err := s.SDK.PlayByPlaySimulation(ctx, operations.PlayByPlaySimulationRequest{
        Format: operations.PlayByPlaySimulationFormatEnumXML,
        Numberofplays: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayByPlays != nil {
        // handle response
    }
}
```
