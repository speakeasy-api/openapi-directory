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

            ClearUserSessionsRequest req = new ClearUserSessionsRequest() {{
                pathParams = new ClearUserSessionsPathParams() {{
                    userId = "sit";
                }};
                request = "voluptas".getBytes();
            }};

            ClearUserSessionsResponse res = sdk.clearUserSessions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->