# CityNameSimilarityKey

### Available Operations

* [Getcitymatch](#getcitymatch) - Gets a similarity key for matching purposes for city name data

## Getcitymatch

Gets a similarity key for matching purposes for city name data.

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
    res, err := s.CityNameSimilarityKey.Getcitymatch(ctx, operations.GetcitymatchRequest{
        City: "Stiedemannstad",
        License: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcitymatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
