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

            DeleteAccountAccessConsentsConsentIdRequest req = new DeleteAccountAccessConsentsConsentIdRequest() {{
                security = new DeleteAccountAccessConsentsConsentIdSecurity() {{
                    clientCredentialsToken = new SchemeClientCredentialsToken() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    clientId = new SchemeClientId() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteAccountAccessConsentsConsentIdPathParams() {{
                    consentId = "possimus";
                }};
                headers = new DeleteAccountAccessConsentsConsentIdHeaders() {{
                    sandboxId = "quia";
                    xCustomerUserAgent = "voluptas";
                    xFapiAuthDate = "voluptatum";
                    xFapiCustomerIpAddress = "repellat";
                    xFapiInteractionId = "nihil";
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