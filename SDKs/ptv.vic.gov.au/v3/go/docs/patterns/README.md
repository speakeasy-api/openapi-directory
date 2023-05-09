# Patterns

### Available Operations

* [PatternsGetPatternByRun](#patternsgetpatternbyrun) - View the stopping pattern for a specific trip/service run

## PatternsGetPatternByRun

View the stopping pattern for a specific trip/service run

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Patterns.PatternsGetPatternByRun(ctx, operations.PatternsGetPatternByRunRequest{
        DateUtc: types.MustTimeFromString("2022-08-30T15:03:11.112Z"),
        Devid: sdk.String("vitae"),
        Expand: []PatternsGetPatternByRunExpandEnum{
            operations.PatternsGetPatternByRunExpandEnumDisruption,
            operations.PatternsGetPatternByRunExpandEnumRoute,
            operations.PatternsGetPatternByRunExpandEnumStop,
        },
        IncludeGeopath: sdk.Bool(false),
        IncludeSkippedStops: sdk.Bool(false),
        RouteType: operations.PatternsGetPatternByRunRouteTypeEnumThree,
        RunRef: "sequi",
        Signature: sdk.String("tenetur"),
        StopID: sdk.Int(368725),
        Token: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V3StoppingPattern != nil {
        // handle response
    }
}
```
