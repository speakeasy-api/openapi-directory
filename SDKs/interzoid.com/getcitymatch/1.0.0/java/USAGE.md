<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetcitymatchRequest;
import org.openapis.openapi.models.operations.GetcitymatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetcitymatchRequest req = new GetcitymatchRequest() {{
                city = "Laruecester";
                license = "quibusdam";
            }}            

            GetcitymatchResponse res = sdk.cityNameSimilarityKey.getcitymatch(req);

            if (res.getcitymatch200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->