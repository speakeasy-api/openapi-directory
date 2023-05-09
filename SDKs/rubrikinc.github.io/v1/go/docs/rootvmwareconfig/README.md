# RootVmwareConfig

### Available Operations

* [GetPreferredCdpNetworkProtocol](#getpreferredcdpnetworkprotocol) - Returns the current preference of CDM between IPv4 and IPv6 for CDP data transfer
* [GetVmwareRecoveryNetworks](#getvmwarerecoverynetworks) - Get all the VMware recovery networks for a compute resource ID
* [SetPreferredCdpNetworkProtocol](#setpreferredcdpnetworkprotocol) - Set the current preference of CDM between IPv4 and IPv6 for CDP data transfer

## GetPreferredCdpNetworkProtocol

Returns the current preference of CDM between IPv4 and IPv6 for CDP data transfer.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareConfig.GetPreferredCdpNetworkProtocol(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PreferredCdpNetworkProtocolObject != nil {
        // handle response
    }
}
```

## GetVmwareRecoveryNetworks

Get all the networks for snapshot recovery for the specified compute resource.

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
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareConfig.GetVmwareRecoveryNetworks(ctx, operations.GetVmwareRecoveryNetworksRequest{
        ComputeResourceID: "ipsa",
        ComputeResourceType: operations.GetVmwareRecoveryNetworksComputeResourceTypeEnumResourcePool,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VmwareNetworkCollection != nil {
        // handle response
    }
}
```

## SetPreferredCdpNetworkProtocol

Set the current preference of CDM between IPv4 and IPv6 for CDP data transfer.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootVmwareConfig.SetPreferredCdpNetworkProtocol(ctx, shared.PreferredCdpNetworkProtocolEnumIPv6)
    if err != nil {
        log.Fatal(err)
    }

    if res.PreferredCdpNetworkProtocolObject != nil {
        // handle response
    }
}
```
