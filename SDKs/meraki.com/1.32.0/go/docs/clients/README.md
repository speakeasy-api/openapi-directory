# Clients

### Available Operations

* [GetDeviceClients](#getdeviceclients) - List the clients of a device, up to a maximum of a month ago
* [GetNetworkApplianceClientSecurityEvents](#getnetworkapplianceclientsecurityevents) - List the security events for a client
* [GetNetworkClient](#getnetworkclient) - Return the client associated with the given identifier
* [GetNetworkClientPolicy](#getnetworkclientpolicy) - Return the policy assigned to a client on the network
* [GetNetworkClientSplashAuthorizationStatus](#getnetworkclientsplashauthorizationstatus) - Return the splash authorization for a client, for each SSID they've associated with through splash
* [GetNetworkClientTrafficHistory](#getnetworkclienttraffichistory) - Return the client's network traffic data over time
* [GetNetworkClientUsageHistory](#getnetworkclientusagehistory) - Return the client's daily usage history
* [GetNetworkClients](#getnetworkclients) - List the clients that have used this network in the timespan
* [GetNetworkClientsApplicationUsage](#getnetworkclientsapplicationusage) - Return the application usage data for clients
* [GetNetworkClientsBandwidthUsageHistory](#getnetworkclientsbandwidthusagehistory) - Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
* [GetNetworkClientsOverview](#getnetworkclientsoverview) - Return overview statistics for network clients
* [GetNetworkClientsUsageHistories](#getnetworkclientsusagehistories) - Return the usage histories for clients
* [GetNetworkWirelessClientConnectionStats](#getnetworkwirelessclientconnectionstats) - Aggregated connectivity info for a given client on this network
* [GetNetworkWirelessClientConnectivityEvents](#getnetworkwirelessclientconnectivityevents) - List the wireless connectivity events for a client within a network in the timespan.
* [GetNetworkWirelessClientLatencyHistory](#getnetworkwirelessclientlatencyhistory) - Return the latency history for a client
* [GetNetworkWirelessClientLatencyStats](#getnetworkwirelessclientlatencystats) - Aggregated latency info for a given client on this network
* [GetNetworkWirelessClientsConnectionStats](#getnetworkwirelessclientsconnectionstats) - Aggregated connectivity info for this network, grouped by clients
* [GetNetworkWirelessClientsLatencyStats](#getnetworkwirelessclientslatencystats) - Aggregated latency info for this network, grouped by clients
* [GetOrganizationClientsBandwidthUsageHistory](#getorganizationclientsbandwidthusagehistory) - Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
* [GetOrganizationClientsOverview](#getorganizationclientsoverview) - Return summary information around client data usage (in mb) across the given organization.
* [GetOrganizationClientsSearch](#getorganizationclientssearch) - Return the client details in an organization
* [GetOrganizationSummaryTopClientsByUsage](#getorganizationsummarytopclientsbyusage) - Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
* [GetOrganizationSummaryTopClientsManufacturersByUsage](#getorganizationsummarytopclientsmanufacturersbyusage) - Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
* [ProvisionNetworkClients](#provisionnetworkclients) - Provisions a client with a name and policy
* [UpdateNetworkClientPolicy](#updatenetworkclientpolicy) - Update the policy assigned to a client on the network
* [UpdateNetworkClientSplashAuthorizationStatus](#updatenetworkclientsplashauthorizationstatus) - Update a client's splash authorization

## GetDeviceClients

List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.

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
    res, err := s.Clients.GetDeviceClients(ctx, operations.GetDeviceClientsRequest{
        Serial: "deleniti",
        T0: sdk.String("optio"),
        Timespan: sdk.Float32(988.05),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceClients200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceClientSecurityEvents

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.GetNetworkApplianceClientSecurityEvents(ctx, operations.GetNetworkApplianceClientSecurityEventsRequest{
        ClientID: "repellat",
        EndingBefore: sdk.String("atque"),
        NetworkID: "magnam",
        PerPage: sdk.Int64(594379),
        SortOrder: operations.GetNetworkApplianceClientSecurityEventsSortOrderEnumAscending.ToPointer(),
        StartingAfter: sdk.String("corrupti"),
        T0: sdk.String("sunt"),
        T1: sdk.String("nemo"),
        Timespan: sdk.Float32(9642.1),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceClientSecurityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClient

Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.GetNetworkClient(ctx, operations.GetNetworkClientRequest{
        ClientID: "illum",
        NetworkID: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClient200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientPolicy

Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.GetNetworkClientPolicy(ctx, operations.GetNetworkClientPolicyRequest{
        ClientID: "quaerat",
        NetworkID: "magni",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientSplashAuthorizationStatus

Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.GetNetworkClientSplashAuthorizationStatus(ctx, operations.GetNetworkClientSplashAuthorizationStatusRequest{
        ClientID: "cumque",
        NetworkID: "quos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientTrafficHistory

Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.GetNetworkClientTrafficHistory(ctx, operations.GetNetworkClientTrafficHistoryRequest{
        ClientID: "in",
        EndingBefore: sdk.String("commodi"),
        NetworkID: "maxime",
        PerPage: sdk.Int64(151486),
        StartingAfter: sdk.String("minus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientTrafficHistory200ApplicationJSONObjects != nil {
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
    res, err := s.Clients.GetNetworkClientUsageHistory(ctx, operations.GetNetworkClientUsageHistoryRequest{
        ClientID: "consequuntur",
        NetworkID: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClients

List the clients that have used this network in the timespan

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
    res, err := s.Clients.GetNetworkClients(ctx, operations.GetNetworkClientsRequest{
        Description: sdk.String("delectus"),
        EndingBefore: sdk.String("harum"),
        IP: sdk.String("aliquam"),
        Ip6: sdk.String("eligendi"),
        Ip6Local: sdk.String("hic"),
        Mac: sdk.String("quo"),
        NetworkID: "illo",
        Os: sdk.String("nobis"),
        PerPage: sdk.Int64(460803),
        RecentDeviceConnections: []GetNetworkClientsRecentDeviceConnectionsEnum{
            operations.GetNetworkClientsRecentDeviceConnectionsEnumWired,
            operations.GetNetworkClientsRecentDeviceConnectionsEnumWired,
        },
        StartingAfter: sdk.String("alias"),
        Statuses: []GetNetworkClientsStatusesEnum{
            operations.GetNetworkClientsStatusesEnumOnline,
            operations.GetNetworkClientsStatusesEnumOffline,
            operations.GetNetworkClientsStatusesEnumOffline,
            operations.GetNetworkClientsStatusesEnumOnline,
        },
        T0: sdk.String("nam"),
        Timespan: sdk.Float32(1021.84),
        Vlan: sdk.String("rerum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClients200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientsApplicationUsage

Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.GetNetworkClientsApplicationUsage(ctx, operations.GetNetworkClientsApplicationUsageRequest{
        Clients: "assumenda",
        EndingBefore: sdk.String("eos"),
        NetworkID: "dolorem",
        PerPage: sdk.Int64(941743),
        SsidNumber: operations.GetNetworkClientsApplicationUsageSsidNumberEnumTwelve.ToPointer(),
        StartingAfter: sdk.String("nam"),
        T0: sdk.String("ab"),
        T1: sdk.String("magnam"),
        Timespan: sdk.Float32(8667.03),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsApplicationUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClientsBandwidthUsageHistory

Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.

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
    res, err := s.Clients.GetNetworkClientsBandwidthUsageHistory(ctx, operations.GetNetworkClientsBandwidthUsageHistoryRequest{
        EndingBefore: sdk.String("expedita"),
        NetworkID: "autem",
        PerPage: sdk.Int64(731931),
        StartingAfter: sdk.String("recusandae"),
        T0: sdk.String("nostrum"),
        T1: sdk.String("officia"),
        Timespan: sdk.Float32(3755.88),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsBandwidthUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkClientsOverview

Return overview statistics for network clients

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
    res, err := s.Clients.GetNetworkClientsOverview(ctx, operations.GetNetworkClientsOverviewRequest{
        NetworkID: "laudantium",
        Resolution: sdk.Int64(359106),
        T0: sdk.String("excepturi"),
        T1: sdk.String("natus"),
        Timespan: sdk.Float32(5364.56),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkClientsUsageHistories

Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.GetNetworkClientsUsageHistories(ctx, operations.GetNetworkClientsUsageHistoriesRequest{
        Clients: "necessitatibus",
        EndingBefore: sdk.String("aspernatur"),
        NetworkID: "dolores",
        PerPage: sdk.Int64(671568),
        SsidNumber: operations.GetNetworkClientsUsageHistoriesSsidNumberEnumThirteen.ToPointer(),
        StartingAfter: sdk.String("eos"),
        T0: sdk.String("voluptatem"),
        T1: sdk.String("temporibus"),
        Timespan: sdk.Float32(6603.39),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkClientsUsageHistories200ApplicationJSONObjects != nil {
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
    res, err := s.Clients.GetNetworkWirelessClientConnectionStats(ctx, operations.GetNetworkWirelessClientConnectionStatsRequest{
        ApTag: sdk.String("quae"),
        Band: operations.GetNetworkWirelessClientConnectionStatsBandEnumFive.ToPointer(),
        ClientID: "a",
        NetworkID: "minus",
        Ssid: sdk.Int64(148958),
        T0: sdk.String("nam"),
        T1: sdk.String("quia"),
        Timespan: sdk.Float32(4801.08),
        Vlan: sdk.Int64(70088),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientConnectionStats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessClientConnectivityEvents

List the wireless connectivity events for a client within a network in the timespan.

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
    res, err := s.Clients.GetNetworkWirelessClientConnectivityEvents(ctx, operations.GetNetworkWirelessClientConnectivityEventsRequest{
        Band: operations.GetNetworkWirelessClientConnectivityEventsBandEnumFive.ToPointer(),
        ClientID: "sed",
        DeviceSerial: sdk.String("blanditiis"),
        EndingBefore: sdk.String("sint"),
        IncludedSeverities: []GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum{
            operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumGood,
            operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumGood,
            operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumWarn,
            operations.GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnumInfo,
        },
        NetworkID: "nemo",
        PerPage: sdk.Int64(250520),
        SsidNumber: operations.GetNetworkWirelessClientConnectivityEventsSsidNumberEnumThirteen.ToPointer(),
        StartingAfter: sdk.String("omnis"),
        T0: sdk.String("ipsa"),
        T1: sdk.String("aliquam"),
        Timespan: sdk.Float32(2199.4),
        Types: []GetNetworkWirelessClientConnectivityEventsTypesEnum{
            operations.GetNetworkWirelessClientConnectivityEventsTypesEnumRoam,
            operations.GetNetworkWirelessClientConnectivityEventsTypesEnumAuth,
            operations.GetNetworkWirelessClientConnectivityEventsTypesEnumAuth,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientConnectivityEvents200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

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
    res, err := s.Clients.GetNetworkWirelessClientLatencyHistory(ctx, operations.GetNetworkWirelessClientLatencyHistoryRequest{
        ClientID: "consequuntur",
        NetworkID: "eius",
        Resolution: sdk.Int64(417030),
        T0: sdk.String("ipsam"),
        T1: sdk.String("vel"),
        Timespan: sdk.Float32(5841.99),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientLatencyHistory200ApplicationJSONObjects != nil {
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
    res, err := s.Clients.GetNetworkWirelessClientLatencyStats(ctx, operations.GetNetworkWirelessClientLatencyStatsRequest{
        ApTag: sdk.String("modi"),
        Band: operations.GetNetworkWirelessClientLatencyStatsBandEnumFive.ToPointer(),
        ClientID: "explicabo",
        Fields: sdk.String("modi"),
        NetworkID: "doloremque",
        Ssid: sdk.Int64(486944),
        T0: sdk.String("sit"),
        T1: sdk.String("voluptatum"),
        Timespan: sdk.Float32(2715.5),
        Vlan: sdk.Int64(962411),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientLatencyStats200ApplicationJSONObject != nil {
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
    res, err := s.Clients.GetNetworkWirelessClientsConnectionStats(ctx, operations.GetNetworkWirelessClientsConnectionStatsRequest{
        ApTag: sdk.String("quam"),
        Band: operations.GetNetworkWirelessClientsConnectionStatsBandEnumSix.ToPointer(),
        NetworkID: "libero",
        Ssid: sdk.Int64(192173),
        T0: sdk.String("molestiae"),
        T1: sdk.String("optio"),
        Timespan: sdk.Float32(9040.51),
        Vlan: sdk.Int64(981142),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientsConnectionStats200ApplicationJSONObjects != nil {
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
    res, err := s.Clients.GetNetworkWirelessClientsLatencyStats(ctx, operations.GetNetworkWirelessClientsLatencyStatsRequest{
        ApTag: sdk.String("accusantium"),
        Band: operations.GetNetworkWirelessClientsLatencyStatsBandEnumTwo4.ToPointer(),
        Fields: sdk.String("eos"),
        NetworkID: "consequuntur",
        Ssid: sdk.Int64(338514),
        T0: sdk.String("vitae"),
        T1: sdk.String("occaecati"),
        Timespan: sdk.Float32(2907.61),
        Vlan: sdk.Int64(852737),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessClientsLatencyStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationClientsBandwidthUsageHistory

Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.

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
    res, err := s.Clients.GetOrganizationClientsBandwidthUsageHistory(ctx, operations.GetOrganizationClientsBandwidthUsageHistoryRequest{
        OrganizationID: "quidem",
        T0: sdk.String("exercitationem"),
        T1: sdk.String("veniam"),
        Timespan: sdk.Float32(2679.88),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationClientsBandwidthUsageHistory200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationClientsOverview

Return summary information around client data usage (in mb) across the given organization.

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
    res, err := s.Clients.GetOrganizationClientsOverview(ctx, operations.GetOrganizationClientsOverviewRequest{
        OrganizationID: "quasi",
        T0: sdk.String("quae"),
        T1: sdk.String("similique"),
        Timespan: sdk.Float32(8213.04),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationClientsOverview200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationClientsSearch

Return the client details in an organization

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
    res, err := s.Clients.GetOrganizationClientsSearch(ctx, operations.GetOrganizationClientsSearchRequest{
        EndingBefore: sdk.String("quo"),
        Mac: "suscipit",
        OrganizationID: "ex",
        PerPage: sdk.Int64(571550),
        StartingAfter: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationClientsSearch200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopClientsByUsage

Return metrics for organization's top 10 clients by data usage (in mb) over given time range.

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
    res, err := s.Clients.GetOrganizationSummaryTopClientsByUsage(ctx, operations.GetOrganizationSummaryTopClientsByUsageRequest{
        OrganizationID: "doloribus",
        T0: sdk.String("provident"),
        T1: sdk.String("alias"),
        Timespan: sdk.Float32(6436.44),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopClientsByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopClientsManufacturersByUsage

Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.

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
    res, err := s.Clients.GetOrganizationSummaryTopClientsManufacturersByUsage(ctx, operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest{
        OrganizationID: "fugit",
        T0: sdk.String("autem"),
        T1: sdk.String("quo"),
        Timespan: sdk.Float32(4770.99),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopClientsManufacturersByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## ProvisionNetworkClients

Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.

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
    res, err := s.Clients.ProvisionNetworkClients(ctx, operations.ProvisionNetworkClientsRequest{
        RequestBody: operations.ProvisionNetworkClientsRequestBody{
            Clients: []ProvisionNetworkClientsRequestBodyClients{
                operations.ProvisionNetworkClientsRequestBodyClients{
                    Mac: "facere",
                    Name: sdk.String("Dr. Terrance Lind III"),
                },
                operations.ProvisionNetworkClientsRequestBodyClients{
                    Mac: "laudantium",
                    Name: sdk.String("Johnnie Berge"),
                },
                operations.ProvisionNetworkClientsRequestBodyClients{
                    Mac: "libero",
                    Name: sdk.String("Norman Ferry"),
                },
                operations.ProvisionNetworkClientsRequestBodyClients{
                    Mac: "similique",
                    Name: sdk.String("Glenn Green"),
                },
            },
            DevicePolicy: operations.ProvisionNetworkClientsRequestBodyDevicePolicyEnumBlocked,
            GroupPolicyID: sdk.String("veritatis"),
            PoliciesBySecurityAppliance: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySecurityAppliance{
                DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySecurityApplianceDevicePolicyEnumNormal.ToPointer(),
            },
            PoliciesBySsid: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid{
                Zero: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid0{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid0DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("magnam"),
                },
                One: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid1{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid1DevicePolicyEnumAllowed,
                    GroupPolicyID: sdk.String("ducimus"),
                },
                Ten: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid10{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid10DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("necessitatibus"),
                },
                Eleven: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid11{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid11DevicePolicyEnumBlocked,
                    GroupPolicyID: sdk.String("doloribus"),
                },
                Twelve: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid12{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid12DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("sapiente"),
                },
                Thirteen: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid13{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid13DevicePolicyEnumAllowed,
                    GroupPolicyID: sdk.String("impedit"),
                },
                Fourteen: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid14{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid14DevicePolicyEnumBlocked,
                    GroupPolicyID: sdk.String("aspernatur"),
                },
                Two: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid2{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid2DevicePolicyEnumGroupPolicy,
                    GroupPolicyID: sdk.String("nihil"),
                },
                Three: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid3{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid3DevicePolicyEnumGroupPolicy,
                    GroupPolicyID: sdk.String("reiciendis"),
                },
                Four: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid4{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid4DevicePolicyEnumAllowed,
                    GroupPolicyID: sdk.String("ullam"),
                },
                Five: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid5{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid5DevicePolicyEnumBlocked,
                    GroupPolicyID: sdk.String("consequuntur"),
                },
                Six: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid6{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid6DevicePolicyEnumBlocked,
                    GroupPolicyID: sdk.String("ratione"),
                },
                Seven: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid7{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid7DevicePolicyEnumGroupPolicy,
                    GroupPolicyID: sdk.String("corrupti"),
                },
                Eight: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid8{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid8DevicePolicyEnumGroupPolicy,
                    GroupPolicyID: sdk.String("perferendis"),
                },
                Nine: &operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid9{
                    DevicePolicy: operations.ProvisionNetworkClientsRequestBodyPoliciesBySsid9DevicePolicyEnumNormal,
                    GroupPolicyID: sdk.String("impedit"),
                },
            },
        },
        NetworkID: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProvisionNetworkClients201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkClientPolicy

Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.UpdateNetworkClientPolicy(ctx, operations.UpdateNetworkClientPolicyRequest{
        RequestBody: operations.UpdateNetworkClientPolicyRequestBody{
            DevicePolicy: "nisi",
            GroupPolicyID: sdk.String("nisi"),
        },
        ClientID: "dolor",
        NetworkID: "fugit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkClientPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkClientSplashAuthorizationStatus

Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

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
    res, err := s.Clients.UpdateNetworkClientSplashAuthorizationStatus(ctx, operations.UpdateNetworkClientSplashAuthorizationStatusRequest{
        RequestBody: operations.UpdateNetworkClientSplashAuthorizationStatusRequestBody{
            Ssids: operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids{
                Zero: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids0{
                    IsAuthorized: sdk.Bool(false),
                },
                One: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids1{
                    IsAuthorized: sdk.Bool(false),
                },
                Ten: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids10{
                    IsAuthorized: sdk.Bool(false),
                },
                Eleven: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids11{
                    IsAuthorized: sdk.Bool(false),
                },
                Twelve: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids12{
                    IsAuthorized: sdk.Bool(false),
                },
                Thirteen: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids13{
                    IsAuthorized: sdk.Bool(false),
                },
                Fourteen: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids14{
                    IsAuthorized: sdk.Bool(false),
                },
                Two: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids2{
                    IsAuthorized: sdk.Bool(false),
                },
                Three: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids3{
                    IsAuthorized: sdk.Bool(false),
                },
                Four: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids4{
                    IsAuthorized: sdk.Bool(false),
                },
                Five: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids5{
                    IsAuthorized: sdk.Bool(false),
                },
                Six: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids6{
                    IsAuthorized: sdk.Bool(false),
                },
                Seven: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids7{
                    IsAuthorized: sdk.Bool(false),
                },
                Eight: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids8{
                    IsAuthorized: sdk.Bool(false),
                },
                Nine: &operations.UpdateNetworkClientSplashAuthorizationStatusRequestBodySsids9{
                    IsAuthorized: sdk.Bool(false),
                },
            },
        },
        ClientID: "dolore",
        NetworkID: "maxime",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkClientSplashAuthorizationStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```
