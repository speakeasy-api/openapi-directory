# SDK

## Overview

NHL play-by-play API.

### Available Operations

* [PlayByPlay](#playbyplay) - Play By Play
* [PlayByPlayDelta](#playbyplaydelta) - Play By Play Delta

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
        Gameid: "quibusdam",
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
        Date: "unde",
        Format: operations.PlayByPlayDeltaFormatEnumJSON,
        Minutes: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PlayByPlays != nil {
        // handle response
    }
}
```
