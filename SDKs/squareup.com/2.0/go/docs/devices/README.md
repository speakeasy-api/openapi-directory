# Devices

### Available Operations

* [CreateDeviceCode](#createdevicecode) - CreateDeviceCode
* [GetDeviceCode](#getdevicecode) - GetDeviceCode
* [ListDeviceCodes](#listdevicecodes) - ListDeviceCodes

## CreateDeviceCode

Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected
terminal mode.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Devices.CreateDeviceCode(ctx, shared.CreateDeviceCodeRequest{
        DeviceCode: shared.DeviceCode{
            Code: sdk.String("aliquam"),
            CreatedAt: sdk.String("ut"),
            DeviceID: sdk.String("quidem"),
            ID: sdk.String("f01bad87-06d4-4608-abfb-dc41ff5d4e2a"),
            LocationID: sdk.String("saepe"),
            Name: sdk.String("Ora Purdy"),
            PairBy: sdk.String("facilis"),
            PairedAt: sdk.String("amet"),
            ProductType: "quis",
            Status: sdk.String("fugiat"),
            StatusChangedAt: sdk.String("beatae"),
        },
        IdempotencyKey: "dignissimos",
    }, operations.CreateDeviceCodeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDeviceCodeResponse != nil {
        // handle response
    }
}
```

## GetDeviceCode

Retrieves DeviceCode with the associated ID.

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
    res, err := s.Devices.GetDeviceCode(ctx, operations.GetDeviceCodeRequest{
        ID: "638f1edb-7835-49ec-85cb-860f8cd580ba",
    }, operations.GetDeviceCodeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDeviceCodeResponse != nil {
        // handle response
    }
}
```

## ListDeviceCodes

Lists all DeviceCodes associated with the merchant.

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
    res, err := s.Devices.ListDeviceCodes(ctx, operations.ListDeviceCodesRequest{
        Cursor: sdk.String("molestiae"),
        LocationID: sdk.String("nesciunt"),
        ProductType: sdk.String("quas"),
        Status: sdk.String("sunt"),
    }, operations.ListDeviceCodesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceCodesResponse != nil {
        // handle response
    }
}
```
