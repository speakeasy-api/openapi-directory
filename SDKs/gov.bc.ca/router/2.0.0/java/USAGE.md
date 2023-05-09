<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatCriteriaEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatDistanceUnitEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatOutputFormatEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatOutputSrsEnum;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatRequest;
import org.openapis.openapi.models.operations.GetDirectionsOutputFormatResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apikey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDirectionsOutputFormatRequest req = new GetDirectionsOutputFormatRequest(GetDirectionsOutputFormatOutputFormatEnum.KML, "distinctio") {{
                correctSide = false;
                criteria = GetDirectionsOutputFormatCriteriaEnum.FASTEST;
                departure = OffsetDateTime.parse("2021-04-14T16:47:33.722Z");
                disable = "corrupti";
                distanceUnit = GetDirectionsOutputFormatDistanceUnitEnum.MI;
                outputSRS = GetDirectionsOutputFormatOutputSrsEnum.TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_SEVEN;
                roundTrip = false;
                routeDescription = "error";
            }};            

            GetDirectionsOutputFormatResponse res = sdk.directions.getDirectionsOutputFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->