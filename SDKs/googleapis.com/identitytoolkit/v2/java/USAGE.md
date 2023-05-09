<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse;
import org.openapis.openapi.models.operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
import org.openapis.openapi.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest req = new IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest = new GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest() {{
                    displayName = "provident";
                    idToken = "distinctio";
                    phoneVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo() {{
                        androidVerificationProof = "quibusdam";
                        code = "unde";
                        phoneNumber = "nulla";
                        sessionInfo = "corrupti";
                    }};;
                    tenantId = "illum";
                    totpVerificationInfo = new GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo() {{
                        sessionInfo = "vel";
                        verificationCode = "error";
                    }};;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "magnam";
                key = "debitis";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "tempora";
                uploadProtocol = "suscipit";
            }};            

            IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse res = sdk.accounts.identitytoolkitAccountsMfaEnrollmentFinalize(req, new IdentitytoolkitAccountsMfaEnrollmentFinalizeSecurity("molestiae", "minus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->