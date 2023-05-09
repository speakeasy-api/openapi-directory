# CustomDevice

### Available Operations

* [CustomDeviceGet](#customdeviceget) - Gets all Custom Devices
* [CustomDevicePostForm](#customdevicepostform) - Creates or updates a Custom Device or updates it's values.
* [CustomDevicePostJSON](#customdevicepostjson) - Creates or updates a Custom Device or updates it's values.
* [CustomDevicePostRaw](#customdevicepostraw) - Creates or updates a Custom Device or updates it's values.
* [GetAPICustomDeviceID](#getapicustomdeviceid) - Gets a Custom Device by it's ID

## CustomDeviceGet

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
    res, err := s.CustomDevice.CustomDeviceGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomDeviceToPosts != nil {
        // handle response
    }
}
```

## CustomDevicePostForm

Creates or updates a Custom Device or updates it's values.
            A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
            Only use a custom device for all non meters.
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
    res, err := s.CustomDevice.CustomDevicePostForm(ctx, shared.CustomDeviceToPost{
        ID: sdk.String("b10faaa2-352c-4595-9907-aff1a3a2fa94"),
        Name: sdk.String("Claudia Krajcik"),
        Serial: sdk.Int64(158969),
        ValueDate: types.MustTimeFromString("2022-11-21T17:06:48.722Z"),
        Values: []shared.CustomDeviceValues{
            shared.CustomDeviceValues{
                Name: sdk.String("Bill Conn"),
                Value: sdk.Float64(9495.72),
            },
            shared.CustomDeviceValues{
                Name: sdk.String("Mr. Alberta Schuster"),
                Value: sdk.Float64(8379.45),
            },
            shared.CustomDeviceValues{
                Name: sdk.String("Ryan Witting"),
                Value: sdk.Float64(4686.51),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomDeviceToPost != nil {
        // handle response
    }
}
```

## CustomDevicePostJSON

Creates or updates a Custom Device or updates it's values.
            A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
            Only use a custom device for all non meters.
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
    res, err := s.CustomDevice.CustomDevicePostJSON(ctx, shared.CustomDeviceToPost{
        ID: sdk.String("8f097b00-74f1-4547-9b5e-6e13b99d488e"),
        Name: sdk.String("Dr. Casey Mayer"),
        Serial: sdk.Int64(318569),
        ValueDate: types.MustTimeFromString("2022-05-02T09:29:06.042Z"),
        Values: []shared.CustomDeviceValues{
            shared.CustomDeviceValues{
                Name: sdk.String("Joanna Rau"),
                Value: sdk.Float64(2647.3),
            },
            shared.CustomDeviceValues{
                Name: sdk.String("Beth McGlynn Sr."),
                Value: sdk.Float64(8289.4),
            },
            shared.CustomDeviceValues{
                Name: sdk.String("Linda Corkery"),
                Value: sdk.Float64(2700.08),
            },
            shared.CustomDeviceValues{
                Name: sdk.String("Geoffrey Green"),
                Value: sdk.Float64(2487.53),
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomDeviceToPost != nil {
        // handle response
    }
}
```

## CustomDevicePostRaw

Creates or updates a Custom Device or updates it's values.
            A Custom Device can be any device that like to add some measurement values to the smart-me Cloud.
            Only use a custom device for all non meters.
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
    res, err := s.CustomDevice.CustomDevicePostRaw(ctx, []byte("eligendi"))
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomDeviceToPost != nil {
        // handle response
    }
}
```

## GetAPICustomDeviceID

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
    res, err := s.CustomDevice.GetAPICustomDeviceID(ctx, operations.GetAPICustomDeviceIDRequest{
        ID: "969e9a3e-fa77-4dfb-94cd-66ae395efb9b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomDeviceToPost != nil {
        // handle response
    }
}
```
