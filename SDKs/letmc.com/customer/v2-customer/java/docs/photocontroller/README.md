# photoController

### Available Operations

* [photoControllerGetPhotoDownload](#photocontrollergetphotodownload) - Downloads the photo of a property given the photo ID.

## photoControllerGetPhotoDownload

Downloads the photo of a property given the photo ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PhotoControllerGetPhotoDownloadRequest;
import org.openapis.openapi.models.operations.PhotoControllerGetPhotoDownloadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PhotoControllerGetPhotoDownloadRequest req = new PhotoControllerGetPhotoDownloadRequest("totam", "porro", "dolorum") {{
                height = 118274;
                width = 720633;
            }};            

            PhotoControllerGetPhotoDownloadResponse res = sdk.photoController.photoControllerGetPhotoDownload(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
