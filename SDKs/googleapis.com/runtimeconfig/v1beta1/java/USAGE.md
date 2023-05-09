<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateResponse;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RuntimeConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsCreateRequest req = new RuntimeconfigProjectsConfigsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                runtimeConfig = new RuntimeConfig() {{
                    description = "distinctio";
                    name = "Stuart Stiedemann";
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                requestId = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            RuntimeconfigProjectsConfigsCreateResponse res = sdk.projects.runtimeconfigProjectsConfigsCreate(req, new RuntimeconfigProjectsConfigsCreateSecurity() {{
                option1 = new RuntimeconfigProjectsConfigsCreateSecurityOption1("suscipit", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.runtimeConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->