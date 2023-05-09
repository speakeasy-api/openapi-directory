# CompanyNameSimilarityKey

### Available Operations

* [Getcompanymatch](#getcompanymatch) - Gets a similarity key for matching purposes for company name data

## Getcompanymatch

Gets a similarity key for matching purposes for company name data

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
    res, err := s.CompanyNameSimilarityKey.Getcompanymatch(ctx, operations.GetcompanymatchRequest{
        Company: "Stiedemann - Little",
        License: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Getcompanymatch200ApplicationJSONObject != nil {
        // handle response
    }
}
```
