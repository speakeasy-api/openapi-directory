<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StsTokenRequest;
import org.openapis.openapi.models.operations.StsTokenResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIdentityStsV1betaExchangeTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StsTokenRequest req = new StsTokenRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleIdentityStsV1betaExchangeTokenRequest = new GoogleIdentityStsV1betaExchangeTokenRequest() {{
                    audience = "provident";
                    grantType = "distinctio";
                    options = "quibusdam";
                    requestedTokenType = "unde";
                    scope = "nulla";
                    subjectToken = "corrupti";
                    subjectTokenType = "illum";
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "ipsa";
                uploadProtocol = "delectus";
            }};            

            StsTokenResponse res = sdk.v1beta.stsToken(req);

            if (res.googleIdentityStsV1betaExchangeTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->