<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateSecurityOption2;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RuntimeConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsCreateRequest req = new RuntimeconfigProjectsConfigsCreateRequest() {{
                dollarXgafv = "2";
                runtimeConfig = new RuntimeConfig() {{
                    description = "provident";
                    name = "distinctio";
                }};
                accessToken = "quibusdam";
                alt = "media";
                callback = "nulla";
                fields = "corrupti";
                key = "illum";
                oauthToken = "vel";
                parent = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                requestId = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }}            

            RuntimeconfigProjectsConfigsCreateResponse res = sdk.projects.runtimeconfigProjectsConfigsCreate(req, new RuntimeconfigProjectsConfigsCreateSecurity() {{
                option1 = new RuntimeconfigProjectsConfigsCreateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.runtimeConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->