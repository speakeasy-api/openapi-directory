<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetSecurity;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetPathParams;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetQueryParams;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetRequest;
import org.openapis.openapi.models.operations.GroupsSettingsGroupsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupsSettingsGroupsGetRequest req = new GroupsSettingsGroupsGetRequest() {{
                security = new GroupsSettingsGroupsGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new GroupsSettingsGroupsGetPathParams() {{
                    groupUniqueId = "corrupti";
                }};
                queryParams = new GroupsSettingsGroupsGetQueryParams() {{
                    alt = "json";
                    fields = "distinctio";
                    key = "quibusdam";
                    oauthToken = "unde";
                    prettyPrint = false;
                    quotaUser = "nulla";
                    userIp = "corrupti";
                }};
            }};            

            GroupsSettingsGroupsGetResponse res = sdk.groups.groupsSettingsGroupsGet(req);

            if (res.groups.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->