<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEsimProfileCreateEsimProfileRequest;
import org.openapis.openapi.models.operations.CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateEsimProfileResponse;
import org.openapis.openapi.models.operations.CreateEsimProfileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateEsimProfileCreateEsimProfileRequest req = new CreateEsimProfileCreateEsimProfileRequest() {{
                callbackMethod = CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum.PATCH;
                callbackUrl = "provident";
                eid = "distinctio";
                generateMatchingId = false;
            }};            

            CreateEsimProfileResponse res = sdk.createEsimProfile(req, new CreateEsimProfileSecurity("quibusdam", "unde") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.supersimV1EsimProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->