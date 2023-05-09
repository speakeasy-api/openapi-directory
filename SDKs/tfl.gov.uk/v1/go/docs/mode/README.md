# Mode

### Available Operations

* [ModeArrivals](#modearrivals) - Gets the next arrival predictions for all stops of a given mode
* [ModeGetActiveServiceTypes](#modegetactiveservicetypes) - Returns the service type active for a mode.
            Currently only supports tube

## ModeArrivals

Gets the next arrival predictions for all stops of a given mode

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
    res, err := s.Mode.ModeArrivals(ctx, operations.ModeArrivalsRequest{
        Count: sdk.Int(569965),
        Mode: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPredictions != nil {
        // handle response
    }
}
```

## ModeGetActiveServiceTypes

Returns the service type active for a mode.
            Currently only supports tube

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Mode.ModeGetActiveServiceTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesActiveServiceTypes != nil {
        // handle response
    }
}
```
