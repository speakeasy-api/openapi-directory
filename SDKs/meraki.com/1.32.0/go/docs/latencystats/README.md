# LatencyStats

### Available Operations

* [GetDeviceWirelessLatencyStats](#getdevicewirelesslatencystats) - Aggregated latency info for a given AP on this network
* [GetNetworkWirelessClientLatencyStats](#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [GetNetworkWirelessClientsLatencyStats](#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [GetNetworkWirelessDevicesLatencyStats](#getnetworkwirelessdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [GetNetworkWirelessLatencyStats](#getnetworkwirelesslatencystats) - Aggregated latency info for this network

## GetDeviceWirelessLatencyStats

Aggregated latency info for a given AP on this network

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
    res, err := s.LatencyStats.GetDeviceWirelessLatencyStats(ctx, operations.GetDeviceWirelessLatencyStatsRequest{
        ApTag: sdk.String("maiores"),
        Band: operations.GetDeviceWirelessLatencyStatsBandEnumFive.ToPointer(),
        Fields: sdk.String("incidunt"),
        Serial: "corrupti",
        Ssid: sdk.Int64(132361),
        T0: sdk.String("dolorem"),
        T1: sdk.String("odit"),
        Timespan: sdk.Float32(3361.91),
        Vlan: sdk.Int64(373686),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessLatencyStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientLatencyStats

Aggregated latency info for a given client on this network. Clients are identified by their MAC.

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
    res, err := s.LatencyStats.GetNetworkWirelessClientLatencyStats(ctx, operations.GetNetworkWirelessClientLatencyStatsRequest{
        ApTag: sdk.String("tempore"),
        Band: operations.GetNetworkWirelessClientLatencyStatsBandEnumSix.ToPointer(),
        ClientID: "molestias",
        Fields: sdk.String("exercitationem"),
        NetworkID: "optio",
        Ssid: sdk.Int64(47897),
        T0: sdk.String("optio"),
        T1: sdk.String("rerum"),
        Timespan: sdk.Float32(7535.8),
        Vlan: sdk.Int64(733063),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientLatencyStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientsLatencyStats

Aggregated latency info for this network, grouped by clients

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
    res, err := s.LatencyStats.GetNetworkWirelessClientsLatencyStats(ctx, operations.GetNetworkWirelessClientsLatencyStatsRequest{
        ApTag: sdk.String("fugit"),
        Band: operations.GetNetworkWirelessClientsLatencyStatsBandEnumSix.ToPointer(),
        Fields: sdk.String("mollitia"),
        NetworkID: "laudantium",
        Ssid: sdk.Int64(480180),
        T0: sdk.String("sint"),
        T1: sdk.String("quae"),
        Timespan: sdk.Float32(5503.94),
        Vlan: sdk.Int64(835054),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientsLatencyStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessDevicesLatencyStats

Aggregated latency info for this network, grouped by node

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
    res, err := s.LatencyStats.GetNetworkWirelessDevicesLatencyStats(ctx, operations.GetNetworkWirelessDevicesLatencyStatsRequest{
        ApTag: sdk.String("in"),
        Band: operations.GetNetworkWirelessDevicesLatencyStatsBandEnumTwo4.ToPointer(),
        Fields: sdk.String("corrupti"),
        NetworkID: "aut",
        Ssid: sdk.Int64(613925),
        T0: sdk.String("deserunt"),
        T1: sdk.String("aut"),
        Timespan: sdk.Float32(1721.05),
        Vlan: sdk.Int64(984832),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessDevicesLatencyStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessLatencyStats

Aggregated latency info for this network

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
    res, err := s.LatencyStats.GetNetworkWirelessLatencyStats(ctx, operations.GetNetworkWirelessLatencyStatsRequest{
        ApTag: sdk.String("quae"),
        Band: operations.GetNetworkWirelessLatencyStatsBandEnumFive.ToPointer(),
        Fields: sdk.String("itaque"),
        NetworkID: "unde",
        Ssid: sdk.Int64(148478),
        T0: sdk.String("qui"),
        T1: sdk.String("totam"),
        Timespan: sdk.Float32(7405.38),
        Vlan: sdk.Int64(367299),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessLatencyStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```
