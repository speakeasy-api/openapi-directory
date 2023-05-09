# MXVLANPorts

### Available Operations

* [GetNetworkAppliancePort](#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [GetNetworkAppliancePorts](#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [UpdateNetworkAppliancePort](#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.

## GetNetworkAppliancePort

Return per-port VLAN settings for a single MX port.

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
    res, err := s.MXVLANPorts.GetNetworkAppliancePort(ctx, operations.GetNetworkAppliancePortRequest{
        AppliancePortID: "error",
        NetworkID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAppliancePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkAppliancePorts

List per-port VLAN settings for all ports of a MX.

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
    res, err := s.MXVLANPorts.GetNetworkAppliancePorts(ctx, operations.GetNetworkAppliancePortsRequest{
        NetworkID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAppliancePorts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkAppliancePort

Update the per-port VLAN settings for a single MX port.

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
    res, err := s.MXVLANPorts.UpdateNetworkAppliancePort(ctx, operations.UpdateNetworkAppliancePortRequest{
        RequestBody: &operations.UpdateNetworkAppliancePortRequestBody{
            AccessPolicy: sdk.String("repudiandae"),
            AllowedVlans: sdk.String("atque"),
            DropUntaggedTraffic: sdk.Bool(false),
            Enabled: sdk.Bool(false),
            Type: sdk.String("atque"),
            Vlan: sdk.Int64(120919),
        },
        AppliancePortID: "recusandae",
        NetworkID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkAppliancePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```
