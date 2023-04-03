<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateIssuanceConfigKeyAlgorithmEnum;
import org.openapis.openapi.models.shared.CertificateIssuanceConfigInput;
import org.openapis.openapi.models.shared.CertificateAuthorityConfig;
import org.openapis.openapi.models.shared.CertificateAuthorityServiceConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest req = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest() {{
                dollarXgafv = "2";
                certificateIssuanceConfigInput = new CertificateIssuanceConfigInput() {{
                    certificateAuthorityConfig = new CertificateAuthorityConfig() {{
                        certificateAuthorityServiceConfig = new CertificateAuthorityServiceConfig() {{
                            caPool = "provident";
                        }};
                    }};
                    description = "distinctio";
                    keyAlgorithm = "ECDSA_P256";
                    labels = new java.util.HashMap<String, String>() {{
                        put("nulla", "corrupti");
                        put("illum", "vel");
                        put("error", "deserunt");
                    }};
                    lifetime = "suscipit";
                    name = "iure";
                    rotationWindowPercentage = 297534;
                }};
                accessToken = "debitis";
                alt = "json";
                callback = "delectus";
                certificateIssuanceConfigId = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                parent = "placeat";
                prettyPrint = false;
                quotaUser = "voluptatum";
                uploadType = "iusto";
                uploadProtocol = "excepturi";
            }}            

            CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse res = sdk.projects.certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(req, new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity() {{
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