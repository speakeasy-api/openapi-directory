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
                    appsId = "sit";
                }};
                queryParams = new AppengineAppsAuthorizedCertificatesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new AuthorizedCertificate() {{
                    certificateRawData = new CertificateRawData() {{
                        privateKey = "dicta";
                        publicCertificate = "debitis";
                    }};
                    displayName = "voluptatum";
                    domainMappingsCount = 2339563716805116249;
                    domainNames = new String[]() {{
                        add("dolorem"),
                        add("et"),
                        add("voluptate"),
                    }};
                    expireTime = "iste";
                    id = "vitae";
                    managedCertificate = new ManagedCertificate() {{
                        lastRenewalTime = "totam";
                        status = "FAILED_RETRYING_NOT_VISIBLE";
                    }};
                    name = "illum";
                    visibleDomainMappings = new String[]() {{
                        add("vel"),
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