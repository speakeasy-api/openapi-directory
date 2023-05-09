# DevicesBySubType

### Available Operations

* [DevicesBySubTypeGet](#devicesbysubtypeget) - Gets all Devices by it's Sub Type (e.g. E-Charging Station)

## DevicesBySubTypeGet

Gets all Devices by it's Sub Type (e.g. E-Charging Station)

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
    res, err := s.DevicesBySubType.DevicesBySubTypeGet(ctx, operations.DevicesBySubTypeGetRequest{
        MeterSubType: operations.DevicesBySubTypeGetMeterSubTypeEnumMeterSubTypeHeat,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Devices != nil {
        // handle response
    }
}
```
