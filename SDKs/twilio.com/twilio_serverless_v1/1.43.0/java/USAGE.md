<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAssetCreateAssetRequest;
import org.openapis.openapi.models.operations.CreateAssetRequest;
import org.openapis.openapi.models.operations.CreateAssetResponse;
import org.openapis.openapi.models.operations.CreateAssetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAssetRequest req = new CreateAssetRequest("corrupti") {{
                requestBody = new CreateAssetCreateAssetRequest("provident");;
            }};            

            CreateAssetResponse res = sdk.createAsset(req, new CreateAssetSecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.serverlessV1ServiceAsset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->