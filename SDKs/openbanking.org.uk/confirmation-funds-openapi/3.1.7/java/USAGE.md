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

            CreateFundsConfirmationConsentsRequest req = new CreateFundsConfirmationConsentsRequest() {{
                security = new CreateFundsConfirmationConsentsSecurity() {{
                    tppoAuth2Security = new SchemeTppoAuth2Security() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                headers = new CreateFundsConfirmationConsentsHeaders() {{
                    authorization = "vitae";
                    xCustomerUserAgent = "maiores";
                    xFapiAuthDate = "sunt";
                    xFapiCustomerIpAddress = "culpa";
                    xFapiInteractionId = "sed";
                }};
                request = new ObFundsConfirmationConsent1() {{
                    data = new ObFundsConfirmationConsent1Data() {{
                        debtorAccount = new ObFundsConfirmationConsent1DataDebtorAccount() {{
                            identification = "ullam";
                            name = "a";
                            schemeName = "corrupti";
                            secondaryIdentification = "minus";
                        }};
                        expirationDateTime = "1980-04-07T06:02:40Z";
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