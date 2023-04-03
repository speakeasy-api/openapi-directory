<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetProductInfoRequest;
import org.openapis.openapi.models.operations.GetProductInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProductInfoRequest req = new GetProductInfoRequest() {{
                code = "corrupti";
            }}            

            GetProductInfoResponse res = sdk.product.getProductInfo(req);

            if (res.getProductInfo200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->