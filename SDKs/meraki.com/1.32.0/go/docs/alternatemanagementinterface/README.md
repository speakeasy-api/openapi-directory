# AlternateManagementInterface

### Available Operations

* [GetNetworkSwitchAlternateManagementInterface](#getnetworkswitchalternatemanagementinterface) - Return the switch alternate management interface for the network
* [GetNetworkWirelessAlternateManagementInterface](#getnetworkwirelessalternatemanagementinterface) - Return alternate management interface and devices with IP assigned
* [UpdateNetworkSwitchAlternateManagementInterface](#updatenetworkswitchalternatemanagementinterface) - Update the switch alternate management interface for the network
* [UpdateNetworkWirelessAlternateManagementInterface](#updatenetworkwirelessalternatemanagementinterface) - Update alternate management interface and device static IP

## GetNetworkSwitchAlternateManagementInterface

Return the switch alternate management interface for the network

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
    res, err := s.AlternateManagementInterface.GetNetworkSwitchAlternateManagementInterface(ctx, operations.GetNetworkSwitchAlternateManagementInterfaceRequest{
        NetworkID: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkSwitchAlternateManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessAlternateManagementInterface

Return alternate management interface and devices with IP assigned

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
    res, err := s.AlternateManagementInterface.GetNetworkWirelessAlternateManagementInterface(ctx, operations.GetNetworkWirelessAlternateManagementInterfaceRequest{
        NetworkID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessAlternateManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkSwitchAlternateManagementInterface

Update the switch alternate management interface for the network

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
    res, err := s.AlternateManagementInterface.UpdateNetworkSwitchAlternateManagementInterface(ctx, operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest{
        RequestBody: &operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBody{
            Enabled: sdk.Bool(false),
            Protocols: []UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnum{
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnumSyslog,
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnumRadius,
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodyProtocolsEnumRadius,
            },
            Switches: []UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches{
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches{
                    AlternateManagementIP: "ipsum",
                    Gateway: sdk.String("impedit"),
                    Serial: "magni",
                    SubnetMask: sdk.String("soluta"),
                },
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches{
                    AlternateManagementIP: "repudiandae",
                    Gateway: sdk.String("nam"),
                    Serial: "dolore",
                    SubnetMask: sdk.String("iusto"),
                },
                operations.UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches{
                    AlternateManagementIP: "voluptate",
                    Gateway: sdk.String("sequi"),
                    Serial: "dignissimos",
                    SubnetMask: sdk.String("neque"),
                },
            },
            VlanID: sdk.Int64(778172),
        },
        NetworkID: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkSwitchAlternateManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessAlternateManagementInterface

Update alternate management interface and device static IP

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
    res, err := s.AlternateManagementInterface.UpdateNetworkWirelessAlternateManagementInterface(ctx, operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest{
        RequestBody: &operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBody{
            AccessPoints: []UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints{
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints{
                    AlternateManagementIP: "iure",
                    Dns1: sdk.String("odit"),
                    Dns2: sdk.String("voluptatibus"),
                    Gateway: sdk.String("vel"),
                    Serial: "magnam",
                    SubnetMask: sdk.String("quibusdam"),
                },
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints{
                    AlternateManagementIP: "inventore",
                    Dns1: sdk.String("facere"),
                    Dns2: sdk.String("libero"),
                    Gateway: sdk.String("architecto"),
                    Serial: "voluptatibus",
                    SubnetMask: sdk.String("quia"),
                },
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints{
                    AlternateManagementIP: "porro",
                    Dns1: sdk.String("aliquam"),
                    Dns2: sdk.String("velit"),
                    Gateway: sdk.String("illo"),
                    Serial: "accusantium",
                    SubnetMask: sdk.String("vel"),
                },
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyAccessPoints{
                    AlternateManagementIP: "ea",
                    Dns1: sdk.String("beatae"),
                    Dns2: sdk.String("vero"),
                    Gateway: sdk.String("excepturi"),
                    Serial: "eum",
                    SubnetMask: sdk.String("velit"),
                },
            },
            Enabled: sdk.Bool(false),
            Protocols: []UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnum{
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnumSnmp,
                operations.UpdateNetworkWirelessAlternateManagementInterfaceRequestBodyProtocolsEnumSyslog,
            },
            VlanID: sdk.Int64(117525),
        },
        NetworkID: "impedit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessAlternateManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```
