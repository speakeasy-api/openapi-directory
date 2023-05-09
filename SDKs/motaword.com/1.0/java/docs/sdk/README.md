# SDK

## Overview

Use MotaWord API to post and track your translation projects.

<https://www.motaword.com/developer>
### Available Operations

* [deleteCache](#deletecache) - Clear cache by key

## deleteCache

Clear cache by key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCacheRequest;
import org.openapis.openapi.models.operations.DeleteCacheResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteCacheRequest req = new DeleteCacheRequest("quibusdam");            

            DeleteCacheResponse res = sdk.sdk.deleteCache(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
