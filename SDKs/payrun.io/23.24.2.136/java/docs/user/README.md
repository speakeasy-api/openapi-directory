# user

### Available Operations

* [deleteUser](#deleteuser) - Deletes the user object
* [deleteUserTag](#deleteusertag) - Delete user tag
* [getAllUserTags](#getallusertags) - Get all user tags
* [getAllUsersWithTag](#getalluserswithtag) - Get links to tagged users
* [getTagFromUser](#gettagfromuser) - Get user tag
* [getTagsFromUser](#gettagsfromuser) - Get tags from user
* [getUser](#getuser) - Gets the user object
* [getUserPermissions](#getuserpermissions) - Gets the user permissions
* [getUsers](#getusers) - Gets all user objects
* [patchUser](#patchuser) - Patch user object
* [postUser](#postuser) - Post user object
* [putUser](#putuser) - Puts user object
* [putUserTag](#putusertag) - Insert user tag

## deleteUser

Deletes the user object from the application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserRequest;
import org.openapis.openapi.models.operations.DeleteUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUserRequest req = new DeleteUserRequest("perferendis", "laborum", "omnis");            

            DeleteUserResponse res = sdk.user.deleteUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserTag

Deletes a tag from the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserTagRequest;
import org.openapis.openapi.models.operations.DeleteUserTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteUserTagRequest req = new DeleteUserTagRequest("nihil", "tenetur", "sapiente", "velit");            

            DeleteUserTagResponse res = sdk.user.deleteUserTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllUserTags

Get all tags from all users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllUserTagsRequest;
import org.openapis.openapi.models.operations.GetAllUserTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllUserTagsRequest req = new GetAllUserTagsRequest("adipisci", "non");            

            GetAllUserTagsResponse res = sdk.user.getAllUserTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllUsersWithTag

Gets the users with the specified tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllUsersWithTagRequest;
import org.openapis.openapi.models.operations.GetAllUsersWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllUsersWithTagRequest req = new GetAllUsersWithTagRequest("optio", "illum", "at");            

            GetAllUsersWithTagResponse res = sdk.user.getAllUsersWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagFromUser

Gets a tag from the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagFromUserRequest;
import org.openapis.openapi.models.operations.GetTagFromUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagFromUserRequest req = new GetTagFromUserRequest("tenetur", "molestias", "ipsam", "esse");            

            GetTagFromUserResponse res = sdk.user.getTagFromUser(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsFromUser

Gets all tags from the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsFromUserRequest;
import org.openapis.openapi.models.operations.GetTagsFromUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsFromUserRequest req = new GetTagsFromUserRequest("laborum", "perspiciatis", "voluptates");            

            GetTagsFromUserResponse res = sdk.user.getTagsFromUser(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUser

Gets the user object for application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserRequest;
import org.openapis.openapi.models.operations.GetUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserRequest req = new GetUserRequest("eum", "quasi", "quas");            

            GetUserResponse res = sdk.user.getUser(req);

            if (res.user != null) {
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

            GetUserPermissionsRequest req = new GetUserPermissionsRequest("odio", "commodi", "porro");            

            GetUserPermissionsResponse res = sdk.user.getUserPermissions(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsers

Gets all user objects for application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersRequest;
import org.openapis.openapi.models.operations.GetUsersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsersRequest req = new GetUsersRequest("aliquid", "mollitia");            

            GetUsersResponse res = sdk.user.getUsers(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchUser

Patch the user object at the specified resource location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchUserRequest;
import org.openapis.openapi.models.operations.PatchUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchUserRequest req = new PatchUserRequest("quidem", "explicabo", "et");            

            PatchUserResponse res = sdk.user.patchUser(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUser

Post the new user object into the application

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUserRequest;
import org.openapis.openapi.models.operations.PostUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUserRequest req = new PostUserRequest("nulla", "magni");            

            PostUserResponse res = sdk.user.postUser(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUser

Puts the user object into the specified resource location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUserRequest;
import org.openapis.openapi.models.operations.PutUserResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUserRequest req = new PutUserRequest("natus", "illum", "a");            

            PutUserResponse res = sdk.user.putUser(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUserTag

Inserts a tag on the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUserTagRequest;
import org.openapis.openapi.models.operations.PutUserTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutUserTagRequest req = new PutUserTagRequest("impedit", "unde", "ut", "facere");            

            PutUserTagResponse res = sdk.user.putUserTag(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
