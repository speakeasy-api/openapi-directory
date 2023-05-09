# VirtualTariffsStatusForProperty

### Available Operations

* [VirtualTariffsStatusForPropertyGet](#virtualtariffsstatusforpropertyget) - Gets the calculation status for a virtual tariff property

## VirtualTariffsStatusForPropertyGet

Gets the calculation status for a virtual tariff property

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
    res, err := s.VirtualTariffsStatusForProperty.VirtualTariffsStatusForPropertyGet(ctx, operations.VirtualTariffsStatusForPropertyGetRequest{
        ID: "eb75dad6-36c6-4005-83d8-bb31180f739a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualTariffsStatusForPropertyGet200ApplicationJSONString != nil {
        // handle response
    }
}
```
