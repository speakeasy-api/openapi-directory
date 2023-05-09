# folder

### Available Operations

* [folderGet](#folderget) - Gets the Values for a folder or a meter

## folderGet

Gets the Values for a folder or a meter

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FolderGetRequest;
import org.openapis.openapi.models.operations.FolderGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FolderGetRequest req = new FolderGetRequest("aspernatur");            

            FolderGetResponse res = sdk.folder.folderGet(req);

            if (res.folderData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
