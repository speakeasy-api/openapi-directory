<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    projectId = "sit";
                }};
                queryParams = new ToolresultsProjectsGetSettingsQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
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