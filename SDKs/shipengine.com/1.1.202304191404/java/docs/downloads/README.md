# downloads

## Overview

downloads


### Available Operations

* [downloadFile](#downloadfile) - Download File

## downloadFile

Get File

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadFileRequest;
import org.openapis.openapi.models.operations.DownloadFileResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DownloadFileRequest req = new DownloadFileRequest("omnis", "nemo", "minima") {{
                download = "excepturi";
                rotation = 38425;
            }};            

            DownloadFileResponse res = sdk.downloads.downloadFile(req);

            if (res.downloadFilePdfResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
