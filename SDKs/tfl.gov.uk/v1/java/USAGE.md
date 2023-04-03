<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AccidentStatsGetRequest;
import org.openapis.openapi.models.operations.AccidentStatsGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AccidentStatsGetRequest req = new AccidentStatsGetRequest() {{
                year = 548814;
            }}            

            AccidentStatsGetResponse res = sdk.accidentStats.accidentStatsGet(req);

            if (res.tflApiPresentationEntitiesAccidentStatsAccidentDetails.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->