# CalendarEventResponse

## Overview

A calendar event response indicates the attendee's response to a calendar event.  Only `POST` for creation is allowed as the responses are updated into the corresponding calendar events.

### Available Operations

* [CreateCalendarEventResponse](#createcalendareventresponse) - Create calendar event response

## CreateCalendarEventResponse

Create a calendar event response for an attendee of a calendar event, the attendee can be a coach or patient.  Calendar event responses cannot be fetched, updated nor deleted.  Use calendar event api to fetch the response status for attendees.

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
    res, err := s.CalendarEventResponse.CreateCalendarEventResponse(ctx, shared.CreateCalendarEventResponseRequest{
        Data: shared.CreateCalendarEventResponseRequestData{
            Attributes: shared.CreateCalendarEventResponseRequestDataAttributes{
                Attendee: map[string]interface{}{
                    "magni": "doloribus",
                },
                ResponseStatus: shared.CreateCalendarEventResponseRequestDataAttributesResponseStatusEnumTentative,
            },
            Relationships: shared.CreateCalendarEventResponseRequestDataRelationships{
                CalendarEvent: &shared.CreateCalendarEventResponseRequestDataRelationshipsCalendarEvent{
                    Data: shared.Data{
                        ID: sdk.String("e0477177-8ff6-41d0-9747-6360a15db6a6"),
                        Type: sdk.String("aliquid"),
                    },
                },
                User: &shared.CreateCalendarEventResponseRequestDataRelationshipsUser{
                    Data: shared.Data{
                        ID: sdk.String("0659a1ad-eaab-4585-9d6c-645b08b61891"),
                        Type: sdk.String("rerum"),
                    },
                },
            },
            Type: shared.TypeEnum1CalendarEventResponse,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCalendarEventResponseRequest != nil {
        // handle response
    }
}
```
