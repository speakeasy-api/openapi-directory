<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetzipcodeinfoRequest;
import org.openapis.openapi.models.operations.GetzipcodeinfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetzipcodeinfoRequest req = new GetzipcodeinfoRequest("corrupti", "provident");            

            GetzipcodeinfoResponse res = sdk.detailedZipCodeInformation.getzipcodeinfo(req);

            if (res.getzipcodeinfo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->