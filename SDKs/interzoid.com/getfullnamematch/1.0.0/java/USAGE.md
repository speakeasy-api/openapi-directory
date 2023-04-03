<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetfullnamematchRequest;
import org.openapis.openapi.models.operations.GetfullnamematchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetfullnamematchRequest req = new GetfullnamematchRequest() {{
                fullname = "corrupti";
                license = "provident";
            }}            

            GetfullnamematchResponse res = sdk.fullNameMatchSimilarityKey.getfullnamematch(req);

            if (res.getfullnamematch200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->