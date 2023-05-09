# Calendars

## Overview

Calendar management

### Available Operations

* [DeleteCalendarsID](#deletecalendarsid) - Delete a Calendar
* [GetCalendars](#getcalendars) - Fetch a list of Calendars
* [PostCalendars](#postcalendars) - Create a Calendar
* [PutCalendarsID](#putcalendarsid) - Update a Calendar

## DeleteCalendarsID

Delete a Calendar

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
    res, err := s.Calendars.DeleteCalendarsID(ctx, operations.DeleteCalendarsIDRequest{
        ID: 963663,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetCalendars

Without params, it returns a list of Calendars the user has access to

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
    res, err := s.Calendars.GetCalendars(ctx, operations.GetCalendarsRequest{
        All: sdk.Bool(false),
        UserID: sdk.Int64(272656),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Calendars != nil {
        // handle response
    }
}
```

## PostCalendars

Create a Calendar

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
    res, err := s.Calendars.PostCalendars(ctx, shared.Calendar{
        Attributes: map[string]interface{}{
            "molestiae": "minus",
            "placeat": "voluptatum",
        },
        Data: sdk.String("iusto"),
        ID: sdk.Int64(568045),
        Name: sdk.String("Mrs. Sophie Smith MD"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Calendar != nil {
        // handle response
    }
}
```

## PutCalendarsID

Update a Calendar

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
    res, err := s.Calendars.PutCalendarsID(ctx, operations.PutCalendarsIDRequest{
        Calendar: shared.Calendar{
            Attributes: map[string]interface{}{
                "ipsam": "repellendus",
            },
            Data: sdk.String("sapiente"),
            ID: sdk.Int64(778157),
            Name: sdk.String("Teri Strosin"),
        },
        ID: 799159,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Calendar != nil {
        // handle response
    }
}
```
