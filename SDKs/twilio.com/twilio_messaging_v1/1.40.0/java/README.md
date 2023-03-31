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

import org.openapis.openapi.models.operations.CreateAlphaSenderSecurity;
import org.openapis.openapi.models.operations.CreateAlphaSenderPathParams;
import org.openapis.openapi.models.operations.CreateAlphaSenderCreateAlphaSenderRequest;
import org.openapis.openapi.models.operations.CreateAlphaSenderRequest;
import org.openapis.openapi.models.operations.CreateAlphaSenderResponse;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAlphaSenderRequest req = new CreateAlphaSenderRequest() {{
                security = new CreateAlphaSenderSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                pathParams = new CreateAlphaSenderPathParams() {{
                    serviceSid = "corrupti";
                }};
                request = new CreateAlphaSenderCreateAlphaSenderRequest() {{
                    alphaSender = "provident";
                }};
            }};            

            CreateAlphaSenderResponse res = sdk.createAlphaSender(req);

            if (res.messagingV1ServiceAlphaSender.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createAlphaSender`
* `createBrandRegistrations`
* `createBrandVetting`
* `createExternalCampaign`
* `createLinkshorteningMessagingService`
* `createPhoneNumber`
* `createService`
* `createShortCode`
* `createTollfreeVerification`
* `createUsAppToPerson`
* `deleteAlphaSender`
* `deleteDomainCertV4`
* `deleteLinkshorteningMessagingService`
* `deletePhoneNumber`
* `deleteService`
* `deleteShortCode`
* `deleteUsAppToPerson`
* `fetchAlphaSender`
* `fetchBrandRegistrations`
* `fetchBrandVetting`
* `fetchDeactivation` - Fetch a list of all United States numbers that have been deactivated on a specific date.
* `fetchDomainCertV4`
* `fetchDomainConfig`
* `fetchDomainConfigMessagingService`
* `fetchPhoneNumber`
* `fetchService`
* `fetchShortCode`
* `fetchTollfreeVerification`
* `fetchUsAppToPerson`
* `fetchUsAppToPersonUsecase`
* `fetchUsecase`
* `listAlphaSender`
* `listBrandRegistrations`
* `listBrandVetting`
* `listPhoneNumber`
* `listService`
* `listShortCode`
* `listTollfreeVerification`
* `listUsAppToPerson`
* `updateBrandRegistrations`
* `updateDomainCertV4`
* `updateDomainConfig`
* `updateService`
* `updateTollfreeVerification`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
