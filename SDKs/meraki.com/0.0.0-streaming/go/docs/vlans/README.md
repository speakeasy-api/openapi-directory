# VLANs

### Available Operations

* [CreateNetworkVlan](#createnetworkvlan) - Add a VLAN
* [DeleteNetworkVlan](#deletenetworkvlan) - Delete a VLAN from a network
* [GetNetworkVlan](#getnetworkvlan) - Return a VLAN
* [GetNetworkVlans](#getnetworkvlans) - List the VLANs for an MX network
* [GetNetworkVlansEnabledState](#getnetworkvlansenabledstate) - Returns the enabled status of VLANs for the network
* [UpdateNetworkVlan](#updatenetworkvlan) - Update a VLAN
* [UpdateNetworkVlansEnabledState](#updatenetworkvlansenabledstate) - Enable/Disable VLANs for the given network

## CreateNetworkVlan

Add a VLAN

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
    res, err := s.VLANs.CreateNetworkVlan(ctx, operations.CreateNetworkVlanRequest{
        RequestBody: operations.CreateNetworkVlanRequestBody{
            ApplianceIP: "quod",
            GroupPolicyID: sdk.String("laboriosam"),
            ID: "00dec001-ac80-42e2-ac09-ff8f0f816ff3",
            Name: "Joy King I",
            Subnet: "vero",
        },
        NetworkID: "excepturi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkVlan201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkVlan

Delete a VLAN from a network

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
    res, err := s.VLANs.DeleteNetworkVlan(ctx, operations.DeleteNetworkVlanRequest{
        NetworkID: "accusantium",
        VlanID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkVlan

Return a VLAN

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
    res, err := s.VLANs.GetNetworkVlan(ctx, operations.GetNetworkVlanRequest{
        NetworkID: "impedit",
        VlanID: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkVlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkVlans

List the VLANs for an MX network

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
    res, err := s.VLANs.GetNetworkVlans(ctx, operations.GetNetworkVlansRequest{
        NetworkID: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkVlans200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkVlansEnabledState

Returns the enabled status of VLANs for the network

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
    res, err := s.VLANs.GetNetworkVlansEnabledState(ctx, operations.GetNetworkVlansEnabledStateRequest{
        NetworkID: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkVlansEnabledState200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkVlan

Update a VLAN

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
    res, err := s.VLANs.UpdateNetworkVlan(ctx, operations.UpdateNetworkVlanRequest{
        RequestBody: &operations.UpdateNetworkVlanRequestBody{
            ApplianceIP: sdk.String("odit"),
            DhcpBootFilename: sdk.String("corporis"),
            DhcpBootNextServer: sdk.String("rerum"),
            DhcpBootOptionsEnabled: sdk.Bool(false),
            DhcpHandling: operations.UpdateNetworkVlanRequestBodyDhcpHandlingEnumDoNotRespondToDhcpRequests.ToPointer(),
            DhcpLeaseTime: operations.UpdateNetworkVlanRequestBodyDhcpLeaseTimeEnumTwelveHours.ToPointer(),
            DhcpOptions: []UpdateNetworkVlanRequestBodyDhcpOptions{
                operations.UpdateNetworkVlanRequestBodyDhcpOptions{
                    Code: "accusantium",
                    Type: operations.UpdateNetworkVlanRequestBodyDhcpOptionsTypeEnumIP,
                    Value: "laboriosam",
                },
                operations.UpdateNetworkVlanRequestBodyDhcpOptions{
                    Code: "ex",
                    Type: operations.UpdateNetworkVlanRequestBodyDhcpOptionsTypeEnumIP,
                    Value: "veritatis",
                },
            },
            DhcpRelayServerIps: []string{
                "quae",
                "similique",
            },
            DNSNameservers: sdk.String("incidunt"),
            FixedIPAssignments: map[string]interface{}{
                "magni": "deserunt",
                "delectus": "omnis",
            },
            GroupPolicyID: sdk.String("sed"),
            Name: sdk.String("Kendra Hauck"),
            ReservedIPRanges: []UpdateNetworkVlanRequestBodyReservedIPRanges{
                operations.UpdateNetworkVlanRequestBodyReservedIPRanges{
                    Comment: "maiores",
                    End: "laudantium",
                    Start: "velit",
                },
                operations.UpdateNetworkVlanRequestBodyReservedIPRanges{
                    Comment: "reiciendis",
                    End: "amet",
                    Start: "nemo",
                },
                operations.UpdateNetworkVlanRequestBodyReservedIPRanges{
                    Comment: "ipsa",
                    End: "quisquam",
                    Start: "tenetur",
                },
            },
            Subnet: sdk.String("quas"),
            VpnNatSubnet: sdk.String("molestiae"),
        },
        NetworkID: "aliquid",
        VlanID: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkVlan200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkVlansEnabledState

Enable/Disable VLANs for the given network

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
    res, err := s.VLANs.UpdateNetworkVlansEnabledState(ctx, operations.UpdateNetworkVlansEnabledStateRequest{
        RequestBody: operations.UpdateNetworkVlansEnabledStateRequestBody{
            Enabled: false,
        },
        NetworkID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkVlansEnabledState200ApplicationJSONObject != nil {
        // handle response
    }
}
```
