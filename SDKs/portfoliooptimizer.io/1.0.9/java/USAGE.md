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
                    apiKeyAuth = new SchemeApiKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            PostAssetsCorrelationMatrixRequest req = new PostAssetsCorrelationMatrixRequest() {{
                request = "sit";
            }};

            PostAssetsCorrelationMatrixResponse res = sdk.assetsCorrelationMatrix.postAssetsCorrelationMatrix(req);

            if (res.postAssetsCorrelationMatrix200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->