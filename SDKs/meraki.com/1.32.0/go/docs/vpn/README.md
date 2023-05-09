# Vpn

### Available Operations

* [GetNetworkApplianceVpnBgp](#getnetworkappliancevpnbgp) - Return a Hub BGP Configuration
* [GetNetworkApplianceVpnSiteToSiteVpn](#getnetworkappliancevpnsitetositevpn) - Return the site-to-site VPN settings of a network
* [GetNetworkWirelessSsidVpn](#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [GetOrganizationApplianceVpnStats](#getorganizationappliancevpnstats) - Show VPN history stat for networks in an organization
* [GetOrganizationApplianceVpnStatuses](#getorganizationappliancevpnstatuses) - Show VPN status for networks in an organization
* [GetOrganizationApplianceVPNThirdPartyVPNPeers](#getorganizationappliancevpnthirdpartyvpnpeers) - Return the third party VPN peers for an organization
* [GetOrganizationApplianceVpnVpnFirewallRules](#getorganizationappliancevpnvpnfirewallrules) - Return the firewall rules for an organization's site-to-site VPN
* [UpdateNetworkApplianceVpnBgp](#updatenetworkappliancevpnbgp) - Update a Hub BGP Configuration
* [UpdateNetworkApplianceVpnSiteToSiteVpn](#updatenetworkappliancevpnsitetositevpn) - Update the site-to-site VPN settings of a network
* [UpdateNetworkWirelessSsidVpn](#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID
* [UpdateOrganizationApplianceVPNThirdPartyVPNPeers](#updateorganizationappliancevpnthirdpartyvpnpeers) - Update the third party VPN peers for an organization
* [UpdateOrganizationApplianceVpnVpnFirewallRules](#updateorganizationappliancevpnvpnfirewallrules) - Update the firewall rules of an organization's site-to-site VPN

## GetNetworkApplianceVpnBgp

Return a Hub BGP Configuration

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
    res, err := s.Vpn.GetNetworkApplianceVpnBgp(ctx, operations.GetNetworkApplianceVpnBgpRequest{
        NetworkID: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVpnBgp200ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
    res, err := s.Vpn.GetNetworkApplianceVpnSiteToSiteVpn(ctx, operations.GetNetworkApplianceVpnSiteToSiteVpnRequest{
        NetworkID: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidVpn

List the VPN settings for the SSID.

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
    res, err := s.Vpn.GetNetworkWirelessSsidVpn(ctx, operations.GetNetworkWirelessSsidVpnRequest{
        NetworkID: "quaerat",
        Number: "nobis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceVpnStats

Show VPN history stat for networks in an organization

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
    res, err := s.Vpn.GetOrganizationApplianceVpnStats(ctx, operations.GetOrganizationApplianceVpnStatsRequest{
        EndingBefore: sdk.String("dignissimos"),
        NetworkIds: []string{
            "illo",
        },
        OrganizationID: "quasi",
        PerPage: sdk.Int64(772790),
        StartingAfter: sdk.String("magni"),
        T0: sdk.String("nam"),
        T1: sdk.String("odio"),
        Timespan: sdk.Float32(3541.01),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVpnStats200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceVpnStatuses

Show VPN status for networks in an organization

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
    res, err := s.Vpn.GetOrganizationApplianceVpnStatuses(ctx, operations.GetOrganizationApplianceVpnStatusesRequest{
        EndingBefore: sdk.String("possimus"),
        NetworkIds: []string{
            "pariatur",
            "animi",
        },
        OrganizationID: "rem",
        PerPage: sdk.Int64(746833),
        StartingAfter: sdk.String("iste"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVpnStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceVPNThirdPartyVPNPeers

Return the third party VPN peers for an organization

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
    res, err := s.Vpn.GetOrganizationApplianceVPNThirdPartyVPNPeers(ctx, operations.GetOrganizationApplianceVPNThirdPartyVPNPeersRequest{
        OrganizationID: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationApplianceVpnVpnFirewallRules

Return the firewall rules for an organization's site-to-site VPN

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
    res, err := s.Vpn.GetOrganizationApplianceVpnVpnFirewallRules(ctx, operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest{
        OrganizationID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceVpnBgp

Update a Hub BGP Configuration

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
    res, err := s.Vpn.UpdateNetworkApplianceVpnBgp(ctx, operations.UpdateNetworkApplianceVpnBgpRequest{
        RequestBody: operations.UpdateNetworkApplianceVpnBgpRequestBody{
            AsNumber: sdk.Int64(391309),
            Enabled: false,
            IbgpHoldTimer: sdk.Int64(79890),
            Neighbors: []UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 69402,
                    EbgpMultihop: 929307,
                    IP: sdk.String("beatae"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "3134 Hyatt Viaduct",
                    },
                    ReceiveLimit: sdk.Int64(242597),
                    RemoteAsNumber: 156128,
                },
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 324750,
                    EbgpMultihop: 716428,
                    IP: sdk.String("repellat"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "6555 Ashlynn Divide",
                    },
                    ReceiveLimit: sdk.Int64(162535),
                    RemoteAsNumber: 864870,
                },
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 340932,
                    EbgpMultihop: 785184,
                    IP: sdk.String("ea"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "0007 Misael Causeway",
                    },
                    ReceiveLimit: sdk.Int64(245558),
                    RemoteAsNumber: 932673,
                },
                operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors{
                    AllowTransit: sdk.Bool(false),
                    EbgpHoldTimer: 897711,
                    EbgpMultihop: 219152,
                    IP: sdk.String("iure"),
                    Ipv6: &operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighborsIpv6{
                        Address: "401 Vandervort Overpass",
                    },
                    ReceiveLimit: sdk.Int64(387575),
                    RemoteAsNumber: 399766,
                },
            },
        },
        NetworkID: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVpnBgp200ApplicationJSONObject != nil {
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
    res, err := s.Vpn.UpdateNetworkApplianceVpnSiteToSiteVpn(ctx, operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest{
        RequestBody: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody{
            Hubs: []UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                    HubID: "aliquam",
                    UseDefaultRoute: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                    HubID: "asperiores",
                    UseDefaultRoute: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs{
                    HubID: "nemo",
                    UseDefaultRoute: sdk.Bool(false),
                },
            },
            Mode: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnumHub,
            Subnets: []UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                    LocalSubnet: "voluptate",
                    UseVpn: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets{
                    LocalSubnet: "veniam",
                    UseVpn: sdk.Bool(false),
                },
            },
        },
        NetworkID: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceVpnSiteToSiteVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidVpn

Update the VPN settings for the SSID

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
    res, err := s.Vpn.UpdateNetworkWirelessSsidVpn(ctx, operations.UpdateNetworkWirelessSsidVpnRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidVpnRequestBody{
            Concentrator: &operations.UpdateNetworkWirelessSsidVpnRequestBodyConcentrator{
                NetworkID: sdk.String("soluta"),
                VlanID: sdk.Int64(644203),
            },
            Failover: &operations.UpdateNetworkWirelessSsidVpnRequestBodyFailover{
                HeartbeatInterval: sdk.Int64(824669),
                IdleTimeout: sdk.Int64(990475),
                RequestIP: sdk.String("dolores"),
            },
            SplitTunnel: &operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel{
                Enabled: sdk.Bool(false),
                Rules: []UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules{
                    operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules{
                        Comment: sdk.String("commodi"),
                        DestCidr: "sed",
                        DestPort: sdk.String("possimus"),
                        Policy: "ut",
                        Protocol: operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnumTCP.ToPointer(),
                    },
                },
            },
        },
        NetworkID: "similique",
        Number: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationApplianceVPNThirdPartyVPNPeers

Update the third party VPN peers for an organization

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
    res, err := s.Vpn.UpdateOrganizationApplianceVPNThirdPartyVPNPeers(ctx, operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest{
        RequestBody: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBody{
            Peers: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers{
                operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers{
                    IkeVersion: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnumOne.ToPointer(),
                    IpsecPolicies: &operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies{
                        ChildAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha256,
                        },
                        ChildCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumNull,
                        },
                        ChildLifetime: sdk.Int64(442235),
                        ChildPfsGroup: []string{
                            "molestiae",
                            "veniam",
                        },
                        IkeAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha1,
                        },
                        IkeCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes256,
                        },
                        IkeDiffieHellmanGroup: []string{
                            "saepe",
                            "sapiente",
                            "maxime",
                        },
                        IkeLifetime: sdk.Int64(951761),
                        IkePrfAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha1,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha256,
                        },
                    },
                    IpsecPoliciesPreset: sdk.String("maxime"),
                    LocalID: sdk.String("porro"),
                    Name: "Alfredo Bauch",
                    NetworkTags: []string{
                        "repellendus",
                        "quos",
                    },
                    PrivateSubnets: []string{
                        "praesentium",
                        "impedit",
                        "incidunt",
                        "optio",
                    },
                    PublicIP: sdk.String("quis"),
                    RemoteID: sdk.String("laudantium"),
                    Secret: "voluptatibus",
                },
                operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeers{
                    IkeVersion: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIkeVersionEnumTwo.ToPointer(),
                    IpsecPolicies: &operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPolicies{
                        ChildAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildAuthAlgoEnumSha256,
                        },
                        ChildCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesChildCipherAlgoEnumTripledes,
                        },
                        ChildLifetime: sdk.Int64(792417),
                        ChildPfsGroup: []string{
                            "neque",
                            "eveniet",
                            "amet",
                        },
                        IkeAuthAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha1,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha1,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumMd5,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeAuthAlgoEnumSha256,
                        },
                        IkeCipherAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes192,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes128,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes256,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkeCipherAlgoEnumAes192,
                        },
                        IkeDiffieHellmanGroup: []string{
                            "asperiores",
                            "saepe",
                            "beatae",
                        },
                        IkeLifetime: sdk.Int64(317557),
                        IkePrfAlgo: []UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum{
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha1,
                            operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfmd5,
                        },
                    },
                    IpsecPoliciesPreset: sdk.String("ex"),
                    LocalID: sdk.String("sit"),
                    Name: "Willie Skiles",
                    NetworkTags: []string{
                        "adipisci",
                        "reiciendis",
                        "accusamus",
                    },
                    PrivateSubnets: []string{
                        "aliquid",
                        "pariatur",
                        "quidem",
                        "reiciendis",
                    },
                    PublicIP: sdk.String("perspiciatis"),
                    RemoteID: sdk.String("sit"),
                    Secret: "placeat",
                },
            },
        },
        OrganizationID: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationApplianceVPNThirdPartyVPNPeers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationApplianceVpnVpnFirewallRules

Update the firewall rules of an organization's site-to-site VPN

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
    res, err := s.Vpn.UpdateOrganizationApplianceVpnVpnFirewallRules(ctx, operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest{
        RequestBody: &operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody{
            Rules: []UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules{
                operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules{
                    Comment: sdk.String("quisquam"),
                    DestCidr: "sunt",
                    DestPort: sdk.String("aut"),
                    Policy: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnumUDP,
                    SrcCidr: "eos",
                    SrcPort: sdk.String("pariatur"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        OrganizationID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationApplianceVpnVpnFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
