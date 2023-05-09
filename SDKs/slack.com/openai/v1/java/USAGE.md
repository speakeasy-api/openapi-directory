<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AiAlphaSearchMessagesResponse;
import org.openapis.openapi.models.shared.SearchRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchRequest req = new SearchRequest("corrupti");            

            AiAlphaSearchMessagesResponse res = sdk.aiAlphaSearchMessages(req);

            if (res.aiAlphaSearchMessages200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->