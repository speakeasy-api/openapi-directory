# StateDataStandardization

### Available Operations

* [Getstateabbreviation](#getstateabbreviation) - Gets a two-letter abbreviation for a state or province name data

## Getstateabbreviation

Gets a two-letter abbreviation for a state or province given a permutation of state or province data.

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
    res, err := s.StateDataStandardization.Getstateabbreviation(ctx, operations.GetstateabbreviationRequest{
        License: "distinctio",
        State: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getstateabbreviation200ApplicationJSONObject != nil {
        // handle response
    }
}
```
