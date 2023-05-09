<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFundsConfirmationConsentsRequest;
import org.openapis.openapi.models.operations.CreateFundsConfirmationConsentsResponse;
import org.openapis.openapi.models.operations.CreateFundsConfirmationConsentsSecurity;
import org.openapis.openapi.models.shared.OBFundsConfirmationConsent1;
import org.openapis.openapi.models.shared.OBFundsConfirmationConsent1Data;
import org.openapis.openapi.models.shared.OBFundsConfirmationConsent1DataDebtorAccount;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateFundsConfirmationConsentsRequest req = new CreateFundsConfirmationConsentsRequest("corrupti",                 new OBFundsConfirmationConsent1(                new OBFundsConfirmationConsent1Data(                new OBFundsConfirmationConsent1DataDebtorAccount("provident", "distinctio") {{
                                                                name = "Stuart Stiedemann";
                                                                secondaryIdentification = "vel";
                                                            }};) {{
                                                expirationDateTime = OffsetDateTime.parse("2021-09-16T11:56:06.019Z");
                                            }};);) {{
                xCustomerUserAgent = "suscipit";
                xFapiAuthDate = "iure";
                xFapiCustomerIpAddress = "magnam";
                xFapiInteractionId = "debitis";
            }};            

            CreateFundsConfirmationConsentsResponse res = sdk.fundsConfirmations.createFundsConfirmationConsents(req, new CreateFundsConfirmationConsentsSecurity("ipsa") {{
                tppoAuth2Security = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.obFundsConfirmationConsentResponse1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->