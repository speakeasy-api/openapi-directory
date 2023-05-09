# TravelTime

### Available Operations

* [TravelTimeGetCompareOverlay](#traveltimegetcompareoverlay) - Gets the TravelTime overlay.
* [TravelTimeGetOverlay](#traveltimegetoverlay) - Gets the TravelTime overlay.

## TravelTimeGetCompareOverlay

Gets the TravelTime overlay.

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
    res, err := s.TravelTime.TravelTimeGetCompareOverlay(ctx, operations.TravelTimeGetCompareOverlayRequest{
        CompareType: "aliquam",
        CompareValue: "sapiente",
        Direction: operations.TravelTimeGetCompareOverlayDirectionEnumAverage,
        Height: 355369,
        MapCenterLat: 4438.79,
        MapCenterLon: 3567.07,
        ModeID: "nisi",
        PinLat: 163.28,
        PinLon: 5318.49,
        ScenarioTitle: "qui",
        TimeOfDayID: "quibusdam",
        TravelTimeInterval: 401259,
        Width: 536275,
        Z: 929292,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemObject != nil {
        // handle response
    }
}
```

## TravelTimeGetOverlay

Gets the TravelTime overlay.

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
    res, err := s.TravelTime.TravelTimeGetOverlay(ctx, operations.TravelTimeGetOverlayRequest{
        Direction: operations.TravelTimeGetOverlayDirectionEnumTo,
        Height: 99615,
        MapCenterLat: 6091.78,
        MapCenterLon: 9453.02,
        ModeID: "quasi",
        PinLat: 8694.89,
        PinLon: 920.27,
        ScenarioTitle: "voluptate",
        TimeOfDayID: "ipsa",
        TravelTimeInterval: 326701,
        Width: 86532,
        Z: 232744,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemObject != nil {
        // handle response
    }
}
```
