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
                    appsId = "molestiae";
                }};
                queryParams = new AppengineAppsAuthorizedCertificatesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "eaque";
                    alt = "json";
                    callback = "debitis";
                    fields = "perspiciatis";
                    key = "aut";
                    oauthToken = "fugiat";
                    prettyPrint = true;
                    quotaUser = "nisi";
                    uploadType = "voluptatibus";
                    uploadProtocol = "sapiente";
                }};
                request = new AuthorizedCertificate() {{
                    certificateRawData = new CertificateRawData() {{
                        privateKey = "quasi";
                        publicCertificate = "minima";
                    }};
                    displayName = "odit";
                    domainMappingsCount = 4347294313002075738;
                    domainNames = new String[]() {{
                        add("pariatur"),
                    }};
                    expireTime = "velit";
                    id = "possimus";
                    managedCertificate = new ManagedCertificate() {{
                        lastRenewalTime = "cumque";
                        status = "FAILED_PERMANENTLY_NOT_VISIBLE";
                    }};
                    name = "corrupti";
                    visibleDomainMappings = new String[]() {{
                        add("optio"),
                        add("omnis"),
                        add("sit"),
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