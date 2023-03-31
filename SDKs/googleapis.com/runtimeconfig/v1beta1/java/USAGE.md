<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateSecurityOption1;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateSecurityOption2;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateSecurity;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreatePathParams;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateQueryParams;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateRequest;
import org.openapis.openapi.models.operations.RuntimeconfigProjectsConfigsCreateResponse;
import org.openapis.openapi.models.shared.RuntimeConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RuntimeconfigProjectsConfigsCreateRequest req = new RuntimeconfigProjectsConfigsCreateRequest() {{
                security = new RuntimeconfigProjectsConfigsCreateSecurity() {{
                    option1 = new RuntimeconfigProjectsConfigsCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new RuntimeconfigProjectsConfigsCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new RuntimeconfigProjectsConfigsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    requestId = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new RuntimeConfig() {{
                    description = "iure";
                    name = "magnam";
                }};
            }};            

            RuntimeconfigProjectsConfigsCreateResponse res = sdk.projects.runtimeconfigProjectsConfigsCreate(req);

            if (res.runtimeConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->