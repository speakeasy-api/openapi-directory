# LatencyHistory

### Available Operations

* [GetNetworkWirelessClientLatencyHistory](#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [GetNetworkWirelessLatencyHistory](#getnetworkwirelesslatencyhistory) - Return average wireless latency over time for a network, device, or network client

## GetNetworkWirelessClientLatencyHistory

Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.

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
    res, err := s.LatencyHistory.GetNetworkWirelessClientLatencyHistory(ctx, operations.GetNetworkWirelessClientLatencyHistoryRequest{
        ClientID: "laborum",
        NetworkID: "quibusdam",
        Resolution: sdk.Int64(304021),
        T0: sdk.String("sint"),
        T1: sdk.String("expedita"),
        Timespan: sdk.Float32(5606.61),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientLatencyHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessLatencyHistory

Return average wireless latency over time for a network, device, or network client

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
    res, err := s.LatencyHistory.GetNetworkWirelessLatencyHistory(ctx, operations.GetNetworkWirelessLatencyHistoryRequest{
        AccessCategory: operations.GetNetworkWirelessLatencyHistoryAccessCategoryEnumVoiceTraffic.ToPointer(),
        ApTag: sdk.String("corporis"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessLatencyHistoryBandEnumSix.ToPointer(),
        ClientID: sdk.String("quasi"),
        DeviceSerial: sdk.String("totam"),
        NetworkID: "harum",
        Resolution: sdk.Int64(132445),
        Ssid: sdk.Int64(371271),
        T0: sdk.String("debitis"),
        T1: sdk.String("rem"),
        Timespan: sdk.Float32(4897.18),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessLatencyHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
