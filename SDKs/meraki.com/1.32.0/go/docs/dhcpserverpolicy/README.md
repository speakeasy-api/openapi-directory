# DhcpServerPolicy

### Available Operations

* [CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [GetNetworkSwitchDhcpServerPolicy](#getnetworkswitchdhcpserverpolicy) - Return the DHCP server settings
* [GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
* [UpdateNetworkSwitchDhcpServerPolicy](#updatenetworkswitchdhcpserverpolicy) - Update the DHCP server settings
* [UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#updatenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Update a server that is trusted by Dynamic ARP Inspection on this network

## CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Add a server to be trusted by Dynamic ARP Inspection on this network

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
    res, err := s.DhcpServerPolicy.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        RequestBody: operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody{
            Ipv4: operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4{
                Address: sdk.String("191 Craig Harbors"),
            },
            Mac: "omnis",
            Vlan: 695724,
        },
        NetworkID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Remove a server from being trusted by Dynamic ARP Inspection on this network

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
    res, err := s.DhcpServerPolicy.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        NetworkID: "ipsam",
        TrustedServerID: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkSwitchDhcpServerPolicy

Return the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

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
    res, err := s.DhcpServerPolicy.GetNetworkSwitchDhcpServerPolicy(ctx, operations.GetNetworkSwitchDhcpServerPolicyRequest{
        NetworkID: "assumenda",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpServerPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers

Return the list of servers trusted by Dynamic ARP Inspection on this network. These are also known as whitelisted snoop entries

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
    res, err := s.DhcpServerPolicy.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers(ctx, operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest{
        EndingBefore: sdk.String("aperiam"),
        NetworkID: "et",
        PerPage: sdk.Int64(324028),
        StartingAfter: sdk.String("quidem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice

Return the devices that have a Dynamic ARP Inspection warning and their warnings

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
    res, err := s.DhcpServerPolicy.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(ctx, operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest{
        EndingBefore: sdk.String("aliquid"),
        NetworkID: "quia",
        PerPage: sdk.Int64(756424),
        StartingAfter: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchDhcpServerPolicy

Update the DHCP server settings. Blocked/allowed servers are only applied when default policy is allow/block, respectively

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
    res, err := s.DhcpServerPolicy.UpdateNetworkSwitchDhcpServerPolicy(ctx, operations.UpdateNetworkSwitchDhcpServerPolicyRequest{
        RequestBody: &operations.UpdateNetworkSwitchDhcpServerPolicyRequestBody{
            Alerts: &operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlerts{
                Email: &operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyAlertsEmail{
                    Enabled: sdk.Bool(false),
                },
            },
            AllowedServers: []string{
                "praesentium",
                "dolor",
                "dolorum",
            },
            ArpInspection: &operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyArpInspection{
                Enabled: sdk.Bool(false),
            },
            BlockedServers: []string{
                "molestias",
            },
            DefaultPolicy: operations.UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnumBlock.ToPointer(),
        },
        NetworkID: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchDhcpServerPolicy200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer

Update a server that is trusted by Dynamic ARP Inspection on this network

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
    res, err := s.DhcpServerPolicy.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        RequestBody: &operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody{
            Ipv4: &operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4{
                Address: sdk.String("5571 Edgar Crossing"),
            },
            Mac: sdk.String("voluptatem"),
            Vlan: sdk.Int64(12608),
        },
        NetworkID: "optio",
        TrustedServerID: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```
