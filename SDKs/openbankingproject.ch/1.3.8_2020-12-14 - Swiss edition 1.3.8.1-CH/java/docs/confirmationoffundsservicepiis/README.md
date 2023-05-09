# confirmationOfFundsServicePIIS

## Overview

Confirmation of Funds Service (PIIS) returns a confirmation of funds request at the ASPSP.


### Available Operations

* [checkAvailabilityOfFunds](#checkavailabilityoffunds) - Confirmation of funds request

## checkAvailabilityOfFunds

Creates a confirmation of funds request at the ASPSP. Checks whether a specific amount is available at point of time of the request on an account linked to a given tuple card issuer(TPP)/card number, or addressed by IBAN and TPP respectively.
If the related extended services are used a conditional Consent-ID is contained in the header. This field is contained but commented out in this specification.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckAvailabilityOfFundsRequest;
import org.openapis.openapi.models.operations.CheckAvailabilityOfFundsResponse;
import org.openapis.openapi.models.operations.CheckAvailabilityOfFundsSecurity;
import org.openapis.openapi.models.shared.AccountReference16CH;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.ConfirmationOfFunds;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CheckAvailabilityOfFundsRequest req = new CheckAvailabilityOfFundsRequest("molestiae",                 new ConfirmationOfFunds(                new AccountReference16CH() {{
                                                cashAccountType = "rerum";
                                                currency = "EUR";
                                                iban = "FR7612345987650123456789014";
                                                otherAccountIdentification = "90-100100-0";
                                            }};,                 new Amount("5877.78", "EUR");) {{
                                cardNumber = "occaecati";
                                payee = "minima";
                            }};) {{
                authorization = "distinctio";
                digest = "eligendi";
                signature = "sit";
                tppSignatureCertificate = "culpa";
            }};            

            CheckAvailabilityOfFundsResponse res = sdk.confirmationOfFundsServicePIIS.checkAvailabilityOfFunds(req, new CheckAvailabilityOfFundsSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.checkAvailabilityOfFunds200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
