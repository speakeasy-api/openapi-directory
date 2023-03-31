<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAtmsHeaders;
import org.openapis.openapi.models.operations.GetAtmsRequest;
import org.openapis.openapi.models.operations.GetAtmsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAtmsRequest req = new GetAtmsRequest() {{
                headers = new GetAtmsHeaders() {{
                    ifModifiedSince = "corrupti";
                    ifNoneMatch = "provident";
                }};
            }};            

            GetAtmsResponse res = sdk.atm.getAtms(req);

            if (res.getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->