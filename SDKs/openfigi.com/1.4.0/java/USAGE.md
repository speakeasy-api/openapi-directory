<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMappingValuesKeyKeyEnum;
import org.openapis.openapi.models.operations.GetMappingValuesKeyRequest;
import org.openapis.openapi.models.operations.GetMappingValuesKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMappingValuesKeyRequest req = new GetMappingValuesKeyRequest(GetMappingValuesKeyKeyEnum.CURRENCY);            

            GetMappingValuesKeyResponse res = sdk.getMappingValuesKey(req);

            if (res.getMappingValuesKey200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->