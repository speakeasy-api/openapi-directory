# UsageHistory

### Available Operations

* [GetNetworkApplianceUplinksUsageHistory](#getnetworkapplianceuplinksusagehistory) - Get the sent and received bytes for each uplink of a network.
* [GetNetworkClientUsageHistory](#getnetworkclientusagehistory) - Return the client's daily usage history
* [GetNetworkWirelessUsageHistory](#getnetworkwirelessusagehistory) - Return AP usage over time for a device or network client

## GetNetworkApplianceUplinksUsageHistory

Get the sent and received bytes for each uplink of a network.

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
    res, err := s.UsageHistory.GetNetworkApplianceUplinksUsageHistory(ctx, operations.GetNetworkApplianceUplinksUsageHistoryRequest{
        NetworkID: "corrupti",
        Resolution: sdk.Int64(337683),
        T0: sdk.String("officiis"),
        T1: sdk.String("omnis"),
        Timespan: sdk.Float32(4419.08),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceUplinksUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClientUsageHistory

Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.UsageHistory.GetNetworkClientUsageHistory(ctx, operations.GetNetworkClientUsageHistoryRequest{
        ClientID: "alias",
        NetworkID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessUsageHistory

Return AP usage over time for a device or network client

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
    res, err := s.UsageHistory.GetNetworkWirelessUsageHistory(ctx, operations.GetNetworkWirelessUsageHistoryRequest{
        ApTag: sdk.String("nemo"),
        AutoResolution: sdk.Bool(false),
        Band: operations.GetNetworkWirelessUsageHistoryBandEnumTwo4.ToPointer(),
        ClientID: sdk.String("ipsam"),
        DeviceSerial: sdk.String("vero"),
        NetworkID: "eveniet",
        Resolution: sdk.Int64(840496),
        Ssid: sdk.Int64(336003),
        T0: sdk.String("corrupti"),
        T1: sdk.String("cumque"),
        Timespan: sdk.Float32(1229.43),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
