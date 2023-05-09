# Devices

### Available Operations

* [DevicesGet](#devicesget) - Gets all Devices
* [DevicesPostForm](#devicespostform) - Creates or updates a Device or updates it's values.
* [DevicesPostJSON](#devicespostjson) - Creates or updates a Device or updates it's values.
* [DevicesPostRaw](#devicespostraw) - Creates or updates a Device or updates it's values.
* [DevicesPut](#devicesput) - Updates the On/Off Switch on a device. 
            For new implementations please use the "actions" command
* [GetAPIDevicesID](#getapidevicesid) - Gets a Device by it's ID

## DevicesGet

Gets all Devices

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.DevicesGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Devices != nil {
        // handle response
    }
}
```

## DevicesPostForm

Creates or updates a Device or updates it's values. 
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.DevicesPostForm(ctx, shared.DeviceToPost{
        ActivePower: sdk.Float64(5013.24),
        CounterReading: sdk.Float64(5332.06),
        CounterReadingExport: sdk.Float64(9560.84),
        CounterReadingExportT1: sdk.Float64(2305.33),
        CounterReadingExportT2: sdk.Float64(6439.9),
        CounterReadingT1: sdk.Float64(3948.69),
        CounterReadingT2: sdk.Float64(4238.55),
        Current: sdk.Float64(6188.09),
        CurrentL1: sdk.Float64(6063.93),
        CurrentL2: sdk.Float64(4748.67),
        CurrentL3: sdk.Float64(191.93),
        DeviceEnergyType: shared.DeviceToPostDeviceEnergyTypeEnumMeterTypeTemperature.ToPointer(),
        DigitalInput1: sdk.Bool(false),
        ID: sdk.String("4ba4469b-6e21-4419-9989-0afa563e2516"),
        MeterSubType: shared.DeviceToPostMeterSubTypeEnumMeterSubTypeVirtualBattery.ToPointer(),
        Name: sdk.String("Frederick Schoen"),
        PowerFactor: sdk.Float64(4479.26),
        PowerFactorL1: sdk.Float64(1002.26),
        PowerFactorL2: sdk.Float64(995.69),
        PowerFactorL3: sdk.Float64(9194.83),
        Serial: sdk.Int64(352312),
        Temperature: sdk.Float64(7142.42),
        ValueDate: types.MustTimeFromString("2022-01-01T10:06:00.916Z"),
        Voltage: sdk.Float64(8411.4),
        VoltageL1: sdk.Float64(1494.48),
        VoltageL2: sdk.Float64(9046.48),
        VoltageL3: sdk.Float64(8681.26),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceToPost != nil {
        // handle response
    }
}
```

## DevicesPostJSON

Creates or updates a Device or updates it's values. 
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.DevicesPostJSON(ctx, shared.DeviceToPost{
        ActivePower: sdk.Float64(375.59),
        CounterReading: sdk.Float64(1624.93),
        CounterReadingExport: sdk.Float64(5083.15),
        CounterReadingExportT1: sdk.Float64(6155.6),
        CounterReadingExportT2: sdk.Float64(1668.47),
        CounterReadingT1: sdk.Float64(1238.2),
        CounterReadingT2: sdk.Float64(7790.51),
        Current: sdk.Float64(8480.09),
        CurrentL1: sdk.Float64(8649.34),
        CurrentL2: sdk.Float64(8073.19),
        CurrentL3: sdk.Float64(4113.97),
        DeviceEnergyType: shared.DeviceToPostDeviceEnergyTypeEnumMeterTypeMBusGateway.ToPointer(),
        DigitalInput1: sdk.Bool(false),
        ID: sdk.String("2601fb57-6b0d-45f0-930c-5fbb25870532"),
        MeterSubType: shared.DeviceToPostMeterSubTypeEnumMeterSubTypeUnknown.ToPointer(),
        Name: sdk.String("Brooke Kohler"),
        PowerFactor: sdk.Float64(3453.52),
        PowerFactorL1: sdk.Float64(9441.2),
        PowerFactorL2: sdk.Float64(9280.82),
        PowerFactorL3: sdk.Float64(6082.53),
        Serial: sdk.Int64(704415),
        Temperature: sdk.Float64(5966.56),
        ValueDate: types.MustTimeFromString("2022-03-20T23:16:34.777Z"),
        Voltage: sdk.Float64(1646.94),
        VoltageL1: sdk.Float64(5000.26),
        VoltageL2: sdk.Float64(6214.79),
        VoltageL3: sdk.Float64(503.7),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceToPost != nil {
        // handle response
    }
}
```

## DevicesPostRaw

Creates or updates a Device or updates it's values. 
            For a new device leave the ID empty. To create a device you have to set the DeviceEnergyType.
            To update values, add the ID of the device and the values you like to set.  (See the Data Type Model for more Information)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.DevicesPostRaw(ctx, []byte("occaecati"))
    if err != nil {
        log.Fatal(err)
    }

    if res.DeviceToPost != nil {
        // handle response
    }
}
```

## DevicesPut

Updates the On/Off Switch on a device
            For new implementations please use the "actions" command

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
    res, err := s.Devices.DevicesPut(ctx, operations.DevicesPutRequest{
        ID: "b3fe49a8-d9cb-4f48-a333-23f9b77f3a41",
        SwitchNumber: sdk.Int(58029),
        SwitchState: false,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Object != nil {
        // handle response
    }
}
```

## GetAPIDevicesID

Gets a Device by it's ID

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
    res, err := s.Devices.GetAPIDevicesID(ctx, operations.GetAPIDevicesIDRequest{
        ID: "0674ebf6-9280-4d1b-a77a-89ebf737ae42",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```
