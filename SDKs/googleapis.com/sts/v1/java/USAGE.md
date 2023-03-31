<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.StsIntrospectQueryParams;
import org.openapis.openapi.models.operations.StsIntrospectRequest;
import org.openapis.openapi.models.operations.StsIntrospectResponse;
import org.openapis.openapi.models.shared.GoogleIdentityStsV1IntrospectTokenRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StsIntrospectRequest req = new StsIntrospectRequest() {{
                queryParams = new StsIntrospectQueryParams() {{
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
                request = new GoogleIdentityStsV1IntrospectTokenRequest() {{
                    token = "deserunt";
                    tokenTypeHint = "suscipit";
                }};
            }};            

            StsIntrospectResponse res = sdk.v1.stsIntrospect(req);

            if (res.googleIdentityStsV1IntrospectTokenResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->