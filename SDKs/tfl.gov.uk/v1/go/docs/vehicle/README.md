# Vehicle

### Available Operations

* [VehicleGet](#vehicleget) - Gets the predictions for a given list of vehicle Id's.

## VehicleGet

Gets the predictions for a given list of vehicle Id's.

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
    res, err := s.Vehicle.VehicleGet(ctx, operations.VehicleGetRequest{
        Ids: []string{
            "iste",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TflAPIPresentationEntitiesPredictions != nil {
        // handle response
    }
}
```
