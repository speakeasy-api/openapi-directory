<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdSecurity;
import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdRequest;
import org.openapis.openapi.models.operations.DeleteAccountAccessConsentsConsentIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAccountAccessConsentsConsentIdRequest req = new DeleteAccountAccessConsentsConsentIdRequest() {{
                consentId = "corrupti";
                sandboxId = "provident";
                xCustomerUserAgent = "distinctio";
                xFapiAuthDate = "quibusdam";
                xFapiCustomerIpAddress = "unde";
                xFapiInteractionId = "nulla";
            }}            

            DeleteAccountAccessConsentsConsentIdResponse res = sdk.accountAccess.deleteAccountAccessConsentsConsentId(req, new DeleteAccountAccessConsentsConsentIdSecurity() {{
                clientCredentialsToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->