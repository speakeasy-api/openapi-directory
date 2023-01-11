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

            CreateAlphaSenderRequest req = new CreateAlphaSenderRequest() {{
                security = new CreateAlphaSenderSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateAlphaSenderPathParams() {{
                    serviceSid = "sit";
                }};
                request = new CreateAlphaSenderCreateAlphaSenderRequest() {{
                    alphaSender = "voluptas";
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