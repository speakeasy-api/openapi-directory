# files

### Available Operations

* [getFilesFileId](#getfilesfileid) - /files/{file_id}
* [postFilesFileIdGetTemporaryLink](#postfilesfileidgettemporarylink) - /files/{file_id}/get_temporary_link

## getFilesFileId

### Get details for a file.

Retrieve the metadata for an individual file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilesFileIdRequest;
import org.openapis.openapi.models.operations.GetFilesFileIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetFilesFileIdRequest req = new GetFilesFileIdRequest("e6e13b99-d488-4e1e-91e4-50ad2abd4426");            

            GetFilesFileIdResponse res = sdk.files.getFilesFileId(req);

            if (res.getFilesFileId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFilesFileIdGetTemporaryLink

### Get a temporary link to stream the contents of a file

Generates and returns a temporary link to access the content of a file that expires in 15 minutes. The Content-Type of the link is determined automatically by the file's format.

<!-- theme: info -->

> #### The Link URL should not be displayed on your front-end
> Since these links are temporary, Herald encourages you to not display the URL on your front end.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFilesFileIdGetTemporaryLinkRequest;
import org.openapis.openapi.models.operations.PostFilesFileIdGetTemporaryLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PostFilesFileIdGetTemporaryLinkRequest req = new PostFilesFileIdGetTemporaryLinkRequest("802d502a-94bb-44f6-bc96-9e9a3efa77df");            

            PostFilesFileIdGetTemporaryLinkResponse res = sdk.files.postFilesFileIdGetTemporaryLink(req);

            if (res.postFilesFileIdGetTemporaryLink200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
