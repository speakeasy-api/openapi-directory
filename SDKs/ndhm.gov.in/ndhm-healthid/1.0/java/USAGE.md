<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTSecurity;
import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTHeaders;
import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTRequest;
import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTResponse;
import org.openapis.openapi.models.shared.AuthWithPasswordRequest;
import org.openapis.openapi.models.shared.SchemeAuthorization;
import org.openapis.openapi.models.shared.SchemeXHipID;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthAccountPasswordRequestUsingPOSTRequest req = new AuthAccountPasswordRequestUsingPOSTRequest() {{
                security = new AuthAccountPasswordRequestUsingPOSTSecurity() {{
                    authorization = new SchemeAuthorization() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                headers = new AuthAccountPasswordRequestUsingPOSTHeaders() {{
                    acceptLanguage = "corrupti";
                }};
                request = new AuthWithPasswordRequest() {{
                    password = "provident";
                    txnId = "bd9d8d69-a674-4e0f-867c-c8796ed151a0";
                }};
            }};            

            AuthAccountPasswordRequestUsingPOSTResponse res = sdk.authentication.authAccountPasswordRequestUsingPOST(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->