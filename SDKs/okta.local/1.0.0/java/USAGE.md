<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ClearUserSessionsRequest;
import org.openapis.openapi.models.operations.ClearUserSessionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClearUserSessionsRequest req = new ClearUserSessionsRequest() {{
                requestBody = "corrupti".getBytes();
                userId = "provident";
            }}            

            ClearUserSessionsResponse res = sdk.clearUserSessions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->