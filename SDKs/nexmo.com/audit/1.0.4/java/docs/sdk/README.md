# SDK

## Overview

The Vonage Audit API allows you to view details of changes to your account. More information is available at <https://developer.nexmo.com/audit/overview>.
_Please note that the Audit API is currently in Beta_


### Available Operations

* [getEvent](#getevent) - Retrieve individual audit event
* [getEvents](#getevents) - Retrieve audit events
* [getEventsOptions](#geteventsoptions) - Retrieve audit event types

## getEvent

Get the specified audit event.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventRequest;
import org.openapis.openapi.models.operations.GetEventResponse;
import org.openapis.openapi.models.operations.GetEventSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventRequest req = new GetEventRequest("quibusdam");            

            GetEventResponse res = sdk.sdk.getEvent(req, new GetEventSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.auditEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEvents

Get a series of audit events describing changes made to your Vonage API account over time.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsRequest;
import org.openapis.openapi.models.operations.GetEventsResponse;
import org.openapis.openapi.models.operations.GetEventsSecurity;
import org.openapis.openapi.models.shared.EventTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsRequest req = new GetEventsRequest() {{
                dateFrom = "corrupti";
                dateTo = "illum";
                eventType = EventTypesEnum.APP_CREATE;
                page = "vel";
                searchText = "error";
                size = 645894L;
            }};            

            GetEventsResponse res = sdk.sdk.getEvents(req, new GetEventsSecurity("suscipit", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.auditResp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventsOptions

Get audit event types.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsOptionsResponse;
import org.openapis.openapi.models.operations.GetEventsOptionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsOptionsResponse res = sdk.sdk.getEventsOptions(new GetEventsOptionsSecurity("magnam", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.auditEventTypesResp != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
