<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetemailinfoRequest;
import org.openapis.openapi.models.operations.GetemailinfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetemailinfoRequest req = new GetemailinfoRequest("corrupti", "provident");            

            GetemailinfoResponse res = sdk.emailAddressInformation.getemailinfo(req);

            if (res.getemailinfo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->