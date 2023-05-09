# workspaces

### Available Operations

* [area120tablesWorkspacesGet](#area120tablesworkspacesget) - Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
* [area120tablesWorkspacesList](#area120tablesworkspaceslist) - Lists workspaces for the user.

## area120tablesWorkspacesGet

Gets a workspace. Returns NOT_FOUND if the workspace does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesGetRequest;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesGetResponse;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesGetSecurity;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesGetSecurityOption1;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesGetSecurityOption2;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesGetSecurityOption3;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesGetSecurityOption4;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesGetSecurityOption5;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesGetSecurityOption6;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesGetViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Area120tablesWorkspacesGetRequest req = new Area120tablesWorkspacesGetRequest("enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "delectus";
                alt = AltEnum.PROTO;
                callback = "provident";
                fields = "nam";
                key = "id";
                oauthToken = "blanditiis";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "sapiente";
                uploadProtocol = "amet";
                view = Area120tablesWorkspacesGetViewEnum.COLUMN_ID_VIEW;
            }};            

            Area120tablesWorkspacesGetResponse res = sdk.workspaces.area120tablesWorkspacesGet(req, new Area120tablesWorkspacesGetSecurity() {{
                option1 = new Area120tablesWorkspacesGetSecurityOption1("nisi", "vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.workspace != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## area120tablesWorkspacesList

Lists workspaces for the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesListRequest;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesListResponse;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesListSecurity;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesListSecurityOption1;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesListSecurityOption2;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesListSecurityOption3;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesListSecurityOption4;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesListSecurityOption5;
import org.openapis.openapi.models.operations.Area120tablesWorkspacesListSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Area120tablesWorkspacesListRequest req = new Area120tablesWorkspacesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "nihil";
                key = "magnam";
                oauthToken = "distinctio";
                pageSize = 660174L;
                pageToken = "labore";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "suscipit";
                uploadProtocol = "natus";
            }};            

            Area120tablesWorkspacesListResponse res = sdk.workspaces.area120tablesWorkspacesList(req, new Area120tablesWorkspacesListSecurity() {{
                option1 = new Area120tablesWorkspacesListSecurityOption1("nobis", "eum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listWorkspacesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
