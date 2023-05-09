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

            DfareportingUserRolePermissionsGetRequest req = new DfareportingUserRolePermissionsGetRequest("aut", "cupiditate") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "recusandae";
                key = "dolorum";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "ab";
                uploadType = "saepe";
                uploadProtocol = "ea";
            }};            

            DfareportingUserRolePermissionsGetResponse res = sdk.userRolePermissions.dfareportingUserRolePermissionsGet(req, new DfareportingUserRolePermissionsGetSecurity("deserunt", "ducimus") {{
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

            DfareportingUserRolePermissionsListRequest req = new DfareportingUserRolePermissionsListRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                callback = "inventore";
                fields = "voluptate";
                ids = new String[]{{
                    add("vero"),
                }};
                key = "ipsa";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "sunt";
                uploadType = "cum";
                uploadProtocol = "voluptatum";
            }};            

            DfareportingUserRolePermissionsListResponse res = sdk.userRolePermissions.dfareportingUserRolePermissionsList(req, new DfareportingUserRolePermissionsListSecurity("odit", "excepturi") {{
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
