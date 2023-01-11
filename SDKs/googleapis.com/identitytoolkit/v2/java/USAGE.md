<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest req = new IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest() {{
                security = new IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                queryParams = new IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "fugit";
                    uploadType = "et";
                    uploadProtocol = "nihil";
                }};
                request = new GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest() {{
                    displayName = "rerum";
                    idToken = "dicta";
                    phoneVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo() {{
                        androidVerificationProof = "debitis";
                        code = "voluptatum";
                        phoneNumber = "et";
                        sessionInfo = "ut";
                    }};
                    tenantId = "dolorem";
                }};
            }};

            IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse res = sdk.accounts.identitytoolkitAccountsMfaEnrollmentFinalize(req);

            if (res.googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->