# permissions

## Overview

Permissions and Authorization

### Available Operations

* [storyIdCollaboratorsUseridPermissiontypeGet](#storyidcollaboratorsuseridpermissiontypeget) - Permissions: Story Authorization for a User
* [storyPermissionTypesGet](#storypermissiontypesget) - Permissions: List Permission Types

## storyIdCollaboratorsUseridPermissiontypeGet

Check whether user have certain types of permissions.  Use http status codes to understand if permission is granted - 204 = Granted, 403 = Forbidden

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryIdCollaboratorsUseridPermissiontypeGetRequest;
import org.openapis.openapi.models.operations.StoryIdCollaboratorsUseridPermissiontypeGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryIdCollaboratorsUseridPermissiontypeGetRequest req = new StoryIdCollaboratorsUseridPermissiontypeGetRequest("6ae395ef-b9ba-488f-ba66-997074ba4469", "nobis", "6e214195-9890-4afa-963e-2516fe4c8b71");            

            StoryIdCollaboratorsUseridPermissiontypeGetResponse res = sdk.permissions.storyIdCollaboratorsUseridPermissiontypeGet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## storyPermissionTypesGet

Returns a list of possible user permission types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StoryPermissionTypesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StoryPermissionTypesGetResponse res = sdk.permissions.storyPermissionTypesGet();

            if (res.permissionTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
