<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationPathParams;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse;
import org.openapis.openapi.models.shared.AddGroupMigrationRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    group = "corrupti";
                }};
                queryParams = new VmmigrationProjectsLocationsGroupsAddGroupMigrationQueryParams() {{
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
                request = new AddGroupMigrationRequest() {{
                    migratingVm = "suscipit";
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