# comments

### Available Operations

* [commentsDelete](#commentsdelete) - Delete a comment
* [commentsPut](#commentsput) - Update a comment
* [commentsRead](#commentsread) - Retrieve a comment

## commentsDelete

Deletes a comment. This action can be undone by setting deleted to False in a comment update request.
#### Returns
If the request is successful, no content is returned.

If the request is unsuccessful, a JSON object with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommentsDeleteRequest;
import org.openapis.openapi.models.operations.CommentsDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CommentsDeleteRequest req = new CommentsDeleteRequest("hic");            

            CommentsDeleteResponse res = sdk.comments.commentsDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## commentsPut

Updates the specified comment by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
#### Returns
Returns JSON with a `data` key containing the new representation of the updated comment, if the request is successful.

If the request is unsuccessful, JSON with an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommentsPutRequest;
import org.openapis.openapi.models.operations.CommentsPutResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CommentsPutRequest req = new CommentsPutRequest(                new java.util.HashMap<String, Object>() {{
                                put("fuga", "in");
                                put("corporis", "iste");
                                put("iure", "saepe");
                                put("quidem", "architecto");
                            }}, "ipsa");            

            CommentsPutResponse res = sdk.comments.commentsPut(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## commentsRead

Retrieves the details of a comment
#### Returns
Returns a JSON object with a `data` key containing the representation of the requested comment, if the request was successful.

If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommentsReadRequest;
import org.openapis.openapi.models.operations.CommentsReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CommentsReadRequest req = new CommentsReadRequest("reiciendis");            

            CommentsReadResponse res = sdk.comments.commentsRead(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
