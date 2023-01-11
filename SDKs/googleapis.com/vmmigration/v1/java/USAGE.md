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

            VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest req = new VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest() {{
                security = new VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams() {{
                    group = "aliquam";
                }};
                queryParams = new VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "quaerat";
                    alt = "media";
                    callback = "molestiae";
                    fields = "aut";
                    key = "dignissimos";
                    oauthToken = "cupiditate";
                    prettyPrint = false;
                    quotaUser = "corrupti";
                    uploadType = "sit";
                    uploadProtocol = "architecto";
                }};
                request = new AddGroupMigrationRequest() {{
                    migratingVm = "incidunt";
                }};
            }};

            VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse res = sdk.projects.vmmigrationProjectsLocationsGroupsAddGroupMigration(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->