<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreatePathParams;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse;
import org.openapis.openapi.models.shared.CertificateIssuanceConfigKeyAlgorithmEnum;
import org.openapis.openapi.models.shared.CertificateIssuanceConfigInput;
import org.openapis.openapi.models.shared.CertificateAuthorityConfig;
import org.openapis.openapi.models.shared.CertificateAuthorityServiceConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    certificateIssuanceConfigId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new CertificateIssuanceConfigInput() {{
                    certificateAuthorityConfig = new CertificateAuthorityConfig() {{
                        certificateAuthorityServiceConfig = new CertificateAuthorityServiceConfig() {{
                            caPool = "iure";
                        }};
                    }};
                    description = "magnam";
                    keyAlgorithm = "ECDSA_P256";
                    labels = new java.util.HashMap<String, String>() {{
                        put("delectus", "tempora");
                    }};
                    lifetime = "suscipit";
                    name = "molestiae";
                    rotationWindowPercentage = 791725;
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