<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetSecurity;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetPathParams;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetViewEnum;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetQueryParams;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetRequest;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    name = "corrupti";
                }};
                queryParams = new ResourcesettingsProjectsSettingsGetQueryParams() {{
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
                    view = "SETTING_VIEW_BASIC";
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