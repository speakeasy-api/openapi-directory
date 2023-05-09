# Predictions

### Available Operations

* [Predictions](#predictions) - Get predictions for a given year

## Predictions

Get all predictions for a given year.

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
    res, err := s.Predictions.Predictions(ctx, operations.PredictionsRequest{
        Year: sdk.Int64(844266),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Predictions200ApplicationJSONObject != nil {
        // handle response
    }
}
```
