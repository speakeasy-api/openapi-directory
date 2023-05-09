# file

### Available Operations

* [getFile](#getfile) - Get File from Project.  Works for Regular and Remote Files
* [getFileTags](#getfiletags) - List Tags from Workgroup and Project.
* [getFiles](#getfiles) - List Files from Project.  Works for Regular and Remote Files
* [uploadFile](#uploadfile) - Upload File to Project.  A multipart/form-data request with a name "file"

## getFile

Get File from Project.  Works for Regular and Remote Files

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileRequest;
import org.openapis.openapi.models.operations.GetFileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFileRequest req = new GetFileRequest("reiciendis", "voluptatibus", "vero");            

            GetFileResponse res = sdk.file.getFile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFileTags

List Tags from Workgroup and Project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileTagsRequest;
import org.openapis.openapi.models.operations.GetFileTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFileTagsRequest req = new GetFileTagsRequest("nihil", "praesentium");            

            GetFileTagsResponse res = sdk.file.getFileTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFiles

List Files from Project.  Works for Regular and Remote Files

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilesRequest;
import org.openapis.openapi.models.operations.GetFilesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFilesRequest req = new GetFilesRequest("voluptatibus", "ipsa");            

            GetFilesResponse res = sdk.file.getFiles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadFile

Upload File to Project.  A multipart/form-data request with a name "file"

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadFileRequest;
import org.openapis.openapi.models.operations.UploadFileRequestBody;
import org.openapis.openapi.models.operations.UploadFileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadFileRequest req = new UploadFileRequest("omnis", "voluptate") {{
                requestBody = new UploadFileRequestBody("cum".getBytes(), "perferendis");;
            }};            

            UploadFileResponse res = sdk.file.uploadFile(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
