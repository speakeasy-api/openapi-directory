# Packets

### Available Operations

* [GetDeviceSwitchPortsStatusesPackets](#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch

## GetDeviceSwitchPortsStatusesPackets

Return the packet counters for all the ports of a switch

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
    res, err := s.Packets.GetDeviceSwitchPortsStatusesPackets(ctx, operations.GetDeviceSwitchPortsStatusesPacketsRequest{
        Serial: "dolorem",
        T0: sdk.String("eveniet"),
        Timespan: sdk.Float32(7389.54),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
