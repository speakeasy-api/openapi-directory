# events

## Overview

Endpoints for listing events.

### Available Operations

* [getEvents](#getevents) - Get events
* [~~trackJourneyEvent~~](#trackjourneyevent) - Track event :warning: **Deprecated**

## getEvents

Endpoint to list events.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsResponse res = sdk.events.getEvents();

            if (res.getEvents200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~trackJourneyEvent~~

Endpoint used to track an event for a user or an account.

This endpoint is moved to [Track](#operation/trackEvent).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrackJourneyEventRequestBody;
import org.openapis.openapi.models.operations.TrackJourneyEventRequestBodyIdentification;
import org.openapis.openapi.models.operations.TrackJourneyEventRequestBodyIdentificationAccount;
import org.openapis.openapi.models.operations.TrackJourneyEventRequestBodyIdentificationUser;
import org.openapis.openapi.models.operations.TrackJourneyEventResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TrackJourneyEventRequestBody req = new TrackJourneyEventRequestBody(                new TrackJourneyEventRequestBodyIdentification() {{
                                account = new TrackJourneyEventRequestBodyIdentificationAccount() {{
                                    accountId = "ipsam";
                                    domain = "id";
                                }};;
                                user = new TrackJourneyEventRequestBodyIdentificationUser() {{
                                    email = "Adrain_Boyer@hotmail.com";
                                    userId = "laborum";
                                }};;
                            }};, "quasi") {{
                metadata = new java.util.HashMap<String, Object>() {{
                    put("voluptatibus", "vero");
                    put("nihil", "praesentium");
                    put("voluptatibus", "ipsa");
                    put("omnis", "voluptate");
                }};
                triggeredAt = "cum";
            }};            

            TrackJourneyEventResponse res = sdk.events.trackJourneyEvent(req);

            if (res.trackJourneyEvent201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
