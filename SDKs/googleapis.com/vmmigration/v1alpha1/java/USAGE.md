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
                    group = "est";
                }};
                queryParams = new VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "ad";
                    alt = "media";
                    callback = "aut";
                    fields = "sequi";
                    key = "praesentium";
                    oauthToken = "non";
                    prettyPrint = false;
                    quotaUser = "totam";
                    uploadType = "modi";
                    uploadProtocol = "id";
                }};
                request = new AddGroupMigrationRequest() {{
                    migratingVm = "architecto";
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