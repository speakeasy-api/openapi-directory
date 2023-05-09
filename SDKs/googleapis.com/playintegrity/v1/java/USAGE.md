<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PlayintegrityDecodeIntegrityTokenRequest;
import org.openapis.openapi.models.operations.PlayintegrityDecodeIntegrityTokenResponse;
import org.openapis.openapi.models.operations.PlayintegrityDecodeIntegrityTokenSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DecodeIntegrityTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlayintegrityDecodeIntegrityTokenRequest req = new PlayintegrityDecodeIntegrityTokenRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                decodeIntegrityTokenRequest = new DecodeIntegrityTokenRequest() {{
                    integrityToken = "distinctio";
                }};;
                accessToken = "quibusdam";
                alt = AltEnum.MEDIA;
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }};            

            PlayintegrityDecodeIntegrityTokenResponse res = sdk.v1.playintegrityDecodeIntegrityToken(req, new PlayintegrityDecodeIntegrityTokenSecurity("iure", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.decodeIntegrityTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->