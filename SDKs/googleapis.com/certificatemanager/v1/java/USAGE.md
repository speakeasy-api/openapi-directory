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

            CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest req = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest() {{
                security = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    certificateIssuanceConfigId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new CertificateIssuanceConfigInput() {{
                    certificateAuthorityConfig = new CertificateAuthorityConfig() {{
                        certificateAuthorityServiceConfig = new CertificateAuthorityServiceConfig() {{
                            caPool = "debitis";
                        }};
                    }};
                    description = "voluptatum";
                    keyAlgorithm = "KEY_ALGORITHM_UNSPECIFIED";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dolorem", "et");
                        put("voluptate", "iste");
                        put("vitae", "totam");
                    }};
                    lifetime = "dolores";
                    name = "illum";
                    rotationWindowPercentage = 6392442863481646880;
                }};
            }};

            CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse res = sdk.projects.certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->