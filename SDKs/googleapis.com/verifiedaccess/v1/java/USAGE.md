<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VerifiedaccessChallengeCreateSecurity;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeCreateQueryParams;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeCreateRequest;
import org.openapis.openapi.models.operations.VerifiedaccessChallengeCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifiedaccessChallengeCreateRequest req = new VerifiedaccessChallengeCreateRequest() {{
                security = new VerifiedaccessChallengeCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new VerifiedaccessChallengeCreateQueryParams() {{
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
                request = new java.util.HashMap<String, Object>() {{
                    put("suscipit", "iure");
                    put("magnam", "debitis");
                    put("ipsa", "delectus");
                }};
            }};            

            VerifiedaccessChallengeCreateResponse res = sdk.challenge.verifiedaccessChallengeCreate(req);

            if (res.challenge.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->