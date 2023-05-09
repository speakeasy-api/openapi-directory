# Events

## Overview

The `events` resource temporarily holds Brain events that match an event subscription in the `subscriptions` resource.
The subscription determines how long the events are held.

See also the `subscriptions` resource.


<https://intellifi.zendesk.com/hc/en-us/sections/360001588534>
### Available Operations

* [GetEventByID](#geteventbyid) - Get event
* [GetEvents](#getevents) - Get all events

## GetEventByID

Get event

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Events.GetEventByID(ctx, operations.GetEventByIDRequest{
        ID: "97b0074f-1547-41b5-a6e1-3b99d488e1e9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Event != nil {
        // handle response
    }
}
```

## GetEvents

Get all events

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Events.GetEvents(ctx, operations.GetEventsRequest{
        After: types.MustTimeFromString("2022-01-26T19:21:55.034Z"),
        AfterID: sdk.String("incidunt"),
        Before: sdk.String("enim"),
        BeforeID: sdk.String("consequatur"),
        From: sdk.String("est"),
        FromID: sdk.String("quibusdam"),
        ID: sdk.String("5b7d6cbd7503c445552a1664"),
        IDOnly: sdk.Bool(false),
        Limit: sdk.Int64(131797),
        Populate: sdk.String("deserunt"),
        ResultsOnly: sdk.Bool(false),
        Sort: sdk.String("distinctio"),
        TimeCreated: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeEvent: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeExpire: sdk.String("2018-08-30T09:51:59.737Z"),
        TimeoutS: sdk.Float64(8413.86),
        TopicAction: shared.EventTopicActionEnumCreated.ToPointer(),
        TopicResource: sdk.String("5b7d6cbd7503c445552a1664"),
        TopicResourceType: shared.EventTopicResourceTypeEnumItems.ToPointer(),
        Until: sdk.String("labore"),
        UntilID: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEvents200ApplicationJSONObject != nil {
        // handle response
    }
}
```
