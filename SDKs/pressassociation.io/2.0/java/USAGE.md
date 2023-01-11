<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetAssetRequest req = new GetAssetRequest() {{
                security = new GetAssetSecurity() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new GetAssetPathParams() {{
                    assetId = "sit";
                }};
                queryParams = new GetAssetQueryParams() {{
                    aliases = false;
                }};
            }};

            GetAssetResponse res = sdk.asset.getAsset(req);

            if (res.getAsset200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->