# userRolePermissions

### Available Operations

* [dfareportingUserRolePermissionsGet](#dfareportinguserrolepermissionsget) - Gets one user role permission by ID.
* [dfareportingUserRolePermissionsList](#dfareportinguserrolepermissionslist) - Gets a list of user role permissions, possibly filtered.

## dfareportingUserRolePermissionsGet

Gets one user role permission by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingUserRolePermissionsGetRequest;
import org.openapis.openapi.models.operations.DfareportingUserRolePermissionsGetResponse;
import org.openapis.openapi.models.operations.DfareportingUserRolePermissionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingUserRolePermissionsGetRequest req = new DfareportingUserRolePermissionsGetRequest("eum", "quos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "impedit";
                key = "quibusdam";
                oauthToken = "neque";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "illo";
                uploadProtocol = "eos";
            }};            

            DfareportingUserRolePermissionsGetResponse res = sdk.userRolePermissions.dfareportingUserRolePermissionsGet(req, new DfareportingUserRolePermissionsGetSecurity("quidem", "repellat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userRolePermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingUserRolePermissionsList

Gets a list of user role permissions, possibly filtered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingUserRolePermissionsListRequest;
import org.openapis.openapi.models.operations.DfareportingUserRolePermissionsListResponse;
import org.openapis.openapi.models.operations.DfareportingUserRolePermissionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingUserRolePermissionsListRequest req = new DfareportingUserRolePermissionsListRequest("magni") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ab";
                alt = AltEnum.JSON;
                callback = "quae";
                fields = "vero";
                ids = new String[]{{
                    add("fugit"),
                    add("totam"),
                    add("illum"),
                }};
                key = "totam";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "unde";
                uploadProtocol = "facilis";
            }};            

            DfareportingUserRolePermissionsListResponse res = sdk.userRolePermissions.dfareportingUserRolePermissionsList(req, new DfareportingUserRolePermissionsListSecurity("quod", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userRolePermissionsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
