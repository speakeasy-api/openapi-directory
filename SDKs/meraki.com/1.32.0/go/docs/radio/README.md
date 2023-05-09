# Radio

### Available Operations

* [GetDeviceWirelessRadioSettings](#getdevicewirelessradiosettings) - Return the radio settings of a device
* [UpdateDeviceWirelessRadioSettings](#updatedevicewirelessradiosettings) - Update the radio settings of a device

## GetDeviceWirelessRadioSettings

Return the radio settings of a device

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
    res, err := s.Radio.GetDeviceWirelessRadioSettings(ctx, operations.GetDeviceWirelessRadioSettingsRequest{
        Serial: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceWirelessRadioSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateDeviceWirelessRadioSettings

Update the radio settings of a device

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
    res, err := s.Radio.UpdateDeviceWirelessRadioSettings(ctx, operations.UpdateDeviceWirelessRadioSettingsRequest{
        RequestBody: &operations.UpdateDeviceWirelessRadioSettingsRequestBody{
            FiveGhzSettings: &operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings{
                Channel: operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelEnumFiftySix.ToPointer(),
                ChannelWidth: operations.UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettingsChannelWidthEnumEighty.ToPointer(),
                TargetPower: sdk.Int64(104673),
            },
            RfProfileID: sdk.String("deleniti"),
            TwoFourGhzSettings: &operations.UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings{
                Channel: operations.UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettingsChannelEnumSix.ToPointer(),
                TargetPower: sdk.Int64(734297),
            },
        },
        Serial: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeviceWirelessRadioSettings200ApplicationJSONObject != nil {
        // handle response
    }
}
```
