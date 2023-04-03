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

            AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest req = new AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest() {{
                aerodromesByDistance = new AerodromesByDistance() {{
                    distance = 592845;
                    latitude = 844266;
                    longitude = 857946;
                }};
                xApiKey = "corrupti";
            }}            

            AerodromesByDistanceUsV1AerodromesDistanceQueryPostResponse res = sdk.aerodromes.aerodromesByDistanceUsV1AerodromesDistanceQueryPost(req);

            if (res.aerodromeDistanceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->