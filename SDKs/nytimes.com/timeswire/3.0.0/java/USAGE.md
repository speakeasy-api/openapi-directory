<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContentJsonRequest;
import org.openapis.openapi.models.operations.GetContentJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContentJsonRequest req = new GetContentJsonRequest("provident");            

            GetContentJsonResponse res = sdk.getContentJson(req);

            if (res.getContentJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->