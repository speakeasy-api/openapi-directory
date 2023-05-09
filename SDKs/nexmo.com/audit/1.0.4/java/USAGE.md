<!-- Start SDK Example Usage -->
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

            GetEventRequest req = new GetEventRequest("corrupti");            

            GetEventResponse res = sdk.getEvent(req, new GetEventSecurity("provident", "distinctio") {{
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
<!-- End SDK Example Usage -->