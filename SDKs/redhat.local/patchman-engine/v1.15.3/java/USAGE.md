<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LatestPackageRequest;
import org.openapis.openapi.models.operations.LatestPackageResponse;
import org.openapis.openapi.models.operations.LatestPackageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LatestPackageRequest req = new LatestPackageRequest("corrupti");            

            LatestPackageResponse res = sdk.latestPackage(req, new LatestPackageSecurity("provident") {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersPackageDetailResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->