# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Area120tablesTablesListRequest;
import org.openapis.openapi.models.operations.Area120tablesTablesListResponse;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurity;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption1;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption2;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption3;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption4;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption5;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Area120tablesTablesListRequest req = new Area120tablesTablesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "unde";
                key = "nulla";
                oauthToken = "corrupti";
                orderBy = "illum";
                pageSize = 423655L;
                pageToken = "error";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "suscipit";
                uploadProtocol = "iure";
            }};            

            Area120tablesTablesListResponse res = sdk.tables.area120tablesTablesList(req, new Area120tablesTablesListSecurity() {{
                option1 = new Area120tablesTablesListSecurityOption1("magnam", "debitis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTablesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [tables](docs/tables/README.md)

* [area120tablesTablesList](docs/tables/README.md#area120tablestableslist) - Lists tables for the user.
* [area120tablesTablesRowsBatchCreate](docs/tables/README.md#area120tablestablesrowsbatchcreate) - Creates multiple rows.
* [area120tablesTablesRowsBatchDelete](docs/tables/README.md#area120tablestablesrowsbatchdelete) - Deletes multiple rows.
* [area120tablesTablesRowsBatchUpdate](docs/tables/README.md#area120tablestablesrowsbatchupdate) - Updates multiple rows.
* [area120tablesTablesRowsCreate](docs/tables/README.md#area120tablestablesrowscreate) - Creates a row.
* [area120tablesTablesRowsDelete](docs/tables/README.md#area120tablestablesrowsdelete) - Deletes a row.
* [area120tablesTablesRowsList](docs/tables/README.md#area120tablestablesrowslist) - Lists rows in a table. Returns NOT_FOUND if the table does not exist.
* [area120tablesTablesRowsPatch](docs/tables/README.md#area120tablestablesrowspatch) - Updates a row.

### [workspaces](docs/workspaces/README.md)

* [area120tablesWorkspacesGet](docs/workspaces/README.md#area120tablesworkspacesget) - Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
* [area120tablesWorkspacesList](docs/workspaces/README.md#area120tablesworkspaceslist) - Lists workspaces for the user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
