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

            GetForecastRequest req = new GetForecastRequest() {{
                queryParams = new GetForecastQueryParams() {{
                    alt = 74.099998;
                    dt = "1978-05-13T03:50:47Z";
                    lat = 6.200000;
                    lng = 96.199997;
                    ozone = 77.099998;
                }};
                headers = new GetForecastHeaders() {{
                    xAccessToken = "et";
                }};
            }};

            GetForecastResponse res = sdk.getForecast(req);

            if (res.forecastResults.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->