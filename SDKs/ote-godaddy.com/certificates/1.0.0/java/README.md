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

import org.openapis.openapi.models.operations.CertificateActionRetrievePathParams;
import org.openapis.openapi.models.operations.CertificateActionRetrieveRequest;
import org.openapis.openapi.models.operations.CertificateActionRetrieveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificateActionRetrieveRequest req = new CertificateActionRetrieveRequest() {{
                pathParams = new CertificateActionRetrievePathParams() {{
                    certificateId = "corrupti";
                }};
            }};            

            CertificateActionRetrieveResponse res = sdk.v1.certificateActionRetrieve(req);

            if (res.arrayOfCertificateAction.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### v1

* `certificateActionRetrieve` - Retrieve all certificate actions
* `certificateAlternateEmailAddress` - Add alternate email address
* `certificateCallbackDelete` - Unregister system callback
* `certificateCallbackGet` - Retrieve system stateful action callback url
* `certificateCallbackReplace` - Register of certificate action callback
* `certificateCancel` - Cancel a pending certificate
* `certificateCreate` - Create a pending order for certificate
* `certificateDownload` - Download certificate
* `certificateDownloadEntitlement` - Download certificate by entitlement
* `certificateEmailHistory` - Retrieve email history
* `certificateGet` - Retrieve certificate details
* `certificateGetEntitlement` - Search for certificate details by entitlement
* `certificateReissue` - Reissue active certificate
* `certificateRenew` - Renew active certificate
* `certificateResendEmail` - Resend an email
* `certificateResendEmailAddress` - Resend email to email address
* `certificateRevoke` - Revoke active certificate
* `certificateSitesealGet` - Get Site seal
* `certificateValidate` - Validate a pending order for certificate
* `certificateVerifydomaincontrol` - Check Domain Control

### v2

* `getAcmeExternalAccountBinding` - Retrieves the external account binding for the specified customer
* `getCertificateDetailByCertIdentifier` - Retrieve individual certificate details
* `getCustomerCertificatesByCustomerId` - Retrieve customer's certificates
* `getDomainDetailsByDomain` - Retrieve detailed information for supplied domain
* `getDomainInformationByCertificateId` - Retrieve domain verification status
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
