<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBasicUserInformationRequest;
import org.openapis.openapi.models.operations.GetBasicUserInformationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBasicUserInformationRequest req = new GetBasicUserInformationRequest("corrupti");            

            GetBasicUserInformationResponse res = sdk.authController.getBasicUserInformation(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->