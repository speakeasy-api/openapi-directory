# BluetoothSettings

### Available Operations

* [GetNetworkBluetoothSettings](#getnetworkbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [UpdateDeviceWirelessBluetoothSettings](#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [UpdateNetworkBluetoothSettings](#updatenetworkbluetoothsettings) - Update the Bluetooth settings for a network

## GetNetworkBluetoothSettings

Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.

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
    res, err := s.BluetoothSettings.GetNetworkBluetoothSettings(ctx, operations.GetNetworkBluetoothSettingsRequest{
        NetworkID: "cum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceWirelessBluetoothSettings

Update the bluetooth settings for a wireless device

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
    res, err := s.BluetoothSettings.UpdateDeviceWirelessBluetoothSettings(ctx, operations.UpdateDeviceWirelessBluetoothSettingsRequest{
        RequestBody: &operations.UpdateDeviceWirelessBluetoothSettingsRequestBody{
            Major: sdk.Int64(452109),
            Minor: sdk.Int64(490459),
            UUID: sdk.String("f3a41006-74eb-4f69-a80d-1ba77a89ebf7"),
        },
        Serial: "ipsum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkBluetoothSettings

Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.

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
    res, err := s.BluetoothSettings.UpdateNetworkBluetoothSettings(ctx, operations.UpdateNetworkBluetoothSettingsRequest{
        RequestBody: &operations.UpdateNetworkBluetoothSettingsRequestBody{
            AdvertisingEnabled: sdk.Bool(false),
            Major: sdk.Int64(456015),
            MajorMinorAssignmentMode: operations.UpdateNetworkBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnumUnique.ToPointer(),
            Minor: sdk.Int64(906418),
            ScanningEnabled: sdk.Bool(false),
            UUID: sdk.String("4203ce5e-6a95-4d8a-8d44-6ce2af7a73cf"),
        },
        NetworkID: "amet",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
