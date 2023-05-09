# CountryMatchSimilarityKey

### Available Operations

* [Getcountrymatch](#getcountrymatch) - Gets a similarity key for matching purposes for country name data

## Getcountrymatch

Gets a similarity key to use for matching purposes for country name data

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
    res, err := s.CountryMatchSimilarityKey.Getcountrymatch(ctx, operations.GetcountrymatchRequest{
        Country: "Portugal",
        License: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcountrymatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
