# Ports

### Available Operations

* [CycleDeviceSwitchPorts](#cycledeviceswitchports) - Cycle a set of switch ports
* [GetDeviceSwitchPort](#getdeviceswitchport) - Return a switch port
* [GetDeviceSwitchPorts](#getdeviceswitchports) - List the switch ports for a switch
* [GetDeviceSwitchPortsStatuses](#getdeviceswitchportsstatuses) - Return the status for all the ports of a switch
* [GetDeviceSwitchPortsStatusesPackets](#getdeviceswitchportsstatusespackets) - Return the packet counters for all the ports of a switch
* [GetNetworkAppliancePort](#getnetworkapplianceport) - Return per-port VLAN settings for a single MX port.
* [GetNetworkAppliancePorts](#getnetworkapplianceports) - List per-port VLAN settings for all ports of a MX.
* [GetOrganizationConfigTemplateSwitchProfilePort](#getorganizationconfigtemplateswitchprofileport) - Return a switch profile port
* [GetOrganizationConfigTemplateSwitchProfilePorts](#getorganizationconfigtemplateswitchprofileports) - Return all the ports of a switch profile
* [GetOrganizationSwitchPortsBySwitch](#getorganizationswitchportsbyswitch) - List the switchports in an organization by switch
* [UpdateDeviceSwitchPort](#updatedeviceswitchport) - Update a switch port
* [UpdateNetworkAppliancePort](#updatenetworkapplianceport) - Update the per-port VLAN settings for a single MX port.
* [UpdateOrganizationConfigTemplateSwitchProfilePort](#updateorganizationconfigtemplateswitchprofileport) - Update a switch profile port

## CycleDeviceSwitchPorts

Cycle a set of switch ports

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
    res, err := s.Ports.CycleDeviceSwitchPorts(ctx, operations.CycleDeviceSwitchPortsRequest{
        RequestBody: operations.CycleDeviceSwitchPortsRequestBody{
            Ports: []string{
                "tempore",
                "quis",
                "vitae",
            },
        },
        Serial: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CycleDeviceSwitchPorts200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceSwitchPort

Return a switch port

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
    res, err := s.Ports.GetDeviceSwitchPort(ctx, operations.GetDeviceSwitchPortRequest{
        PortID: "nostrum",
        Serial: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetDeviceSwitchPorts

List the switch ports for a switch

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
    res, err := s.Ports.GetDeviceSwitchPorts(ctx, operations.GetDeviceSwitchPortsRequest{
        Serial: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPorts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchPortsStatuses

Return the status for all the ports of a switch

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
    res, err := s.Ports.GetDeviceSwitchPortsStatuses(ctx, operations.GetDeviceSwitchPortsStatusesRequest{
        Serial: "asperiores",
        T0: sdk.String("blanditiis"),
        Timespan: sdk.Float32(8012.92),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPortsStatuses200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetDeviceSwitchPortsStatusesPackets

Return the packet counters for all the ports of a switch

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
    res, err := s.Ports.GetDeviceSwitchPortsStatusesPackets(ctx, operations.GetDeviceSwitchPortsStatusesPacketsRequest{
        Serial: "voluptates",
        T0: sdk.String("praesentium"),
        Timespan: sdk.Float32(7156.36),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

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
    res, err := s.Ports.GetNetworkAppliancePort(ctx, operations.GetNetworkAppliancePortRequest{
        NetworkID: "consequuntur",
        PortID: "in",
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
    res, err := s.Ports.GetNetworkAppliancePorts(ctx, operations.GetNetworkAppliancePortsRequest{
        NetworkID: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkAppliancePorts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationConfigTemplateSwitchProfilePort

Return a switch profile port

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
    res, err := s.Ports.GetOrganizationConfigTemplateSwitchProfilePort(ctx, operations.GetOrganizationConfigTemplateSwitchProfilePortRequest{
        ConfigTemplateID: "ratione",
        OrganizationID: "sed",
        PortID: "dolorum",
        ProfileID: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetOrganizationConfigTemplateSwitchProfilePorts

Return all the ports of a switch profile

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
    res, err := s.Ports.GetOrganizationConfigTemplateSwitchProfilePorts(ctx, operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest{
        ConfigTemplateID: "dolor",
        OrganizationID: "dignissimos",
        ProfileID: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetOrganizationSwitchPortsBySwitch

List the switchports in an organization by switch

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
    res, err := s.Ports.GetOrganizationSwitchPortsBySwitch(ctx, operations.GetOrganizationSwitchPortsBySwitchRequest{
        ConfigurationUpdatedAfter: sdk.String("ducimus"),
        EndingBefore: sdk.String("quisquam"),
        Mac: sdk.String("non"),
        Macs: []string{
            "sit",
            "nesciunt",
            "quos",
            "id",
        },
        Name: sdk.String("Ana Bergnaum"),
        NetworkIds: []string{
            "vitae",
            "nulla",
        },
        OrganizationID: "asperiores",
        PerPage: sdk.Int64(353244),
        PortProfileIds: []string{
            "dignissimos",
            "nemo",
            "alias",
        },
        Serial: sdk.String("temporibus"),
        Serials: []string{
            "architecto",
            "officiis",
            "vero",
            "ratione",
        },
        StartingAfter: sdk.String("animi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetOrganizationSwitchPortsBySwitch200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UpdateDeviceSwitchPort

Update a switch port

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
    res, err := s.Ports.UpdateDeviceSwitchPort(ctx, operations.UpdateDeviceSwitchPortRequest{
        RequestBody: &operations.UpdateDeviceSwitchPortRequestBody{
            AccessPolicyNumber: sdk.Int64(577767),
            AccessPolicyType: operations.UpdateDeviceSwitchPortRequestBodyAccessPolicyTypeEnumCustomAccessPolicy.ToPointer(),
            AdaptivePolicyGroupID: sdk.String("repudiandae"),
            AllowedVlans: sdk.String("iure"),
            DaiTrusted: sdk.Bool(false),
            Enabled: sdk.Bool(false),
            FlexibleStackingEnabled: sdk.Bool(false),
            IsolationEnabled: sdk.Bool(false),
            LinkNegotiation: sdk.String("repellat"),
            MacAllowList: []string{
                "ipsam",
                "error",
                "cum",
            },
            Name: sdk.String("Floyd Okuneva"),
            PeerSgtCapable: sdk.Bool(false),
            PoeEnabled: sdk.Bool(false),
            PortScheduleID: sdk.String("natus"),
            Profile: &operations.UpdateDeviceSwitchPortRequestBodyProfile{
                Enabled: sdk.Bool(false),
                ID: sdk.String("da09f96b-4172-4f9e-8d83-a46dda23fdde"),
                Iname: sdk.String("a"),
            },
            RstpEnabled: sdk.Bool(false),
            StickyMacAllowList: []string{
                "consequatur",
                "doloribus",
                "sequi",
            },
            StickyMacAllowListLimit: sdk.Int64(551535),
            StormControlEnabled: sdk.Bool(false),
            StpGuard: operations.UpdateDeviceSwitchPortRequestBodyStpGuardEnumRootGuard.ToPointer(),
            Tags: []string{
                "pariatur",
                "aliquam",
                "quisquam",
                "a",
            },
            Type: operations.UpdateDeviceSwitchPortRequestBodyTypeEnumTrunk.ToPointer(),
            Udld: operations.UpdateDeviceSwitchPortRequestBodyUdldEnumAlertOnly.ToPointer(),
            Vlan: sdk.Int64(784578),
            VoiceVlan: sdk.Int64(99549),
        },
        PortID: "totam",
        Serial: "quia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceSwitchPort200ApplicationJSONObject != nil {
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
    res, err := s.Ports.UpdateNetworkAppliancePort(ctx, operations.UpdateNetworkAppliancePortRequest{
        RequestBody: &operations.UpdateNetworkAppliancePortRequestBody{
            AccessPolicy: sdk.String("iste"),
            AllowedVlans: sdk.String("culpa"),
            DropUntaggedTraffic: sdk.Bool(false),
            Enabled: sdk.Bool(false),
            Type: sdk.String("possimus"),
            Vlan: sdk.Int64(757185),
        },
        NetworkID: "cum",
        PortID: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkAppliancePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateOrganizationConfigTemplateSwitchProfilePort

Update a switch profile port

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
    res, err := s.Ports.UpdateOrganizationConfigTemplateSwitchProfilePort(ctx, operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest{
        RequestBody: &operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBody{
            AccessPolicyNumber: sdk.Int64(380375),
            AccessPolicyType: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyAccessPolicyTypeEnumMacAllowList.ToPointer(),
            AllowedVlans: sdk.String("magni"),
            DaiTrusted: sdk.Bool(false),
            Enabled: sdk.Bool(false),
            FlexibleStackingEnabled: sdk.Bool(false),
            IsolationEnabled: sdk.Bool(false),
            LinkNegotiation: sdk.String("porro"),
            MacAllowList: []string{
                "rem",
            },
            Name: sdk.String("Ella Hartmann"),
            PoeEnabled: sdk.Bool(false),
            PortScheduleID: sdk.String("vitae"),
            Profile: &operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyProfile{
                Enabled: sdk.Bool(false),
                ID: sdk.String("1554d591-03a8-46fb-ad6b-4482dbadf2ff"),
                Iname: sdk.String("quibusdam"),
            },
            RstpEnabled: sdk.Bool(false),
            StickyMacAllowList: []string{
                "doloremque",
                "neque",
                "eligendi",
            },
            StickyMacAllowListLimit: sdk.Int64(191731),
            StormControlEnabled: sdk.Bool(false),
            StpGuard: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyStpGuardEnumLoopGuard.ToPointer(),
            Tags: []string{
                "soluta",
                "consequuntur",
                "voluptatibus",
            },
            Type: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyTypeEnumTrunk.ToPointer(),
            Udld: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequestBodyUdldEnumAlertOnly.ToPointer(),
            Vlan: sdk.Int64(686823),
            VoiceVlan: sdk.Int64(361381),
        },
        ConfigTemplateID: "quis",
        OrganizationID: "quos",
        PortID: "eum",
        ProfileID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject != nil {
        // handle response
    }
}
```
