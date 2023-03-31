<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateByocTrunkSecurity;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequest;
import org.openapis.openapi.models.operations.CreateByocTrunkRequest;
import org.openapis.openapi.models.operations.CreateByocTrunkResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateByocTrunkRequest req = new CreateByocTrunkRequest() {{
                security = new CreateByocTrunkSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateByocTrunkCreateByocTrunkRequest() {{
                    cnamLookupEnabled = false;
                    connectionPolicySid = "corrupti";
                    friendlyName = "provident";
                    fromDomainSid = "distinctio";
                    statusCallbackMethod = "DELETE";
                    statusCallbackUrl = "https://tidy-mascara.org";
                    voiceFallbackMethod = "POST";
                    voiceFallbackUrl = "https://present-giggle.info";
                    voiceMethod = "GET";
                    voiceUrl = "https://awesome-voter.biz";
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