<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateFundsConfirmationConsentsSecurity;
import org.openapis.openapi.models.operations.CreateFundsConfirmationConsentsRequest;
import org.openapis.openapi.models.operations.CreateFundsConfirmationConsentsResponse;
import org.openapis.openapi.models.shared.OBFundsConfirmationConsent1DataDebtorAccount;
import org.openapis.openapi.models.shared.OBFundsConfirmationConsent1Data;
import org.openapis.openapi.models.shared.OBFundsConfirmationConsent1;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFundsConfirmationConsentsRequest req = new CreateFundsConfirmationConsentsRequest() {{
                authorization = "corrupti";
                obFundsConfirmationConsent1 = new OBFundsConfirmationConsent1() {{
                    data = new OBFundsConfirmationConsent1Data() {{
                        debtorAccount = new OBFundsConfirmationConsent1DataDebtorAccount() {{
                            identification = "provident";
                            name = "distinctio";
                            schemeName = "quibusdam";
                            secondaryIdentification = "unde";
                        }};
                        expirationDateTime = "2021-05-14T08:28:11.899Z";
                    }};
                }};
                xCustomerUserAgent = "illum";
                xFapiAuthDate = "vel";
                xFapiCustomerIpAddress = "error";
                xFapiInteractionId = "deserunt";
            }}            

            CreateFundsConfirmationConsentsResponse res = sdk.fundsConfirmations.createFundsConfirmationConsents(req, new CreateFundsConfirmationConsentsSecurity() {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.obFundsConfirmationConsentResponse1.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->