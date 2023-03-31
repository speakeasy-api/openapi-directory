<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetClientClientIdPathParams;
import org.openapis.openapi.models.operations.GetClientClientIdRequest;
import org.openapis.openapi.models.operations.GetClientClientIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClientClientIdRequest req = new GetClientClientIdRequest() {{
                pathParams = new GetClientClientIdPathParams() {{
                    clientId = "corrupti";
                }};
            }};            

            GetClientClientIdResponse res = sdk.client.getClientClientId(req);

            if (res.getClientClientId200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->