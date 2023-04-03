<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateSubAccountSecurity;
import org.openapis.openapi.models.operations.CreateSubAccountRequest;
import org.openapis.openapi.models.operations.CreateSubAccountResponse;
import org.openapis.openapi.models.shared.NewSubaccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSubAccountRequest req = new CreateSubAccountRequest() {{
                newSubaccountRequest = new NewSubaccountRequest() {{
                    name = "Subaccount department A";
                    secret = "Password123";
                    usePrimaryAccountBalance = false;
                }};
                apiKey = "corrupti";
            }}            

            CreateSubAccountResponse res = sdk.subaccountManagement.createSubAccount(req, new CreateSubAccountSecurity() {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.subaccountCreateResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->