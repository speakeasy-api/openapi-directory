# SwitchPorts

### Available Operations

* [GetDeviceSwitchPortStatuses](#getdeviceswitchportstatuses) - Return the status for all the ports of a switch
* [GetDeviceSwitchPortStatusesPackets](#getdeviceswitchportstatusespackets) - Return the packet counters for all the ports of a switch

## GetDeviceSwitchPortStatuses

Return the status for all the ports of a switch

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
    res, err := s.SwitchPorts.GetDeviceSwitchPortStatuses(ctx, operations.GetDeviceSwitchPortStatusesRequest{
        Serial: "modi",
        T0: sdk.String("veniam"),
        Timespan: sdk.Float32(8002.56),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPortStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchPortStatusesPackets

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
    res, err := s.SwitchPorts.GetDeviceSwitchPortStatusesPackets(ctx, operations.GetDeviceSwitchPortStatusesPacketsRequest{
        Serial: "itaque",
        T0: sdk.String("a"),
        Timespan: sdk.Float32(7886.61),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPortStatusesPackets200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
