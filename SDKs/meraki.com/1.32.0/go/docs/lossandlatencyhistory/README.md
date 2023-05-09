# LossAndLatencyHistory

### Available Operations

* [GetDeviceLossAndLatencyHistory](#getdevicelossandlatencyhistory) - Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

## GetDeviceLossAndLatencyHistory

Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.

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
    res, err := s.LossAndLatencyHistory.GetDeviceLossAndLatencyHistory(ctx, operations.GetDeviceLossAndLatencyHistoryRequest{
        IP: "accusamus",
        Resolution: sdk.Int64(475182),
        Serial: "omnis",
        T0: sdk.String("corporis"),
        T1: sdk.String("tenetur"),
        Timespan: sdk.Float32(341.04),
        Uplink: operations.GetDeviceLossAndLatencyHistoryUplinkEnumWan2.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceLossAndLatencyHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
