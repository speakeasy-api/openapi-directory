<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse;
import org.openapis.openapi.models.operations.CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CertificateAuthorityConfig;
import org.openapis.openapi.models.shared.CertificateAuthorityServiceConfig;
import org.openapis.openapi.models.shared.CertificateIssuanceConfigInput;
import org.openapis.openapi.models.shared.CertificateIssuanceConfigKeyAlgorithmEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest req = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                certificateIssuanceConfigInput = new CertificateIssuanceConfigInput() {{
                    certificateAuthorityConfig = new CertificateAuthorityConfig() {{
                        certificateAuthorityServiceConfig = new CertificateAuthorityServiceConfig() {{
                            caPool = "distinctio";
                        }};;
                    }};;
                    description = "quibusdam";
                    keyAlgorithm = CertificateIssuanceConfigKeyAlgorithmEnum.RSA2048;
                    labels = new java.util.HashMap<String, String>() {{
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                        put("iure", "magnam");
                    }};
                    lifetime = "debitis";
                    name = "Lucia Goldner";
                    rotationWindowPercentage = 791725;
                }};;
                accessToken = "placeat";
                alt = AltEnum.MEDIA;
                callback = "iusto";
                certificateIssuanceConfigId = "excepturi";
                fields = "nisi";
                key = "recusandae";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "quis";
                uploadProtocol = "veritatis";
            }};            

            CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateResponse res = sdk.projects.certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate(req, new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity("deserunt", "perferendis") {{
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