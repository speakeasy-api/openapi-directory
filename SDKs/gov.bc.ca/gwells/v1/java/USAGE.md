<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    bearer = new SchemeBearer() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AquiferCodesDemandListRequest req = new AquiferCodesDemandListRequest() {{
                queryParams = new AquiferCodesDemandListQueryParams() {{
                    limit = 8717895732742165505;
                    offset = 2259404117704393152;
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