<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateAccountCredentialSecurity;
import org.openapis.openapi.models.operations.CreateAccountCredentialResponse;
import org.openapis.openapi.models.shared.CredentialOptionsTypeEnum;
import org.openapis.openapi.models.shared.CredentialOptions;
import org.openapis.openapi.models.shared.MiradoreCredentialFields;
import org.openapis.openapi.models.shared.AWSCredentialFields;
import org.openapis.openapi.models.shared.AzureClientSecretCredentialFields;
import org.openapis.openapi.models.shared.AzureUsernamePasswordCredentialFields;
import org.openapis.openapi.models.shared.CrowdstrikeCredentialFields;
import org.openapis.openapi.models.shared.CensysCredentialFields;
import org.openapis.openapi.models.shared.SNMPv2CommunitiesCredentialFields;
import org.openapis.openapi.models.shared.SNMPv3CredentialFields;
import org.openapis.openapi.models.shared.VMwareCredentialFields;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CredentialOptions req = new CredentialOptions() {{
                acl = new java.util.HashMap<String, Object>() {{
                    put("provident", "distinctio");
                    put("quibusdam", "unde");
                    put("nulla", "corrupti");
                }};
                cidrs = "10.0.0.17/32, 192.168.1.0/24";
                global = false;
                name = "credentials_name";
                secret = new SNMPv3CredentialFields() {{
                    authPassphrase = "authpass";
                    authProtocol = "sha";
                    context = "vlan-32";
                    privacyPassphrase = "privpass";
                    privacyProtocol = "aes";
                    username = "user";
                }};
                type = "miradore_api_key_v1";
            }}            

            CreateAccountCredentialResponse res = sdk.account.createAccountCredential(req, new CreateAccountCredentialSecurity() {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.credential.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->