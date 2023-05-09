# uploads

### Available Operations

* [uploadsCreate](#uploadscreate) - Upload a new image

## uploadsCreate

This POST-Method uploads a new file on the server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadsCreateRequestBody;
import org.openapis.openapi.models.operations.UploadsCreateRequestBodyFile;
import org.openapis.openapi.models.operations.UploadsCreateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            UploadsCreateRequestBody req = new UploadsCreateRequestBody(                new UploadsCreateRequestBodyFile("quidem".getBytes(), "architecto"););            

            UploadsCreateResponse res = sdk.uploads.uploadsCreate(req);

            if (res.fileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
