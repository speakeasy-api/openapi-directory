# PingDevice

### Available Operations

* [CreateDeviceLiveToolsPingDevice](#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [GetDeviceLiveToolsPingDevice](#getdevicelivetoolspingdevice) - Return a ping device job

## CreateDeviceLiveToolsPingDevice

Enqueue a job to check connectivity status to the device

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PingDevice.CreateDeviceLiveToolsPingDevice(ctx, operations.CreateDeviceLiveToolsPingDeviceRequest{
        RequestBody: &operations.CreateDeviceLiveToolsPingDeviceRequestBody{
            Count: sdk.Int64(299477),
        },
        Serial: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceLiveToolsPingDevice201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceLiveToolsPingDevice

Return a ping device job. Latency unit in response is in milliseconds. Size is in bytes.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MerakiAPIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PingDevice.GetDeviceLiveToolsPingDevice(ctx, operations.GetDeviceLiveToolsPingDeviceRequest{
        ID: "a1b9c76a-14e6-4540-b68e-d30f7aceabf8",
        Serial: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceLiveToolsPingDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```
