<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CompareStationRequest req = new CompareStationRequest() {{
                pathParams = new CompareStationPathParams() {{
                    stationName = "sunt";
                }};
            }};

            CompareStationResponse res = sdk.odWeather.compareStation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->