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
                    groupUniqueId = "eum";
                }};
                queryParams = new GroupsSettingsGroupsGetQueryParams() {{
                    alt = "json";
                    fields = "eos";
                    key = "eaque";
                    oauthToken = "eligendi";
                    prettyPrint = true;
                    quotaUser = "repellat";
                    userIp = "ea";
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