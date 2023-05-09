# DeviceTypeGroupPolicies

### Available Operations

* [GetNetworkWirelessSsidDeviceTypeGroupPolicies](#getnetworkwirelessssiddevicetypegrouppolicies) - List the device type group policies for the SSID
* [UpdateNetworkWirelessSsidDeviceTypeGroupPolicies](#updatenetworkwirelessssiddevicetypegrouppolicies) - Update the device type group policies for the SSID

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
    res, err := s.DeviceTypeGroupPolicies.GetNetworkWirelessSsidDeviceTypeGroupPolicies(ctx, operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest{
        NetworkID: "nobis",
        Number: "quaerat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject != nil {
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
    res, err := s.DeviceTypeGroupPolicies.UpdateNetworkWirelessSsidDeviceTypeGroupPolicies(ctx, operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest{
        RequestBody: &operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody{
            DeviceTypePolicies: []UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies{
                operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies{
                    DevicePolicy: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnumAllowed,
                    DeviceType: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnumIPhone,
                    GroupPolicyID: sdk.Int64(596958),
                },
                operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePolicies{
                    DevicePolicy: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDevicePolicyEnumAllowed,
                    DeviceType: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBodyDeviceTypePoliciesDeviceTypeEnumWindows,
                    GroupPolicyID: sdk.Int64(571591),
                },
            },
            Enabled: sdk.Bool(false),
        },
        NetworkID: "necessitatibus",
        Number: "totam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject != nil {
        // handle response
    }
}
```
