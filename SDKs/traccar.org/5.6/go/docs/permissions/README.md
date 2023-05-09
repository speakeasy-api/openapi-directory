# Permissions

## Overview

User permissions and other object linking

### Available Operations

* [DeletePermissions](#deletepermissions) - Unlink an Object from another Object
* [PostPermissions](#postpermissions) - Link an Object to another Object

## DeletePermissions

Unlink an Object from another Object

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
    res, err := s.Permissions.DeletePermissions(ctx, shared.Permission{
        AttributeID: sdk.Int64(230742),
        CalendarID: sdk.Int64(11714),
        DeviceID: sdk.Int64(764912),
        DriverID: sdk.Int64(359978),
        GeofenceID: sdk.Int64(944124),
        GroupID: sdk.Int64(729991),
        ManagedUserID: sdk.Int64(749999),
        NotificationID: sdk.Int64(171629),
        UserID: sdk.Int64(339404),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PostPermissions

Link an Object to another Object

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
    res, err := s.Permissions.PostPermissions(ctx, shared.Permission{
        AttributeID: sdk.Int64(521037),
        CalendarID: sdk.Int64(489549),
        DeviceID: sdk.Int64(54338),
        DriverID: sdk.Int64(338985),
        GeofenceID: sdk.Int64(199996),
        GroupID: sdk.Int64(179490),
        ManagedUserID: sdk.Int64(18521),
        NotificationID: sdk.Int64(170986),
        UserID: sdk.Int64(793698),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Permission != nil {
        // handle response
    }
}
```
