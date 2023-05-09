<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccountConfigCreateAccountConfigRequest;
import org.openapis.openapi.models.operations.CreateAccountConfigResponse;
import org.openapis.openapi.models.operations.CreateAccountConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccountConfigCreateAccountConfigRequest req = new CreateAccountConfigCreateAccountConfigRequest("corrupti", "provident");            

            CreateAccountConfigResponse res = sdk.createAccountConfig(req, new CreateAccountConfigSecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1AccountConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->