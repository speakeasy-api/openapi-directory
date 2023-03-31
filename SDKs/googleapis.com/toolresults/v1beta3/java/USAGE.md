<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ToolresultsProjectsGetSettingsSecurity;
import org.openapis.openapi.models.operations.ToolresultsProjectsGetSettingsPathParams;
import org.openapis.openapi.models.operations.ToolresultsProjectsGetSettingsQueryParams;
import org.openapis.openapi.models.operations.ToolresultsProjectsGetSettingsRequest;
import org.openapis.openapi.models.operations.ToolresultsProjectsGetSettingsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ToolresultsProjectsGetSettingsRequest req = new ToolresultsProjectsGetSettingsRequest() {{
                security = new ToolresultsProjectsGetSettingsSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ToolresultsProjectsGetSettingsPathParams() {{
                    projectId = "corrupti";
                }};
                queryParams = new ToolresultsProjectsGetSettingsQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
            }};            

            ToolresultsProjectsGetSettingsResponse res = sdk.projects.toolresultsProjectsGetSettings(req);

            if (res.projectSettings.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->