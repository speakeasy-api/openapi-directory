# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### fundsConfirmations

* `createFundsConfirmationConsents` - Create Funds Confirmation Consent
* `createFundsConfirmations` - Create Funds Confirmation
* `deleteFundsConfirmationConsentsConsentId` - Delete Funds Confirmation Consent
* `getFundsConfirmationConsentsConsentId` - Get Funds Confirmation Consent
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
