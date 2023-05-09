<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetstateabbreviationRequest;
import org.openapis.openapi.models.operations.GetstateabbreviationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetstateabbreviationRequest req = new GetstateabbreviationRequest("corrupti", "provident");            

            GetstateabbreviationResponse res = sdk.stateDataStandardization.getstateabbreviation(req);

            if (res.getstateabbreviation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->