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

import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption1;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption2;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption3;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption4;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption5;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurityOption6;
import org.openapis.openapi.models.operations.Area120tablesTablesListSecurity;
import org.openapis.openapi.models.operations.Area120tablesTablesListQueryParams;
import org.openapis.openapi.models.operations.Area120tablesTablesListRequest;
import org.openapis.openapi.models.operations.Area120tablesTablesListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Area120tablesTablesListRequest req = new Area120tablesTablesListRequest() {{
                security = new Area120tablesTablesListSecurity() {{
                    option1 = new Area120tablesTablesListSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                queryParams = new Area120tablesTablesListQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    oauthToken = "corrupti";
                    orderBy = "illum";
                    pageSize = 423655;
                    pageToken = "error";
                    prettyPrint = false;
                    quotaUser = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
            }};            

            Area120tablesTablesListResponse res = sdk.tables.area120tablesTablesList(req);

            if (res.listTablesResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### tables

* `area120tablesTablesList` - Lists tables for the user.
* `area120tablesTablesRowsBatchCreate` - Creates multiple rows.
* `area120tablesTablesRowsBatchDelete` - Deletes multiple rows.
* `area120tablesTablesRowsBatchUpdate` - Updates multiple rows.
* `area120tablesTablesRowsCreate` - Creates a row.
* `area120tablesTablesRowsDelete` - Deletes a row.
* `area120tablesTablesRowsList` - Lists rows in a table. Returns NOT_FOUND if the table does not exist.
* `area120tablesTablesRowsPatch` - Updates a row.

### workspaces

* `area120tablesWorkspacesGet` - Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
* `area120tablesWorkspacesList` - Lists workspaces for the user.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
