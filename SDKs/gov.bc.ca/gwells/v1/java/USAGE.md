<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AquiferCodesDemandListQueryParams;
import org.openapis.openapi.models.operations.AquiferCodesDemandListRequest;
import org.openapis.openapi.models.operations.AquiferCodesDemandListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = new SchemeBearer() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AquiferCodesDemandListRequest req = new AquiferCodesDemandListRequest() {{
                queryParams = new AquiferCodesDemandListQueryParams() {{
                    limit = 548814;
                    offset = 592845;
                }};
            }};            

            AquiferCodesDemandListResponse res = sdk.aquiferCodes.aquiferCodesDemandList(req);

            if (res.aquiferCodesDemandList200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->