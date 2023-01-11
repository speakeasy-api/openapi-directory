<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apikey = new SchemeApikey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetDirectionsOutputFormatRequest req = new GetDirectionsOutputFormatRequest() {{
                pathParams = new GetDirectionsOutputFormatPathParams() {{
                    outputFormat = "json";
                }};
                queryParams = new GetDirectionsOutputFormatQueryParams() {{
                    correctSide = false;
                    criteria = "fastest";
                    departure = "1970-09-22T13:56:41Z";
                    disable = "rerum";
                    distanceUnit = "mi";
                    outputSRS = 2129308593024805318;
                    points = "rem";
                    roundTrip = true;
                    routeDescription = "sit";
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