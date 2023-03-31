<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAssetSecurity;
import org.openapis.openapi.models.operations.GetAssetPathParams;
import org.openapis.openapi.models.operations.GetAssetQueryParams;
import org.openapis.openapi.models.operations.GetAssetRequest;
import org.openapis.openapi.models.operations.GetAssetResponse;
import org.openapis.openapi.models.shared.SchemeApikey;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssetRequest req = new GetAssetRequest() {{
                security = new GetAssetSecurity() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new GetAssetPathParams() {{
                    assetId = "corrupti";
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