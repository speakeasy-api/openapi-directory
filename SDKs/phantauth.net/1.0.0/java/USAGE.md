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

            GetClientClientIdRequest req = new GetClientClientIdRequest() {{
                pathParams = new GetClientClientIdPathParams() {{
                    clientId = "sit";
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