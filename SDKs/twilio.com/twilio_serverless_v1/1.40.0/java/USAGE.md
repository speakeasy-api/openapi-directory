<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateAssetSecurity;
import org.openapis.openapi.models.operations.CreateAssetPathParams;
import org.openapis.openapi.models.operations.CreateAssetCreateAssetRequest;
import org.openapis.openapi.models.operations.CreateAssetRequest;
import org.openapis.openapi.models.operations.CreateAssetResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAssetRequest req = new CreateAssetRequest() {{
                security = new CreateAssetSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateAssetPathParams() {{
                    serviceSid = "corrupti";
                }};
                request = new CreateAssetCreateAssetRequest() {{
                    friendlyName = "provident";
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