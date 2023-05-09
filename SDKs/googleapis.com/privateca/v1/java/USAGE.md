<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity;
import org.openapis.openapi.models.shared.ActivateCertificateAuthorityRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SubordinateConfig;
import org.openapis.openapi.models.shared.SubordinateConfigChain;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest req = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                activateCertificateAuthorityRequest = new ActivateCertificateAuthorityRequest() {{
                    pemCaCertificate = "distinctio";
                    requestId = "quibusdam";
                    subordinateConfig = new SubordinateConfig() {{
                        certificateAuthority = "unde";
                        pemIssuerChain = new SubordinateConfigChain() {{
                            pemCertificates = new String[]{{
                                add("corrupti"),
                                add("illum"),
                                add("vel"),
                                add("error"),
                            }};
                        }};;
                    }};;
                }};;
                accessToken = "deserunt";
                alt = AltEnum.MEDIA;
                callback = "iure";
                fields = "magnam";
                key = "debitis";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "tempora";
                uploadProtocol = "suscipit";
            }};            

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(req, new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity("molestiae", "minus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->