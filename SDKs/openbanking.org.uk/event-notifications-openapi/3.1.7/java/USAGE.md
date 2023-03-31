<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateEventNotificationHeaders;
import org.openapis.openapi.models.operations.CreateEventNotificationRequest;
import org.openapis.openapi.models.operations.CreateEventNotificationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEventNotificationRequest req = new CreateEventNotificationRequest() {{
                headers = new CreateEventNotificationHeaders() {{
                    xFapiFinancialId = "corrupti";
                    xFapiInteractionId = "provident";
                }};
                request = "distinctio";
            }};            

            CreateEventNotificationResponse res = sdk.eventNotification.createEventNotification(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->