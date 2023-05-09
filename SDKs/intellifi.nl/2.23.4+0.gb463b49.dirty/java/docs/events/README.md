# events

## Overview

The `events` resource temporarily holds Brain events that match an event subscription in the `subscriptions` resource.
The subscription determines how long the events are held.

See also the `subscriptions` resource.


<https://intellifi.zendesk.com/hc/en-us/sections/360001588534>
### Available Operations

* [getEventById](#geteventbyid) - Get event
* [getEvents](#getevents) - Get all events

## getEventById

Get event

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventByIdRequest;
import org.openapis.openapi.models.operations.GetEventByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEventByIdRequest req = new GetEventByIdRequest("recusandae");            

            GetEventByIdResponse res = sdk.events.getEventById(req);

            if (res.event != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEvents

Get all events

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsRequest;
import org.openapis.openapi.models.operations.GetEventsResponse;
import org.openapis.openapi.models.shared.EventTopicActionEnum;
import org.openapis.openapi.models.shared.EventTopicResourceTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    cookieSid = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEventsRequest req = new GetEventsRequest() {{
                after = OffsetDateTime.parse("2022-10-15T05:10:19.629Z");
                afterId = "quis";
                before = "veritatis";
                beforeId = "deserunt";
                from = "perferendis";
                fromId = "ipsam";
                id = "5b7d6cbd7503c445552a1664";
                idOnly = false;
                limit = 832620L;
                populate = "sapiente";
                resultsOnly = false;
                sort = "quo";
                timeCreated = "2018-08-30T09:51:59.737Z";
                timeEvent = "2018-08-30T09:51:59.737Z";
                timeExpire = "2018-08-30T09:51:59.737Z";
                timeoutS = 1403.5;
                topicAction = EventTopicActionEnum.CREATED;
                topicResource = "5b7d6cbd7503c445552a1664";
                topicResourceType = EventTopicResourceTypeEnum.ITEMS;
                until = "at";
                untilId = "at";
            }};            

            GetEventsResponse res = sdk.events.getEvents(req);

            if (res.getEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
