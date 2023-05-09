# FirewalledServices

### Available Operations

* [GetNetworkApplianceFirewallFirewalledService](#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [GetNetworkApplianceFirewallFirewalledServices](#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [UpdateNetworkApplianceFirewallFirewalledService](#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

## GetNetworkApplianceFirewallFirewalledService

Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')

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
    res, err := s.FirewalledServices.GetNetworkApplianceFirewallFirewalledService(ctx, operations.GetNetworkApplianceFirewallFirewalledServiceRequest{
        NetworkID: "doloremque",
        Service: "vero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallFirewalledService200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallFirewalledServices

List the appliance services and their accessibility rules

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
    res, err := s.FirewalledServices.GetNetworkApplianceFirewallFirewalledServices(ctx, operations.GetNetworkApplianceFirewallFirewalledServicesRequest{
        NetworkID: "voluptatum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallFirewalledServices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallFirewalledService

Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')

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
    res, err := s.FirewalledServices.UpdateNetworkApplianceFirewallFirewalledService(ctx, operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequestBody{
            Access: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnumUnrestricted,
            AllowedIps: []string{
                "culpa",
            },
        },
        NetworkID: "magnam",
        Service: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallFirewalledService200ApplicationJSONObject != nil {
        // handle response
    }
}
```
