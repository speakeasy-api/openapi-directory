<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddShortlinkResponse;
import org.openapis.openapi.models.shared.ShortlinkRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ShortlinkRequest req = new ShortlinkRequest("corrupti", "provident");            

            AddShortlinkResponse res = sdk.addShortlink.addShortlink(req);

            if (res.shortlinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->