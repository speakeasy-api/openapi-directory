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
                    appsId = "quas";
                }};
                queryParams = new AppengineAppsAuthorizedCertificatesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "maxime";
                    alt = "media";
                    callback = "asperiores";
                    fields = "provident";
                    key = "doloribus";
                    oauthToken = "architecto";
                    prettyPrint = false;
                    quotaUser = "beatae";
                    uploadType = "odio";
                    uploadProtocol = "blanditiis";
                }};
                request = new AuthorizedCertificate() {{
                    certificateRawData = new CertificateRawData() {{
                        privateKey = "voluptatem";
                        publicCertificate = "ea";
                    }};
                    displayName = "eum";
                    domainMappingsCount = 1901711820317166826;
                    domainNames = new String[]() {{
                        add("dolore"),
                    }};
                    expireTime = "voluptatem";
                    id = "recusandae";
                    managedCertificate = new ManagedCertificate() {{
                        lastRenewalTime = "impedit";
                        status = "FAILED_RETRYING_CAA_CHECKING";
                    }};
                    name = "vel";
                    visibleDomainMappings = new String[]() {{
                        add("atque"),
                        add("repellendus"),
                        add("ut"),
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