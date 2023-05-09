# Firewall

### Available Operations

* [GetNetworkApplianceFirewallCellularFirewallRules](#getnetworkappliancefirewallcellularfirewallrules) - Return the cellular firewall rules for an MX network
* [GetNetworkApplianceFirewallFirewalledService](#getnetworkappliancefirewallfirewalledservice) - Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
* [GetNetworkApplianceFirewallFirewalledServices](#getnetworkappliancefirewallfirewalledservices) - List the appliance services and their accessibility rules
* [GetNetworkApplianceFirewallInboundCellularFirewallRules](#getnetworkappliancefirewallinboundcellularfirewallrules) - Return the inbound cellular firewall rules for an MX network
* [GetNetworkApplianceFirewallInboundFirewallRules](#getnetworkappliancefirewallinboundfirewallrules) - Return the inbound firewall rules for an MX network
* [GetNetworkApplianceFirewallL3FirewallRules](#getnetworkappliancefirewalll3firewallrules) - Return the L3 firewall rules for an MX network
* [GetNetworkApplianceFirewallL7FirewallRules](#getnetworkappliancefirewalll7firewallrules) - List the MX L7 firewall rules for an MX network
* [GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories](#getnetworkappliancefirewalll7firewallrulesapplicationcategories) - Return the L7 firewall application categories and their associated applications for an MX network
* [GetNetworkApplianceFirewallOneToManyNatRules](#getnetworkappliancefirewallonetomanynatrules) - Return the 1:Many NAT mapping rules for an MX network
* [GetNetworkApplianceFirewallOneToOneNatRules](#getnetworkappliancefirewallonetoonenatrules) - Return the 1:1 NAT mapping rules for an MX network
* [GetNetworkApplianceFirewallPortForwardingRules](#getnetworkappliancefirewallportforwardingrules) - Return the port forwarding rules for an MX network
* [GetNetworkApplianceFirewallSettings](#getnetworkappliancefirewallsettings) - Return the firewall settings for this network
* [GetNetworkWirelessSsidFirewallL3FirewallRules](#getnetworkwirelessssidfirewalll3firewallrules) - Return the L3 firewall rules for an SSID on an MR network
* [GetNetworkWirelessSsidFirewallL7FirewallRules](#getnetworkwirelessssidfirewalll7firewallrules) - Return the L7 firewall rules for an SSID on an MR network
* [UpdateNetworkApplianceFirewallCellularFirewallRules](#updatenetworkappliancefirewallcellularfirewallrules) - Update the cellular firewall rules of an MX network
* [UpdateNetworkApplianceFirewallFirewalledService](#updatenetworkappliancefirewallfirewalledservice) - Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
* [UpdateNetworkApplianceFirewallInboundCellularFirewallRules](#updatenetworkappliancefirewallinboundcellularfirewallrules) - Update the inbound cellular firewall rules of an MX network
* [UpdateNetworkApplianceFirewallInboundFirewallRules](#updatenetworkappliancefirewallinboundfirewallrules) - Update the inbound firewall rules of an MX network
* [UpdateNetworkApplianceFirewallL3FirewallRules](#updatenetworkappliancefirewalll3firewallrules) - Update the L3 firewall rules of an MX network
* [UpdateNetworkApplianceFirewallL7FirewallRules](#updatenetworkappliancefirewalll7firewallrules) - Update the MX L7 firewall rules for an MX network
* [UpdateNetworkApplianceFirewallOneToManyNatRules](#updatenetworkappliancefirewallonetomanynatrules) - Set the 1:Many NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallOneToOneNatRules](#updatenetworkappliancefirewallonetoonenatrules) - Set the 1:1 NAT mapping rules for an MX network
* [UpdateNetworkApplianceFirewallPortForwardingRules](#updatenetworkappliancefirewallportforwardingrules) - Update the port forwarding rules for an MX network
* [UpdateNetworkApplianceFirewallSettings](#updatenetworkappliancefirewallsettings) - Update the firewall settings for this network
* [UpdateNetworkWirelessSsidFirewallL3FirewallRules](#updatenetworkwirelessssidfirewalll3firewallrules) - Update the L3 firewall rules of an SSID on an MR network
* [UpdateNetworkWirelessSsidFirewallL7FirewallRules](#updatenetworkwirelessssidfirewalll7firewallrules) - Update the L7 firewall rules of an SSID on an MR network

## GetNetworkApplianceFirewallCellularFirewallRules

Return the cellular firewall rules for an MX network

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
    res, err := s.Firewall.GetNetworkApplianceFirewallCellularFirewallRules(ctx, operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest{
        NetworkID: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

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
    res, err := s.Firewall.GetNetworkApplianceFirewallFirewalledService(ctx, operations.GetNetworkApplianceFirewallFirewalledServiceRequest{
        NetworkID: "blanditiis",
        Service: "numquam",
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
    res, err := s.Firewall.GetNetworkApplianceFirewallFirewalledServices(ctx, operations.GetNetworkApplianceFirewallFirewalledServicesRequest{
        NetworkID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallFirewalledServices200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallInboundCellularFirewallRules

Return the inbound cellular firewall rules for an MX network

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
    res, err := s.Firewall.GetNetworkApplianceFirewallInboundCellularFirewallRules(ctx, operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest{
        NetworkID: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallInboundFirewallRules

Return the inbound firewall rules for an MX network

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
    res, err := s.Firewall.GetNetworkApplianceFirewallInboundFirewallRules(ctx, operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest{
        NetworkID: "sunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallL3FirewallRules

Return the L3 firewall rules for an MX network

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
    res, err := s.Firewall.GetNetworkApplianceFirewallL3FirewallRules(ctx, operations.GetNetworkApplianceFirewallL3FirewallRulesRequest{
        NetworkID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallL7FirewallRules

List the MX L7 firewall rules for an MX network

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
    res, err := s.Firewall.GetNetworkApplianceFirewallL7FirewallRules(ctx, operations.GetNetworkApplianceFirewallL7FirewallRulesRequest{
        NetworkID: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories

Return the L7 firewall application categories and their associated applications for an MX network

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
    res, err := s.Firewall.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories(ctx, operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest{
        NetworkID: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallOneToManyNatRules

Return the 1:Many NAT mapping rules for an MX network

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
    res, err := s.Firewall.GetNetworkApplianceFirewallOneToManyNatRules(ctx, operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest{
        NetworkID: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallOneToOneNatRules

Return the 1:1 NAT mapping rules for an MX network

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
    res, err := s.Firewall.GetNetworkApplianceFirewallOneToOneNatRules(ctx, operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest{
        NetworkID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallPortForwardingRules

Return the port forwarding rules for an MX network

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
    res, err := s.Firewall.GetNetworkApplianceFirewallPortForwardingRules(ctx, operations.GetNetworkApplianceFirewallPortForwardingRulesRequest{
        NetworkID: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkApplianceFirewallSettings

Return the firewall settings for this network

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
    res, err := s.Firewall.GetNetworkApplianceFirewallSettings(ctx, operations.GetNetworkApplianceFirewallSettingsRequest{
        NetworkID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkApplianceFirewallSettings200ApplicationJSONObject != nil {
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
    res, err := s.Firewall.GetNetworkWirelessSsidFirewallL3FirewallRules(ctx, operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest{
        NetworkID: "tempore",
        Number: "ex",
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
    res, err := s.Firewall.GetNetworkWirelessSsidFirewallL7FirewallRules(ctx, operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest{
        NetworkID: "vero",
        Number: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallCellularFirewallRules

Update the cellular firewall rules of an MX network

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
    res, err := s.Firewall.UpdateNetworkApplianceFirewallCellularFirewallRules(ctx, operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("dicta"),
                    DestCidr: "quisquam",
                    DestPort: sdk.String("adipisci"),
                    Policy: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "occaecati",
                    SrcPort: sdk.String("perspiciatis"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("deleniti"),
                    DestCidr: "dolor",
                    DestPort: sdk.String("eum"),
                    Policy: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnumIcmp,
                    SrcCidr: "placeat",
                    SrcPort: sdk.String("vel"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
        },
        NetworkID: "commodi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallCellularFirewallRules200ApplicationJSONObject != nil {
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
    res, err := s.Firewall.UpdateNetworkApplianceFirewallFirewalledService(ctx, operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequestBody{
            Access: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnumUnrestricted,
            AllowedIps: []string{
                "libero",
                "expedita",
                "reprehenderit",
                "nulla",
            },
        },
        NetworkID: "reiciendis",
        Service: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallFirewalledService200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallInboundCellularFirewallRules

Update the inbound cellular firewall rules of an MX network

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
    res, err := s.Firewall.UpdateNetworkApplianceFirewallInboundCellularFirewallRules(ctx, operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("soluta"),
                    DestCidr: "aperiam",
                    DestPort: sdk.String("molestias"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "distinctio",
                    SrcPort: sdk.String("modi"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("aperiam"),
                    DestCidr: "praesentium",
                    DestPort: sdk.String("recusandae"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "dicta",
                    SrcPort: sdk.String("adipisci"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("molestiae"),
                    DestCidr: "in",
                    DestPort: sdk.String("magnam"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnumUDP,
                    SrcCidr: "non",
                    SrcPort: sdk.String("a"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRules{
                    Comment: sdk.String("voluptates"),
                    DestCidr: "vero",
                    DestPort: sdk.String("quae"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "possimus",
                    SrcPort: sdk.String("unde"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
        },
        NetworkID: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallInboundCellularFirewallRules200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallInboundFirewallRules

Update the inbound firewall rules of an MX network

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
    res, err := s.Firewall.UpdateNetworkApplianceFirewallInboundFirewallRules(ctx, operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("aperiam"),
                    DestCidr: "laborum",
                    DestPort: sdk.String("dicta"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumTCP,
                    SrcCidr: "eius",
                    SrcPort: sdk.String("odio"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("rerum"),
                    DestCidr: "provident",
                    DestPort: sdk.String("nostrum"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumIcmp,
                    SrcCidr: "accusantium",
                    SrcPort: sdk.String("possimus"),
                    SyslogEnabled: sdk.Bool(false),
                },
                operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules{
                    Comment: sdk.String("vel"),
                    DestCidr: "minus",
                    DestPort: sdk.String("blanditiis"),
                    Policy: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnumDeny,
                    Protocol: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnumAny,
                    SrcCidr: "similique",
                    SrcPort: sdk.String("ipsam"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        NetworkID: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallInboundFirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallL3FirewallRules

Update the L3 firewall rules of an MX network

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
    res, err := s.Firewall.UpdateNetworkApplianceFirewallL3FirewallRules(ctx, operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("perferendis"),
                    DestCidr: "aspernatur",
                    DestPort: sdk.String("sed"),
                    Policy: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                    SrcCidr: "accusamus",
                    SrcPort: sdk.String("ut"),
                    SyslogEnabled: sdk.Bool(false),
                },
            },
            SyslogDefaultRule: sdk.Bool(false),
        },
        NetworkID: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallL3FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallL7FirewallRules

Update the MX L7 firewall rules for an MX network

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
    res, err := s.Firewall.UpdateNetworkApplianceFirewallL7FirewallRules(ctx, operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnumHost.ToPointer(),
                    Value: sdk.String("maiores"),
                },
                operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnumHost.ToPointer(),
                    Value: sdk.String("aperiam"),
                },
            },
        },
        NetworkID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallOneToManyNatRules

Set the 1:Many NAT mapping rules for an MX network

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
    res, err := s.Firewall.UpdateNetworkApplianceFirewallOneToManyNatRules(ctx, operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules{
                    PortRules: []UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "illum",
                                "consequuntur",
                                "occaecati",
                                "doloremque",
                            },
                            LocalIP: sdk.String("qui"),
                            LocalPort: sdk.String("esse"),
                            Name: sdk.String("Tomas Price"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumUDP.ToPointer(),
                            PublicPort: sdk.String("iste"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "suscipit",
                                "ut",
                                "sunt",
                                "iure",
                            },
                            LocalIP: sdk.String("ab"),
                            LocalPort: sdk.String("recusandae"),
                            Name: sdk.String("Mr. Ralph Hettinger"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("amet"),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules{
                            AllowedIps: []string{
                                "eos",
                                "eligendi",
                                "voluptatem",
                            },
                            LocalIP: sdk.String("cupiditate"),
                            LocalPort: sdk.String("distinctio"),
                            Name: sdk.String("Carlos Goodwin"),
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnumTCP.ToPointer(),
                            PublicPort: sdk.String("earum"),
                        },
                    },
                    PublicIP: "nemo",
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnumInternet1,
                },
            },
        },
        NetworkID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallOneToManyNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallOneToOneNatRules

Set the 1:1 NAT mapping rules for an MX network

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
    res, err := s.Firewall.UpdateNetworkApplianceFirewallOneToOneNatRules(ctx, operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                    AllowedInbound: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "facilis",
                                "in",
                            },
                            DestinationPorts: []string{
                                "porro",
                                "dignissimos",
                                "nisi",
                                "magni",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumIcmpPing.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "labore",
                                "perspiciatis",
                            },
                            DestinationPorts: []string{
                                "atque",
                                "aliquam",
                                "necessitatibus",
                                "tempore",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumTCP.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "numquam",
                                "cumque",
                                "a",
                                "at",
                            },
                            DestinationPorts: []string{
                                "odit",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumIcmpPing.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "officiis",
                                "sit",
                            },
                            DestinationPorts: []string{
                                "rem",
                                "deleniti",
                                "repellat",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumTCP.ToPointer(),
                        },
                    },
                    LanIP: "atque",
                    Name: sdk.String("Christie Hyatt"),
                    PublicIP: sdk.String("veniam"),
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet2.ToPointer(),
                },
                operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                    AllowedInbound: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "corrupti",
                                "temporibus",
                                "libero",
                                "sapiente",
                            },
                            DestinationPorts: []string{
                                "dicta",
                                "qui",
                                "asperiores",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumTCP.ToPointer(),
                        },
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "nam",
                            },
                            DestinationPorts: []string{
                                "eligendi",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumTCP.ToPointer(),
                        },
                    },
                    LanIP: "autem",
                    Name: sdk.String("Alejandro Wiza"),
                    PublicIP: sdk.String("quis"),
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet1.ToPointer(),
                },
                operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules{
                    AllowedInbound: []UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                        operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound{
                            AllowedIps: []string{
                                "odit",
                                "omnis",
                                "placeat",
                            },
                            DestinationPorts: []string{
                                "officia",
                                "occaecati",
                                "nemo",
                                "laboriosam",
                            },
                            Protocol: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnumAny.ToPointer(),
                        },
                    },
                    LanIP: "fuga",
                    Name: sdk.String("Josephine McClure"),
                    PublicIP: sdk.String("illo"),
                    Uplink: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnumInternet2.ToPointer(),
                },
            },
        },
        NetworkID: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallOneToOneNatRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallPortForwardingRules

Update the port forwarding rules for an MX network

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
    res, err := s.Firewall.UpdateNetworkApplianceFirewallPortForwardingRules(ctx, operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest{
        RequestBody: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody{
            Rules: []UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules{
                operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules{
                    AllowedIps: []string{
                        "fugiat",
                    },
                    LanIP: "magnam",
                    LocalPort: "atque",
                    Name: sdk.String("Jessie Macejkovic"),
                    Protocol: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnumUDP,
                    PublicPort: "asperiores",
                    Uplink: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnumInternet1.ToPointer(),
                },
                operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules{
                    AllowedIps: []string{
                        "inventore",
                        "ab",
                        "dolore",
                        "amet",
                    },
                    LanIP: "nulla",
                    LocalPort: "officia",
                    Name: sdk.String("Antonio Bechtelar"),
                    Protocol: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnumTCP,
                    PublicPort: "nihil",
                    Uplink: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnumInternet2.ToPointer(),
                },
                operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules{
                    AllowedIps: []string{
                        "voluptatum",
                    },
                    LanIP: "animi",
                    LocalPort: "reiciendis",
                    Name: sdk.String("Kelly Borer"),
                    Protocol: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnumTCP,
                    PublicPort: "amet",
                    Uplink: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnumInternet1.ToPointer(),
                },
            },
        },
        NetworkID: "libero",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkApplianceFirewallSettings

Update the firewall settings for this network

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
    res, err := s.Firewall.UpdateNetworkApplianceFirewallSettings(ctx, operations.UpdateNetworkApplianceFirewallSettingsRequest{
        RequestBody: &operations.UpdateNetworkApplianceFirewallSettingsRequestBody{
            SpoofingProtection: &operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtection{
                IPSourceGuard: &operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIPSourceGuard{
                    Mode: operations.UpdateNetworkApplianceFirewallSettingsRequestBodySpoofingProtectionIPSourceGuardModeEnumBlock.ToPointer(),
                },
            },
        },
        NetworkID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkApplianceFirewallSettings200ApplicationJSONObject != nil {
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
    res, err := s.Firewall.UpdateNetworkWirelessSsidFirewallL3FirewallRules(ctx, operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody{
            AllowLanAccess: sdk.Bool(false),
            Rules: []UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("deleniti"),
                    DestCidr: "iure",
                    DestPort: sdk.String("quis"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumTCP,
                },
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("quisquam"),
                    DestCidr: "optio",
                    DestPort: sdk.String("eveniet"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumIcmp6,
                },
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("accusantium"),
                    DestCidr: "impedit",
                    DestPort: sdk.String("fugiat"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumAny,
                },
                operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules{
                    Comment: sdk.String("non"),
                    DestCidr: "reprehenderit",
                    DestPort: sdk.String("quidem"),
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnumAllow,
                    Protocol: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnumUDP,
                },
            },
        },
        NetworkID: "suscipit",
        Number: "dicta",
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
    res, err := s.Firewall.UpdateNetworkWirelessSsidFirewallL7FirewallRules(ctx, operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody{
            Rules: []UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumApplication.ToPointer(),
                    Value: sdk.String("placeat"),
                },
                operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules{
                    Policy: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnumDeny.ToPointer(),
                    Type: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnumPort.ToPointer(),
                    Value: sdk.String("ipsa"),
                },
            },
        },
        NetworkID: "et",
        Number: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject != nil {
        // handle response
    }
}
```
