# calendarEventResponse

## Overview

A calendar event response indicates the attendee's response to a calendar event.  Only `POST` for creation is allowed as the responses are updated into the corresponding calendar events.

### Available Operations

* [createCalendarEventResponse](#createcalendareventresponse) - Create calendar event response

## createCalendarEventResponse

Create a calendar event response for an attendee of a calendar event, the attendee can be a coach or patient.  Calendar event responses cannot be fetched, updated nor deleted.  Use calendar event api to fetch the response status for attendees.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCalendarEventResponseResponse;
import org.openapis.openapi.models.shared.CreateCalendarEventResponseRequest;
import org.openapis.openapi.models.shared.CreateCalendarEventResponseRequestData;
import org.openapis.openapi.models.shared.CreateCalendarEventResponseRequestDataAttributes;
import org.openapis.openapi.models.shared.CreateCalendarEventResponseRequestDataAttributesResponseStatusEnum;
import org.openapis.openapi.models.shared.CreateCalendarEventResponseRequestDataRelationships;
import org.openapis.openapi.models.shared.CreateCalendarEventResponseRequestDataRelationshipsCalendarEvent;
import org.openapis.openapi.models.shared.CreateCalendarEventResponseRequestDataRelationshipsUser;
import org.openapis.openapi.models.shared.Data;
import org.openapis.openapi.models.shared.TypeEnum1;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateCalendarEventResponseRequest req = new CreateCalendarEventResponseRequest(                new CreateCalendarEventResponseRequestData(                new CreateCalendarEventResponseRequestDataAttributes(                new java.util.HashMap<String, Object>() {{
                                                                put("deleniti", "fugit");
                                                            }}, CreateCalendarEventResponseRequestDataAttributesResponseStatusEnum.TENTATIVE);,                 new CreateCalendarEventResponseRequestDataRelationships() {{
                                                calendarEvent = new CreateCalendarEventResponseRequestDataRelationshipsCalendarEvent(                new Data() {{
                                                                    id = "a482562f-222e-4981-bee1-7cbe61e6b7b9";
                                                                    type = "minima";
                                                                }};);;
                                                user = new CreateCalendarEventResponseRequestDataRelationshipsUser(                new Data() {{
                                                                    id = "bc0ab3c2-0c4f-4378-9fd8-71f99dd2efd1";
                                                                    type = "consequuntur";
                                                                }};);;
                                            }};, TypeEnum1.CALENDAR_EVENT_RESPONSE););            

            CreateCalendarEventResponseResponse res = sdk.calendarEventResponse.createCalendarEventResponse(req);

            if (res.createCalendarEventResponseRequest != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
