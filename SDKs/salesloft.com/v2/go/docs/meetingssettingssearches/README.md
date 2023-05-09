# MeetingsSettingsSearches

## Overview

Meetings Settings - Searches

### Available Operations

* [PostV2MeetingsSettingsSearchesJSON](#postv2meetingssettingssearchesjson) - List meeting settings

## PostV2MeetingsSettingsSearchesJSON

Fetches multiple meeting setting records. The records can be filtered, paged, and sorted according to the respective parameters.


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
    res, err := s.MeetingsSettingsSearches.PostV2MeetingsSettingsSearchesJSON(ctx, operations.PostV2MeetingsSettingsSearchesJSONRequest{
        CalendarType: sdk.String("est"),
        IncludePagingCounts: sdk.Bool(false),
        Page: sdk.Int64(817339),
        PerPage: sdk.Int64(545918),
        UpdatedAt: []string{
            "provident",
            "accusamus",
        },
        UserGuids: []string{
            "tempore",
            "sint",
            "ea",
            "autem",
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
