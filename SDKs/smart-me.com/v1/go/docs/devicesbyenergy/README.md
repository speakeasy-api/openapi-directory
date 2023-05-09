# DevicesByEnergy

### Available Operations

* [DevicesByEnergyGet](#devicesbyenergyget) - Gets all Devices for an Energy Type

## DevicesByEnergyGet

Gets all Devices for an Energy Type

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
    res, err := s.DevicesByEnergy.DevicesByEnergyGet(ctx, operations.DevicesByEnergyGetRequest{
        MeterEnergyType: operations.DevicesByEnergyGetMeterEnergyTypeEnumMeterTypeUnknown,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Devices != nil {
        // handle response
    }
}
```
