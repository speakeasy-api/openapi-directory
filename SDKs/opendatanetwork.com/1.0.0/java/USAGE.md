<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAMapRequest;
import org.openapis.openapi.models.operations.CreateAMapResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAMapRequest req = new CreateAMapRequest("corrupti", "provident") {{
                xAppToken = "distinctio";
                appToken = "quibusdam";
                constraint = "unde";
            }};            

            CreateAMapResponse res = sdk.createAMap(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->