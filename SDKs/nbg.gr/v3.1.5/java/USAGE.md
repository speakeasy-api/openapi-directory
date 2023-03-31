<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdSecurity;
import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdPathParams;
import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdHeaders;
import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdRequest;
import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdResponse;
import org.openapis.openapi.models.shared.SchemeClientCredentialsToken;
import org.openapis.openapi.models.shared.SchemeClientID;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAccountAccessConsentsConsentIdRequest req = new DeleteAccountAccessConsentsConsentIdRequest() {{
                security = new DeleteAccountAccessConsentsConsentIdSecurity() {{
                    clientCredentialsToken = new SchemeClientCredentialsToken() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    clientId = new SchemeClientID() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteAccountAccessConsentsConsentIdPathParams() {{
                    consentId = "corrupti";
                }};
                headers = new DeleteAccountAccessConsentsConsentIdHeaders() {{
                    sandboxId = "provident";
                    xCustomerUserAgent = "distinctio";
                    xFapiAuthDate = "quibusdam";
                    xFapiCustomerIpAddress = "unde";
                    xFapiInteractionId = "nulla";
                }};
            }};            

            DeleteAccountAccessConsentsConsentIdResponse res = sdk.accountAccess.deleteAccountAccessConsentsConsentId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->