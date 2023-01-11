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

            LatestPackageRequest req = new LatestPackageRequest() {{
                security = new LatestPackageSecurity() {{
                    rhIdentity = new SchemeRhIdentity() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new LatestPackagePathParams() {{
                    packageName = "sit";
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