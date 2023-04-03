<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GETMostemailedSectionTimePeriodJsonSecurity;
import org.openapis.openapi.models.operations.GETMostemailedSectionTimePeriodJsonRequest;
import org.openapis.openapi.models.operations.GETMostemailedSectionTimePeriodJsonResponse;
import org.openapis.openapi.models.shared.TimePeriodEnum;
import org.openapis.openapi.models.shared.SectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETMostemailedSectionTimePeriodJsonRequest req = new GETMostemailedSectionTimePeriodJsonRequest() {{
                section = "Public Editor";
                timePeriod = "7";
            }}            

            GETMostemailedSectionTimePeriodJsonResponse res = sdk.getMostemailedSectionTimePeriodJson(req, new GETMostemailedSectionTimePeriodJsonSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getMostemailedSectionTimePeriodJSON200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->