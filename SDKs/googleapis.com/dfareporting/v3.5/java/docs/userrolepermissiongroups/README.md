# userRolePermissionGroups

### Available Operations

* [dfareportingUserRolePermissionGroupsGet](#dfareportinguserrolepermissiongroupsget) - Gets one user role permission group by ID.
* [dfareportingUserRolePermissionGroupsList](#dfareportinguserrolepermissiongroupslist) - Gets a list of all supported user role permission groups.

## dfareportingUserRolePermissionGroupsGet

Gets one user role permission group by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingUserRolePermissionGroupsGetRequest;
import org.openapis.openapi.models.operations.DfareportingUserRolePermissionGroupsGetResponse;
import org.openapis.openapi.models.operations.DfareportingUserRolePermissionGroupsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingUserRolePermissionGroupsGetRequest req = new DfareportingUserRolePermissionGroupsGetRequest("porro", "quo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "omnis";
                alt = AltEnum.JSON;
                callback = "recusandae";
                fields = "error";
                key = "magnam";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "magnam";
                uploadProtocol = "impedit";
            }};            

            DfareportingUserRolePermissionGroupsGetResponse res = sdk.userRolePermissionGroups.dfareportingUserRolePermissionGroupsGet(req, new DfareportingUserRolePermissionGroupsGetSecurity("aspernatur", "optio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userRolePermissionGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingUserRolePermissionGroupsList

Gets a list of all supported user role permission groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingUserRolePermissionGroupsListRequest;
import org.openapis.openapi.models.operations.DfareportingUserRolePermissionGroupsListResponse;
import org.openapis.openapi.models.operations.DfareportingUserRolePermissionGroupsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingUserRolePermissionGroupsListRequest req = new DfareportingUserRolePermissionGroupsListRequest("eos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ducimus";
                alt = AltEnum.JSON;
                callback = "qui";
                fields = "occaecati";
                key = "cupiditate";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "modi";
                uploadProtocol = "doloribus";
            }};            

            DfareportingUserRolePermissionGroupsListResponse res = sdk.userRolePermissionGroups.dfareportingUserRolePermissionGroupsList(req, new DfareportingUserRolePermissionGroupsListSecurity("ab", "perspiciatis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userRolePermissionGroupsListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
