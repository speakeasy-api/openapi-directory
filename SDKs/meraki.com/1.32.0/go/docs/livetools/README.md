# LiveTools

### Available Operations

* [BlinkDeviceLeds](#blinkdeviceleds) - Blink the LEDs on a device
* [CreateDeviceLiveToolsPing](#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [CreateDeviceLiveToolsPingDevice](#createdevicelivetoolspingdevice) - Enqueue a job to check connectivity status to the device
* [CycleDeviceSwitchPorts](#cycledeviceswitchports) - Cycle a set of switch ports
* [GetDeviceLiveToolsPing](#getdevicelivetoolsping) - Return a ping job
* [GetDeviceLiveToolsPingDevice](#getdevicelivetoolspingdevice) - Return a ping device job
* [RebootDevice](#rebootdevice) - Reboot a device

## BlinkDeviceLeds

Blink the LEDs on a device

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
    res, err := s.LiveTools.BlinkDeviceLeds(ctx, operations.BlinkDeviceLedsRequest{
        RequestBody: &operations.BlinkDeviceLedsRequestBody{
            Duration: sdk.Int64(635389),
            Duty: sdk.Int64(783061),
            Period: sdk.Int64(819440),
        },
        Serial: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BlinkDeviceLeds202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateDeviceLiveToolsPing

Enqueue a job to ping a target host from the device

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
    res, err := s.LiveTools.CreateDeviceLiveToolsPing(ctx, operations.CreateDeviceLiveToolsPingRequest{
        RequestBody: operations.CreateDeviceLiveToolsPingRequestBody{
            Count: sdk.Int64(32140),
            Target: "quaerat",
        },
        Serial: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceLiveToolsPing201ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
    res, err := s.LiveTools.CreateDeviceLiveToolsPingDevice(ctx, operations.CreateDeviceLiveToolsPingDeviceRequest{
        RequestBody: &operations.CreateDeviceLiveToolsPingDeviceRequestBody{
            Count: sdk.Int64(951090),
        },
        Serial: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceLiveToolsPingDevice201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CycleDeviceSwitchPorts

Cycle a set of switch ports

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
    res, err := s.LiveTools.CycleDeviceSwitchPorts(ctx, operations.CycleDeviceSwitchPortsRequest{
        RequestBody: operations.CycleDeviceSwitchPortsRequestBody{
            Ports: []string{
                "saepe",
                "illum",
                "ex",
            },
        },
        Serial: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CycleDeviceSwitchPorts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceLiveToolsPing

Return a ping job. Latency unit in response is in milliseconds. Size is in bytes.

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
    res, err := s.LiveTools.GetDeviceLiveToolsPing(ctx, operations.GetDeviceLiveToolsPingRequest{
        ID: "13a620e2-e918-4c75-b048-6cf398a0b374",
        Serial: "eum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceLiveToolsPing200ApplicationJSONObject != nil {
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
    res, err := s.LiveTools.GetDeviceLiveToolsPingDevice(ctx, operations.GetDeviceLiveToolsPingDeviceRequest{
        ID: "17dd95ce-3044-4be4-ab3b-31cb503c3140",
        Serial: "repellendus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceLiveToolsPingDevice200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RebootDevice

Reboot a device

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
    res, err := s.LiveTools.RebootDevice(ctx, operations.RebootDeviceRequest{
        Serial: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RebootDevice202ApplicationJSONObject != nil {
        // handle response
    }
}
```
