<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.LatestPackageSecurity;
import org.openapis.openapi.models.operations.LatestPackageRequest;
import org.openapis.openapi.models.operations.LatestPackageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LatestPackageRequest req = new LatestPackageRequest() {{
                packageName = "corrupti";
            }}            

            LatestPackageResponse res = sdk.latestPackage(req, new LatestPackageSecurity() {{
                rhIdentity = "YOUR_API_KEY_HERE";
            }});

            if (res.controllersPackageDetailResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->