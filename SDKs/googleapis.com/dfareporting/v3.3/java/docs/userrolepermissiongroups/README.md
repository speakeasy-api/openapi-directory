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

            DfareportingUserRolePermissionGroupsGetRequest req = new DfareportingUserRolePermissionGroupsGetRequest("temporibus", "consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sit";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "quasi";
                key = "temporibus";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "explicabo";
                uploadProtocol = "sequi";
            }};            

            DfareportingUserRolePermissionGroupsGetResponse res = sdk.userRolePermissionGroups.dfareportingUserRolePermissionGroupsGet(req, new DfareportingUserRolePermissionGroupsGetSecurity("rem", "placeat") {{
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

            DfareportingUserRolePermissionGroupsListRequest req = new DfareportingUserRolePermissionGroupsListRequest("voluptates") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sint";
                alt = AltEnum.MEDIA;
                callback = "illo";
                fields = "enim";
                key = "fugiat";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "facilis";
                uploadProtocol = "velit";
            }};            

            DfareportingUserRolePermissionGroupsListResponse res = sdk.userRolePermissionGroups.dfareportingUserRolePermissionGroupsList(req, new DfareportingUserRolePermissionGroupsListSecurity("quaerat", "culpa") {{
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
