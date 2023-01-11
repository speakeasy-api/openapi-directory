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

            CollectNowRequest req = new CollectNowRequest() {{
                pathParams = new CollectNowPathParams() {{
                    deviceId = 4671696214766305422;
                }};
                queryParams = new CollectNowQueryParams() {{
                    monitorClass = "laborum";
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