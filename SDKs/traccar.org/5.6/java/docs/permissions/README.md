# permissions

## Overview

User permissions and other object linking

### Available Operations

* [deletePermissions](#deletepermissions) - Unlink an Object from another Object
* [postPermissions](#postpermissions) - Link an Object to another Object

## deletePermissions

Unlink an Object from another Object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePermissionsResponse;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur", "perferendis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Permission req = new Permission() {{
                attributeId = 229219L;
                calendarId = 758379L;
                deviceId = 881586L;
                driverId = 320017L;
                geofenceId = 904425L;
                groupId = 383464L;
                managedUserId = 645785L;
                notificationId = 588317L;
                userId = 324683L;
            }};            

            DeletePermissionsResponse res = sdk.permissions.deletePermissions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPermissions

Link an Object to another Object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPermissionsResponse;
import org.openapis.openapi.models.shared.Permission;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus", "totam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Permission req = new Permission() {{
                attributeId = 628982L;
                calendarId = 55L;
                deviceId = 872651L;
                driverId = 311860L;
                geofenceId = 273542L;
                groupId = 425451L;
                managedUserId = 798047L;
                notificationId = 885338L;
                userId = 185636L;
            }};            

            PostPermissionsResponse res = sdk.permissions.postPermissions(req);

            if (res.permission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
