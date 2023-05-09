# permissionAddAndRemovePermissions

### Available Operations

* [deletePermissionAppsAppId](#deletepermissionappsappid) - Removes permission that allows the app to access this user's data
* [getPermissionAppsAppId](#getpermissionappsappid) - Returns permission that allows the app to access this user's data
* [postPermissionAppsAppId](#postpermissionappsappid) - Adds permission to allow the app to access this user's data

## deletePermissionAppsAppId

Removes permission that allows the app to access this user's data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePermissionAppsAppIdRequest;
import org.openapis.openapi.models.operations.DeletePermissionAppsAppIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure", "doloribus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeletePermissionAppsAppIdRequest req = new DeletePermissionAppsAppIdRequest("debitis", "eius");            

            DeletePermissionAppsAppIdResponse res = sdk.permissionAddAndRemovePermissions.deletePermissionAppsAppId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPermissionAppsAppId

Returns permission that allows the app to access this user's data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPermissionAppsAppIdRequest;
import org.openapis.openapi.models.operations.GetPermissionAppsAppIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime", "deleniti") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetPermissionAppsAppIdRequest req = new GetPermissionAppsAppIdRequest("facilis", "in");            

            GetPermissionAppsAppIdResponse res = sdk.permissionAddAndRemovePermissions.getPermissionAppsAppId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPermissionAppsAppId

Adds permission to allow the app to access this user's data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPermissionAppsAppIdRequest;
import org.openapis.openapi.models.operations.PostPermissionAppsAppIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto", "architecto") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostPermissionAppsAppIdRequest req = new PostPermissionAppsAppIdRequest("repudiandae", "ullam") {{
                date = 714242L;
                ip = "nihil";
            }};            

            PostPermissionAppsAppIdResponse res = sdk.permissionAddAndRemovePermissions.postPermissionAppsAppId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
