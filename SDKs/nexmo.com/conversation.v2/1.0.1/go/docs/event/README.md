# Event

## Overview

Events are actions that occur within a conversation. Examples of this includes: Text events from members, or invite events from users

### Available Operations

* [GetEvents](#getevents) - List Events

## GetEvents

List Events

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
    res, err := s.Event.GetEvents(ctx, operations.GetEventsRequest{
        ConversationID: "suscipit",
        Cursor: sdk.String("iure"),
        EndID: sdk.String("magnam"),
        EventType: sdk.String("debitis"),
        Order: shared.OrderEnumAsc.ToPointer(),
        PageSize: sdk.Int64(963663),
        StartID: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```
