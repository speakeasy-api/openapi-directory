<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAssetSecurity;
import org.openapis.openapi.models.operations.GetAssetRequest;
import org.openapis.openapi.models.operations.GetAssetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAssetRequest req = new GetAssetRequest() {{
                aliases = false;
                assetId = "corrupti";
            }}            

            GetAssetResponse res = sdk.asset.getAsset(req, new GetAssetSecurity() {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.getAsset200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->