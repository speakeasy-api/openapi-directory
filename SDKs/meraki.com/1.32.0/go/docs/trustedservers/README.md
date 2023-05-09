# TrustedServers

### Available Operations

* [CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
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
    res, err := s.TrustedServers.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        RequestBody: operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody{
            Ipv4: operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4{
                Address: sdk.String("1396 Saul Camp"),
            },
            Mac: "vel",
            Vlan: 405989,
        },
        NetworkID: "asperiores",
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
    res, err := s.TrustedServers.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        NetworkID: "tempore",
        TrustedServerID: "quas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
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
    res, err := s.TrustedServers.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers(ctx, operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest{
        EndingBefore: sdk.String("fugiat"),
        NetworkID: "debitis",
        PerPage: sdk.Int64(299729),
        StartingAfter: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers200ApplicationJSONObjects != nil {
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
    res, err := s.TrustedServers.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        RequestBody: &operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody{
            Ipv4: &operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4{
                Address: sdk.String("321 Hintz Course"),
            },
            Mac: sdk.String("atque"),
            Vlan: sdk.Int64(777905),
        },
        NetworkID: "maxime",
        TrustedServerID: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```
