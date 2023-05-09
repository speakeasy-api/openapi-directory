# previews

### Available Operations

* [previewsRead](#previewsread) - Get preview image of uploaded file

## previewsRead

This GET-Method returns the URL where the preview image of uploaded file can downloaded from.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreviewsReadRequest;
import org.openapis.openapi.models.operations.PreviewsReadResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    token = "YOUR_API_KEY_HERE";
                }})
                .build();

            PreviewsReadRequest req = new PreviewsReadRequest("quibusdam");            

            PreviewsReadResponse res = sdk.previews.previewsRead(req);

            if (res.previewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
