# folderAssign

### Available Operations

* [folderAssignPost](#folderassignpost) - Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.

## folderAssignPost

Assign a folder (source) or meter to another folder (target). Can be used to create a folder structure.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FolderAssignPostRequest;
import org.openapis.openapi.models.operations.FolderAssignPostResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FolderAssignPostRequest req = new FolderAssignPostRequest("architecto", "magnam");            

            FolderAssignPostResponse res = sdk.folderAssign.folderAssignPost(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
