# VirtualTariffConsumption

### Available Operations

* [VirtualTariffConsumptionGet](#virtualtariffconsumptionget) - Gets the consumption of a folder with a virtuall tariffs.

## VirtualTariffConsumptionGet

Gets the consumption of a folder with a virtuall tariffs.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.VirtualTariffConsumption.VirtualTariffConsumptionGet(ctx, operations.VirtualTariffConsumptionGetRequest{
        EndDate: types.MustTimeFromString("2022-07-05T17:04:43.417Z"),
        FolderID: "libero",
        StartDate: types.MustTimeFromString("2022-12-06T17:57:34.720Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualTariffConsumptionData != nil {
        // handle response
    }
}
```
