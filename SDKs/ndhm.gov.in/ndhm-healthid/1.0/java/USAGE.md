<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTRequest;
import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTResponse;
import org.openapis.openapi.models.operations.AuthAccountPasswordRequestUsingPOSTSecurity;
import org.openapis.openapi.models.shared.AuthWithPasswordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuthAccountPasswordRequestUsingPOSTRequest req = new AuthAccountPasswordRequestUsingPOSTRequest(                new AuthWithPasswordRequest("corrupti", "9bd9d8d6-9a67-44e0-b467-cc8796ed151a");) {{
                acceptLanguage = "perferendis";
            }};            

            AuthAccountPasswordRequestUsingPOSTResponse res = sdk.authentication.authAccountPasswordRequestUsingPOST(req, new AuthAccountPasswordRequestUsingPOSTSecurity() {{
                authorization = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->