<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.StsTokenQueryParams;
import org.openapis.openapi.models.operations.StsTokenRequest;
import org.openapis.openapi.models.operations.StsTokenResponse;
import org.openapis.openapi.models.shared.GoogleIdentityStsV1betaExchangeTokenRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StsTokenRequest req = new StsTokenRequest() {{
                queryParams = new StsTokenQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    prettyPrint = false;
                    quotaUser = "illum";
                    uploadType = "vel";
                    uploadProtocol = "error";
                }};
                request = new GoogleIdentityStsV1betaExchangeTokenRequest() {{
                    audience = "deserunt";
                    grantType = "suscipit";
                    options = "iure";
                    requestedTokenType = "magnam";
                    scope = "debitis";
                    subjectToken = "ipsa";
                    subjectTokenType = "delectus";
                }};
            }};            

            StsTokenResponse res = sdk.v1beta.stsToken(req);

            if (res.googleIdentityStsV1betaExchangeTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->