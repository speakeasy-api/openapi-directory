<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetRequest;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetResponse;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupsSettingsGroupsGetRequest req = new GroupsSettingsGroupsGetRequest("corrupti") {{
                alt = AltEnum.JSON;
                fields = "distinctio";
                key = "quibusdam";
                oauthToken = "unde";
                prettyPrint = false;
                quotaUser = "nulla";
                userIp = "corrupti";
            }};            

            GroupsSettingsGroupsGetResponse res = sdk.groups.groupsSettingsGroupsGet(req, new GroupsSettingsGroupsGetSecurity("illum", "vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groups != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->