<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatRequest;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDirectionsOutputFormatRequest req = new GetDirectionsOutputFormatRequest() {{
                correctSide = false;
                criteria = "fastest";
                departure = "2021-07-27T21:52:56.087Z";
                disable = "quibusdam";
                distanceUnit = "mi";
                outputFormat = "html";
                outputSRS = "26908";
                points = "illum";
                roundTrip = false;
                routeDescription = "vel";
            }}            

            GetDirectionsOutputFormatResponse res = sdk.directions.getDirectionsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->