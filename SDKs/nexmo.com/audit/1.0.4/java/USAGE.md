<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetEventSecurity;
import org.openapis.openapi.models.operations.GetEventPathParams;
import org.openapis.openapi.models.operations.GetEventRequest;
import org.openapis.openapi.models.operations.GetEventResponse;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventRequest req = new GetEventRequest() {{
                security = new GetEventSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new GetEventPathParams() {{
                    id = "corrupti";
                }};
            }};            

            GetEventResponse res = sdk.getEvent(req);

            if (res.auditEvent.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->