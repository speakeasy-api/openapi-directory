<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateAccountSecurity;
import org.openapis.openapi.models.operations.CreateAccountCreateAccountRequest;
import org.openapis.openapi.models.operations.CreateAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccountCreateAccountRequest req = new CreateAccountCreateAccountRequest() {{
                friendlyName = "corrupti";
            }}            

            CreateAccountResponse res = sdk.createAccount(req, new CreateAccountSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.apiV2010Account.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->