<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationsApplicationIdRequest;
import org.openapis.openapi.models.operations.GetApplicationsApplicationIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetApplicationsApplicationIdRequest req = new GetApplicationsApplicationIdRequest("9bd9d8d6-9a67-44e0-b467-cc8796ed151a");            

            GetApplicationsApplicationIdResponse res = sdk.applications.getApplicationsApplicationId(req);

            if (res.getApplicationsApplicationId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->