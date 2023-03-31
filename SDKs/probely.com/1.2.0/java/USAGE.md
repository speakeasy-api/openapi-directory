<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteKeysIdPathParams;
import org.openapis.openapi.models.operations.DeleteKeysIdRequest;
import org.openapis.openapi.models.operations.DeleteKeysIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    jwtAuth = new SchemeJwtAuth() {{
                        authorization = "Bearer YOUR_BEARER_TOKEN_HERE";
                    }};
                }})
                .build();

            DeleteKeysIdRequest req = new DeleteKeysIdRequest() {{
                pathParams = new DeleteKeysIdPathParams() {{
                    id = "jMXUw-BE_2vd";
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