# Users

## Overview

User management

### Available Operations

* [DeleteUsersID](#deleteusersid) - Delete a User
* [GetUsers](#getusers) - Fetch a list of Users
* [PostUsers](#postusers) - Create a User
* [PutUsersID](#putusersid) - Update a User

## DeleteUsersID

Delete a User

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
    res, err := s.Users.DeleteUsersID(ctx, operations.DeleteUsersIDRequest{
        ID: 273542,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetUsers

Fetch a list of Users

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
    res, err := s.Users.GetUsers(ctx, operations.GetUsersRequest{
        UserID: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Users != nil {
        // handle response
    }
}
```

## PostUsers

Create a User

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
    res, err := s.Users.PostUsers(ctx, shared.User{
        Administrator: sdk.Bool(false),
        Attributes: map[string]interface{}{
            "officiis": "qui",
            "dolorum": "a",
            "esse": "harum",
            "iusto": "ipsum",
        },
        CoordinateFormat: sdk.String("quisquam"),
        DeviceLimit: sdk.Int64(947371),
        DeviceReadonly: sdk.Bool(false),
        Disabled: sdk.Bool(false),
        Email: sdk.String("Mortimer31@gmail.com"),
        ExpirationTime: types.MustTimeFromString("2022-01-16T12:43:49.763Z"),
        ID: sdk.Int64(518201),
        Latitude: sdk.Float64(4717.52),
        LimitCommands: sdk.Bool(false),
        Longitude: sdk.Float64(256.62),
        Map: sdk.String("expedita"),
        Name: sdk.String("Jane Kassulke"),
        Password: sdk.String("deserunt"),
        Phone: sdk.String("321.688.7165 x211"),
        PoiLayer: sdk.String("distinctio"),
        Readonly: sdk.Bool(false),
        TwelveHourFormat: sdk.Bool(false),
        UserLimit: sdk.Int64(704474),
        Zoom: sdk.Int64(396060),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```

## PutUsersID

Update a User

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
    res, err := s.Users.PutUsersID(ctx, operations.PutUsersIDRequest{
        User: shared.User{
            Administrator: sdk.Bool(false),
            Attributes: map[string]interface{}{
                "molestias": "temporibus",
                "qui": "neque",
            },
            CoordinateFormat: sdk.String("fugit"),
            DeviceLimit: sdk.Int64(164959),
            DeviceReadonly: sdk.Bool(false),
            Disabled: sdk.Bool(false),
            Email: sdk.String("Brady_Hermiston3@yahoo.com"),
            ExpirationTime: types.MustTimeFromString("2020-10-05T00:59:28.911Z"),
            ID: sdk.Int64(748664),
            Latitude: sdk.Float64(925.96),
            LimitCommands: sdk.Bool(false),
            Longitude: sdk.Float64(9037.2),
            Map: sdk.String("ipsum"),
            Name: sdk.String("Gayle Lueilwitz"),
            Password: sdk.String("aperiam"),
            Phone: sdk.String("322.361.0059 x06879"),
            PoiLayer: sdk.String("ut"),
            Readonly: sdk.Bool(false),
            TwelveHourFormat: sdk.Bool(false),
            UserLimit: sdk.Int64(703495),
            Zoom: sdk.Int64(586410),
        },
        ID: 181631,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.User != nil {
        // handle response
    }
}
```
