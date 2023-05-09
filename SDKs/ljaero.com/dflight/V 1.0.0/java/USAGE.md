<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest;
import org.openapis.openapi.models.operations.AerodromesByDistanceUsV1AerodromesDistanceQueryPostResponse;
import org.openapis.openapi.models.shared.AerodromesByDistance;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest req = new AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest(                new AerodromesByDistance(592845L, 844266L, 857946L);) {{
                xApiKey = "corrupti";
            }};            

            AerodromesByDistanceUsV1AerodromesDistanceQueryPostResponse res = sdk.aerodromes.aerodromesByDistanceUsV1AerodromesDistanceQueryPost(req);

            if (res.aerodromeDistanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->