# Drivers

## Overview

Drivers management

### Available Operations

* [DeleteDriversID](#deletedriversid) - Delete a Driver
* [GetDrivers](#getdrivers) - Fetch a list of Drivers
* [PostDrivers](#postdrivers) - Create a Driver
* [PutDriversID](#putdriversid) - Update a Driver

## DeleteDriversID

Delete a Driver

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
    res, err := s.Drivers.DeleteDriversID(ctx, operations.DeleteDriversIDRequest{
        ID: 216822,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDrivers

Without params, it returns a list of Drivers the user has access to

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
    res, err := s.Drivers.GetDrivers(ctx, operations.GetDriversRequest{
        All: sdk.Bool(false),
        DeviceID: sdk.Int64(692472),
        GroupID: sdk.Int64(565189),
        Refresh: sdk.Bool(false),
        UserID: sdk.Int64(566602),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Drivers != nil {
        // handle response
    }
}
```

## PostDrivers

Create a Driver

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Drivers.PostDrivers(ctx, shared.Driver{
        Attributes: map[string]interface{}{
            "modi": "praesentium",
            "rem": "voluptates",
            "quasi": "repudiandae",
            "sint": "veritatis",
        },
        ID: sdk.Int64(929297),
        Name: sdk.String("Erin Altenwerth"),
        UniqueID: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Driver != nil {
        // handle response
    }
}
```

## PutDriversID

Update a Driver

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
    res, err := s.Drivers.PutDriversID(ctx, operations.PutDriversIDRequest{
        Driver: shared.Driver{
            Attributes: map[string]interface{}{
                "distinctio": "quibusdam",
                "labore": "modi",
                "qui": "aliquid",
            },
            ID: sdk.Int64(586513),
            Name: sdk.String("Christopher Cummerata"),
            UniqueID: sdk.String("alias"),
        },
        ID: 146441,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Driver != nil {
        // handle response
    }
}
```
