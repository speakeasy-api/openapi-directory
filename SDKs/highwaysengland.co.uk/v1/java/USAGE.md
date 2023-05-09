<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AreasGetRequest;
import org.openapis.openapi.models.operations.AreasGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AreasGetRequest req = new AreasGetRequest("corrupti");            

            AreasGetResponse res = sdk.areas.areasGet(req);

            if (res.areaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->