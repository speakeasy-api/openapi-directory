<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PlayintegrityDecodeIntegrityTokenSecurity;
import org.openapis.openapi.models.operations.PlayintegrityDecodeIntegrityTokenPathParams;
import org.openapis.openapi.models.operations.PlayintegrityDecodeIntegrityTokenQueryParams;
import org.openapis.openapi.models.operations.PlayintegrityDecodeIntegrityTokenRequest;
import org.openapis.openapi.models.operations.PlayintegrityDecodeIntegrityTokenResponse;
import org.openapis.openapi.models.shared.DecodeIntegrityTokenRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PlayintegrityDecodeIntegrityTokenRequest req = new PlayintegrityDecodeIntegrityTokenRequest() {{
                security = new PlayintegrityDecodeIntegrityTokenSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new PlayintegrityDecodeIntegrityTokenPathParams() {{
                    packageName = "corrupti";
                }};
                queryParams = new PlayintegrityDecodeIntegrityTokenQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new DecodeIntegrityTokenRequest() {{
                    integrityToken = "suscipit";
                }};
            }};            

            PlayintegrityDecodeIntegrityTokenResponse res = sdk.v1.playintegrityDecodeIntegrityToken(req);

            if (res.decodeIntegrityTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->