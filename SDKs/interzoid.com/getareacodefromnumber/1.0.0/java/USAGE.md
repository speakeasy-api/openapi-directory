<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetareacodefromnumberRequest;
import org.openapis.openapi.models.operations.GetareacodefromnumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetareacodefromnumberRequest req = new GetareacodefromnumberRequest("corrupti", "provident");            

            GetareacodefromnumberResponse res = sdk.areaCodeInformation.getareacodefromnumber(req);

            if (res.getareacodefromnumber200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->