<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CancelAuthorizationPathParams;
import org.openapis.openapi.models.operations.CancelAuthorizationRequest;
import org.openapis.openapi.models.operations.CancelAuthorizationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelAuthorizationRequest req = new CancelAuthorizationRequest() {{
                pathParams = new CancelAuthorizationPathParams() {{
                    authorizationToken = "corrupti";
                }};
            }};            

            CancelAuthorizationResponse res = sdk.orders.cancelAuthorization(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->