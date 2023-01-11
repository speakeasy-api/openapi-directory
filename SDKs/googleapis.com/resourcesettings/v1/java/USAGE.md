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

            ResourcesettingsProjectsSettingsGetRequest req = new ResourcesettingsProjectsSettingsGetRequest() {{
                security = new ResourcesettingsProjectsSettingsGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ResourcesettingsProjectsSettingsGetPathParams() {{
                    name = "sit";
                }};
                queryParams = new ResourcesettingsProjectsSettingsGetQueryParams() {{
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
                    view = "SETTING_VIEW_LOCAL_VALUE";
                }};
            }};

            ResourcesettingsProjectsSettingsGetResponse res = sdk.projects.resourcesettingsProjectsSettingsGet(req);

            if (res.googleCloudResourcesettingsV1Setting.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->