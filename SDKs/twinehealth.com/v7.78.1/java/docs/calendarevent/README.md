# calendarEvent

## Overview

A calendar event represents an event involving or relevant to a patient which will or has occurred on a specific date or during a specific period of time.

### Available Operations

* [createCalendarEvent](#createcalendarevent) - Create calendar event
* [deleteCalendarEvent](#deletecalendarevent) - Delete a calendar event
* [fetchCalendarEvent](#fetchcalendarevent) - Get a calendar event
* [fetchCalendarEvents](#fetchcalendarevents) - List calendar events
* [updateCalendarEvent](#updatecalendarevent) - Update a calendar event

## createCalendarEvent

Create a calendar event for a patient. Attribute `all_day` must be set to `true` and `end_at` cannot be set for `plan-check-in` event type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCalendarEventResponse;
import org.openapis.openapi.models.shared.CreateCalendarEventRequest;
import org.openapis.openapi.models.shared.CreateCalendarEventRequestData;
import org.openapis.openapi.models.shared.CreateCalendarEventRequestDataAttributes;
import org.openapis.openapi.models.shared.CreateCalendarEventRequestDataAttributesAttendees;
import org.openapis.openapi.models.shared.CreateCalendarEventRequestDataAttributesAttendeesResponseStatusEnum;
import org.openapis.openapi.models.shared.CreateCalendarEventRequestDataAttributesTypeEnum;
import org.openapis.openapi.models.shared.CreateCalendarEventRequestDataRelationships;
import org.openapis.openapi.models.shared.CreateCalendarEventRequestDataRelationshipsOwner;
import org.openapis.openapi.models.shared.Data;
import org.openapis.openapi.models.shared.TypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateCalendarEventRequest req = new CreateCalendarEventRequest(                new CreateCalendarEventRequestData(                new CreateCalendarEventRequestDataAttributes(                new org.openapis.openapi.models.shared.CreateCalendarEventRequestDataAttributesAttendees[]{{
                                                                add(new CreateCalendarEventRequestDataAttributesAttendees() {{
                                                                    responseStatus = CreateCalendarEventRequestDataAttributesAttendeesResponseStatusEnum.DECLINED;
                                                                    user = "aliquid";
                                                                }}),
                                                                add(new CreateCalendarEventRequestDataAttributesAttendees() {{
                                                                    responseStatus = CreateCalendarEventRequestDataAttributesAttendeesResponseStatusEnum.NEEDS_ACTION;
                                                                    user = "magnam";
                                                                }}),
                                                            }}, "2017-11-03T04:00:00.000Z", "ea", CreateCalendarEventRequestDataAttributesTypeEnum.OFFICE_VISIT) {{
                                                allDay = false;
                                                completedAt = "2017-11-03T06:17:34.652Z";
                                                completedBy = new java.util.HashMap<String, Object>() {{
                                                    put("recusandae", "aspernatur");
                                                }};
                                                description = "minima";
                                                endAt = "2017-11-03T08:00:00.000Z";
                                                location = "eaque";
                                                timeZone = "America/New_York";
                                            }};,                 new CreateCalendarEventRequestDataRelationships() {{
                                                owner = new CreateCalendarEventRequestDataRelationshipsOwner(                new Data() {{
                                                                    id = "fb008c42-e141-4aac-b66c-8dd6b1442907";
                                                                    type = "magnam";
                                                                }};);;
                                            }};, TypeEnum.CALENDAR_EVENT););            

            CreateCalendarEventResponse res = sdk.calendarEvent.createCalendarEvent(req);

            if (res.createCalendarEventResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCalendarEvent

Delete a calendar event by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCalendarEventRequest;
import org.openapis.openapi.models.operations.DeleteCalendarEventResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCalendarEventRequest req = new DeleteCalendarEventRequest("odio");            

            DeleteCalendarEventResponse res = sdk.calendarEvent.deleteCalendarEvent(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCalendarEvent

Get a calendar event by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCalendarEventRequest;
import org.openapis.openapi.models.operations.FetchCalendarEventResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCalendarEventRequest req = new FetchCalendarEventRequest("eius");            

            FetchCalendarEventResponse res = sdk.calendarEvent.fetchCalendarEvent(req);

            if (res.fetchCalendarEventResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCalendarEvents

Get a list of calendar events

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCalendarEventsFilterTypeEnum;
import org.openapis.openapi.models.operations.FetchCalendarEventsIncludeEnum;
import org.openapis.openapi.models.operations.FetchCalendarEventsRequest;
import org.openapis.openapi.models.operations.FetchCalendarEventsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCalendarEventsRequest req = new FetchCalendarEventsRequest() {{
                filterAttendees = "esse";
                filterCompleted = false;
                filterCompletedAt = "esse";
                filterCreatedAt = "rem";
                filterEndAt = "fuga";
                filterGroups = "reprehenderit";
                filterOrganization = "quidem";
                filterPatient = "fugiat";
                filterStartAt = "ut";
                filterType = FetchCalendarEventsFilterTypeEnum.TELEPHONE_CALL;
                filterUpdatedAt = "suscipit";
                include = FetchCalendarEventsIncludeEnum.OWNER;
                pageCursor = "assumenda";
                pageLimit = 181151L;
                pageNumber = 509342L;
                pageSize = 788546L;
            }};            

            FetchCalendarEventsResponse res = sdk.calendarEvent.fetchCalendarEvents(req);

            if (res.fetchCalendarEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCalendarEvent

Update a calendar event for a patient. Attribute `all_day` must be true and `end_at` cannot be specified for `plan-check-in` event type. To mark a calendar event as 'completed', set `completed_at` and `completed_by` to desired values.  To mark a completed calendar event as 'not completed', set `completed_at` and `completed_by` to `null`. Attendees can be added or removed, but response status cannot be updated. Use the calendar event response api for response status updates instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCalendarEventRequest;
import org.openapis.openapi.models.operations.UpdateCalendarEventResponse;
import org.openapis.openapi.models.shared.Attributes;
import org.openapis.openapi.models.shared.AttributesAttendees;
import org.openapis.openapi.models.shared.AttributesAttendeesResponseStatusEnum;
import org.openapis.openapi.models.shared.AttributesTypeEnum;
import org.openapis.openapi.models.shared.Data;
import org.openapis.openapi.models.shared.TypeEnum;
import org.openapis.openapi.models.shared.UpdateCalendarEventRequest;
import org.openapis.openapi.models.shared.UpdateCalendarEventRequestData;
import org.openapis.openapi.models.shared.UpdateCalendarEventRequestDataRelationships;
import org.openapis.openapi.models.shared.UpdateCalendarEventRequestDataRelationshipsOwner;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCalendarEventRequest req = new UpdateCalendarEventRequest(                new UpdateCalendarEventRequest() {{
                                data = new UpdateCalendarEventRequestData("veritatis", TypeEnum.CALENDAR_EVENT) {{
                                    attributes = new Attributes() {{
                                        allDay = false;
                                        attendees = new org.openapis.openapi.models.shared.AttributesAttendees[]{{
                                            add(new AttributesAttendees() {{
                                                responseStatus = AttributesAttendeesResponseStatusEnum.TENTATIVE;
                                                user = "quidem";
                                            }}),
                                        }};
                                        completedAt = "2017-11-03T06:17:34.652Z";
                                        completedBy = new java.util.HashMap<String, Object>() {{
                                            put("quo", "illum");
                                        }};
                                        description = "quo";
                                        endAt = "2017-11-03T08:00:00.000Z";
                                        location = "fuga";
                                        startAt = "2017-11-03T04:00:00.000Z";
                                        timeZone = "America/New_York";
                                        title = "Mrs.";
                                        type = AttributesTypeEnum.PLAN_CHECK_IN;
                                    }};;
                                    relationships = new UpdateCalendarEventRequestDataRelationships() {{
                                        owner = new UpdateCalendarEventRequestDataRelationshipsOwner() {{
                                            data = new Data() {{
                                                id = "51904e52-3c7e-40bc-b178-e4796f2a70c6";
                                                type = "quas";
                                            }};;
                                        }};;
                                    }};;
                                }};;
                            }};, "praesentium");            

            UpdateCalendarEventResponse res = sdk.calendarEvent.updateCalendarEvent(req);

            if (res.updateCalendarEventResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
