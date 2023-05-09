# async

### Available Operations

* [downloadAsync](#downloadasync) - Download result of an async operation

## downloadAsync

Download the result of an async operation that you have requested in other endpoints.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadAsyncRequest;
import org.openapis.openapi.models.operations.DownloadAsyncResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DownloadAsyncRequest req = new DownloadAsyncRequest("esse");            

            DownloadAsyncResponse res = sdk.async.downloadAsync(req);

            if (res.downloadAsync200ApplicationOctetStreamBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
