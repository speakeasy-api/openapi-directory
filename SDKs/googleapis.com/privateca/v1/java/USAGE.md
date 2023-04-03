<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ActivateCertificateAuthorityRequest;
import org.openapis.openapi.models.shared.SubordinateConfig;
import org.openapis.openapi.models.shared.SubordinateConfigChain;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest req = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest() {{
                dollarXgafv = "2";
                activateCertificateAuthorityRequest = new ActivateCertificateAuthorityRequest() {{
                    pemCaCertificate = "provident";
                    requestId = "distinctio";
                    subordinateConfig = new SubordinateConfig() {{
                        certificateAuthority = "quibusdam";
                        pemIssuerChain = new SubordinateConfigChain() {{
                            pemCertificates = new String[]{{
                                add("nulla"),
                                add("corrupti"),
                                add("illum"),
                            }};
                        }};
                    }};
                }};
                accessToken = "vel";
                alt = "media";
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                name = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }}            

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(req, new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->