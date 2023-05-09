<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Oauth2TokeninfoRequest;
import org.openapis.openapi.models.operations.Oauth2TokeninfoResponse;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Oauth2TokeninfoRequest req = new Oauth2TokeninfoRequest() {{
                accessToken = "corrupti";
                alt = AltEnum.JSON;
                fields = "provident";
                idToken = "distinctio";
                key = "quibusdam";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "nulla";
                userIp = "corrupti";
            }};            

            Oauth2TokeninfoResponse res = sdk.oauth2Tokeninfo(req);

            if (res.tokeninfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->