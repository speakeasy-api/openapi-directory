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
                    name = "animi";
                }};
                queryParams = new PrivatecaProjectsLocationsCertificateAuthoritiesActivateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "laudantium";
                    alt = "json";
                    callback = "ea";
                    fields = "facilis";
                    key = "vitae";
                    oauthToken = "consequatur";
                    prettyPrint = false;
                    quotaUser = "pariatur";
                    uploadType = "beatae";
                    uploadProtocol = "et";
                }};
                request = new ActivateCertificateAuthorityRequest() {{
                    pemCaCertificate = "cum";
                    requestId = "occaecati";
                    subordinateConfig = new SubordinateConfig() {{
                        certificateAuthority = "quo";
                        pemIssuerChain = new SubordinateConfigChain() {{
                            pemCertificates = new String[]() {{
                                add("in"),
                                add("et"),
                                add("eos"),
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