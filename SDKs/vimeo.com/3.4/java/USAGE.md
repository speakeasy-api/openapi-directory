<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetEndpointsRequest;
import org.openapis.openapi.models.operations.GetEndpointsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetEndpointsRequest req = new GetEndpointsRequest() {{
                openapi = true;
            }}            

            GetEndpointsResponse res = sdk.apiInformation.getEndpoints(req);

            if (res.endpoint.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->