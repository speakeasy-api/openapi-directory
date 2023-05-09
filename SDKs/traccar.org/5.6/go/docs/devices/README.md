# Devices

## Overview

Device management

### Available Operations

* [DeleteDevicesID](#deletedevicesid) - Delete a Device
* [GetDevices](#getdevices) - Fetch a list of Devices
* [PostDevices](#postdevices) - Create a Device
* [PutDevicesID](#putdevicesid) - Update a Device
* [PutDevicesIDAccumulators](#putdevicesidaccumulators) - Update total distance and hours of the Device

## DeleteDevicesID

Delete a Device

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Devices.DeleteDevicesID(ctx, operations.DeleteDevicesIDRequest{
        ID: 943749,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDevices

Without any params, returns a list of the user's devices

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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Devices.GetDevices(ctx, operations.GetDevicesRequest{
        All: sdk.Bool(false),
        ID: sdk.Int64(902599),
        UniqueID: sdk.String("fuga"),
        UserID: sdk.Int64(449950),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Devices != nil {
        // handle response
    }
}
```

## PostDevices

Create a Device

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Devices.PostDevices(ctx, shared.Device{
        Attributes: map[string]interface{}{
            "iste": "iure",
            "saepe": "quidem",
        },
        Category: sdk.String("architecto"),
        Contact: sdk.String("ipsa"),
        Disabled: sdk.Bool(false),
        GeofenceIds: []int64{
            666767,
            653140,
            670638,
            170909,
        },
        GroupID: sdk.Int64(210382),
        ID: sdk.Int64(358152),
        LastUpdate: types.MustTimeFromString("2022-04-01T23:59:21.675Z"),
        Model: sdk.String("enim"),
        Name: sdk.String("Corey Hane III"),
        Phone: sdk.String("1-991-726-1965 x2444"),
        PositionID: sdk.Int64(244425),
        Status: sdk.String("error"),
        UniqueID: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```

## PutDevicesID

Update a Device

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Devices.PutDevicesID(ctx, operations.PutDevicesIDRequest{
        Device: shared.Device{
            Attributes: map[string]interface{}{
                "vitae": "laborum",
                "animi": "enim",
            },
            Category: sdk.String("odit"),
            Contact: sdk.String("quo"),
            Disabled: sdk.Bool(false),
            GeofenceIds: []int64{
                949572,
            },
            GroupID: sdk.Int64(368725),
            ID: sdk.Int64(662527),
            LastUpdate: types.MustTimeFromString("2022-12-17T03:20:13.120Z"),
            Model: sdk.String("quasi"),
            Name: sdk.String("Dr. Jake Pacocha"),
            Phone: sdk.String("1-559-264-7004 x29132"),
            PositionID: sdk.Int64(480894),
            Status: sdk.String("dicta"),
            UniqueID: sdk.String("harum"),
        },
        ID: 317983,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Device != nil {
        // handle response
    }
}
```

## PutDevicesIDAccumulators

Update total distance and hours of the Device

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Devices.PutDevicesIDAccumulators(ctx, operations.PutDevicesIDAccumulatorsRequest{
        DeviceAccumulators: shared.DeviceAccumulators{
            DeviceID: sdk.Int64(880476),
            Hours: sdk.Float64(4142.63),
            TotalDistance: sdk.Float64(9182.36),
        },
        ID: 64147,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
