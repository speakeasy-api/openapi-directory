# Maintenance

## Overview

Maintenance management

### Available Operations

* [DeleteMaintenanceID](#deletemaintenanceid) - Delete a Maintenance
* [GetMaintenance](#getmaintenance) - Fetch a list of Maintenance
* [PostMaintenance](#postmaintenance) - Create a Maintenance
* [PutMaintenanceID](#putmaintenanceid) - Update a Maintenance

## DeleteMaintenanceID

Delete a Maintenance

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
    res, err := s.Maintenance.DeleteMaintenanceID(ctx, operations.DeleteMaintenanceIDRequest{
        ID: 551816,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetMaintenance

Without params, it returns a list of Maintenance the user has access to

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
    res, err := s.Maintenance.GetMaintenance(ctx, operations.GetMaintenanceRequest{
        All: sdk.Bool(false),
        DeviceID: sdk.Int64(574325),
        GroupID: sdk.Int64(33625),
        Refresh: sdk.Bool(false),
        UserID: sdk.Int64(653201),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Maintenances != nil {
        // handle response
    }
}
```

## PostMaintenance

Create a Maintenance

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
    res, err := s.Maintenance.PostMaintenance(ctx, shared.Maintenance{
        Attributes: map[string]interface{}{
            "mollitia": "ad",
            "eum": "dolor",
            "necessitatibus": "odit",
            "nemo": "quasi",
        },
        ID: sdk.Int64(435865),
        Name: sdk.String("Doyle Gibson"),
        Period: sdk.Float64(7038.89),
        Start: sdk.Float64(4479.26),
        Type: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Maintenance != nil {
        // handle response
    }
}
```

## PutMaintenanceID

Update a Maintenance

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
    res, err := s.Maintenance.PutMaintenanceID(ctx, operations.PutMaintenanceIDRequest{
        Maintenance: shared.Maintenance{
            Attributes: map[string]interface{}{
                "repudiandae": "ullam",
            },
            ID: sdk.Int64(714242),
            Name: sdk.String("Kristie Spencer"),
            Period: sdk.Float64(8681.26),
            Start: sdk.Float64(375.59),
            Type: sdk.String("consequuntur"),
        },
        ID: 508315,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Maintenance != nil {
        // handle response
    }
}
```
