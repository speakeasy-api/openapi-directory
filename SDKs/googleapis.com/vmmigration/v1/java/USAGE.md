<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest;
import org.openapis.openapi.models.operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AddGroupMigrationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest req = new VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest() {{
                dollarXgafv = "2";
                addGroupMigrationRequest = new AddGroupMigrationRequest() {{
                    migratingVm = "provident";
                }};
                accessToken = "distinctio";
                alt = "proto";
                callback = "unde";
                fields = "nulla";
                group = "corrupti";
                key = "illum";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "deserunt";
                uploadProtocol = "suscipit";
            }}            

            VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse res = sdk.projects.vmmigrationProjectsLocationsGroupsAddGroupMigration(req, new VmmigrationProjectsLocationsGroupsAddGroupMigrationSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->