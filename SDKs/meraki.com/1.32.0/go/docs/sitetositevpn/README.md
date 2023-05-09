# SiteToSiteVpn

### Available Operations

* [GetNetworkApplianceVpnSiteToSiteVpn](#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [UpdateNetworkApplianceVpnSiteToSiteVpn](#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network

## GetNetworkApplianceVpnSiteToSiteVpn

Return the site-to-site VPN settings of a network. Only valid for MX networks.

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
    res, err := s.SiteToSiteVpn.GetNetworkApplianceVpnSiteToSiteVpn(ctx, operations.GetNetworkApplianceVpnSiteToSiteVpnRequest{
        NetworkID: "est",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceVpnSiteToSiteVpn

Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.

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
    res, err := s.SiteToSiteVpn.UpdateNetworkApplianceVpnSiteToSiteVpn(ctx, operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest{
        RequestBody: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody{
            Hubs: []UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                    HubID: "iste",
                    UseDefaultRoute: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                    HubID: "facilis",
                    UseDefaultRoute: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                    HubID: "nesciunt",
                    UseDefaultRoute: sdk.Bool(false),
                },
            },
            Mode: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnumNone,
            Subnets: []UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                    LocalSubnet: "possimus",
                    UseVpn: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                    LocalSubnet: "vero",
                    UseVpn: sdk.Bool(false),
                },
            },
        },
        NetworkID: "ullam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```
