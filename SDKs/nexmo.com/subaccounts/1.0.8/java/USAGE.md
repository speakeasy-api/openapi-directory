<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateSubAccountSecurity;
import org.openapis.openapi.models.operations.CreateSubAccountPathParams;
import org.openapis.openapi.models.operations.CreateSubAccountRequest;
import org.openapis.openapi.models.operations.CreateSubAccountResponse;
import org.openapis.openapi.models.shared.NewSubaccountRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSubAccountRequest req = new CreateSubAccountRequest() {{
                security = new CreateSubAccountSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateSubAccountPathParams() {{
                    apiKey = "corrupti";
                }};
                request = new NewSubaccountRequest() {{
                    name = "Subaccount department A";
                    secret = "Password123";
                    usePrimaryAccountBalance = false;
                }};
            }};            

            CreateSubAccountResponse res = sdk.subaccountManagement.createSubAccount(req);

            if (res.subaccountCreateResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->