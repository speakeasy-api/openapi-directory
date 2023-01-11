<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetEventRequest req = new GetEventRequest() {{
                security = new GetEventSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new GetEventPathParams() {{
                    id = "mollitia";
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