<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetglobaltimeRequest;
import org.openapis.openapi.models.operations.GetglobaltimeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetglobaltimeRequest req = new GetglobaltimeRequest() {{
                license = "corrupti";
                locale = "provident";
            }}            

            GetglobaltimeResponse res = sdk.currentGlobalTime.getglobaltime(req);

            if (res.getglobaltime200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->