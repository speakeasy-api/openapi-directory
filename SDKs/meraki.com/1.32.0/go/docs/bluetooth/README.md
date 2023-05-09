# Bluetooth

### Available Operations

* [GetDeviceWirelessBluetoothSettings](#getdevicewirelessbluetoothsettings) - Return the bluetooth settings for a wireless device
* [GetNetworkWirelessBluetoothSettings](#getnetworkwirelessbluetoothsettings) - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
* [UpdateDeviceWirelessBluetoothSettings](#updatedevicewirelessbluetoothsettings) - Update the bluetooth settings for a wireless device
* [UpdateNetworkWirelessBluetoothSettings](#updatenetworkwirelessbluetoothsettings) - Update the Bluetooth settings for a network

## GetDeviceWirelessBluetoothSettings

Return the bluetooth settings for a wireless device

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
    res, err := s.Bluetooth.GetDeviceWirelessBluetoothSettings(ctx, operations.GetDeviceWirelessBluetoothSettingsRequest{
        Serial: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetNetworkWirelessBluetoothSettings

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
    res, err := s.Bluetooth.GetNetworkWirelessBluetoothSettings(ctx, operations.GetNetworkWirelessBluetoothSettingsRequest{
        NetworkID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetNetworkWirelessBluetoothSettings200ApplicationJSONObject != nil {
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
    res, err := s.Bluetooth.UpdateDeviceWirelessBluetoothSettings(ctx, operations.UpdateDeviceWirelessBluetoothSettingsRequest{
        RequestBody: &operations.UpdateDeviceWirelessBluetoothSettingsRequestBody{
            Major: sdk.Int64(487799),
            Minor: sdk.Int64(862560),
            UUID: sdk.String("c915ad2c-af5d-4d67-a3dc-0f5ae2f3a6b7"),
        },
        Serial: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateNetworkWirelessBluetoothSettings

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
    res, err := s.Bluetooth.UpdateNetworkWirelessBluetoothSettings(ctx, operations.UpdateNetworkWirelessBluetoothSettingsRequest{
        RequestBody: &operations.UpdateNetworkWirelessBluetoothSettingsRequestBody{
            AdvertisingEnabled: sdk.Bool(false),
            Major: sdk.Int64(20141),
            MajorMinorAssignmentMode: operations.UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnumUnique.ToPointer(),
            Minor: sdk.Int64(481704),
            ScanningEnabled: sdk.Bool(false),
            UUID: sdk.String("8756143f-5a6c-498b-9555-4080d40bcacc"),
        },
        NetworkID: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateNetworkWirelessBluetoothSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
