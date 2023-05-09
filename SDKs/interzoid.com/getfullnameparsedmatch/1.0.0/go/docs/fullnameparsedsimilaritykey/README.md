# FullNameParsedSimilarityKey

### Available Operations

* [Getfullnameparsedmatch](#getfullnameparsedmatch) - Gets a similarity key for matching purposes for parsed full name data

## Getfullnameparsedmatch

Gets a similarity key for matching purposes for parsed full name data, where the first name and last name are split into separate fields in the source data rather than combined.

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
    res, err := s.FullNameParsedSimilarityKey.Getfullnameparsedmatch(ctx, operations.GetfullnameparsedmatchRequest{
        Firstname: "Rosalinda",
        Lastname: "Mitchell",
        License: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getfullnameparsedmatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
