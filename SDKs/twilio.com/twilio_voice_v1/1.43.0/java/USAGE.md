<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequest;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkResponse;
import org.openapis.openapi.models.operations.CreateByocTrunkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateByocTrunkCreateByocTrunkRequest req = new CreateByocTrunkCreateByocTrunkRequest() {{
                cnamLookupEnabled = false;
                connectionPolicySid = "corrupti";
                friendlyName = "provident";
                fromDomainSid = "distinctio";
                statusCallbackMethod = CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum.DELETE;
                statusCallbackUrl = "https://tidy-mascara.org";
                voiceFallbackMethod = CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum.POST;
                voiceFallbackUrl = "https://present-giggle.info";
                voiceMethod = CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum.GET;
                voiceUrl = "https://awesome-voter.biz";
            }};            

            CreateByocTrunkResponse res = sdk.createByocTrunk(req, new CreateByocTrunkSecurity("suscipit", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1ByocTrunk != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->