<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CollectNowPathParams;
import org.openapis.openapi.models.operations.CollectNowQueryParams;
import org.openapis.openapi.models.operations.CollectNowRequest;
import org.openapis.openapi.models.operations.CollectNowResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectNowRequest req = new CollectNowRequest() {{
                pathParams = new CollectNowPathParams() {{
                    deviceId = 548814;
                }};
                queryParams = new CollectNowQueryParams() {{
                    monitorClass = "provident";
                }};
            }};            

            CollectNowResponse res = sdk.actions.collectNow(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->