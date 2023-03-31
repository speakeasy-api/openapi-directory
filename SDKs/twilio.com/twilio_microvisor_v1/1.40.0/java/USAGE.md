<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateAccountConfigSecurity;
import org.openapis.openapi.models.operations.CreateAccountConfigCreateAccountConfigRequest;
import org.openapis.openapi.models.operations.CreateAccountConfigRequest;
import org.openapis.openapi.models.operations.CreateAccountConfigResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccountConfigRequest req = new CreateAccountConfigRequest() {{
                security = new CreateAccountConfigSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateAccountConfigCreateAccountConfigRequest() {{
                    key = "corrupti";
                    value = "provident";
                }};
            }};            

            CreateAccountConfigResponse res = sdk.createAccountConfig(req);

            if (res.microvisorV1AccountConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->