<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesCreateRequest;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesCreateResponse;
import org.openapis.openapi.models.operations.AppengineAppsAuthorizedCertificatesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthorizedCertificate;
import org.openapis.openapi.models.shared.CertificateRawData;
import org.openapis.openapi.models.shared.ManagedCertificate;
import org.openapis.openapi.models.shared.ManagedCertificateStatusEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppengineAppsAuthorizedCertificatesCreateRequest req = new AppengineAppsAuthorizedCertificatesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                authorizedCertificate = new AuthorizedCertificate() {{
                    certificateRawData = new CertificateRawData() {{
                        privateKey = "distinctio";
                        publicCertificate = "quibusdam";
                    }};;
                    displayName = "unde";
                    domainMappingsCount = 857946;
                    domainNames = new String[]{{
                        add("illum"),
                        add("vel"),
                        add("error"),
                    }};
                    expireTime = "deserunt";
                    id = "674e0f46-7cc8-4796-ad15-1a05dfc2ddf7";
                    managedCertificate = new ManagedCertificate() {{
                        lastRenewalTime = "quod";
                        status = ManagedCertificateStatusEnum.FAILED_RETRYING_CAA_FORBIDDEN;
                    }};;
                    name = "Deanna Sauer MD";
                    visibleDomainMappings = new String[]{{
                        add("occaecati"),
                        add("fugit"),
                        add("deleniti"),
                    }};
                }};;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "beatae";
                key = "commodi";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "qui";
                uploadProtocol = "impedit";
            }};            

            AppengineAppsAuthorizedCertificatesCreateResponse res = sdk.apps.appengineAppsAuthorizedCertificatesCreate(req, new AppengineAppsAuthorizedCertificatesCreateSecurity("cum", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.authorizedCertificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->