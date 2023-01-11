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

            CreateSubAccountRequest req = new CreateSubAccountRequest() {{
                security = new CreateSubAccountSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateSubAccountPathParams() {{
                    apiKey = "ullam";
                }};
                request = new NewSubaccountRequest() {{
                    name = "accusantium";
                    secret = "libero";
                    usePrimaryAccountBalance = true;
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