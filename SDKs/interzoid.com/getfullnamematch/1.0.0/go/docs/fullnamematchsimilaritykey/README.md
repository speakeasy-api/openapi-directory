# FullNameMatchSimilarityKey

### Available Operations

* [Getfullnamematch](#getfullnamematch) - Gets a similarity key for matching purposes for full name data

## Getfullnamematch

Gets a similarity key for matching purposes for full name data, where first and last name are part of the same field.

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
    res, err := s.FullNameMatchSimilarityKey.Getfullnamematch(ctx, operations.GetfullnamematchRequest{
        Fullname: "distinctio",
        License: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getfullnamematch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
