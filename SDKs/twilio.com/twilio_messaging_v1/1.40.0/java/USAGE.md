<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateAlphaSenderSecurity;
import org.openapis.openapi.models.operations.CreateAlphaSenderPathParams;
import org.openapis.openapi.models.operations.CreateAlphaSenderCreateAlphaSenderRequest;
import org.openapis.openapi.models.operations.CreateAlphaSenderRequest;
import org.openapis.openapi.models.operations.CreateAlphaSenderResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAlphaSenderRequest req = new CreateAlphaSenderRequest() {{
                security = new CreateAlphaSenderSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateAlphaSenderPathParams() {{
                    serviceSid = "corrupti";
                }};
                request = new CreateAlphaSenderCreateAlphaSenderRequest() {{
                    alphaSender = "provident";
                }};
            }};            

            CreateAlphaSenderResponse res = sdk.createAlphaSender(req);

            if (res.messagingV1ServiceAlphaSender.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->