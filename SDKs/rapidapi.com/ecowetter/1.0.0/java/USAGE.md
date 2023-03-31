<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetPublicHistoryQueryParams;
import org.openapis.openapi.models.operations.GetPublicHistoryRequest;
import org.openapis.openapi.models.operations.GetPublicHistoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicHistoryRequest req = new GetPublicHistoryRequest() {{
                queryParams = new GetPublicHistoryQueryParams() {{
                    from = "corrupti";
                    q = "provident";
                    to = "distinctio";
                }};
            }};            

            GetPublicHistoryResponse res = sdk.default_.getPublicHistory(req);

            if (res.getPublicHistory200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->