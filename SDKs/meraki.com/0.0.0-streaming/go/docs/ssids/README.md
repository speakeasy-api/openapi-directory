# SSIDs

### Available Operations

* [GetNetworkDeviceWirelessStatus](#getnetworkdevicewirelessstatus) - Return the SSID statuses of an access point
* [GetNetworkSsid](#getnetworkssid) - Return a single SSID
* [GetNetworkSsids](#getnetworkssids) - List the SSIDs in a network
* [UpdateNetworkSsid](#updatenetworkssid) - Update the attributes of an SSID

## GetNetworkDeviceWirelessStatus

Return the SSID statuses of an access point

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
    res, err := s.SSIDs.GetNetworkDeviceWirelessStatus(ctx, operations.GetNetworkDeviceWirelessStatusRequest{
        NetworkID: "dicta",
        Serial: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkDeviceWirelessStatus200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSsid

Return a single SSID

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
    res, err := s.SSIDs.GetNetworkSsid(ctx, operations.GetNetworkSsidRequest{
        NetworkID: "eligendi",
        Number: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSsid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkSsids

List the SSIDs in a network. Supports networks with access points or wireless-enabled security appliances and teleworker gateways.

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
    res, err := s.SSIDs.GetNetworkSsids(ctx, operations.GetNetworkSsidsRequest{
        NetworkID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSsids200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkSsid

Update the attributes of an SSID

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
    res, err := s.SSIDs.UpdateNetworkSsid(ctx, operations.UpdateNetworkSsidRequest{
        RequestBody: &operations.UpdateNetworkSsidRequestBody{
            ApTagsAndVlanIds: []UpdateNetworkSsidRequestBodyApTagsAndVlanIds{
                operations.UpdateNetworkSsidRequestBodyApTagsAndVlanIds{
                    Tags: sdk.String("architecto"),
                    VlanID: sdk.Int64(317898),
                },
            },
            AuthMode: operations.UpdateNetworkSsidRequestBodyAuthModeEnumOpenWithNac.ToPointer(),
            AvailabilityTags: []string{
                "perferendis",
                "facilis",
                "reiciendis",
            },
            AvailableOnAllAps: sdk.Bool(false),
            BandSelection: sdk.String("a"),
            ConcentratorNetworkID: sdk.String("iste"),
            DefaultVlanID: sdk.Int64(117819),
            DisassociateClientsOnVpnFailover: sdk.Bool(false),
            Enabled: sdk.Bool(false),
            EncryptionMode: operations.UpdateNetworkSsidRequestBodyEncryptionModeEnumWpa.ToPointer(),
            EnterpriseAdminAccess: operations.UpdateNetworkSsidRequestBodyEnterpriseAdminAccessEnumAccessDisabled.ToPointer(),
            IPAssignmentMode: sdk.String("dolore"),
            LanIsolationEnabled: sdk.Bool(false),
            MinBitrate: sdk.Float32(2662.84),
            Name: sdk.String("Simon Gleason"),
            PerClientBandwidthLimitDown: sdk.Int64(876840),
            PerClientBandwidthLimitUp: sdk.Int64(985109),
            Psk: sdk.String("impedit"),
            RadiusAccountingEnabled: sdk.Bool(false),
            RadiusAccountingServers: []UpdateNetworkSsidRequestBodyRadiusAccountingServers{
                operations.UpdateNetworkSsidRequestBodyRadiusAccountingServers{
                    Host: "accusamus",
                    Port: sdk.Int64(518990),
                    Secret: sdk.String("reiciendis"),
                },
                operations.UpdateNetworkSsidRequestBodyRadiusAccountingServers{
                    Host: "ab",
                    Port: sdk.Int64(573444),
                    Secret: sdk.String("nihil"),
                },
                operations.UpdateNetworkSsidRequestBodyRadiusAccountingServers{
                    Host: "esse",
                    Port: sdk.Int64(438256),
                    Secret: sdk.String("odio"),
                },
                operations.UpdateNetworkSsidRequestBodyRadiusAccountingServers{
                    Host: "nesciunt",
                    Port: sdk.Int64(895513),
                    Secret: sdk.String("vel"),
                },
            },
            RadiusAttributeForGroupPolicies: sdk.String("neque"),
            RadiusCoaEnabled: sdk.Bool(false),
            RadiusFailoverPolicy: operations.UpdateNetworkSsidRequestBodyRadiusFailoverPolicyEnumAllowAccess.ToPointer(),
            RadiusLoadBalancingPolicy: operations.UpdateNetworkSsidRequestBodyRadiusLoadBalancingPolicyEnumRoundRobin.ToPointer(),
            RadiusOverride: sdk.Bool(false),
            RadiusServers: []UpdateNetworkSsidRequestBodyRadiusServers{
                operations.UpdateNetworkSsidRequestBodyRadiusServers{
                    Host: "officia",
                    Port: sdk.Int64(441374),
                    Secret: sdk.String("distinctio"),
                },
            },
            SecondaryConcentratorNetworkID: sdk.String("eius"),
            SplashPage: operations.UpdateNetworkSsidRequestBodySplashPageEnumBilling.ToPointer(),
            UseVlanTagging: sdk.Bool(false),
            Visible: sdk.Bool(false),
            VlanID: sdk.Int64(522062),
            WalledGardenEnabled: sdk.Bool(false),
            WalledGardenRanges: sdk.String("maiores"),
            WpaEncryptionMode: operations.UpdateNetworkSsidRequestBodyWpaEncryptionModeEnumWpa1AndWpa2.ToPointer(),
        },
        NetworkID: "veniam",
        Number: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSsid200ApplicationJSONObject != nil {
        // handle response
    }
}
```
