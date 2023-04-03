<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CorrelationRequest;
import org.openapis.openapi.models.operations.CorrelationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CorrelationRequest req = new CorrelationRequest() {{
                limit = "1000";
                tokens = "3375, 3306";
            }}            

            CorrelationResponse res = sdk.correlation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->