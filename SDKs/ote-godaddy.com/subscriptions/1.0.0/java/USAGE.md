<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CancelRequest;
import org.openapis.openapi.models.operations.CancelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelRequest req = new CancelRequest() {{
                xShopperId = "corrupti";
                subscriptionId = "provident";
            }}            

            CancelResponse res = sdk.v1.cancel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->