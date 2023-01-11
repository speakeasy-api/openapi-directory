<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    mwoAuth = new SchemeMwoAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            DeleteCacheRequest req = new DeleteCacheRequest() {{
                pathParams = new DeleteCachePathParams() {{
                    key = "fuga";
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