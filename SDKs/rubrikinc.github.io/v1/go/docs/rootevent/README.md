# RootEvent

## Overview

Events.

### Available Operations

* [GetEventsCsvDownloadLink](#geteventscsvdownloadlink) - Download summary of events as a CSV file
* [QueryEventV1](#queryeventv1) - Get information for all events
* [QueryLatestEventsV1](#querylatesteventsv1) - Get latest events with their associated event series information

## GetEventsCsvDownloadLink

Download summary of the related events that match the value specified in the following categories: event type, status, object name or ID, eventSeriesId, object type, and limit events by dates.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootEvent.GetEventsCsvDownloadLink(ctx, operations.GetEventsCsvDownloadLinkRequest{
        AfterDate: types.MustTimeFromString("2022-12-31T18:10:52.300Z"),
        AfterID: sdk.String("eveniet"),
        BeforeDate: types.MustTimeFromString("2022-12-01T08:37:58.653Z"),
        EventSeriesStatus: operations.GetEventsCsvDownloadLinkEventSeriesStatusEnumFailure.ToPointer(),
        EventSeverity: operations.GetEventsCsvDownloadLinkEventSeverityEnumCritical.ToPointer(),
        EventStatus: operations.GetEventsCsvDownloadLinkEventStatusEnumWarning.ToPointer(),
        EventType: operations.GetEventsCsvDownloadLinkEventTypeEnumVCenter.ToPointer(),
        Limit: sdk.Int(691508),
        ObjectIds: []string{
            "beatae",
        },
        ObjectName: sdk.String("aliquid"),
        ObjectType: operations.GetEventsCsvDownloadLinkObjectTypeEnumAwsEventType.ToPointer(),
        OrderByTime: operations.GetEventsCsvDownloadLinkOrderByTimeEnumDesc.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventCsvDownloadResponse != nil {
        // handle response
    }
}
```

## QueryEventV1

Returns information for all events. Only Global or Read Only Admins and Support users have authorization to use this endpoint. Accepts filters. For similar functionality to the previous /internal/event endpoint, use the /v1/event/latest endpoint.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootEvent.QueryEventV1(ctx, operations.QueryEventV1Request{
        AfterDate: types.MustTimeFromString("2021-04-24T13:44:27.943Z"),
        AfterID: sdk.String("officia"),
        BeforeDate: types.MustTimeFromString("2021-12-16T21:43:29.741Z"),
        Limit: sdk.Int(192846),
        OrderByTime: operations.QueryEventV1OrderByTimeEnumAsc.ToPointer(),
        ShouldIncludeEventSeries: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsAndSeriesSummariesV1 != nil {
        // handle response
    }
}
```

## QueryLatestEventsV1

Get the latest event, event series status, and the number of warning events for all event series. This endpoint has similar/enhanced functionality to the previously deprecated /internal/event endpoint.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.RootEvent.QueryLatestEventsV1(ctx, operations.QueryLatestEventsV1Request{
        AfterDate: types.MustTimeFromString("2022-03-24T07:22:17.550Z"),
        AfterID: sdk.String("ducimus"),
        BeforeDate: types.MustTimeFromString("2022-10-04T01:51:27.895Z"),
        EventSeriesStatus: operations.QueryLatestEventsV1EventSeriesStatusEnumSuccessWithWarnings.ToPointer(),
        EventSeverity: operations.QueryLatestEventsV1EventSeverityEnumInformational.ToPointer(),
        EventStatus: operations.QueryLatestEventsV1EventStatusEnumCanceling.ToPointer(),
        EventType: operations.QueryLatestEventsV1EventTypeEnumReplication.ToPointer(),
        Limit: sdk.Int(617657),
        ObjectIds: []string{
            "doloremque",
            "nisi",
            "rerum",
            "recusandae",
        },
        ObjectName: sdk.String("voluptates"),
        ObjectType: operations.QueryLatestEventsV1ObjectTypeEnumAwsAccount.ToPointer(),
        OrderByTime: operations.QueryLatestEventsV1OrderByTimeEnumDesc.ToPointer(),
        ShouldIncludeEventSeries: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivityLogSummaryV1ListResponse != nil {
        // handle response
    }
}
```
