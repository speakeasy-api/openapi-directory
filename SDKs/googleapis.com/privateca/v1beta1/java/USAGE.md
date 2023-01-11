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

            PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest req = new PrivatecaProjectsLocationsCertificateAuthoritiesActivateRequest() {{
                security = new PrivatecaProjectsLocationsCertificateAuthoritiesActivateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new PrivatecaProjectsLocationsCertificateAuthoritiesActivatePathParams() {{
                    name = "sit";
                }};
                queryParams = new PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams() {{
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
                request = new ActivateCertificateAuthorityRequest() {{
                    pemCaCertificate = "dicta";
                    requestId = "debitis";
                    subordinateConfig = new SubordinateConfig() {{
                        certificateAuthority = "voluptatum";
                        pemIssuerChain = new SubordinateConfigChain() {{
                            pemCertificates = new String[]() {{
                                add("ut"),
                            }};
                        }};
                    }};
                }};
            }};

            PrivatecaProjectsLocationsCertificateAuthoritiesActivateResponse res = sdk.projects.privatecaProjectsLocationsCertificateAuthoritiesActivate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->