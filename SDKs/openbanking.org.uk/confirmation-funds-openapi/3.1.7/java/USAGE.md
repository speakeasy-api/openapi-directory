<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateFundsConfirmationConsentsSecurity;
import org.openapis.openapi.models.operations.CreateFundsConfirmationConsentsHeaders;
import org.openapis.openapi.models.operations.CreateFundsConfirmationConsentsRequest;
import org.openapis.openapi.models.operations.CreateFundsConfirmationConsentsResponse;
import org.openapis.openapi.models.shared.OBFundsConfirmationConsent1DataDebtorAccount;
import org.openapis.openapi.models.shared.OBFundsConfirmationConsent1Data;
import org.openapis.openapi.models.shared.OBFundsConfirmationConsent1;
import org.openapis.openapi.models.shared.SchemeTppoAuth2Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFundsConfirmationConsentsRequest req = new CreateFundsConfirmationConsentsRequest() {{
                security = new CreateFundsConfirmationConsentsSecurity() {{
                    tppoAuth2Security = new SchemeTppoAuth2Security() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                headers = new CreateFundsConfirmationConsentsHeaders() {{
                    authorization = "corrupti";
                    xCustomerUserAgent = "provident";
                    xFapiAuthDate = "distinctio";
                    xFapiCustomerIpAddress = "quibusdam";
                    xFapiInteractionId = "unde";
                }};
                request = new OBFundsConfirmationConsent1() {{
                    data = new OBFundsConfirmationConsent1Data() {{
                        debtorAccount = new OBFundsConfirmationConsent1DataDebtorAccount() {{
                            identification = "nulla";
                            name = "corrupti";
                            schemeName = "illum";
                            secondaryIdentification = "vel";
                        }};
                        expirationDateTime = "2021-09-16T11:56:06.019Z";
                    }};
                }};
            }};            

            CreateFundsConfirmationConsentsResponse res = sdk.fundsConfirmations.createFundsConfirmationConsents(req);

            if (res.obFundsConfirmationConsentResponse1.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->