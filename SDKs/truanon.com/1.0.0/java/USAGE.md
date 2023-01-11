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

            GetProfileRequest req = new GetProfileRequest() {{
                queryParams = new GetProfileQueryParams() {{
                    id = "ut";
                    service = "non";
                }};
            }};

            GetProfileResponse res = sdk.getProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->