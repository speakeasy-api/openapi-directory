# MachineLearning

### Available Operations

* [GetDeliveryPrediction](#getdeliveryprediction) - Get a delivery prediction for a project

## GetDeliveryPrediction

Get a delivery prediction for a project

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.MachineLearning.GetDeliveryPrediction(ctx, shared.DeliveryPredictionPayload{
        ProjectID: sdk.Int64(746994),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeliveryPredictionResponse != nil {
        // handle response
    }
}
```
