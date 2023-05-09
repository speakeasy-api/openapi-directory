# ManagementInterface

### Available Operations

* [GetDeviceManagementInterface](#getdevicemanagementinterface) - Return the management interface settings for a device
* [UpdateDeviceManagementInterface](#updatedevicemanagementinterface) - Update the management interface settings for a device

## GetDeviceManagementInterface

Return the management interface settings for a device

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
    res, err := s.ManagementInterface.GetDeviceManagementInterface(ctx, operations.GetDeviceManagementInterfaceRequest{
        Serial: "cupiditate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceManagementInterface

Update the management interface settings for a device

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
    res, err := s.ManagementInterface.UpdateDeviceManagementInterface(ctx, operations.UpdateDeviceManagementInterfaceRequest{
        RequestBody: &operations.UpdateDeviceManagementInterfaceRequestBody{
            Wan1: &operations.UpdateDeviceManagementInterfaceRequestBodyWan1{
                StaticDNS: []string{
                    "earum",
                    "reiciendis",
                },
                StaticGatewayIP: sdk.String("est"),
                StaticIP: sdk.String("ut"),
                StaticSubnetMask: sdk.String("dolore"),
                UsingStaticIP: sdk.Bool(false),
                Vlan: sdk.Int64(669828),
                WanEnabled: operations.UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnumEnabled.ToPointer(),
            },
            Wan2: &operations.UpdateDeviceManagementInterfaceRequestBodyWan2{
                StaticDNS: []string{
                    "reiciendis",
                    "earum",
                    "incidunt",
                    "sit",
                },
                StaticGatewayIP: sdk.String("cumque"),
                StaticIP: sdk.String("quibusdam"),
                StaticSubnetMask: sdk.String("quibusdam"),
                UsingStaticIP: sdk.Bool(false),
                Vlan: sdk.Int64(81399),
                WanEnabled: operations.UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnumEnabled.ToPointer(),
            },
        },
        Serial: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceManagementInterface200ApplicationJSONObject != nil {
        // handle response
    }
}
```
