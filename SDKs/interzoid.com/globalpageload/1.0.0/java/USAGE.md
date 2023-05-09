<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GlobalpageloadRequest;
import org.openapis.openapi.models.operations.GlobalpageloadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GlobalpageloadRequest req = new GlobalpageloadRequest("corrupti", "provident", "distinctio");            

            GlobalpageloadResponse res = sdk.pageLoadPerformanceTime.globalpageload(req);

            if (res.globalpageload200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->