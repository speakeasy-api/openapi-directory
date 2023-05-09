# CalendarEvents

## Overview

Calendar Events

### Available Operations

* [GetV2CalendarEvents](#getv2calendarevents) - List calendar events
* [PostV2CalendarEventsUpsert](#postv2calendareventsupsert) - Upsert a calendar event

## GetV2CalendarEvents

Returns all calendar events, paginated and filtered by the date.

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
    res, err := s.CalendarEvents.GetV2CalendarEvents(ctx, operations.GetV2CalendarEventsRequest{
        CalendarID: sdk.String("similique"),
        EndTime: sdk.String("tempora"),
        IncludePagingCounts: sdk.Bool(false),
        Page: sdk.Int64(132815),
        PerPage: sdk.Int64(379057),
        SortBy: sdk.String("voluptas"),
        SortDirection: sdk.String("voluptas"),
        StartTime: sdk.String("minima"),
        UserGUID: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PostV2CalendarEventsUpsert

  Upserts a calendar event object.
  Upsert key is a combination of `id` and `i_cal_uid` scoped to the given `calendar_id`.
  Bulk operations:
  This endpoint is used for bulk operations, see https://developers.salesloft.com/bulk.html for integration instructions.
  Use `calendar/events/upsert` as an event type, and this spec as a data spec.
  This endpoint should be used directly for the time sensitive calendar event updates.


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
    res, err := s.CalendarEvents.PostV2CalendarEventsUpsert(ctx, operations.PostV2CalendarEventsUpsertRequestBody{
        AllDay: sdk.Bool(false),
        Attendees: map[string]interface{}{
            "adipisci": "minus",
            "dolores": "blanditiis",
            "in": "dolore",
        },
        CalendarID: "aliquam",
        CanceledAt: sdk.String("officiis"),
        Description: sdk.String("temporibus"),
        EndTime: types.MustDateFromString("2022-10-06"),
        ICalUID: "cum",
        ID: "88f3a8d8-f5c0-4b2f-afb7-b194a276b269",
        Location: sdk.String("architecto"),
        Organizer: sdk.String("suscipit"),
        Recurring: sdk.Bool(false),
        StartTime: types.MustDateFromString("2020-04-25"),
        Status: sdk.String("illo"),
        Title: sdk.String("Dr."),
        UpdatedAt: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
