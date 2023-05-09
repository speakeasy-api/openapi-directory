# Meetings

## Overview

Meetings

### Available Operations

* [GetV2MeetingsJSON](#getv2meetingsjson) - List meetings
* [PutV2MeetingsIDJSON](#putv2meetingsidjson) - Update a meeting

## GetV2MeetingsJSON

Fetches multiple meeting records. The records can be filtered, paged, and sorted according to the respective parameters.
Meetings resource is responsible for events created via the Salesloft platform using calendaring features.
These events can relate to cadences, people, and accounts.


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
    res, err := s.Meetings.GetV2MeetingsJSON(ctx, operations.GetV2MeetingsJSONRequest{
        AccountID: sdk.String("corporis"),
        CreatedAt: []string{
            "error",
            "esse",
            "labore",
        },
        EventIds: []string{
            "vero",
        },
        ICalUids: []string{
            "vitae",
        },
        Ids: []int64{
            212434,
        },
        IncludeMeetingsSettings: sdk.Bool(false),
        IncludePagingCounts: sdk.Bool(false),
        LimitPagingCounts: sdk.Bool(false),
        Page: sdk.Int64(322017),
        PerPage: sdk.Int64(183033),
        PersonID: sdk.String("iste"),
        PersonIds: []int64{
            367626,
            745233,
        },
        ShowDeleted: sdk.Bool(false),
        SortBy: sdk.String("libero"),
        SortDirection: sdk.String("rem"),
        StartTime: []string{
            "odio",
            "fugit",
            "alias",
        },
        Status: sdk.String("magni"),
        TaskIds: []int64{
            64435,
            63553,
        },
        UserGuids: []string{
            "neque",
            "exercitationem",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PutV2MeetingsIDJSON

Updates a meeting, by ID only.


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
    res, err := s.Meetings.PutV2MeetingsIDJSON(ctx, operations.PutV2MeetingsIDJSONRequest{
        RequestBody: &operations.PutV2MeetingsIDJSONRequestBody{
            EventID: sdk.String("itaque"),
            ICalUID: sdk.String("et"),
            NoShow: sdk.Bool(false),
            RescheduleStatus: sdk.String("ipsum"),
            Status: sdk.String("unde"),
        },
        ID: "dbc2259b-1abd-4a8c-870e-1084cb0672d1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
