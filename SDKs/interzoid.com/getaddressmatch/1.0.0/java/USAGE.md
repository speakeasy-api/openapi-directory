<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetaddressmatchRequest;
import org.openapis.openapi.models.operations.GetaddressmatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetaddressmatchRequest req = new GetaddressmatchRequest("corrupti", "provident");            

            GetaddressmatchResponse res = sdk.streetAddressSimilarityKey.getaddressmatch(req);

            if (res.getaddressmatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->