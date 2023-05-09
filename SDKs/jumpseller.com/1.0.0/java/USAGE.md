<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteJsappsCodeJsonRequest;
import org.openapis.openapi.models.operations.DeleteJsappsCodeJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteJsappsCodeJsonRequest req = new DeleteJsappsCodeJsonRequest("corrupti", "provident", "distinctio");            

            DeleteJsappsCodeJsonResponse res = sdk.apps.deleteJsappsCodeJson(req);

            if (res.deleteJsappsCodeJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->