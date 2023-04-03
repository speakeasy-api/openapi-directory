<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DfsSlateOwnershipProjectionsBySlateidFormatEnum;
import org.openapis.openapi.models.operations.DfsSlateOwnershipProjectionsBySlateidRequest;
import org.openapis.openapi.models.operations.DfsSlateOwnershipProjectionsBySlateidResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            DfsSlateOwnershipProjectionsBySlateidRequest req = new DfsSlateOwnershipProjectionsBySlateidRequest() {{
                format = "JSON";
                slateId = "provident";
            }}            

            DfsSlateOwnershipProjectionsBySlateidResponse res = sdk.dfsSlateOwnershipProjectionsBySlateid(req);

            if (res.dfsSlateWithOwnershipProjection.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->