# Ping

### Available Operations

* [CreateDeviceLiveToolsPing](#createdevicelivetoolsping) - Enqueue a job to ping a target host from the device
* [GetDeviceLiveToolsPing](#getdevicelivetoolsping) - Return a ping job

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
    res, err := s.Ping.CreateDeviceLiveToolsPing(ctx, operations.CreateDeviceLiveToolsPingRequest{
        RequestBody: operations.CreateDeviceLiveToolsPingRequestBody{
            Count: sdk.Int64(119827),
            Target: "amet",
        },
        Serial: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceLiveToolsPing201ApplicationJSONObject != nil {
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
    res, err := s.Ping.GetDeviceLiveToolsPing(ctx, operations.GetDeviceLiveToolsPingRequest{
        ID: "45d2f713-e05b-4559-abfc-7395f71223b5",
        Serial: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceLiveToolsPing200ApplicationJSONObject != nil {
        // handle response
    }
}
```
