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

            DfareportingUserRolePermissionsGetRequest req = new DfareportingUserRolePermissionsGetRequest("voluptatem", "qui") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "ratione";
                fields = "architecto";
                key = "earum";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "illum";
                uploadProtocol = "soluta";
            }};            

            DfareportingUserRolePermissionsGetResponse res = sdk.userRolePermissions.dfareportingUserRolePermissionsGet(req, new DfareportingUserRolePermissionsGetSecurity("magnam", "corrupti") {{
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

            DfareportingUserRolePermissionsListRequest req = new DfareportingUserRolePermissionsListRequest("fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dicta";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "est";
                ids = new String[]{{
                    add("doloribus"),
                }};
                key = "velit";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "quam";
                uploadProtocol = "accusantium";
            }};            

            DfareportingUserRolePermissionsListResponse res = sdk.userRolePermissions.dfareportingUserRolePermissionsList(req, new DfareportingUserRolePermissionsListSecurity("voluptatem", "quos") {{
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
