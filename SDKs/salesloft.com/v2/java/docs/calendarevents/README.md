# calendarEvents

## Overview

Calendar Events

### Available Operations

* [getV2CalendarEvents](#getv2calendarevents) - List calendar events
* [postV2CalendarEventsUpsert](#postv2calendareventsupsert) - Upsert a calendar event

## getV2CalendarEvents

Returns all calendar events, paginated and filtered by the date.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CalendarEventsRequest;
import org.openapis.openapi.models.operations.GetV2CalendarEventsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CalendarEventsRequest req = new GetV2CalendarEventsRequest() {{
                calendarId = "dolore";
                endTime = "labore";
                includePagingCounts = false;
                page = 240829L;
                perPage = 677263L;
                sortBy = "architecto";
                sortDirection = "quae";
                startTime = "aut";
                userGuid = "quas";
            }};            

            GetV2CalendarEventsResponse res = sdk.calendarEvents.getV2CalendarEvents(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2CalendarEventsUpsert

  Upserts a calendar event object.
  Upsert key is a combination of `id` and `i_cal_uid` scoped to the given `calendar_id`.
  Bulk operations:
  This endpoint is used for bulk operations, see https://developers.salesloft.com/bulk.html for integration instructions.
  Use `calendar/events/upsert` as an event type, and this spec as a data spec.
  This endpoint should be used directly for the time sensitive calendar event updates.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2CalendarEventsUpsertRequestBody;
import org.openapis.openapi.models.operations.PostV2CalendarEventsUpsertResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2CalendarEventsUpsertRequestBody req = new PostV2CalendarEventsUpsertRequestBody("itaque", LocalDate.parse("2022-05-01"), "repellendus", "porro", LocalDate.parse("2022-02-26")) {{
                allDay = false;
                attendees = new java.util.HashMap<String, Object>() {{
                    put("cupiditate", "qui");
                    put("quae", "laudantium");
                    put("odio", "occaecati");
                }};
                canceledAt = "voluptatibus";
                description = "quisquam";
                location = "vero";
                organizer = "omnis";
                recurring = false;
                status = "quis";
                title = "Mrs.";
                updatedAt = "delectus";
            }};            

            PostV2CalendarEventsUpsertResponse res = sdk.calendarEvents.postV2CalendarEventsUpsert(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
