# event

## Overview

Events are actions that occur within a conversation. Examples of this includes: Text events from members, or invite events from users

### Available Operations

* [createEvent](#createevent) - Create an event
* [deleteEvent](#deleteevent) - Delete an event
* [getEvent](#getevent) - Retrieve an event
* [~~getEvents~~](#getevents) - List events :warning: **Deprecated**

## createEvent

Create an event

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEventRequest;
import org.openapis.openapi.models.operations.CreateEventRequestBody;
import org.openapis.openapi.models.operations.CreateEventResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            CreateEventRequest req = new CreateEventRequest("suscipit") {{
                requestBody = new CreateEventRequestBody("MEM-63f61863-4a51-4f6b-86e1-46edebio0391", "text") {{
                    body = new java.util.HashMap<String, Object>() {{
                        put("minus", "placeat");
                        put("voluptatum", "iusto");
                    }};
                    to = "MEM-63f61863-4a51-4f6b-86e1-46edebio0391";
                }};;
            }};            

            CreateEventResponse res = sdk.event.createEvent(req);

            if (res.createEvent201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEvent

Delete an event

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEventRequest;
import org.openapis.openapi.models.operations.DeleteEventResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteEventRequest req = new DeleteEventRequest("nisi", "recusandae");            

            DeleteEventResponse res = sdk.event.deleteEvent(req);

            if (res.deleteEvent200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEvent

Retrieve an event

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventRequest;
import org.openapis.openapi.models.operations.GetEventResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetEventRequest req = new GetEventRequest("ab", "quis");            

            GetEventResponse res = sdk.event.getEvent(req);

            if (res.eventRetrieved != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getEvents~~

This endpoint is **DEPRECATED**. Please use [/v0.2/events](/api/conversation.v2#get-events).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsRequest;
import org.openapis.openapi.models.operations.GetEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetEventsRequest req = new GetEventsRequest("deserunt");            

            GetEventsResponse res = sdk.event.getEvents(req);

            if (res.eventRetrieveds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
