# permission

### Available Operations

* [deletePermission](#deletepermission) - Deletes the permission object
* [deletePermissionTag](#deletepermissiontag) - Delete Permission tag
* [getAllPermissionTags](#getallpermissiontags) - Get all Permission tags
* [getAllPermissionsWithTag](#getallpermissionswithtag) - Get links to tagged Permissions
* [getPermission](#getpermission) - Gets the permission object
* [getPermissions](#getpermissions) - Gets all permission objects
* [getTagFromPermission](#gettagfrompermission) - Get Permission tag
* [getTagsFromPermission](#gettagsfrompermission) - Get tags from Permission
* [getUserPermissions](#getuserpermissions) - Gets the user permissions
* [getUsersFromPermission](#getusersfrompermission) - Gets the users with the specified permission
* [patchPermission](#patchpermission) - Patch permission object
* [postPermission](#postpermission) - Post permisson object
* [putPermission](#putpermission) - Puts permisson object
* [putPermissionTag](#putpermissiontag) - Insert Permission tag

## deletePermission

Deletes the permission object from the application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePermissionRequest;
import org.openapis.openapi.models.operations.DeletePermissionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePermissionRequest req = new DeletePermissionRequest("rerum", "ea", "aperiam");            

            DeletePermissionResponse res = sdk.permission.deletePermission(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePermissionTag

Deletes a tag from the Permission

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePermissionTagRequest;
import org.openapis.openapi.models.operations.DeletePermissionTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePermissionTagRequest req = new DeletePermissionTagRequest("dignissimos", "repellat", "velit", "porro");            

            DeletePermissionTagResponse res = sdk.permission.deletePermissionTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllPermissionTags

Get all tags from all Permissions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllPermissionTagsRequest;
import org.openapis.openapi.models.operations.GetAllPermissionTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllPermissionTagsRequest req = new GetAllPermissionTagsRequest("provident", "consectetur");            

            GetAllPermissionTagsResponse res = sdk.permission.getAllPermissionTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllPermissionsWithTag

Gets the Permissions with the specified tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllPermissionsWithTagRequest;
import org.openapis.openapi.models.operations.GetAllPermissionsWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllPermissionsWithTagRequest req = new GetAllPermissionsWithTagRequest("eligendi", "dignissimos", "consectetur");            

            GetAllPermissionsWithTagResponse res = sdk.permission.getAllPermissionsWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPermission

Gets the permission object for application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPermissionRequest;
import org.openapis.openapi.models.operations.GetPermissionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPermissionRequest req = new GetPermissionRequest("soluta", "natus", "temporibus");            

            GetPermissionResponse res = sdk.permission.getPermission(req);

            if (res.permission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPermissions

Gets all permission objects for application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPermissionsRequest;
import org.openapis.openapi.models.operations.GetPermissionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPermissionsRequest req = new GetPermissionsRequest("officia", "amet");            

            GetPermissionsResponse res = sdk.permission.getPermissions(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagFromPermission

Gets a tag from the Permission

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagFromPermissionRequest;
import org.openapis.openapi.models.operations.GetTagFromPermissionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagFromPermissionRequest req = new GetTagFromPermissionRequest("tenetur", "aspernatur", "quo", "itaque");            

            GetTagFromPermissionResponse res = sdk.permission.getTagFromPermission(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsFromPermission

Gets all tags from the Permission

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsFromPermissionRequest;
import org.openapis.openapi.models.operations.GetTagsFromPermissionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsFromPermissionRequest req = new GetTagsFromPermissionRequest("illum", "laborum", "dignissimos");            

            GetTagsFromPermissionResponse res = sdk.permission.getTagsFromPermission(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserPermissions

Gets the user permission instances

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserPermissionsRequest;
import org.openapis.openapi.models.operations.GetUserPermissionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserPermissionsRequest req = new GetUserPermissionsRequest("vero", "qui", "consectetur");            

            GetUserPermissionsResponse res = sdk.permission.getUserPermissions(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersFromPermission

Gets the users with the specified permission

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersFromPermissionRequest;
import org.openapis.openapi.models.operations.GetUsersFromPermissionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersFromPermissionRequest req = new GetUsersFromPermissionRequest("repellat", "explicabo", "explicabo");            

            GetUsersFromPermissionResponse res = sdk.permission.getUsersFromPermission(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchPermission

Patch the permission object at the specified resource location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchPermissionRequest;
import org.openapis.openapi.models.operations.PatchPermissionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchPermissionRequest req = new PatchPermissionRequest("exercitationem", "nihil", "non");            

            PatchPermissionResponse res = sdk.permission.patchPermission(req);

            if (res.permission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPermission

Post the new permission object into the application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPermissionRequest;
import org.openapis.openapi.models.operations.PostPermissionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPermissionRequest req = new PostPermissionRequest("ab", "illo");            

            PostPermissionResponse res = sdk.permission.postPermission(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPermission

Puts the permission object into the specified resource location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPermissionRequest;
import org.openapis.openapi.models.operations.PutPermissionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutPermissionRequest req = new PutPermissionRequest("hic", "deserunt", "delectus");            

            PutPermissionResponse res = sdk.permission.putPermission(req);

            if (res.permission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putPermissionTag

Inserts a tag on the Permission

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutPermissionTagRequest;
import org.openapis.openapi.models.operations.PutPermissionTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutPermissionTagRequest req = new PutPermissionTagRequest("non", "distinctio", "in", "exercitationem");            

            PutPermissionTagResponse res = sdk.permission.putPermissionTag(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
