<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatPathParams;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatQueryParams;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatRequest;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetDirectionsOutputFormatRequest req = new GetDirectionsOutputFormatRequest() {{
                pathParams = new GetDirectionsOutputFormatPathParams() {{
                    outputFormat = "kml";
                }};
                queryParams = new GetDirectionsOutputFormatQueryParams() {{
                    correctSide = false;
                    criteria = "fastest";
                    departure = "2021-04-24T16:27:50.833Z";
                    disable = "unde";
                    distanceUnit = "mi";
                    outputSRS = "26908";
                    points = "illum";
                    roundTrip = false;
                    routeDescription = "vel";
                }};
            }};            

            GetDirectionsOutputFormatResponse res = sdk.directions.getDirectionsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->