# ArpInspection

### Available Operations

* [CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#createnetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Add a server to be trusted by Dynamic ARP Inspection on this network
* [DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer](#deletenetworkswitchdhcpserverpolicyarpinspectiontrustedserver) - Remove a server from being trusted by Dynamic ARP Inspection on this network
* [GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers](#getnetworkswitchdhcpserverpolicyarpinspectiontrustedservers) - Return the list of servers trusted by Dynamic ARP Inspection on this network
* [GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice](#getnetworkswitchdhcpserverpolicyarpinspectionwarningsbydevice) - Return the devices that have a Dynamic ARP Inspection warning and their warnings
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
    res, err := s.ArpInspection.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        RequestBody: operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody{
            Ipv4: operations.CreateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4{
                Address: sdk.String("4629 Jada Plains"),
            },
            Mac: "laudantium",
            Vlan: 461050,
        },
        NetworkID: "eveniet",
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
    res, err := s.ArpInspection.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        NetworkID: "earum",
        TrustedServerID: "velit",
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
    res, err := s.ArpInspection.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServers(ctx, operations.GetNetworkSwitchDhcpServerPolicyArpInspectionTrustedServersRequest{
        EndingBefore: sdk.String("officiis"),
        NetworkID: "eius",
        PerPage: sdk.Int64(701978),
        StartingAfter: sdk.String("itaque"),
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
    res, err := s.ArpInspection.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(ctx, operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest{
        EndingBefore: sdk.String("dignissimos"),
        NetworkID: "ipsam",
        PerPage: sdk.Int64(131687),
        StartingAfter: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice200ApplicationJSONObjects != nil {
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
    res, err := s.ArpInspection.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer(ctx, operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest{
        RequestBody: &operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBody{
            Ipv4: &operations.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequestBodyIpv4{
                Address: sdk.String("3722 Beaulah Loop"),
            },
            Mac: sdk.String("eveniet"),
            Vlan: sdk.Int64(221781),
        },
        NetworkID: "expedita",
        TrustedServerID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchDhcpServerPolicyArpInspectionTrustedServer200ApplicationJSONObject != nil {
        // handle response
    }
}
```
