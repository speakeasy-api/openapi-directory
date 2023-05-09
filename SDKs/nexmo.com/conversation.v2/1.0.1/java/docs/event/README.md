# event

## Overview

Events are actions that occur within a conversation. Examples of this includes: Text events from members, or invite events from users

### Available Operations

* [getEvents](#getevents) - List Events

## getEvents

List Events

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsRequest;
import org.openapis.openapi.models.operations.GetEventsResponse;
import org.openapis.openapi.models.shared.OrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsRequest req = new GetEventsRequest("suscipit") {{
                cursor = "iure";
                endId = "magnam";
                eventType = "debitis";
                order = OrderEnum.ASC;
                pageSize = 963663L;
                startId = "tempora";
            }};            

            GetEventsResponse res = sdk.event.getEvents(req);

            if (res.getEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
