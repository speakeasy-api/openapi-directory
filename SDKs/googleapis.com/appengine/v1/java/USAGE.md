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