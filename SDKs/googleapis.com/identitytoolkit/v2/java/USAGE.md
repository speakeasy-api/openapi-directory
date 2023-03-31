<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeQueryParams;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                request = new GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest() {{
                    displayName = "deserunt";
                    idToken = "suscipit";
                    phoneVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo() {{
                        androidVerificationProof = "iure";
                        code = "magnam";
                        phoneNumber = "debitis";
                        sessionInfo = "ipsa";
                    }};
                    tenantId = "delectus";
                    totpVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo() {{
                        sessionInfo = "tempora";
                        verificationCode = "suscipit";
                    }};
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