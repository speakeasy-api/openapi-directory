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

            DfareportingUserRolePermissionsGetRequest req = new DfareportingUserRolePermissionsGetRequest("perspiciatis", "molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ad";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "alias";
                key = "hic";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "nam";
                uploadProtocol = "cumque";
            }};            

            DfareportingUserRolePermissionsGetResponse res = sdk.userRolePermissions.dfareportingUserRolePermissionsGet(req, new DfareportingUserRolePermissionsGetSecurity("eius", "repellendus") {{
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

            DfareportingUserRolePermissionsListRequest req = new DfareportingUserRolePermissionsListRequest("cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "consectetur";
                fields = "dolores";
                ids = new String[]{{
                    add("rerum"),
                    add("voluptatem"),
                    add("porro"),
                }};
                key = "fuga";
                oauthToken = "sunt";
                prettyPrint = false;
                quotaUser = "nobis";
                uploadType = "sapiente";
                uploadProtocol = "veritatis";
            }};            

            DfareportingUserRolePermissionsListResponse res = sdk.userRolePermissions.dfareportingUserRolePermissionsList(req, new DfareportingUserRolePermissionsListSecurity("unde", "incidunt") {{
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
