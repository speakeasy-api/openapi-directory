# CalendarEvent

## Overview

A calendar event represents an event involving or relevant to a patient which will or has occurred on a specific date or during a specific period of time.

### Available Operations

* [CreateCalendarEvent](#createcalendarevent) - Create calendar event
* [DeleteCalendarEvent](#deletecalendarevent) - Delete a calendar event
* [FetchCalendarEvent](#fetchcalendarevent) - Get a calendar event
* [FetchCalendarEvents](#fetchcalendarevents) - List calendar events
* [UpdateCalendarEvent](#updatecalendarevent) - Update a calendar event

## CreateCalendarEvent

Create a calendar event for a patient. Attribute `all_day` must be set to `true` and `end_at` cannot be set for `plan-check-in` event type.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CalendarEvent.CreateCalendarEvent(ctx, shared.CreateCalendarEventRequest{
        Data: shared.CreateCalendarEventRequestData{
            Attributes: shared.CreateCalendarEventRequestDataAttributes{
                AllDay: sdk.Bool(false),
                Attendees: []shared.CreateCalendarEventRequestDataAttributesAttendees{
                    shared.CreateCalendarEventRequestDataAttributesAttendees{
                        ResponseStatus: shared.CreateCalendarEventRequestDataAttributesAttendeesResponseStatusEnumNeedsAction.ToPointer(),
                        User: sdk.String("harum"),
                    },
                    shared.CreateCalendarEventRequestDataAttributesAttendees{
                        ResponseStatus: shared.CreateCalendarEventRequestDataAttributesAttendeesResponseStatusEnumNeedsAction.ToPointer(),
                        User: sdk.String("architecto"),
                    },
                    shared.CreateCalendarEventRequestDataAttributesAttendees{
                        ResponseStatus: shared.CreateCalendarEventRequestDataAttributesAttendeesResponseStatusEnumTentative.ToPointer(),
                        User: sdk.String("labore"),
                    },
                    shared.CreateCalendarEventRequestDataAttributesAttendees{
                        ResponseStatus: shared.CreateCalendarEventRequestDataAttributesAttendeesResponseStatusEnumTentative.ToPointer(),
                        User: sdk.String("atque"),
                    },
                },
                CompletedAt: sdk.String("2017-11-03T06:17:34.652Z"),
                CompletedBy: map[string]interface{}{
                    "nam": "tenetur",
                    "laboriosam": "alias",
                    "amet": "deserunt",
                },
                Description: sdk.String("voluptate"),
                EndAt: sdk.String("2017-11-03T08:00:00.000Z"),
                Location: sdk.String("unde"),
                StartAt: "2017-11-03T04:00:00.000Z",
                TimeZone: sdk.String("America/New_York"),
                Title: "Dr.",
                Type: shared.CreateCalendarEventRequestDataAttributesTypeEnumTelephoneCall,
            },
            Relationships: shared.CreateCalendarEventRequestDataRelationships{
                Owner: &shared.CreateCalendarEventRequestDataRelationshipsOwner{
                    Data: shared.Data{
                        ID: sdk.String("dfe0ab7d-a8a5-40ce-987f-86bc173d689e"),
                        Type: sdk.String("officiis"),
                    },
                },
            },
            Type: shared.TypeEnumCalendarEvent,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCalendarEventResponse != nil {
        // handle response
    }
}
```

## DeleteCalendarEvent

Delete a calendar event by id

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
    res, err := s.CalendarEvent.DeleteCalendarEvent(ctx, operations.DeleteCalendarEventRequest{
        ID: "e9526f8d-986e-4881-aad4-f0e1012563f9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchCalendarEvent

Get a calendar event by id

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
    res, err := s.CalendarEvent.FetchCalendarEvent(ctx, operations.FetchCalendarEventRequest{
        ID: "4e29e973-e922-4a57-a15b-e3e060807e2b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchCalendarEventResponse != nil {
        // handle response
    }
}
```

## FetchCalendarEvents

Get a list of calendar events

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
    res, err := s.CalendarEvent.FetchCalendarEvents(ctx, operations.FetchCalendarEventsRequest{
        FilterAttendees: sdk.String("iure"),
        FilterCompleted: sdk.Bool(false),
        FilterCompletedAt: sdk.String("necessitatibus"),
        FilterCreatedAt: sdk.String("ratione"),
        FilterEndAt: sdk.String("laborum"),
        FilterGroups: sdk.String("distinctio"),
        FilterOrganization: sdk.String("voluptatum"),
        FilterPatient: sdk.String("rem"),
        FilterStartAt: sdk.String("aliquam"),
        FilterType: operations.FetchCalendarEventsFilterTypeEnumReminder.ToPointer(),
        FilterUpdatedAt: sdk.String("repellat"),
        Include: operations.FetchCalendarEventsIncludeEnumOwner.ToPointer(),
        PageCursor: sdk.String("alias"),
        PageLimit: sdk.Int64(362189),
        PageNumber: sdk.Int64(597303),
        PageSize: sdk.Int64(470649),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FetchCalendarEventsResponse != nil {
        // handle response
    }
}
```

## UpdateCalendarEvent

Update a calendar event for a patient. Attribute `all_day` must be true and `end_at` cannot be specified for `plan-check-in` event type. To mark a calendar event as 'completed', set `completed_at` and `completed_by` to desired values.  To mark a completed calendar event as 'not completed', set `completed_at` and `completed_by` to `null`. Attendees can be added or removed, but response status cannot be updated. Use the calendar event response api for response status updates instead.

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
    res, err := s.CalendarEvent.UpdateCalendarEvent(ctx, operations.UpdateCalendarEventRequest{
        UpdateCalendarEventRequest: shared.UpdateCalendarEventRequest{
            Data: &shared.UpdateCalendarEventRequestData{
                Attributes: &shared.Attributes{
                    AllDay: sdk.Bool(false),
                    Attendees: []shared.AttributesAttendees{
                        shared.AttributesAttendees{
                            ResponseStatus: shared.AttributesAttendeesResponseStatusEnumDeclined.ToPointer(),
                            User: sdk.String("alias"),
                        },
                        shared.AttributesAttendees{
                            ResponseStatus: shared.AttributesAttendeesResponseStatusEnumAccepted.ToPointer(),
                            User: sdk.String("reiciendis"),
                        },
                        shared.AttributesAttendees{
                            ResponseStatus: shared.AttributesAttendeesResponseStatusEnumNeedsAction.ToPointer(),
                            User: sdk.String("id"),
                        },
                    },
                    CompletedAt: sdk.String("2017-11-03T06:17:34.652Z"),
                    CompletedBy: map[string]interface{}{
                        "dolore": "dolorum",
                        "nesciunt": "quae",
                    },
                    Description: sdk.String("recusandae"),
                    EndAt: sdk.String("2017-11-03T08:00:00.000Z"),
                    Location: sdk.String("omnis"),
                    StartAt: sdk.String("2017-11-03T04:00:00.000Z"),
                    TimeZone: sdk.String("America/New_York"),
                    Title: sdk.String("Mrs."),
                    Type: shared.AttributesTypeEnumTelephoneCall.ToPointer(),
                },
                ID: "64a3e865-e795-46f9-a51a-5a9da660ff57",
                Relationships: &shared.UpdateCalendarEventRequestDataRelationships{
                    Owner: &shared.UpdateCalendarEventRequestDataRelationshipsOwner{
                        Data: &shared.Data{
                            ID: sdk.String("bfaad4f9-efc1-4b45-92c1-032648dc2f61"),
                            Type: sdk.String("minima"),
                        },
                    },
                },
                Type: shared.TypeEnumCalendarEvent,
            },
        },
        ID: "199ebfd0-e9fe-46c6-b2ca-3aed01179963",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCalendarEventResponse != nil {
        // handle response
    }
}
```
