<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCriticsResourceTypeJsonRequest;
import org.openapis.openapi.models.operations.GetCriticsResourceTypeJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCriticsResourceTypeJsonRequest req = new GetCriticsResourceTypeJsonRequest("provident");            

            GetCriticsResourceTypeJsonResponse res = sdk.getCriticsResourceTypeJson(req);

            if (res.getCriticsResourceTypeJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->