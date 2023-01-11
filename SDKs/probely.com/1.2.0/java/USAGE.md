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
                    jwtAuth = new SchemeJwtAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            DeleteKeysIdRequest req = new DeleteKeysIdRequest() {{
                pathParams = new DeleteKeysIdPathParams() {{
                    id = "sit";
                }};
            }};

            DeleteKeysIdResponse res = sdk.apiKeys.deleteKeysId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->