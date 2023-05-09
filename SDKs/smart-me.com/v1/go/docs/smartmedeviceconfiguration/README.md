# SmartMeDeviceConfiguration

### Available Operations

* [SmartMeDeviceConfigurationGet](#smartmedeviceconfigurationget) - Gets the configuration of a smart-me device.
* [SmartMeDeviceConfigurationPostForm](#smartmedeviceconfigurationpostform) - Sets the configuration of a smart-me device. The device needs to be online.
* [SmartMeDeviceConfigurationPostJSON](#smartmedeviceconfigurationpostjson) - Sets the configuration of a smart-me device. The device needs to be online.
* [SmartMeDeviceConfigurationPostRaw](#smartmedeviceconfigurationpostraw) - Sets the configuration of a smart-me device. The device needs to be online.

## SmartMeDeviceConfigurationGet

Gets the configuration of a smart-me device.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SmartMeDeviceConfiguration.SmartMeDeviceConfigurationGet(ctx, operations.SmartMeDeviceConfigurationGetRequest{
        ID: "0a15db6a-6606-459a-9ade-aab5851d6c64",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SmartMeDeviceConfigurationContainer != nil {
        // handle response
    }
}
```

## SmartMeDeviceConfigurationPostForm

Sets the configuration of a smart-me device. The device needs to be online.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SmartMeDeviceConfiguration.SmartMeDeviceConfigurationPostForm(ctx, shared.SmartMeDeviceConfigurationContainer{
        DeviceEncryptionKey: sdk.String("ad"),
        DevicePinCode: sdk.String("expedita"),
        DNSUpdateState: shared.SmartMeDeviceConfigurationContainerDNSUpdateStateEnumNoUpdate.ToPointer(),
        EnableModbusTCP: sdk.Bool(false),
        ID: sdk.String("8b61891b-aa0f-4e1a-9e00-8e6f8c5f350d"),
        InputConfiguration: []shared.InputConfigurationContainer{
            shared.InputConfigurationContainer{
                Name: sdk.String("Taylor Reichel"),
                Number: sdk.Int(222864),
                OffText: sdk.String("aliquam"),
                OnText: sdk.String("inventore"),
                Type: shared.InputConfigurationContainerTypeEnumDigitalInput.ToPointer(),
            },
            shared.InputConfigurationContainer{
                Name: sdk.String("Mr. Hazel Ernser I"),
                Number: sdk.Int(144286),
                OffText: sdk.String("ab"),
                OnText: sdk.String("laudantium"),
                Type: shared.InputConfigurationContainerTypeEnumTariffInput.ToPointer(),
            },
            shared.InputConfigurationContainer{
                Name: sdk.String("Janis Hills V"),
                Number: sdk.Int(911198),
                OffText: sdk.String("impedit"),
                OnText: sdk.String("officiis"),
                Type: shared.InputConfigurationContainerTypeEnumTariffInput.ToPointer(),
            },
        },
        OutputConfiguration: []shared.OutputConfigurationContainer{
            shared.OutputConfigurationContainer{
                DigitalOutputNoConnectionAction: shared.OutputConfigurationContainerDigitalOutputNoConnectionActionEnumNothing.ToPointer(),
                Name: sdk.String("Robin Ratke"),
                Number: sdk.Int(528234),
                S0PulseValue: shared.OutputConfigurationContainerS0PulseValueEnumPulseValue1000Kwh.ToPointer(),
                Type: shared.OutputConfigurationContainerTypeEnumImpulseOutputActiveEnergyExport.ToPointer(),
            },
            shared.OutputConfigurationContainer{
                DigitalOutputNoConnectionAction: shared.OutputConfigurationContainerDigitalOutputNoConnectionActionEnumNothing.ToPointer(),
                Name: sdk.String("Raul Rolfson"),
                Number: sdk.Int(160393),
                S0PulseValue: shared.OutputConfigurationContainerS0PulseValueEnumPulseValue1000Kwh.ToPointer(),
                Type: shared.OutputConfigurationContainerTypeEnumImpulseOutputActiveEnergyExport.ToPointer(),
            },
            shared.OutputConfigurationContainer{
                DigitalOutputNoConnectionAction: shared.OutputConfigurationContainerDigitalOutputNoConnectionActionEnumSetPwmValue.ToPointer(),
                Name: sdk.String("Sue Swaniawski"),
                Number: sdk.Int(690785),
                S0PulseValue: shared.OutputConfigurationContainerS0PulseValueEnumPulseValue1000Kwh.ToPointer(),
                Type: shared.OutputConfigurationContainerTypeEnumDisabled.ToPointer(),
            },
            shared.OutputConfigurationContainer{
                DigitalOutputNoConnectionAction: shared.OutputConfigurationContainerDigitalOutputNoConnectionActionEnumSetPwmValue.ToPointer(),
                Name: sdk.String("Marion Hickle"),
                Number: sdk.Int(642352),
                S0PulseValue: shared.OutputConfigurationContainerS0PulseValueEnumPulseValue1000Kwh.ToPointer(),
                Type: shared.OutputConfigurationContainerTypeEnumImpulseOutputActiveEnergyImport.ToPointer(),
            },
        },
        ShowReactiveEnergy: sdk.Bool(false),
        SwitchConfiguration: []shared.SwitchConfigurationContainer{
            shared.SwitchConfigurationContainer{
                CanSwitchOff: sdk.Bool(false),
                Number: sdk.Int(551079),
            },
            shared.SwitchConfigurationContainer{
                CanSwitchOff: sdk.Bool(false),
                Number: sdk.Int(260904),
            },
        },
        UploadInterval: shared.SmartMeDeviceConfigurationContainerUploadIntervalEnumUploadInterval5s.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SmartMeDeviceConfigurationPostJSON

Sets the configuration of a smart-me device. The device needs to be online.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SmartMeDeviceConfiguration.SmartMeDeviceConfigurationPostJSON(ctx, shared.SmartMeDeviceConfigurationContainer{
        DeviceEncryptionKey: sdk.String("ducimus"),
        DevicePinCode: sdk.String("nesciunt"),
        DNSUpdateState: shared.SmartMeDeviceConfigurationContainerDNSUpdateStateEnumDNSUpdateInternalIP.ToPointer(),
        EnableModbusTCP: sdk.Bool(false),
        ID: sdk.String("8418d162-309f-4b09-a992-1aefb9f58c4d"),
        InputConfiguration: []shared.InputConfigurationContainer{
            shared.InputConfigurationContainer{
                Name: sdk.String("Lorena Johns"),
                Number: sdk.Int(267207),
                OffText: sdk.String("nam"),
                OnText: sdk.String("vero"),
                Type: shared.InputConfigurationContainerTypeEnumTariffInput.ToPointer(),
            },
            shared.InputConfigurationContainer{
                Name: sdk.String("Mrs. Gina Abbott"),
                Number: sdk.Int(318233),
                OffText: sdk.String("sint"),
                OnText: sdk.String("nulla"),
                Type: shared.InputConfigurationContainerTypeEnumDigitalInput.ToPointer(),
            },
            shared.InputConfigurationContainer{
                Name: sdk.String("Ida Kilback"),
                Number: sdk.Int(571844),
                OffText: sdk.String("accusamus"),
                OnText: sdk.String("impedit"),
                Type: shared.InputConfigurationContainerTypeEnumDigitalInput.ToPointer(),
            },
        },
        OutputConfiguration: []shared.OutputConfigurationContainer{
            shared.OutputConfigurationContainer{
                DigitalOutputNoConnectionAction: shared.OutputConfigurationContainerDigitalOutputNoConnectionActionEnumSetPwmValue.ToPointer(),
                Name: sdk.String("Loretta Tremblay DDS"),
                Number: sdk.Int(685478),
                S0PulseValue: shared.OutputConfigurationContainerS0PulseValueEnumPulseValue10000Kwh.ToPointer(),
                Type: shared.OutputConfigurationContainerTypeEnumImpulseOutputActiveEnergyImport.ToPointer(),
            },
            shared.OutputConfigurationContainer{
                DigitalOutputNoConnectionAction: shared.OutputConfigurationContainerDigitalOutputNoConnectionActionEnumNothing.ToPointer(),
                Name: sdk.String("Dale Rutherford"),
                Number: sdk.Int(922757),
                S0PulseValue: shared.OutputConfigurationContainerS0PulseValueEnumPulseValue10000Kwh.ToPointer(),
                Type: shared.OutputConfigurationContainerTypeEnumImpulseOutputActiveEnergyExport.ToPointer(),
            },
            shared.OutputConfigurationContainer{
                DigitalOutputNoConnectionAction: shared.OutputConfigurationContainerDigitalOutputNoConnectionActionEnumTurnOff.ToPointer(),
                Name: sdk.String("Lillian Kunde"),
                Number: sdk.Int(535468),
                S0PulseValue: shared.OutputConfigurationContainerS0PulseValueEnumPulseValue10000Kwh.ToPointer(),
                Type: shared.OutputConfigurationContainerTypeEnumImpulseOutputReactiveEnergy.ToPointer(),
            },
            shared.OutputConfigurationContainer{
                DigitalOutputNoConnectionAction: shared.OutputConfigurationContainerDigitalOutputNoConnectionActionEnumNothing.ToPointer(),
                Name: sdk.String("Cecil Gutkowski DDS"),
                Number: sdk.Int(726878),
                S0PulseValue: shared.OutputConfigurationContainerS0PulseValueEnumPulseValue1000Kwh.ToPointer(),
                Type: shared.OutputConfigurationContainerTypeEnumDisabled.ToPointer(),
            },
        },
        ShowReactiveEnergy: sdk.Bool(false),
        SwitchConfiguration: []shared.SwitchConfigurationContainer{
            shared.SwitchConfigurationContainer{
                CanSwitchOff: sdk.Bool(false),
                Number: sdk.Int(782090),
            },
        },
        UploadInterval: shared.SmartMeDeviceConfigurationContainerUploadIntervalEnumUploadInterval30s.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## SmartMeDeviceConfigurationPostRaw

Sets the configuration of a smart-me device. The device needs to be online.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SmartMeDeviceConfiguration.SmartMeDeviceConfigurationPostRaw(ctx, []byte("velit"))
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
