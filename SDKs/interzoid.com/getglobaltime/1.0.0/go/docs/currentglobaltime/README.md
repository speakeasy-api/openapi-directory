# CurrentGlobalTime

### Available Operations

* [Getglobaltime](#getglobaltime) - Gets the current time for a global locale

## Getglobaltime

Gets the current time for a global locale (city, state, region, or country such as Chicago, London, Paris, Seoul, Spain, Buenos Aires, Hawaii, Moscow, Tokyo, Hanoi, etc.)

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
    res, err := s.CurrentGlobalTime.Getglobaltime(ctx, operations.GetglobaltimeRequest{
        License: "distinctio",
        Locale: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getglobaltime200ApplicationJSONObject != nil {
        // handle response
    }
}
```
