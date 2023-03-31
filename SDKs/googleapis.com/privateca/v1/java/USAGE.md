<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest;
import org.openapis.openapi.models.operations.PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse;
import org.openapis.openapi.models.shared.ActivateCertificateAuthorityRequest;
import org.openapis.openapi.models.shared.SubordinateConfig;
import org.openapis.openapi.models.shared.SubordinateConfigChain;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest req = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest() {{
                security = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivatePathParams() {{
                    name = "corrupti";
                }};
                queryParams = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateQueryParams() {{
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
                request = new ActivateCertificateAuthorityRequest() {{
                    pemCaCertificate = "suscipit";
                    requestId = "iure";
                    subordinateConfig = new SubordinateConfig() {{
                        certificateAuthority = "magnam";
                        pemIssuerChain = new SubordinateConfigChain() {{
                            pemCertificates = new String[]{{
                                add("ipsa"),
                                add("delectus"),
                                add("tempora"),
                                add("suscipit"),
                            }};
                        }};
                    }};
                }};
            }};            

            PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateResponse res = sdk.projects.privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->