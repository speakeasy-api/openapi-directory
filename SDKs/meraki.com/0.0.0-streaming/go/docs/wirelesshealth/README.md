# WirelessHealth

### Available Operations

* [GetNetworkClientConnectionStats](#getnetworkclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [GetNetworkClientLatencyStats](#getnetworkclientlatencystats) - Aggregated latency info for a given client on this network
* [GetNetworkClientsConnectionStats](#getnetworkclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [GetNetworkClientsLatencyStats](#getnetworkclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [GetNetworkConnectionStats](#getnetworkconnectionstats) - Aggregated connectivity info for this network
* [GetNetworkDeviceConnectionStats](#getnetworkdeviceconnectionstats) - Aggregated connectivity info for a given AP on this network
* [GetNetworkDeviceLatencyStats](#getnetworkdevicelatencystats) - Aggregated latency info for a given AP on this network
* [GetNetworkDevicesConnectionStats](#getnetworkdevicesconnectionstats) - Aggregated connectivity info for this network, grouped by node
* [GetNetworkDevicesLatencyStats](#getnetworkdeviceslatencystats) - Aggregated latency info for this network, grouped by node
* [GetNetworkFailedConnections](#getnetworkfailedconnections) - List of all failed client connection events on this network in a given time range
* [GetNetworkLatencyStats](#getnetworklatencystats) - Aggregated latency info for this network

## GetNetworkClientConnectionStats

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
    res, err := s.WirelessHealth.GetNetworkClientConnectionStats(ctx, operations.GetNetworkClientConnectionStatsRequest{
        ApTag: sdk.String("nobis"),
        Band: operations.GetNetworkClientConnectionStatsBandEnumFive.ToPointer(),
        ClientID: "accusantium",
        NetworkID: "dicta",
        Ssid: sdk.Int64(795546),
        T0: sdk.String("commodi"),
        T1: sdk.String("eveniet"),
        Timespan: sdk.Float32(7815.82),
        Vlan: sdk.Int64(735740),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientConnectionStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientLatencyStats

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
    res, err := s.WirelessHealth.GetNetworkClientLatencyStats(ctx, operations.GetNetworkClientLatencyStatsRequest{
        ApTag: sdk.String("quidem"),
        Band: operations.GetNetworkClientLatencyStatsBandEnumTwo4.ToPointer(),
        ClientID: "voluptates",
        Fields: sdk.String("fugit"),
        NetworkID: "eius",
        Ssid: sdk.Int64(194058),
        T0: sdk.String("eligendi"),
        T1: sdk.String("asperiores"),
        Timespan: sdk.Float32(4598.75),
        Vlan: sdk.Int64(500021),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientLatencyStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientsConnectionStats

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
    res, err := s.WirelessHealth.GetNetworkClientsConnectionStats(ctx, operations.GetNetworkClientsConnectionStatsRequest{
        ApTag: sdk.String("sint"),
        Band: operations.GetNetworkClientsConnectionStatsBandEnumFive.ToPointer(),
        NetworkID: "a",
        Ssid: sdk.Int64(658604),
        T0: sdk.String("maiores"),
        T1: sdk.String("itaque"),
        Timespan: sdk.Float32(8615.91),
        Vlan: sdk.Int64(643419),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsConnectionStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClientsLatencyStats

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
    res, err := s.WirelessHealth.GetNetworkClientsLatencyStats(ctx, operations.GetNetworkClientsLatencyStatsRequest{
        ApTag: sdk.String("corporis"),
        Band: operations.GetNetworkClientsLatencyStatsBandEnumTwo4.ToPointer(),
        Fields: sdk.String("officiis"),
        NetworkID: "enim",
        Ssid: sdk.Int64(638609),
        T0: sdk.String("saepe"),
        T1: sdk.String("eum"),
        Timespan: sdk.Float32(9220.94),
        Vlan: sdk.Int64(35742),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsLatencyStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkConnectionStats

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
    res, err := s.WirelessHealth.GetNetworkConnectionStats(ctx, operations.GetNetworkConnectionStatsRequest{
        ApTag: sdk.String("officia"),
        Band: operations.GetNetworkConnectionStatsBandEnumFive.ToPointer(),
        NetworkID: "quasi",
        Ssid: sdk.Int64(502106),
        T0: sdk.String("eius"),
        T1: sdk.String("quisquam"),
        Timespan: sdk.Float32(1779.29),
        Vlan: sdk.Int64(748023),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkConnectionStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkDeviceConnectionStats

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
    res, err := s.WirelessHealth.GetNetworkDeviceConnectionStats(ctx, operations.GetNetworkDeviceConnectionStatsRequest{
        ApTag: sdk.String("natus"),
        Band: operations.GetNetworkDeviceConnectionStatsBandEnumFive.ToPointer(),
        NetworkID: "quia",
        Serial: "magnam",
        Ssid: sdk.Int64(440847),
        T0: sdk.String("quod"),
        T1: sdk.String("quos"),
        Timespan: sdk.Float32(5488.46),
        Vlan: sdk.Int64(227870),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkDeviceConnectionStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkDeviceLatencyStats

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
    res, err := s.WirelessHealth.GetNetworkDeviceLatencyStats(ctx, operations.GetNetworkDeviceLatencyStatsRequest{
        ApTag: sdk.String("molestiae"),
        Band: operations.GetNetworkDeviceLatencyStatsBandEnumTwo4.ToPointer(),
        Fields: sdk.String("laborum"),
        NetworkID: "modi",
        Serial: "perferendis",
        Ssid: sdk.Int64(897058),
        T0: sdk.String("architecto"),
        T1: sdk.String("molestias"),
        Timespan: sdk.Float32(2921.77),
        Vlan: sdk.Int64(125811),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkDeviceLatencyStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkDevicesConnectionStats

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
    res, err := s.WirelessHealth.GetNetworkDevicesConnectionStats(ctx, operations.GetNetworkDevicesConnectionStatsRequest{
        ApTag: sdk.String("maiores"),
        Band: operations.GetNetworkDevicesConnectionStatsBandEnumTwo4.ToPointer(),
        NetworkID: "odit",
        Ssid: sdk.Int64(936845),
        T0: sdk.String("veniam"),
        T1: sdk.String("ipsam"),
        Timespan: sdk.Float32(510.53),
        Vlan: sdk.Int64(350387),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkDevicesConnectionStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkDevicesLatencyStats

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
    res, err := s.WirelessHealth.GetNetworkDevicesLatencyStats(ctx, operations.GetNetworkDevicesLatencyStatsRequest{
        ApTag: sdk.String("veniam"),
        Band: operations.GetNetworkDevicesLatencyStatsBandEnumTwo4.ToPointer(),
        Fields: sdk.String("ad"),
        NetworkID: "nisi",
        Ssid: sdk.Int64(946808),
        T0: sdk.String("quis"),
        T1: sdk.String("quibusdam"),
        Timespan: sdk.Float32(3664.8),
        Vlan: sdk.Int64(382764),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkDevicesLatencyStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkFailedConnections

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
    res, err := s.WirelessHealth.GetNetworkFailedConnections(ctx, operations.GetNetworkFailedConnectionsRequest{
        ApTag: sdk.String("pariatur"),
        Band: operations.GetNetworkFailedConnectionsBandEnumTwo4.ToPointer(),
        ClientID: sdk.String("quidem"),
        NetworkID: "repellendus",
        Serial: sdk.String("perferendis"),
        Ssid: sdk.Int64(660536),
        T0: sdk.String("sapiente"),
        T1: sdk.String("sed"),
        Timespan: sdk.Float32(8235.72),
        Vlan: sdk.Int64(996072),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkFailedConnections200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkLatencyStats

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
    res, err := s.WirelessHealth.GetNetworkLatencyStats(ctx, operations.GetNetworkLatencyStatsRequest{
        ApTag: sdk.String("repudiandae"),
        Band: operations.GetNetworkLatencyStatsBandEnumTwo4.ToPointer(),
        Fields: sdk.String("adipisci"),
        NetworkID: "pariatur",
        Ssid: sdk.Int64(688463),
        T0: sdk.String("dolore"),
        T1: sdk.String("voluptatibus"),
        Timespan: sdk.Float32(4353.53),
        Vlan: sdk.Int64(127087),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkLatencyStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```
