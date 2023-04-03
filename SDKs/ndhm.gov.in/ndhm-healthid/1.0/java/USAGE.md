<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTSecurity;
import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTRequest;
import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTResponse;
import org.openapis.openapi.models.shared.AuthWithPasswordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthAccountPasswordRequestUsingPOSTRequest req = new AuthAccountPasswordRequestUsingPOSTRequest() {{
                acceptLanguage = "corrupti";
                authWithPasswordRequest = new AuthWithPasswordRequest() {{
                    password = "provident";
                    txnId = "bd9d8d69-a674-4e0f-867c-c8796ed151a0";
                }};
            }}            

            AuthAccountPasswordRequestUsingPOSTResponse res = sdk.authentication.authAccountPasswordRequestUsingPOST(req, new AuthAccountPasswordRequestUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->