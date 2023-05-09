# SDK

## Overview

The Vonage Audit API allows you to view details of changes to your account. More information is available at <https://developer.nexmo.com/audit/overview>.
_Please note that the Audit API is currently in Beta_


### Available Operations

* [GetEvent](#getevent) - Retrieve individual audit event
* [GetEvents](#getevents) - Retrieve audit events
* [GetEventsOptions](#geteventsoptions) - Retrieve audit event types

## GetEvent

Get the specified audit event.


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
    res, err := s.SDK.GetEvent(ctx, operations.GetEventRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    }, operations.GetEventSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditEvent != nil {
        // handle response
    }
}
```

## GetEvents

Get a series of audit events describing changes made to your Vonage API account over time.


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetEvents(ctx, operations.GetEventsRequest{
        DateFrom: sdk.String("impedit"),
        DateTo: sdk.String("cum"),
        EventType: shared.EventTypesEnumAppCreate.ToPointer(),
        Page: sdk.String("esse"),
        SearchText: sdk.String("ipsum"),
        Size: sdk.Int64(568434),
    }, operations.GetEventsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditResp != nil {
        // handle response
    }
}
```

## GetEventsOptions

Get audit event types.


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
    res, err := s.SDK.GetEventsOptions(ctx, operations.GetEventsOptionsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditEventTypesResp != nil {
        // handle response
    }
}
```
