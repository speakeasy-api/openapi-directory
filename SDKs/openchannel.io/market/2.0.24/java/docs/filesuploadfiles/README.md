# filesUploadFiles

### Available Operations

* [getFiles](#getfiles) - Returns a paginated list of files
* [getFilesByIdOrUrl](#getfilesbyidorurl) - Get the details for a file.
* [getFilesDownload](#getfilesdownload) - A signed URL for downloading a private file can be returned by providing the fileId.
* [postFiles](#postfiles) - Uploads a file.
* [postFilesUrl](#postfilesurl) - Uploads a file from a URL

## getFiles

Returns a paginated list of files

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilesRequest;
import org.openapis.openapi.models.operations.GetFilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid", "laborum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetFilesRequest req = new GetFilesRequest() {{
                limit = 881104L;
                pageNumber = 249796L;
                query = "occaecati";
                sort = "enim";
            }};            

            GetFilesResponse res = sdk.filesUploadFiles.getFiles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFilesByIdOrUrl

Get the details for a file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilesByIdOrUrlRequest;
import org.openapis.openapi.models.operations.GetFilesByIdOrUrlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus", "delectus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetFilesByIdOrUrlRequest req = new GetFilesByIdOrUrlRequest("quidem");            

            GetFilesByIdOrUrlResponse res = sdk.filesUploadFiles.getFilesByIdOrUrl(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFilesDownload

A signed URL for downloading a private file can be returned by providing the fileId.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilesDownloadRequest;
import org.openapis.openapi.models.operations.GetFilesDownloadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident", "nam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetFilesDownloadRequest req = new GetFilesDownloadRequest("id") {{
                validSeconds = 501324L;
            }};            

            GetFilesDownloadResponse res = sdk.filesUploadFiles.getFilesDownload(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFiles

- WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days. 
- This method is called on behalf of a developer.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFilesRequest;
import org.openapis.openapi.models.operations.PostFilesRequestBody;
import org.openapis.openapi.models.operations.PostFilesRequestBodyFile;
import org.openapis.openapi.models.operations.PostFilesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti", "sapiente") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostFilesRequest req = new PostFilesRequest(                new PostFilesRequestBody(                new PostFilesRequestBodyFile("amet".getBytes(), "deserunt"););) {{
                hash = "nisi";
                isPrivate = false;
            }};            

            PostFilesResponse res = sdk.filesUploadFiles.postFiles(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFilesUrl

- WARNING: File URLs or fileIds must be stored somewhere within the customData field for an app, review, developer or user. Unused files will be removed after a few days.
- This method is called on behalf of a developer.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFilesUrlRequest;
import org.openapis.openapi.models.operations.PostFilesUrlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel", "natus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostFilesUrlRequest req = new PostFilesUrlRequest("omnis") {{
                isPrivate = false;
            }};            

            PostFilesUrlResponse res = sdk.filesUploadFiles.postFilesUrl(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
