# eventNotification

### Available Operations

* [createEventNotification](#createeventnotification) - Send an event notification

## createEventNotification

Send an event notification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEventNotificationRequest;
import org.openapis.openapi.models.operations.CreateEventNotificationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEventNotificationRequest req = new CreateEventNotificationRequest("quibusdam", "unde") {{
                xFapiInteractionId = "nulla";
            }};            

            CreateEventNotificationResponse res = sdk.eventNotification.createEventNotification(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
