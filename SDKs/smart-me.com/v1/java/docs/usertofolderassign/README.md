# userToFolderAssign

### Available Operations

* [userToFolderAssignDelete](#usertofolderassigndelete) - Deletes a user to folder assignement
* [userToFolderAssignPost](#usertofolderassignpost) - Assign a user to a folder

## userToFolderAssignDelete

Deletes a user to folder assignement

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserToFolderAssignDeleteRequest;
import org.openapis.openapi.models.operations.UserToFolderAssignDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserToFolderAssignDeleteRequest req = new UserToFolderAssignDeleteRequest("reiciendis", "ex");            

            UserToFolderAssignDeleteResponse res = sdk.userToFolderAssign.userToFolderAssignDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userToFolderAssignPost

Assign a user to a folder

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserToFolderAssignPostRequest;
import org.openapis.openapi.models.operations.UserToFolderAssignPostResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserToFolderAssignPostRequest req = new UserToFolderAssignPostRequest("sit", "non", "officiis");            

            UserToFolderAssignPostResponse res = sdk.userToFolderAssign.userToFolderAssignPost(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
