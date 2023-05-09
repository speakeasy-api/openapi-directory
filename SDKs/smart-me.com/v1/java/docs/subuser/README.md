# subUser

### Available Operations

* [subUserDelete](#subuserdelete) - Delete a subuser
* [subUserGet](#subuserget) - Get a sub user. The user must be assigend to the user that makes this call.
* [subUserPostForm](#subuserpostform) - Creates or updates a subuser.
            To create a new user set no ID (empty)
* [subUserPostJson](#subuserpostjson) - Creates or updates a subuser.
            To create a new user set no ID (empty)
* [subUserPostRaw](#subuserpostraw) - Creates or updates a subuser.
            To create a new user set no ID (empty)

## subUserDelete

Delete a subuser

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubUserDeleteRequest;
import org.openapis.openapi.models.operations.SubUserDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubUserDeleteRequest req = new SubUserDeleteRequest("saepe");            

            SubUserDeleteResponse res = sdk.subUser.subUserDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subUserGet

Get a sub user. The user must be assigend to the user that makes this call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubUserGetRequest;
import org.openapis.openapi.models.operations.SubUserGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubUserGetRequest req = new SubUserGetRequest("necessitatibus");            

            SubUserGetResponse res = sdk.subUser.subUserGet(req);

            if (res.subUserData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subUserPostForm

Creates or updates a subuser.
            To create a new user set no ID (empty)

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubUserPostFormResponse;
import org.openapis.openapi.models.shared.SubUserData;
import org.openapis.openapi.models.shared.SubUserDataPermissionLevelEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SubUserData req = new SubUserData() {{
                accessEndDate = OffsetDateTime.parse("2022-11-17T19:30:54.837Z");
                accessTimeStartDate = OffsetDateTime.parse("2022-04-11T12:10:44.801Z");
                email = "Danny_Breitenberg@gmail.com";
                id = "e35b60eb-1ea4-4265-95ba-3c28744ed53b";
                newPassword = "blanditiis";
                permissionLevel = SubUserDataPermissionLevelEnum.SELECTED_FOLDER_ONLY;
                username = "Turner_Douglas";
            }};            

            SubUserPostFormResponse res = sdk.subUser.subUserPostForm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subUserPostJson

Creates or updates a subuser.
            To create a new user set no ID (empty)

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubUserPostJsonResponse;
import org.openapis.openapi.models.shared.SubUserData;
import org.openapis.openapi.models.shared.SubUserDataPermissionLevelEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SubUserData req = new SubUserData() {{
                accessEndDate = OffsetDateTime.parse("2021-06-10T23:47:11.065Z");
                accessTimeStartDate = OffsetDateTime.parse("2021-12-15T01:59:29.520Z");
                email = "Alberto96@hotmail.com";
                id = "2fb7b194-a276-4b26-916f-e1f08f4294e3";
                newPassword = "ea";
                permissionLevel = SubUserDataPermissionLevelEnum.SELECTED_FOLDER_ONLY;
                username = "Katrina27";
            }};            

            SubUserPostJsonResponse res = sdk.subUser.subUserPostJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subUserPostRaw

Creates or updates a subuser.
            To create a new user set no ID (empty)

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubUserPostRawResponse;
import org.openapis.openapi.models.shared.SubUserData;
import org.openapis.openapi.models.shared.SubUserDataPermissionLevelEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "voluptate".getBytes()            

            SubUserPostRawResponse res = sdk.subUser.subUserPostRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
