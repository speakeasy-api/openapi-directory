<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangePasswordRequest;
import org.openapis.openapi.models.operations.ChangePasswordResponse;
import org.openapis.openapi.models.shared.Secret;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangePasswordRequest req = new ChangePasswordRequest(                new Secret() {{
                                secret = "P@55w0rd+";
                            }};, "corrupti");            

            ChangePasswordResponse res = sdk.v1.changePassword(req);

            if (res.shopperId != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->