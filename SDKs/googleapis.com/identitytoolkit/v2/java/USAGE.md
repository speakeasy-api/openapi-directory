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
                    dollarXgafv = "2";
                    accessToken = "tenetur";
                    alt = "media";
                    callback = "animi";
                    fields = "fugiat";
                    key = "aut";
                    oauthToken = "delectus";
                    prettyPrint = false;
                    quotaUser = "modi";
                    uploadType = "architecto";
                    uploadProtocol = "ut";
                }};
                request = new GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest() {{
                    displayName = "architecto";
                    idToken = "voluptas";
                    phoneVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo() {{
                        androidVerificationProof = "delectus";
                        code = "nihil";
                        phoneNumber = "saepe";
                        sessionInfo = "officiis";
                    }};
                    tenantId = "optio";
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