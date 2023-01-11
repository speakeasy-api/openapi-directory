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

            ChangePasswordRequest req = new ChangePasswordRequest() {{
                pathParams = new ChangePasswordPathParams() {{
                    shopperId = "sit";
                }};
                request = "voluptas";
            }};

            ChangePasswordResponse res = sdk.v1.changePassword(req);

            if (res.shopperId.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->