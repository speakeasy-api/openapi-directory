# Ssids

### Available Operations

* [CreateNetworkWirelessSsidIdentityPsk](#createnetworkwirelessssididentitypsk) - Create an Identity PSK
* [DeleteNetworkWirelessSsidIdentityPsk](#deletenetworkwirelessssididentitypsk) - Delete an Identity PSK
* [GetNetworkApplianceSsid](#getnetworkappliancessid) - Return a single MX SSID
* [GetNetworkApplianceSsids](#getnetworkappliancessids) - List the MX SSIDs in a network
* [GetNetworkWirelessSsid](#getnetworkwirelessssid) - Return a single MR SSID
* [GetNetworkWirelessSsidBonjourForwarding](#getnetworkwirelessssidbonjourforwarding) - List the Bonjour forwarding setting and rules for the SSID
* [GetNetworkWirelessSsidDeviceTypeGroupPolicies](#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [GetNetworkWirelessSsidEapOverride](#getnetworkwirelessssideapoverride) - Return the EAP overridden parameters for an SSID
* [GetNetworkWirelessSsidFirewallL3FirewallRules](#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [GetNetworkWirelessSsidFirewallL7FirewallRules](#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [GetNetworkWirelessSsidHotspot20](#getnetworkwirelessssidhotspot20) - Return the Hotspot 2.0 settings for an SSID
* [GetNetworkWirelessSsidIdentityPsk](#getnetworkwirelessssididentitypsk) - Return an Identity PSK
* [GetNetworkWirelessSsidIdentityPsks](#getnetworkwirelessssididentitypsks) - List all Identity PSKs in a wireless network
* [GetNetworkWirelessSsidSchedules](#getnetworkwirelessssidschedules) - List the outage schedule for the SSID
* [GetNetworkWirelessSsidSplashSettings](#getnetworkwirelessssidsplashsettings) - Display the splash page settings for the given SSID
* [GetNetworkWirelessSsidTrafficShapingRules](#getnetworkwirelessssidtrafficshapingrules) - Display the traffic shaping settings for a SSID on an MR network
* [GetNetworkWirelessSsidVpn](#getnetworkwirelessssidvpn) - List the VPN settings for the SSID.
* [GetNetworkWirelessSsids](#getnetworkwirelessssids) - List the MR SSIDs in a network
* [GetOrganizationSummaryTopSsidsByUsage](#getorganizationsummarytopssidsbyusage) - Return metrics for organization's top 10 ssids by data usage over given time range
* [UpdateNetworkApplianceSsid](#updatenetworkappliancessid) - Update the attributes of an MX SSID
* [UpdateNetworkWirelessSsid](#updatenetworkwirelessssid) - Update the attributes of an MR SSID
* [UpdateNetworkWirelessSsidBonjourForwarding](#updatenetworkwirelessssidbonjourforwarding) - Update the bonjour forwarding setting and rules for the SSID
* [UpdateNetworkWirelessSsidDeviceTypeGroupPolicies](#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID
* [UpdateNetworkWirelessSsidEapOverride](#updatenetworkwirelessssideapoverride) - Update the EAP overridden parameters for an SSID.
* [UpdateNetworkWirelessSsidFirewallL3FirewallRules](#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [UpdateNetworkWirelessSsidFirewallL7FirewallRules](#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network
* [UpdateNetworkWirelessSsidHotspot20](#updatenetworkwirelessssidhotspot20) - Update the Hotspot 2.0 settings of an SSID
* [UpdateNetworkWirelessSsidIdentityPsk](#updatenetworkwirelessssididentitypsk) - Update an Identity PSK
* [UpdateNetworkWirelessSsidSchedules](#updatenetworkwirelessssidschedules) - Update the outage schedule for the SSID
* [UpdateNetworkWirelessSsidSplashSettings](#updatenetworkwirelessssidsplashsettings) - Modify the splash page settings for the given SSID
* [UpdateNetworkWirelessSsidTrafficShapingRules](#updatenetworkwirelessssidtrafficshapingrules) - Update the traffic shaping settings for an SSID on an MR network
* [UpdateNetworkWirelessSsidVpn](#updatenetworkwirelessssidvpn) - Update the VPN settings for the SSID

## CreateNetworkWirelessSsidIdentityPsk

Create an Identity PSK

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
    res, err := s.Ssids.CreateNetworkWirelessSsidIdentityPsk(ctx, operations.CreateNetworkWirelessSsidIdentityPskRequest{
        RequestBody: operations.CreateNetworkWirelessSsidIdentityPskRequestBody{
            GroupPolicyID: "sequi",
            Name: "Ruth Mayert",
            Passphrase: sdk.String("totam"),
        },
        NetworkID: "quo",
        Number: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateNetworkWirelessSsidIdentityPsk201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteNetworkWirelessSsidIdentityPsk

Delete an Identity PSK

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
    res, err := s.Ssids.DeleteNetworkWirelessSsidIdentityPsk(ctx, operations.DeleteNetworkWirelessSsidIdentityPskRequest{
        IdentityPskID: "corporis",
        NetworkID: "ducimus",
        Number: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNetworkApplianceSsid

Return a single MX SSID

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
    res, err := s.Ssids.GetNetworkApplianceSsid(ctx, operations.GetNetworkApplianceSsidRequest{
        NetworkID: "amet",
        Number: "laudantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSsid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceSsids

List the MX SSIDs in a network

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
    res, err := s.Ssids.GetNetworkApplianceSsids(ctx, operations.GetNetworkApplianceSsidsRequest{
        NetworkID: "expedita",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceSsids200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsid

Return a single MR SSID

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
    res, err := s.Ssids.GetNetworkWirelessSsid(ctx, operations.GetNetworkWirelessSsidRequest{
        NetworkID: "quibusdam",
        Number: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidBonjourForwarding

List the Bonjour forwarding setting and rules for the SSID

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
    res, err := s.Ssids.GetNetworkWirelessSsidBonjourForwarding(ctx, operations.GetNetworkWirelessSsidBonjourForwardingRequest{
        NetworkID: "voluptatum",
        Number: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidDeviceTypeGroupPolicies

List the device type group policies for the SSID

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
    res, err := s.Ssids.GetNetworkWirelessSsidDeviceTypeGroupPolicies(ctx, operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest{
        NetworkID: "quibusdam",
        Number: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidEapOverride

Return the EAP overridden parameters for an SSID

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
    res, err := s.Ssids.GetNetworkWirelessSsidEapOverride(ctx, operations.GetNetworkWirelessSsidEapOverrideRequest{
        NetworkID: "veniam",
        Number: "at",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidEapOverride200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidFirewallL3FirewallRules

Return the L3 firewall rules for an SSID on an MR network

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
    res, err := s.Ssids.GetNetworkWirelessSsidFirewallL3FirewallRules(ctx, operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest{
        NetworkID: "exercitationem",
        Number: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidFirewallL7FirewallRules

Return the L7 firewall rules for an SSID on an MR network

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
    res, err := s.Ssids.GetNetworkWirelessSsidFirewallL7FirewallRules(ctx, operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest{
        NetworkID: "facilis",
        Number: "aliquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidHotspot20

Return the Hotspot 2.0 settings for an SSID

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
    res, err := s.Ssids.GetNetworkWirelessSsidHotspot20(ctx, operations.GetNetworkWirelessSsidHotspot20Request{
        NetworkID: "harum",
        Number: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidHotspot20200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidIdentityPsk

Return an Identity PSK

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
    res, err := s.Ssids.GetNetworkWirelessSsidIdentityPsk(ctx, operations.GetNetworkWirelessSsidIdentityPskRequest{
        IdentityPskID: "vitae",
        NetworkID: "debitis",
        Number: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidIdentityPsk200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidIdentityPsks

List all Identity PSKs in a wireless network

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
    res, err := s.Ssids.GetNetworkWirelessSsidIdentityPsks(ctx, operations.GetNetworkWirelessSsidIdentityPsksRequest{
        NetworkID: "cumque",
        Number: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidIdentityPsks200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidSchedules

List the outage schedule for the SSID

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
    res, err := s.Ssids.GetNetworkWirelessSsidSchedules(ctx, operations.GetNetworkWirelessSsidSchedulesRequest{
        NetworkID: "aliquid",
        Number: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidSchedules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidSplashSettings

Display the splash page settings for the given SSID

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
    res, err := s.Ssids.GetNetworkWirelessSsidSplashSettings(ctx, operations.GetNetworkWirelessSsidSplashSettingsRequest{
        NetworkID: "eum",
        Number: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidSplashSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsidTrafficShapingRules

Display the traffic shaping settings for a SSID on an MR network

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
    res, err := s.Ssids.GetNetworkWirelessSsidTrafficShapingRules(ctx, operations.GetNetworkWirelessSsidTrafficShapingRulesRequest{
        NetworkID: "illo",
        Number: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != nil {
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
    res, err := s.Ssids.GetNetworkWirelessSsidVpn(ctx, operations.GetNetworkWirelessSsidVpnRequest{
        NetworkID: "placeat",
        Number: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessSsids

List the MR SSIDs in a network

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
    res, err := s.Ssids.GetNetworkWirelessSsids(ctx, operations.GetNetworkWirelessSsidsRequest{
        NetworkID: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsids200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSummaryTopSsidsByUsage

Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.

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
    res, err := s.Ssids.GetOrganizationSummaryTopSsidsByUsage(ctx, operations.GetOrganizationSummaryTopSsidsByUsageRequest{
        OrganizationID: "in",
        T0: sdk.String("occaecati"),
        T1: sdk.String("illo"),
        Timespan: sdk.Float32(7156.2),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSummaryTopSsidsByUsage200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceSsid

Update the attributes of an MX SSID

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
    res, err := s.Ssids.UpdateNetworkApplianceSsid(ctx, operations.UpdateNetworkApplianceSsidRequest{
        RequestBody: &operations.UpdateNetworkApplianceSsidRequestBody{
            AuthMode: operations.UpdateNetworkApplianceSsidRequestBodyAuthModeEnumEightThousandAndTwentyOnexRadius.ToPointer(),
            DefaultVlanID: sdk.Int64(853008),
            DhcpEnforcedDeauthentication: &operations.UpdateNetworkApplianceSsidRequestBodyDhcpEnforcedDeauthentication{
                Enabled: sdk.Bool(false),
            },
            Enabled: sdk.Bool(false),
            EncryptionMode: operations.UpdateNetworkApplianceSsidRequestBodyEncryptionModeEnumWep.ToPointer(),
            Name: sdk.String("Ms. Ida Brakus"),
            Psk: sdk.String("laboriosam"),
            RadiusServers: []UpdateNetworkApplianceSsidRequestBodyRadiusServers{
                operations.UpdateNetworkApplianceSsidRequestBodyRadiusServers{
                    Host: sdk.String("eos"),
                    Port: sdk.Int64(696257),
                    Secret: sdk.String("at"),
                },
            },
            Visible: sdk.Bool(false),
            WpaEncryptionMode: operations.UpdateNetworkApplianceSsidRequestBodyWpaEncryptionModeEnumWpa1AndWpa2.ToPointer(),
        },
        NetworkID: "a",
        Number: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceSsid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsid

Update the attributes of an MR SSID

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
    res, err := s.Ssids.UpdateNetworkWirelessSsid(ctx, operations.UpdateNetworkWirelessSsidRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidRequestBody{
            ActiveDirectory: &operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectory{
                Credentials: &operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryCredentials{
                    LogonName: sdk.String("quia"),
                    Password: sdk.String("in"),
                },
                Servers: []UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers{
                    operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers{
                        Host: "sapiente",
                        Port: sdk.Int64(236431),
                    },
                    operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers{
                        Host: "laboriosam",
                        Port: sdk.Int64(966684),
                    },
                    operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers{
                        Host: "facere",
                        Port: sdk.Int64(959055),
                    },
                    operations.UpdateNetworkWirelessSsidRequestBodyActiveDirectoryServers{
                        Host: "earum",
                        Port: sdk.Int64(568538),
                    },
                },
            },
            AdultContentFilteringEnabled: sdk.Bool(false),
            ApTagsAndVlanIds: []UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds{
                operations.UpdateNetworkWirelessSsidRequestBodyApTagsAndVlanIds{
                    Tags: []string{
                        "unde",
                        "quidem",
                        "eius",
                    },
                    VlanID: sdk.Int64(662368),
                },
            },
            AuthMode: operations.UpdateNetworkWirelessSsidRequestBodyAuthModeEnumEightThousandAndTwentyOnexMeraki.ToPointer(),
            AvailabilityTags: []string{
                "laudantium",
                "numquam",
                "hic",
            },
            AvailableOnAllAps: sdk.Bool(false),
            BandSelection: sdk.String("excepturi"),
            ConcentratorNetworkID: sdk.String("quae"),
            DefaultVlanID: sdk.Int64(746988),
            DisassociateClientsOnVpnFailover: sdk.Bool(false),
            DNSRewrite: &operations.UpdateNetworkWirelessSsidRequestBodyDNSRewrite{
                DNSCustomNameservers: []string{
                    "a",
                    "maxime",
                    "tempora",
                    "necessitatibus",
                },
                Enabled: sdk.Bool(false),
            },
            Dot11r: &operations.UpdateNetworkWirelessSsidRequestBodyDot11r{
                Adaptive: sdk.Bool(false),
                Enabled: sdk.Bool(false),
            },
            Dot11w: &operations.UpdateNetworkWirelessSsidRequestBodyDot11w{
                Enabled: sdk.Bool(false),
                Required: sdk.Bool(false),
            },
            Enabled: sdk.Bool(false),
            EncryptionMode: operations.UpdateNetworkWirelessSsidRequestBodyEncryptionModeEnumWpa.ToPointer(),
            EnterpriseAdminAccess: operations.UpdateNetworkWirelessSsidRequestBodyEnterpriseAdminAccessEnumAccessDisabled.ToPointer(),
            Gre: &operations.UpdateNetworkWirelessSsidRequestBodyGre{
                Concentrator: &operations.UpdateNetworkWirelessSsidRequestBodyGreConcentrator{
                    Host: "nesciunt",
                },
                Key: sdk.Int64(300734),
            },
            IPAssignmentMode: sdk.String("asperiores"),
            LanIsolationEnabled: sdk.Bool(false),
            Ldap: &operations.UpdateNetworkWirelessSsidRequestBodyLdap{
                BaseDistinguishedName: sdk.String("sunt"),
                Credentials: &operations.UpdateNetworkWirelessSsidRequestBodyLdapCredentials{
                    DistinguishedName: sdk.String("autem"),
                    Password: sdk.String("ex"),
                },
                ServerCaCertificate: &operations.UpdateNetworkWirelessSsidRequestBodyLdapServerCaCertificate{
                    Contents: sdk.String("cum"),
                },
                Servers: []UpdateNetworkWirelessSsidRequestBodyLdapServers{
                    operations.UpdateNetworkWirelessSsidRequestBodyLdapServers{
                        Host: "dolor",
                        Port: 69136,
                    },
                },
            },
            LocalRadius: &operations.UpdateNetworkWirelessSsidRequestBodyLocalRadius{
                CacheTimeout: sdk.Int64(567536),
                CertificateAuthentication: &operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication{
                    ClientRootCaCertificate: &operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate{
                        Contents: sdk.String("deserunt"),
                    },
                    Enabled: sdk.Bool(false),
                    OcspResponderURL: sdk.String("nobis"),
                    UseLdap: sdk.Bool(false),
                    UseOcsp: sdk.Bool(false),
                },
                PasswordAuthentication: &operations.UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication{
                    Enabled: sdk.Bool(false),
                },
            },
            MandatoryDhcpEnabled: sdk.Bool(false),
            MinBitrate: sdk.Float32(5339.96),
            Name: sdk.String("Tomas Prosacco"),
            Oauth: &operations.UpdateNetworkWirelessSsidRequestBodyOauth{
                AllowedDomains: []string{
                    "iure",
                    "cupiditate",
                },
            },
            PerClientBandwidthLimitDown: sdk.Int64(126671),
            PerClientBandwidthLimitUp: sdk.Int64(80969),
            PerSsidBandwidthLimitDown: sdk.Int64(549896),
            PerSsidBandwidthLimitUp: sdk.Int64(892254),
            Psk: sdk.String("commodi"),
            RadiusAccountingEnabled: sdk.Bool(false),
            RadiusAccountingInterimInterval: sdk.Int64(965925),
            RadiusAccountingServers: []UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers{
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusAccountingServers{
                    CaCertificate: sdk.String("deleniti"),
                    Host: "dolorem",
                    Port: sdk.Int64(827911),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("sunt"),
                },
            },
            RadiusAttributeForGroupPolicies: operations.UpdateNetworkWirelessSsidRequestBodyRadiusAttributeForGroupPoliciesEnumArubaUserRole.ToPointer(),
            RadiusAuthenticationNasID: sdk.String("veritatis"),
            RadiusCalledStationID: sdk.String("quasi"),
            RadiusCoaEnabled: sdk.Bool(false),
            RadiusFailoverPolicy: operations.UpdateNetworkWirelessSsidRequestBodyRadiusFailoverPolicyEnumAllowAccess.ToPointer(),
            RadiusFallbackEnabled: sdk.Bool(false),
            RadiusGuestVlanEnabled: sdk.Bool(false),
            RadiusGuestVlanID: sdk.Int64(401921),
            RadiusLoadBalancingPolicy: operations.UpdateNetworkWirelessSsidRequestBodyRadiusLoadBalancingPolicyEnumStrictPriorityOrder.ToPointer(),
            RadiusOverride: sdk.Bool(false),
            RadiusProxyEnabled: sdk.Bool(false),
            RadiusServerAttemptsLimit: sdk.Int64(525550),
            RadiusServerTimeout: sdk.Int64(821015),
            RadiusServers: []UpdateNetworkWirelessSsidRequestBodyRadiusServers{
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusServers{
                    CaCertificate: sdk.String("maxime"),
                    Host: "aspernatur",
                    OpenRoamingCertificateID: sdk.Int64(42014),
                    Port: sdk.Int64(440231),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("ratione"),
                },
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusServers{
                    CaCertificate: sdk.String("quidem"),
                    Host: "vitae",
                    OpenRoamingCertificateID: sdk.Int64(632888),
                    Port: sdk.Int64(256875),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("veritatis"),
                },
                operations.UpdateNetworkWirelessSsidRequestBodyRadiusServers{
                    CaCertificate: sdk.String("labore"),
                    Host: "quis",
                    OpenRoamingCertificateID: sdk.Int64(182282),
                    Port: sdk.Int64(47849),
                    RadsecEnabled: sdk.Bool(false),
                    Secret: sdk.String("rerum"),
                },
            },
            RadiusTestingEnabled: sdk.Bool(false),
            SecondaryConcentratorNetworkID: sdk.String("sed"),
            SpeedBurst: &operations.UpdateNetworkWirelessSsidRequestBodySpeedBurst{
                Enabled: sdk.Bool(false),
            },
            SplashGuestSponsorDomains: []string{
                "dolorem",
                "eaque",
            },
            SplashPage: operations.UpdateNetworkWirelessSsidRequestBodySplashPageEnumGoogleOAuth.ToPointer(),
            UseVlanTagging: sdk.Bool(false),
            Visible: sdk.Bool(false),
            VlanID: sdk.Int64(413848),
            WalledGardenEnabled: sdk.Bool(false),
            WalledGardenRanges: []string{
                "facere",
                "possimus",
                "incidunt",
            },
            WpaEncryptionMode: operations.UpdateNetworkWirelessSsidRequestBodyWpaEncryptionModeEnumWpa3TransitionMode.ToPointer(),
        },
        NetworkID: "suscipit",
        Number: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsid200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidBonjourForwarding

Update the bonjour forwarding setting and rules for the SSID

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
    res, err := s.Ssids.UpdateNetworkWirelessSsidBonjourForwarding(ctx, operations.UpdateNetworkWirelessSsidBonjourForwardingRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBody{
            Enabled: sdk.Bool(false),
            Rules: []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules{
                operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules{
                    Description: sdk.String("quaerat"),
                    Services: []UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum{
                        operations.UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnumAirPlay,
                    },
                    VlanID: "debitis",
                },
            },
        },
        NetworkID: "accusamus",
        Number: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidDeviceTypeGroupPolicies

Update the device type group policies for the SSID

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
    res, err := s.Ssids.UpdateNetworkWirelessSsidDeviceTypeGroupPolicies(ctx, operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody{
            DeviceTypePolicies: []UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies{
                operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies{
                    DevicePolicy: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnumBlocked,
                    DeviceType: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnumWindows,
                    GroupPolicyID: sdk.Int64(50150),
                },
                operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies{
                    DevicePolicy: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnumGroupPolicy,
                    DeviceType: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnumIPod,
                    GroupPolicyID: sdk.Int64(744937),
                },
            },
            Enabled: sdk.Bool(false),
        },
        NetworkID: "odit",
        Number: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidEapOverride

Update the EAP overridden parameters for an SSID.

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
    res, err := s.Ssids.UpdateNetworkWirelessSsidEapOverride(ctx, operations.UpdateNetworkWirelessSsidEapOverrideRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidEapOverrideRequestBody{
            EapolKey: &operations.UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey{
                Retries: sdk.Int64(108942),
                TimeoutInMs: sdk.Int64(490569),
            },
            Identity: &operations.UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity{
                Retries: sdk.Int64(885872),
                Timeout: sdk.Int64(433248),
            },
            MaxRetries: sdk.Int64(275843),
            Timeout: sdk.Int64(752909),
        },
        NetworkID: "laboriosam",
        Number: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidEapOverride200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidFirewallL3FirewallRules

Update the L3 firewall rules of an SSID on an MR network

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
    res, err := s.Ssids.UpdateNetworkWirelessSsidFirewallL3FirewallRules(ctx, operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody{
            AllowLanAccess: sdk.Bool(false),
            Rules: []UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("eaque"),
                    DestCidr: "laudantium",
                    DestPort: sdk.String("facere"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumTCP,
                },
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("tempore"),
                    DestCidr: "esse",
                    DestPort: sdk.String("quisquam"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumIcmp,
                },
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("dolorum"),
                    DestCidr: "dolorum",
                    DestPort: sdk.String("aspernatur"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumIcmp,
                },
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("eveniet"),
                    DestCidr: "deleniti",
                    DestPort: sdk.String("voluptate"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumAny,
                },
            },
        },
        NetworkID: "fugiat",
        Number: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidFirewallL7FirewallRules

Update the L7 firewall rules of an SSID on an MR network

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
    res, err := s.Ssids.UpdateNetworkWirelessSsidFirewallL7FirewallRules(ctx, operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody{
            Rules: []UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumIPRange.ToPointer(),
                    Value: sdk.String("inventore"),
                },
                operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumApplicationCategory.ToPointer(),
                    Value: sdk.String("voluptas"),
                },
                operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumApplication.ToPointer(),
                    Value: sdk.String("quis"),
                },
            },
        },
        NetworkID: "earum",
        Number: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidHotspot20

Update the Hotspot 2.0 settings of an SSID

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
    res, err := s.Ssids.UpdateNetworkWirelessSsidHotspot20(ctx, operations.UpdateNetworkWirelessSsidHotspot20Request{
        RequestBody: &operations.UpdateNetworkWirelessSsidHotspot20RequestBody{
            Domains: []string{
                "sed",
            },
            Enabled: sdk.Bool(false),
            MccMncs: []UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs{
                operations.UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs{
                    Mcc: sdk.String("eius"),
                    Mnc: sdk.String("voluptatum"),
                },
            },
            NaiRealms: []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms{
                operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms{
                    Format: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsFormatEnumZero.ToPointer(),
                    Methods: []UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "consequuntur": "exercitationem",
                                "voluptatibus": "modi",
                                "eum": "nobis",
                                "saepe": "ab",
                            },
                            ID: sdk.String("3e9dbecc-abf1-4b69-adab-42fce24214cb"),
                        },
                        operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealmsMethods{
                            AuthenticationTypes: map[string]interface{}{
                                "cupiditate": "voluptates",
                                "nostrum": "voluptatibus",
                            },
                            ID: sdk.String("ca1f4fdf-5051-480e-9f51-8fffb560851c"),
                        },
                    },
                    Realm: sdk.String("porro"),
                },
            },
            NetworkAccessType: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnumChargeablePublicNetwork.ToPointer(),
            Operator: &operations.UpdateNetworkWirelessSsidHotspot20RequestBodyOperator{
                Name: sdk.String("Miss Lee Hills DVM"),
            },
            RoamConsortOis: []string{
                "quaerat",
                "perspiciatis",
                "a",
                "vero",
            },
            Venue: &operations.UpdateNetworkWirelessSsidHotspot20RequestBodyVenue{
                Name: sdk.String("Joan Mraz"),
                Type: operations.UpdateNetworkWirelessSsidHotspot20RequestBodyVenueTypeEnumPrisonOrJail.ToPointer(),
            },
        },
        NetworkID: "quas",
        Number: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidHotspot20200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidIdentityPsk

Update an Identity PSK

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
    res, err := s.Ssids.UpdateNetworkWirelessSsidIdentityPsk(ctx, operations.UpdateNetworkWirelessSsidIdentityPskRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidIdentityPskRequestBody{
            GroupPolicyID: sdk.String("voluptas"),
            Name: sdk.String("Donna Grant"),
            Passphrase: sdk.String("nihil"),
        },
        IdentityPskID: "molestiae",
        NetworkID: "odit",
        Number: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidSchedules

Update the outage schedule for the SSID

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
    res, err := s.Ssids.UpdateNetworkWirelessSsidSchedules(ctx, operations.UpdateNetworkWirelessSsidSchedulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidSchedulesRequestBody{
            Enabled: sdk.Bool(false),
            Ranges: []UpdateNetworkWirelessSsidSchedulesRequestBodyRanges{
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges{
                    EndDay: "hic",
                    EndTime: "aliquid",
                    StartDay: "nemo",
                    StartTime: "maxime",
                },
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges{
                    EndDay: "excepturi",
                    EndTime: "nulla",
                    StartDay: "ullam",
                    StartTime: "dolore",
                },
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRanges{
                    EndDay: "quas",
                    EndTime: "neque",
                    StartDay: "voluptates",
                    StartTime: "soluta",
                },
            },
            RangesInSeconds: []UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                    End: 928617,
                    Start: 932382,
                },
                operations.UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds{
                    End: 396814,
                    Start: 768672,
                },
            },
        },
        NetworkID: "qui",
        Number: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidSchedules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidSplashSettings

Modify the splash page settings for the given SSID

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
    res, err := s.Ssids.UpdateNetworkWirelessSsidSplashSettings(ctx, operations.UpdateNetworkWirelessSsidSplashSettingsRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBody{
            AllowSimultaneousLogins: sdk.Bool(false),
            Billing: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling{
                FreeAccess: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess{
                    DurationInMinutes: sdk.Int64(279061),
                    Enabled: sdk.Bool(false),
                },
                PrepaidAccessFastLoginEnabled: sdk.Bool(false),
                ReplyToEmailAddress: sdk.String("maxime"),
            },
            BlockAllTrafficBeforeSignOn: sdk.Bool(false),
            ControllerDisconnectionBehavior: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnumDefault.ToPointer(),
            GuestSponsorship: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship{
                DurationInMinutes: sdk.Int64(543930),
                GuestCanRequestTimeframe: sdk.Bool(false),
            },
            RedirectURL: sdk.String("qui"),
            SentryEnrollment: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment{
                EnforcedSystems: []string{
                    "iure",
                },
                Strength: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnumStrict.ToPointer(),
                SystemsManagerNetwork: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork{
                    ID: "24b428b6-5137-455d-a6e0-99bd9c35c24f",
                },
            },
            SplashImage: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage{
                Extension: sdk.String("nemo"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImage{
                    Contents: sdk.String("iste"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImageImageFormatEnumPng.ToPointer(),
                },
                Md5: sdk.String("magnam"),
            },
            SplashLogo: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo{
                Extension: sdk.String("nemo"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImage{
                    Contents: sdk.String("laboriosam"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogoImageFormatEnumGif.ToPointer(),
                },
                Md5: sdk.String("aperiam"),
            },
            SplashPrepaidFront: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront{
                Extension: sdk.String("sit"),
                Image: &operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImage{
                    Contents: sdk.String("quasi"),
                    Format: operations.UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFrontImageFormatEnumPng.ToPointer(),
                },
                Md5: sdk.String("perferendis"),
            },
            SplashTimeout: sdk.Int64(45261),
            SplashURL: sdk.String("nesciunt"),
            UseRedirectURL: sdk.Bool(false),
            UseSplashURL: sdk.Bool(false),
            WelcomeMessage: sdk.String("repellat"),
        },
        NetworkID: "quasi",
        Number: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessSsidTrafficShapingRules

Update the traffic shaping settings for an SSID on an MR network

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
    res, err := s.Ssids.UpdateNetworkWirelessSsidTrafficShapingRules(ctx, operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBody{
            DefaultRulesEnabled: sdk.Bool(false),
            Rules: []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRules{
                    Definitions: []UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumIPRange,
                            Value: "non",
                        },
                        operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitions{
                            Type: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnumIPRange,
                            Value: "maxime",
                        },
                    },
                    DscpTagValue: sdk.Int64(405130),
                    PcpTagValue: sdk.Int64(730270),
                    PerClientBandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits{
                        BandwidthLimits: &operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits{
                            LimitDown: sdk.Int64(938718),
                            LimitUp: sdk.Int64(940043),
                        },
                        Settings: sdk.String("voluptates"),
                    },
                },
            },
            TrafficShapingEnabled: sdk.Bool(false),
        },
        NetworkID: "ipsum",
        Number: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject != nil {
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
    res, err := s.Ssids.UpdateNetworkWirelessSsidVpn(ctx, operations.UpdateNetworkWirelessSsidVpnRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidVpnRequestBody{
            Concentrator: &operations.UpdateNetworkWirelessSsidVpnRequestBodyConcentrator{
                NetworkID: sdk.String("tenetur"),
                VlanID: sdk.Int64(774110),
            },
            Failover: &operations.UpdateNetworkWirelessSsidVpnRequestBodyFailover{
                HeartbeatInterval: sdk.Int64(598582),
                IdleTimeout: sdk.Int64(99075),
                RequestIP: sdk.String("quos"),
            },
            SplitTunnel: &operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnel{
                Enabled: sdk.Bool(false),
                Rules: []UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules{
                    operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules{
                        Comment: sdk.String("error"),
                        DestCidr: "id",
                        DestPort: sdk.String("tempora"),
                        Policy: "necessitatibus",
                        Protocol: operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnumTCP.ToPointer(),
                    },
                    operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRules{
                        Comment: sdk.String("doloremque"),
                        DestCidr: "accusamus",
                        DestPort: sdk.String("sed"),
                        Policy: "animi",
                        Protocol: operations.UpdateNetworkWirelessSsidVpnRequestBodySplitTunnelRulesProtocolEnumUDP.ToPointer(),
                    },
                },
            },
        },
        NetworkID: "pariatur",
        Number: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidVpn200ApplicationJSONObject != nil {
        // handle response
    }
}
```
