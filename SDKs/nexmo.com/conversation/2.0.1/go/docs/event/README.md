# Event

## Overview

Events are actions that occur within a conversation. Examples of this includes: Text events from members, or invite events from users

### Available Operations

* [CreateEvent](#createevent) - Create an event
* [DeleteEvent](#deleteevent) - Delete an event
* [GetEvent](#getevent) - Retrieve an event
* [~~GetEvents~~](#getevents) - List events :warning: **Deprecated**

## CreateEvent

Create an event

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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Event.CreateEvent(ctx, operations.CreateEventRequest{
        RequestBody: &operations.CreateEventRequestBody{
            Body: map[string]interface{}{
                "iure": "magnam",
                "debitis": "ipsa",
            },
            From: "MEM-63f61863-4a51-4f6b-86e1-46edebio0391",
            To: sdk.String("MEM-63f61863-4a51-4f6b-86e1-46edebio0391"),
            Type: "text",
        },
        ConversationID: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEvent201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteEvent

Delete an event

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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Event.DeleteEvent(ctx, operations.DeleteEventRequest{
        ConversationID: "tempora",
        EventID: "suscipit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEvent200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetEvent

Retrieve an event

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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Event.GetEvent(ctx, operations.GetEventRequest{
        ConversationID: "molestiae",
        EventID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventRetrieved != nil {
        // handle response
    }
}
```

## ~~GetEvents~~

This endpoint is **DEPRECATED**. Please use [/v0.2/events](/api/conversation.v2#get-events).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
            BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Event.GetEvents(ctx, operations.GetEventsRequest{
        ConversationID: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventRetrieveds != nil {
        // handle response
    }
}
```
