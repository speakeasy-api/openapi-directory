# installer

### Available Operations

* [prodTtSasportalInstallerGenerateSecret](#prodttsasportalinstallergeneratesecret) - Generates a secret to be used with the ValidateInstaller.
* [prodTtSasportalInstallerValidate](#prodttsasportalinstallervalidate) - Validates the identity of a Certified Professional Installer (CPI).

## prodTtSasportalInstallerGenerateSecret

Generates a secret to be used with the ValidateInstaller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalInstallerGenerateSecretRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalInstallerGenerateSecretResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalInstallerGenerateSecretSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalInstallerGenerateSecretSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalInstallerGenerateSecretSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalInstallerGenerateSecretRequest req = new ProdTtSasportalInstallerGenerateSecretRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("esse", "totam");
                    put("porro", "dolorum");
                    put("dicta", "nam");
                    put("officia", "occaecati");
                }};
                accessToken = "fugit";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "optio";
                key = "totam";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "molestiae";
                uploadProtocol = "modi";
            }};            

            ProdTtSasportalInstallerGenerateSecretResponse res = sdk.installer.prodTtSasportalInstallerGenerateSecret(req, new ProdTtSasportalInstallerGenerateSecretSecurity() {{
                option1 = new ProdTtSasportalInstallerGenerateSecretSecurityOption1("qui", "impedit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalGenerateSecretResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## prodTtSasportalInstallerValidate

Validates the identity of a Certified Professional Installer (CPI).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProdTtSasportalInstallerValidateRequest;
import org.openapis.openapi.models.operations.ProdTtSasportalInstallerValidateResponse;
import org.openapis.openapi.models.operations.ProdTtSasportalInstallerValidateSecurity;
import org.openapis.openapi.models.operations.ProdTtSasportalInstallerValidateSecurityOption1;
import org.openapis.openapi.models.operations.ProdTtSasportalInstallerValidateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalValidateInstallerRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProdTtSasportalInstallerValidateRequest req = new ProdTtSasportalInstallerValidateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                sasPortalValidateInstallerRequest = new SasPortalValidateInstallerRequest() {{
                    encodedSecret = "esse";
                    installerId = "ipsum";
                    secret = "excepturi";
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "ad";
                fields = "natus";
                key = "sed";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "dolor";
                uploadType = "natus";
                uploadProtocol = "laboriosam";
            }};            

            ProdTtSasportalInstallerValidateResponse res = sdk.installer.prodTtSasportalInstallerValidate(req, new ProdTtSasportalInstallerValidateSecurity() {{
                option1 = new ProdTtSasportalInstallerValidateSecurityOption1("hic", "saepe") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.sasPortalValidateInstallerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
