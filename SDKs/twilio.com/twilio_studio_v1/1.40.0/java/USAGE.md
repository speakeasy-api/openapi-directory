<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateEngagementSecurity;
import org.openapis.openapi.models.operations.CreateEngagementCreateEngagementRequest;
import org.openapis.openapi.models.operations.CreateEngagementRequest;
import org.openapis.openapi.models.operations.CreateEngagementResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEngagementRequest req = new CreateEngagementRequest() {{
                flowSid = "corrupti";
                requestBody = new CreateEngagementCreateEngagementRequest() {{
                    from = "provident";
                    parameters = "distinctio";
                    to = "quibusdam";
                }};
            }}            

            CreateEngagementResponse res = sdk.createEngagement(req, new CreateEngagementSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.studioV1FlowEngagement.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->