<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClientClientIdRequest;
import org.openapis.openapi.models.operations.GetClientClientIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClientClientIdRequest req = new GetClientClientIdRequest("corrupti");            

            GetClientClientIdResponse res = sdk.client.getClientClientId(req);

            if (res.getClientClientId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->