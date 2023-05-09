<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllTransfersRequest;
import org.openapis.openapi.models.operations.GetAllTransfersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllTransfersRequest req = new GetAllTransfersRequest() {{
                id = "111";
                limit = "10";
                offset = "0";
                order = "ASC";
                status = "CREATED";
            }};            

            GetAllTransfersResponse res = sdk.billingSubPartnerAPI.getAllTransfers(req);

            if (res.getAllTransfers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->