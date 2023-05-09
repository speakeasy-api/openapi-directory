# AirQuality

### Available Operations

* [AirQualityGet](#airqualityget) - Gets air quality data feed

## AirQualityGet

Gets air quality data feed

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
    res, err := s.AirQuality.AirQualityGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemObject != nil {
        // handle response
    }
}
```
