# Geofences

## Overview

Geofence management

### Available Operations

* [DeleteGeofencesID](#deletegeofencesid) - Delete a Geofence
* [GetGeofences](#getgeofences) - Fetch a list of Geofences
* [PostGeofences](#postgeofences) - Create a Geofence
* [PutGeofencesID](#putgeofencesid) - Update a Geofence

## DeleteGeofencesID

Delete a Geofence

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
    res, err := s.Geofences.DeleteGeofencesID(ctx, operations.DeleteGeofencesIDRequest{
        ID: 569618,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetGeofences

Without params, it returns a list of Geofences the user has access to

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
    res, err := s.Geofences.GetGeofences(ctx, operations.GetGeofencesRequest{
        All: sdk.Bool(false),
        DeviceID: sdk.Int64(270008),
        GroupID: sdk.Int64(703737),
        Refresh: sdk.Bool(false),
        UserID: sdk.Int64(735194),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Geofences != nil {
        // handle response
    }
}
```

## PostGeofences

Create a Geofence

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
    res, err := s.Geofences.PostGeofences(ctx, shared.Geofence{
        Area: sdk.String("labore"),
        Attributes: map[string]interface{}{
            "eum": "non",
            "eligendi": "sint",
            "aliquid": "provident",
            "necessitatibus": "sint",
        },
        CalendarID: sdk.Int64(638921),
        Description: sdk.String("dolor"),
        ID: sdk.Int64(891555),
        Name: sdk.String("Wilbur King"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Geofence != nil {
        // handle response
    }
}
```

## PutGeofencesID

Update a Geofence

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
    res, err := s.Geofences.PutGeofencesID(ctx, operations.PutGeofencesIDRequest{
        Geofence: shared.Geofence{
            Area: sdk.String("maiores"),
            Attributes: map[string]interface{}{
                "dicta": "magnam",
                "cumque": "facere",
                "ea": "aliquid",
            },
            CalendarID: sdk.Int64(675439),
            Description: sdk.String("accusamus"),
            ID: sdk.Int64(249796),
            Name: sdk.String("Jon Tillman"),
        },
        ID: 588465,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Geofence != nil {
        // handle response
    }
}
```
