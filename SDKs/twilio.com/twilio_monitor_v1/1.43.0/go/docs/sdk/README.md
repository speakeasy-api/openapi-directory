# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [FetchAlert](#fetchalert)
* [FetchEvent](#fetchevent)
* [ListAlert](#listalert)
* [ListEvent](#listevent) - Returns a list of events in the account, sorted by event-date.

## FetchAlert

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
    res, err := s.SDK.FetchAlert(ctx, operations.FetchAlertRequest{
        Sid: "provident",
    }, operations.FetchAlertSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MonitorV1AlertInstance != nil {
        // handle response
    }
}
```

## FetchEvent

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
    res, err := s.SDK.FetchEvent(ctx, operations.FetchEventRequest{
        Sid: "distinctio",
    }, operations.FetchEventSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MonitorV1Event != nil {
        // handle response
    }
}
```

## ListAlert

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListAlert(ctx, operations.ListAlertRequest{
        EndDate: types.MustTimeFromString("2021-03-11T23:22:42.658Z"),
        LogLevel: sdk.String("nulla"),
        Page: sdk.Int64(544883),
        PageSize: sdk.Int64(847252),
        PageToken: sdk.String("vel"),
        StartDate: types.MustTimeFromString("2021-09-16T11:56:06.019Z"),
    }, operations.ListAlertSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAlertResponse != nil {
        // handle response
    }
}
```

## ListEvent

Returns a list of events in the account, sorted by event-date.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListEvent(ctx, operations.ListEventRequest{
        ActorSid: sdk.String("suscipit"),
        EndDate: types.MustTimeFromString("2022-09-14T09:35:47.986Z"),
        EventType: sdk.String("debitis"),
        Page: sdk.Int64(56713),
        PageSize: sdk.Int64(963663),
        PageToken: sdk.String("tempora"),
        ResourceSid: sdk.String("suscipit"),
        SourceIPAddress: sdk.String("molestiae"),
        StartDate: types.MustTimeFromString("2020-07-25T16:12:20.938Z"),
    }, operations.ListEventSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEventResponse != nil {
        // handle response
    }
}
```
