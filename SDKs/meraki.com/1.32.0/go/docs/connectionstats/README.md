# ConnectionStats

### Available Operations

* [GetDeviceWirelessConnectionStats](#getdevicewirelessconnectionstats) - Aggregated connectivity info for a given AP on this network
* [GetNetworkWirelessClientConnectionStats](#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [GetNetworkWirelessClientsConnectionStats](#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [GetNetworkWirelessConnectionStats](#getnetworkwirelessconnectionstats) - Aggregated connectivity info for this network
* [GetNetworkWirelessDevicesConnectionStats](#getnetworkwirelessdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node

## GetDeviceWirelessConnectionStats

Aggregated connectivity info for a given AP on this network

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
    res, err := s.ConnectionStats.GetDeviceWirelessConnectionStats(ctx, operations.GetDeviceWirelessConnectionStatsRequest{
        ApTag: sdk.String("porro"),
        Band: operations.GetDeviceWirelessConnectionStatsBandEnumTwo4.ToPointer(),
        Serial: "amet",
        Ssid: sdk.Int64(199511),
        T0: sdk.String("et"),
        T1: sdk.String("quam"),
        Timespan: sdk.Float32(1418.08),
        Vlan: sdk.Int64(903996),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessConnectionStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientConnectionStats

Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.

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
    res, err := s.ConnectionStats.GetNetworkWirelessClientConnectionStats(ctx, operations.GetNetworkWirelessClientConnectionStatsRequest{
        ApTag: sdk.String("odit"),
        Band: operations.GetNetworkWirelessClientConnectionStatsBandEnumSix.ToPointer(),
        ClientID: "quibusdam",
        NetworkID: "nihil",
        Ssid: sdk.Int64(589943),
        T0: sdk.String("recusandae"),
        T1: sdk.String("minus"),
        Timespan: sdk.Float32(4469.67),
        Vlan: sdk.Int64(257219),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientConnectionStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientsConnectionStats

Aggregated connectivity info for this network, grouped by clients

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
    res, err := s.ConnectionStats.GetNetworkWirelessClientsConnectionStats(ctx, operations.GetNetworkWirelessClientsConnectionStatsRequest{
        ApTag: sdk.String("distinctio"),
        Band: operations.GetNetworkWirelessClientsConnectionStatsBandEnumFive.ToPointer(),
        NetworkID: "odio",
        Ssid: sdk.Int64(898908),
        T0: sdk.String("corrupti"),
        T1: sdk.String("deleniti"),
        Timespan: sdk.Float32(8217),
        Vlan: sdk.Int64(870734),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientsConnectionStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessConnectionStats

Aggregated connectivity info for this network

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
    res, err := s.ConnectionStats.GetNetworkWirelessConnectionStats(ctx, operations.GetNetworkWirelessConnectionStatsRequest{
        ApTag: sdk.String("expedita"),
        Band: operations.GetNetworkWirelessConnectionStatsBandEnumTwo4.ToPointer(),
        NetworkID: "commodi",
        Ssid: sdk.Int64(966927),
        T0: sdk.String("facere"),
        T1: sdk.String("inventore"),
        Timespan: sdk.Float32(7537.72),
        Vlan: sdk.Int64(761109),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessConnectionStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessDevicesConnectionStats

Aggregated connectivity info for this network, grouped by node

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
    res, err := s.ConnectionStats.GetNetworkWirelessDevicesConnectionStats(ctx, operations.GetNetworkWirelessDevicesConnectionStatsRequest{
        ApTag: sdk.String("maxime"),
        Band: operations.GetNetworkWirelessDevicesConnectionStatsBandEnumTwo4.ToPointer(),
        NetworkID: "labore",
        Ssid: sdk.Int64(116887),
        T0: sdk.String("quisquam"),
        T1: sdk.String("quas"),
        Timespan: sdk.Float32(4203.55),
        Vlan: sdk.Int64(317022),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessDevicesConnectionStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
