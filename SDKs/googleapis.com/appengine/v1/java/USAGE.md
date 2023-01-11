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
                    appsId = "aut";
                }};
                queryParams = new AppengineAppsAuthorizedCertificatesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "ea";
                    alt = "proto";
                    callback = "culpa";
                    fields = "est";
                    key = "rem";
                    oauthToken = "non";
                    prettyPrint = true;
                    quotaUser = "voluptatem";
                    uploadType = "omnis";
                    uploadProtocol = "rerum";
                }};
                request = new AuthorizedCertificate() {{
                    certificateRawData = new CertificateRawData() {{
                        privateKey = "et";
                        publicCertificate = "quia";
                    }};
                    displayName = "quasi";
                    domainMappingsCount = 1881072773164933129;
                    domainNames = new String[]() {{
                        add("ut"),
                        add("sit"),
                    }};
                    expireTime = "ut";
                    id = "rem";
                    managedCertificate = new ManagedCertificate() {{
                        lastRenewalTime = "iusto";
                        status = "FAILED_RETRYING_CAA_CHECKING";
                    }};
                    name = "numquam";
                    visibleDomainMappings = new String[]() {{
                        add("eveniet"),
                        add("nobis"),
                        add("quo"),
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