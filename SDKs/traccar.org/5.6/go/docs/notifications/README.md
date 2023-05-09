# Notifications

## Overview

User notifications management

### Available Operations

* [DeleteNotificationsID](#deletenotificationsid) - Delete a Notification
* [GetNotifications](#getnotifications) - Fetch a list of Notifications
* [GetNotificationsTypes](#getnotificationstypes) - Fetch a list of available Notification types
* [PostNotifications](#postnotifications) - Create a Notification
* [PostNotificationsTest](#postnotificationstest) - Send test notification to current user via Email and SMS
* [PutNotificationsID](#putnotificationsid) - Update a Notification

## DeleteNotificationsID

Delete a Notification

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
    res, err := s.Notifications.DeleteNotificationsID(ctx, operations.DeleteNotificationsIDRequest{
        ID: 615560,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetNotifications

Without params, it returns a list of Notifications the user has access to

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
    res, err := s.Notifications.GetNotifications(ctx, operations.GetNotificationsRequest{
        All: sdk.Bool(false),
        DeviceID: sdk.Int64(166847),
        GroupID: sdk.Int64(123820),
        Refresh: sdk.Bool(false),
        UserID: sdk.Int64(779051),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Notifications != nil {
        // handle response
    }
}
```

## GetNotificationsTypes

Fetch a list of available Notification types

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Notifications.GetNotificationsTypes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.NotificationTypes != nil {
        // handle response
    }
}
```

## PostNotifications

Create a Notification

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
    res, err := s.Notifications.PostNotifications(ctx, shared.Notification{
        Always: sdk.Bool(false),
        Attributes: map[string]interface{}{
            "pariatur": "maxime",
            "ea": "excepturi",
            "odit": "ea",
            "accusantium": "ab",
        },
        CalendarID: sdk.Int64(982575),
        ID: sdk.Int64(697429),
        Mail: sdk.Bool(false),
        Sms: sdk.Bool(false),
        Type: sdk.String("ipsam"),
        Web: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Notification != nil {
        // handle response
    }
}
```

## PostNotificationsTest

Send test notification to current user via Email and SMS

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Notifications.PostNotificationsTest(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PutNotificationsID

Update a Notification

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
    res, err := s.Notifications.PutNotificationsID(ctx, operations.PutNotificationsIDRequest{
        Notification: shared.Notification{
            Always: sdk.Bool(false),
            Attributes: map[string]interface{}{
                "autem": "nam",
                "eaque": "pariatur",
            },
            CalendarID: sdk.Int64(365496),
            ID: sdk.Int64(975522),
            Mail: sdk.Bool(false),
            Sms: sdk.Bool(false),
            Type: sdk.String("perferendis"),
            Web: sdk.Bool(false),
        },
        ID: 855804,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Notification != nil {
        // handle response
    }
}
```
