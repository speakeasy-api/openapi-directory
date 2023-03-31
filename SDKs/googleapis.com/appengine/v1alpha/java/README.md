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

import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesCreateSecurity;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesCreatePathParams;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesCreateQueryParams;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesCreateRequest;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesCreateResponse;
import org.openapis.openapi.models.shared.AuthorizedCertificate;
import org.openapis.openapi.models.shared.ManagedCertificateStatusEnum;
import org.openapis.openapi.models.shared.ManagedCertificate;
import org.openapis.openapi.models.shared.CertificateRawData;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsAuthorizedCertificatesCreateRequest req = new AppengineAppsAuthorizedCertificatesCreateRequest() {{
                security = new AppengineAppsAuthorizedCertificatesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AppengineAppsAuthorizedCertificatesCreatePathParams() {{
                    appsId = "corrupti";
                }};
                queryParams = new AppengineAppsAuthorizedCertificatesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new AuthorizedCertificate() {{
                    certificateRawData = new CertificateRawData() {{
                        privateKey = "suscipit";
                        publicCertificate = "iure";
                    }};
                    displayName = "magnam";
                    domainMappingsCount = 891773;
                    domainNames = new String[]{{
                        add("delectus"),
                    }};
                    expireTime = "tempora";
                    id = "suscipit";
                    managedCertificate = new ManagedCertificate() {{
                        lastRenewalTime = "molestiae";
                        status = "FAILED_RETRYING_CAA_FORBIDDEN";
                    }};
                    name = "placeat";
                    visibleDomainMappings = new String[]{{
                        add("iusto"),
                        add("excepturi"),
                        add("nisi"),
                    }};
                }};
            }};            

            AppengineAppsAuthorizedCertificatesCreateResponse res = sdk.apps.appengineAppsAuthorizedCertificatesCreate(req);

            if (res.authorizedCertificate.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### apps

* `appengineAppsAuthorizedCertificatesCreate` - Uploads the specified SSL certificate.
* `appengineAppsAuthorizedCertificatesDelete` - Deletes the specified SSL certificate.
* `appengineAppsAuthorizedCertificatesGet` - Gets the specified SSL certificate.
* `appengineAppsAuthorizedCertificatesList` - Lists all SSL certificates the user is authorized to administer.
* `appengineAppsAuthorizedCertificatesPatch` - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* `appengineAppsAuthorizedDomainsList` - Lists all domains the user is authorized to administer.
* `appengineAppsDomainMappingsCreate` - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* `appengineAppsDomainMappingsDelete` - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* `appengineAppsDomainMappingsGet` - Gets the specified domain mapping.
* `appengineAppsDomainMappingsList` - Lists the domain mappings on an application.
* `appengineAppsDomainMappingsPatch` - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* `appengineAppsLocationsGet` - Gets information about a location.
* `appengineAppsLocationsList` - Lists information about the supported locations for this service.
* `appengineAppsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `appengineAppsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### projects

* `appengineProjectsLocationsGet` - Gets information about a location.
* `appengineProjectsLocationsList` - Lists information about the supported locations for this service.
* `appengineProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `appengineProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
