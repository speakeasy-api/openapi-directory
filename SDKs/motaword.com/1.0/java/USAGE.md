<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteCachePathParams;
import org.openapis.openapi.models.operations.DeleteCacheRequest;
import org.openapis.openapi.models.operations.DeleteCacheResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    mwoAuth = new SchemeMwoAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }})
                .build();

            DeleteCacheRequest req = new DeleteCacheRequest() {{
                pathParams = new DeleteCachePathParams() {{
                    key = "corrupti";
                }};
            }};            

            DeleteCacheResponse res = sdk.deleteCache(req);

            if (res.operationStatus.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->