<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.StsIntrospectRequest;
import org.openapis.openapi.models.operations.StsIntrospectResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIdentityStsV1IntrospectTokenRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StsIntrospectRequest req = new StsIntrospectRequest() {{
                dollarXgafv = "2";
                googleIdentityStsV1IntrospectTokenRequest = new GoogleIdentityStsV1IntrospectTokenRequest() {{
                    token = "provident";
                    tokenTypeHint = "distinctio";
                }};
                accessToken = "quibusdam";
                alt = "media";
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }}            

            StsIntrospectResponse res = sdk.v1.stsIntrospect(req);

            if (res.googleIdentityStsV1IntrospectTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->