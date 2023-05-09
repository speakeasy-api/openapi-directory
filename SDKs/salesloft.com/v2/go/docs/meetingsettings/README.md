# MeetingSettings

## Overview

Meetings Settings

### Available Operations

* [PutV2MeetingsSettingsIDJSON](#putv2meetingssettingsidjson) - Update a meeting setting

## PutV2MeetingsSettingsIDJSON

Updates a meeting setting, by ID only.


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
    res, err := s.MeetingSettings.PutV2MeetingsSettingsIDJSON(ctx, operations.PutV2MeetingsSettingsIDJSONRequest{
        RequestBody: &operations.PutV2MeetingsSettingsIDJSONRequestBody{
            AllowBookingOnBehalf: sdk.Bool(false),
            AllowBookingOvertime: sdk.Bool(false),
            AllowEventOverlap: sdk.Bool(false),
            AvailabilityLimit: sdk.Int64(975425),
            AvailabilityLimitEnabled: sdk.Bool(false),
            BufferTimeDuration: sdk.Int64(156383),
            CalendarType: sdk.String("porro"),
            DefaultMeetingLength: sdk.Int64(304198),
            Description: sdk.String("velit"),
            EnableCalendarSync: sdk.Bool(false),
            EnableDynamicLocation: sdk.Bool(false),
            Location: sdk.String("illo"),
            PrimaryCalendarConnectionFailed: sdk.Bool(false),
            PrimaryCalendarID: sdk.String("accusantium"),
            PrimaryCalendarName: sdk.String("vel"),
            RescheduleMeetingsEnabled: sdk.Bool(false),
            ScheduleBufferEnabled: sdk.Bool(false),
            ScheduleDelay: sdk.Int64(406922),
            ShareEventDetail: sdk.Bool(false),
            TimeZone: sdk.String("beatae"),
            TimesAvailable: map[string]interface{}{
                "excepturi": "eum",
                "velit": "ut",
                "perspiciatis": "earum",
                "dicta": "impedit",
            },
            Title: sdk.String("Dr."),
        },
        ID: "9e06e3a4-3700-40ae-ab6b-c9b8f759eac5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
