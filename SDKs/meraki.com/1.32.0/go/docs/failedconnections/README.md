# FailedConnections

### Available Operations

* [GetNetworkWirelessFailedConnections](#getnetworkwirelessfailedconnections) - List of all failed client connection events on this network in a given time range

## GetNetworkWirelessFailedConnections

List of all failed client connection events on this network in a given time range

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
    res, err := s.FailedConnections.GetNetworkWirelessFailedConnections(ctx, operations.GetNetworkWirelessFailedConnectionsRequest{
        ApTag: sdk.String("reprehenderit"),
        Band: operations.GetNetworkWirelessFailedConnectionsBandEnumSix.ToPointer(),
        ClientID: sdk.String("quae"),
        NetworkID: "ex",
        Serial: sdk.String("eius"),
        Ssid: sdk.Int64(69878),
        T0: sdk.String("distinctio"),
        T1: sdk.String("facilis"),
        Timespan: sdk.Float32(9823),
        Vlan: sdk.Int64(13223),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessFailedConnections200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
