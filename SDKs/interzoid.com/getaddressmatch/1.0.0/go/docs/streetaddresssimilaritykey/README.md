# StreetAddressSimilarityKey

### Available Operations

* [Getaddressmatch](#getaddressmatch) - Gets a similarity key for matching purposes for address data

## Getaddressmatch

Gets a similarity key for matching purposes for street address data


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
    res, err := s.StreetAddressSimilarityKey.Getaddressmatch(ctx, operations.GetaddressmatchRequest{
        Address: "6342 Bednar Vista",
        License: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getaddressmatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
