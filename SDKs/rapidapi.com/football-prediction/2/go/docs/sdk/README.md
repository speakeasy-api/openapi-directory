# SDK

## Overview

The Football Prediction API allows developers to get predictions for upcoming football (soccer) matches, results for past matches, and performance monitoring for statistical models.

### Available Operations

* [GetAPIV2ListFederations](#getapiv2listfederations) - Returns an array of all the available federations.
* [GetAPIV2ListMarkets](#getapiv2listmarkets) - Returns an array of all the supported prediction markets
* [GetAPIV2PerformanceStats](#getapiv2performancestats) - Returns predictions accuracy in the last 1, 7, 14, 30 days.
* [GetAPIV2Predictions](#getapiv2predictions) - This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.
* [GetAPIV2PredictionsID](#getapiv2predictionsid) - Returns all predictions available for a match id.

## GetAPIV2ListFederations

Returns an array of all the available federations.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAPIV2ListFederations(ctx, operations.GetAPIV2ListFederationsRequest{
        XRapidAPIKey: sdk.String("a05dfc2d-df7c-4c78-8a1b-a928fc816742"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIV2ListFederations200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAPIV2ListMarkets

Returns an array of all the supported prediction markets

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAPIV2ListMarkets(ctx, operations.GetAPIV2ListMarketsRequest{
        XRapidAPIKey: sdk.String("cb739205-9293-496f-aa75-96eb10faaa23"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIV2ListMarkets200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAPIV2PerformanceStats

Returns predictions accuracy in the last 1, 7, 14, 30 days.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAPIV2PerformanceStats(ctx, operations.GetAPIV2PerformanceStatsRequest{
        XRapidAPIKey: sdk.String("52c59559-07af-4f1a-ba2f-a9467739251a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIV2PerformanceStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetAPIV2Predictions

This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAPIV2Predictions(ctx, operations.GetAPIV2PredictionsRequest{
        XRapidAPIKey: sdk.String("a52c3f5a-d019-4da1-bfe7-8f097b0074f1"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAPIV2PredictionsID

Returns all predictions available for a match id.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAPIV2PredictionsID(ctx, operations.GetAPIV2PredictionsIDRequest{
        ID: 359444,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIV2PredictionsID200ApplicationJSONObject != nil {
        // handle response
    }
}
```
