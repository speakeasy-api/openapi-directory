# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [fetchAlert](#fetchalert)
* [fetchEvent](#fetchevent)
* [listAlert](#listalert)
* [listEvent](#listevent) - Returns a list of events in the account, sorted by event-date.

## fetchAlert

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAlertRequest;
import org.openapis.openapi.models.operations.FetchAlertResponse;
import org.openapis.openapi.models.operations.FetchAlertSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAlertRequest req = new FetchAlertRequest("quibusdam");            

            FetchAlertResponse res = sdk.sdk.fetchAlert(req, new FetchAlertSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.monitorV1AlertInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchEvent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchEventRequest;
import org.openapis.openapi.models.operations.FetchEventResponse;
import org.openapis.openapi.models.operations.FetchEventSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchEventRequest req = new FetchEventRequest("corrupti");            

            FetchEventResponse res = sdk.sdk.fetchEvent(req, new FetchEventSecurity("illum", "vel") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.monitorV1Event != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAlert

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAlertRequest;
import org.openapis.openapi.models.operations.ListAlertResponse;
import org.openapis.openapi.models.operations.ListAlertSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAlertRequest req = new ListAlertRequest() {{
                endDate = OffsetDateTime.parse("2021-09-16T11:56:06.019Z");
                logLevel = "suscipit";
                page = 437587L;
                pageSize = 297534L;
                pageToken = "debitis";
                startDate = OffsetDateTime.parse("2022-01-14T06:18:51.036Z");
            }};            

            ListAlertResponse res = sdk.sdk.listAlert(req, new ListAlertSecurity("tempora", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listAlertResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEvent

Returns a list of events in the account, sorted by event-date.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventRequest;
import org.openapis.openapi.models.operations.ListEventResponse;
import org.openapis.openapi.models.operations.ListEventSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEventRequest req = new ListEventRequest() {{
                actorSid = "molestiae";
                endDate = OffsetDateTime.parse("2020-07-25T16:12:20.938Z");
                eventType = "voluptatum";
                page = 479977L;
                pageSize = 568045L;
                pageToken = "nisi";
                resourceSid = "recusandae";
                sourceIpAddress = "temporibus";
                startDate = OffsetDateTime.parse("2022-08-30T20:24:33.984Z");
            }};            

            ListEventResponse res = sdk.sdk.listEvent(req, new ListEventSecurity("veritatis", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listEventResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
