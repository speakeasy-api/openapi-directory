# PackagePickups

## Overview

Scheduled package pickups

### Available Operations

* [DeleteScheduledPickup](#deletescheduledpickup) - Delete a Scheduled Pickup
* [GetPickupByID](#getpickupbyid) - Get Pickup By ID
* [ListScheduledPickups](#listscheduledpickups) - List Scheduled Pickups
* [SchedulePickup](#schedulepickup) - Schedule a Pickup

## DeleteScheduledPickup

Delete a previously-scheduled pickup by ID

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PackagePickups.DeleteScheduledPickup(ctx, operations.DeleteScheduledPickupRequest{
        PickupID: "pik_3YcKU5zdtJuCqoeNwyqqbW",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePickupByIDResponseBody != nil {
        // handle response
    }
}
```

## GetPickupByID

Get Pickup By ID

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PackagePickups.GetPickupByID(ctx, operations.GetPickupByIDRequest{
        PickupID: "pik_3YcKU5zdtJuCqoeNwyqqbW",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPickupByIDResponseBody != nil {
        // handle response
    }
}
```

## ListScheduledPickups

List all pickups that have been scheduled for this carrier

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PackagePickups.ListScheduledPickups(ctx, operations.ListScheduledPickupsRequest{
        CarrierID: sdk.String("se-28529731"),
        CreatedAtEnd: types.MustTimeFromString("2022-08-08T19:05:24.174Z"),
        CreatedAtStart: types.MustTimeFromString("2021-11-23T10:34:02.904Z"),
        Page: sdk.Int(20107),
        PageSize: sdk.Int(164940),
        WarehouseID: sdk.String("se-28529731"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPickupsResponseBody != nil {
        // handle response
    }
}
```

## SchedulePickup

Schedule a package pickup with a carrier

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
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.PackagePickups.SchedulePickup(ctx, shared.SchedulePickupRequestBodyInput{
        ContactDetails: shared.ContactDetails{
            Email: "john.doe@example.com",
            Name: "Vernon Abshire",
            Phone: "(477) 494-2753 x5856",
        },
        LabelIds: []string{
            "se-28529731",
        },
        PickupNotes: sdk.String("debitis"),
        PickupWindow: shared.PickupWindow{
            EndAt: types.MustTimeFromString("2018-09-23T15:00:00.000Z"),
            StartAt: types.MustTimeFromString("2018-09-23T15:00:00.000Z"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SchedulePickupResponseBody != nil {
        // handle response
    }
}
```
