<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetcountrymatchRequest;
import org.openapis.openapi.models.operations.GetcountrymatchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetcountrymatchRequest req = new GetcountrymatchRequest() {{
                country = "Malta";
                license = "provident";
            }}            

            GetcountrymatchResponse res = sdk.countryMatchSimilarityKey.getcountrymatch(req);

            if (res.getcountrymatch200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->