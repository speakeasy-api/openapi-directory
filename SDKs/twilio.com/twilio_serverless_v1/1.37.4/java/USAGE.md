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

            CreateAssetRequest req = new CreateAssetRequest() {{
                security = new CreateAssetSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateAssetPathParams() {{
                    serviceSid = "architecto";
                }};
                request = new CreateAssetCreateAssetRequest() {{
                    friendlyName = "voluptas";
                }};
            }};

            CreateAssetResponse res = sdk.createAsset(req);

            if (res.serverlessV1ServiceAsset.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->