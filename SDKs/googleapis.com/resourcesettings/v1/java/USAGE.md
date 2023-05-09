<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetRequest;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetResponse;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetSecurity;
import org.openapis.openapi.models.operations.ResourcesettingsProjectsSettingsGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResourcesettingsProjectsSettingsGetRequest req = new ResourcesettingsProjectsSettingsGetRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                key = "corrupti";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "error";
                uploadProtocol = "deserunt";
                view = ResourcesettingsProjectsSettingsGetViewEnum.SETTING_VIEW_BASIC;
            }};            

            ResourcesettingsProjectsSettingsGetResponse res = sdk.projects.resourcesettingsProjectsSettingsGet(req, new ResourcesettingsProjectsSettingsGetSecurity("iure", "magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudResourcesettingsV1Setting != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->