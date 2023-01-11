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

            CreateByocTrunkRequest req = new CreateByocTrunkRequest() {{
                security = new CreateByocTrunkSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateByocTrunkCreateByocTrunkRequest() {{
                    cnamLookupEnabled = false;
                    connectionPolicySid = "voluptas";
                    friendlyName = "culpa";
                    fromDomainSid = "expedita";
                    statusCallbackMethod = "DELETE";
                    statusCallbackUrl = "dolor";
                    voiceFallbackMethod = "GET";
                    voiceFallbackUrl = "voluptas";
                    voiceMethod = "HEAD";
                    voiceUrl = "et";
                }};
            }};

            CreateByocTrunkResponse res = sdk.createByocTrunk(req);

            if (res.voiceV1ByocTrunk.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->