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
                    parent = "culpa";
                }};
                queryParams = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "soluta";
                    alt = "media";
                    callback = "sint";
                    certificateIssuanceConfigId = "quidem";
                    fields = "beatae";
                    key = "quae";
                    oauthToken = "ut";
                    prettyPrint = false;
                    quotaUser = "maxime";
                    uploadType = "eaque";
                    uploadProtocol = "sed";
                }};
                request = new CertificateIssuanceConfigInput() {{
                    certificateAuthorityConfig = new CertificateAuthorityConfig() {{
                        certificateAuthorityServiceConfig = new CertificateAuthorityServiceConfig() {{
                            caPool = "ut";
                        }};
                    }};
                    description = "expedita";
                    keyAlgorithm = "RSA_2048";
                    labels = new java.util.HashMap<String, String>() {{
                        put("placeat", "doloribus");
                    }};
                    lifetime = "quibusdam";
                    name = "pariatur";
                    rotationWindowPercentage = 2235443691364802072;
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