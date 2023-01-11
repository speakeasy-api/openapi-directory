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
                    departure = "2019-04-21T07:38:14Z";
                    disable = "consequuntur";
                    distanceUnit = "km";
                    outputSRS = 1774932891286980153;
                    points = "voluptas";
                    roundTrip = true;
                    routeDescription = "et";
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