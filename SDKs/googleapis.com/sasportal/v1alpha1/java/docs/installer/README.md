# installer

### Available Operations

* [sasportalInstallerGenerateSecret](#sasportalinstallergeneratesecret) - Generates a secret to be used with the ValidateInstaller.
* [sasportalInstallerValidate](#sasportalinstallervalidate) - Validates the identity of a Certified Professional Installer (CPI).

## sasportalInstallerGenerateSecret

Generates a secret to be used with the ValidateInstaller.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SasportalInstallerGenerateSecretRequest;
import org.openapis.openapi.models.operations.SasportalInstallerGenerateSecretResponse;
import org.openapis.openapi.models.operations.SasportalInstallerGenerateSecretSecurity;
import org.openapis.openapi.models.operations.SasportalInstallerGenerateSecretSecurityOption1;
import org.openapis.openapi.models.operations.SasportalInstallerGenerateSecretSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SasportalInstallerGenerateSecretRequest req = new SasportalInstallerGenerateSecretRequest() {{
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

            SasportalInstallerGenerateSecretResponse res = sdk.installer.sasportalInstallerGenerateSecret(req, new SasportalInstallerGenerateSecretSecurity() {{
                option1 = new SasportalInstallerGenerateSecretSecurityOption1("qui", "impedit") {{
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

## sasportalInstallerValidate

Validates the identity of a Certified Professional Installer (CPI).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SasportalInstallerValidateRequest;
import org.openapis.openapi.models.operations.SasportalInstallerValidateResponse;
import org.openapis.openapi.models.operations.SasportalInstallerValidateSecurity;
import org.openapis.openapi.models.operations.SasportalInstallerValidateSecurityOption1;
import org.openapis.openapi.models.operations.SasportalInstallerValidateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SasPortalValidateInstallerRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SasportalInstallerValidateRequest req = new SasportalInstallerValidateRequest() {{
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

            SasportalInstallerValidateResponse res = sdk.installer.sasportalInstallerValidate(req, new SasportalInstallerValidateSecurity() {{
                option1 = new SasportalInstallerValidateSecurityOption1("hic", "saepe") {{
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
