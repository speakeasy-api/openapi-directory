# images

### Available Operations

* [getAllImageUrls](#getallimageurls) - Retrieve all library item images

## getAllImageUrls

Retrieves all library items images used by the organization, sorted by updated date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllImageUrlsRequest;
import org.openapis.openapi.models.operations.GetAllImageUrlsResponse;
import org.openapis.openapi.models.operations.GetAllImageUrlsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllImageUrlsRequest req = new GetAllImageUrlsRequest("75088e51-8620-465e-904f-3b1194b8abf6");            

            GetAllImageUrlsResponse res = sdk.images.getAllImageUrls(req, new GetAllImageUrlsSecurity("alias") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.libraryImagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
