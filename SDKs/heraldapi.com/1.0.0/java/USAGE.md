<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetApplicationsApplicationIdRequest;
import org.openapis.openapi.models.operations.GetApplicationsApplicationIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetApplicationsApplicationIdRequest req = new GetApplicationsApplicationIdRequest() {{
                applicationId = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
            }}            

            GetApplicationsApplicationIdResponse res = sdk.applications.getApplicationsApplicationId(req);

            if (res.getApplicationsApplicationId200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->