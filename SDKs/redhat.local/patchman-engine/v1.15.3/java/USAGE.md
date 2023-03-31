<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.LatestPackageSecurity;
import org.openapis.openapi.models.operations.LatestPackagePathParams;
import org.openapis.openapi.models.operations.LatestPackageRequest;
import org.openapis.openapi.models.operations.LatestPackageResponse;
import org.openapis.openapi.models.shared.SchemeRhIdentity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LatestPackageRequest req = new LatestPackageRequest() {{
                security = new LatestPackageSecurity() {{
                    rhIdentity = new SchemeRhIdentity() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new LatestPackagePathParams() {{
                    packageName = "corrupti";
                }};
            }};            

            LatestPackageResponse res = sdk.latestPackage(req);

            if (res.controllersPackageDetailResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->