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

            CreateEsimProfileRequest req = new CreateEsimProfileRequest() {{
                security = new CreateEsimProfileSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateEsimProfileCreateEsimProfileRequest() {{
                    callbackMethod = "POST";
                    callbackUrl = "quas";
                    eid = "nesciunt";
                }};
            }};

            CreateEsimProfileResponse res = sdk.createEsimProfile(req);

            if (res.supersimV1EsimProfile.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->