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
                    alt = 60.099998;
                    dt = "2011-05-07T17:54:56Z";
                    lat = 6.100000;
                    lng = 35.099998;
                    ozone = 21.200001;
                }};
                headers = new GetForecastHeaders() {{
                    xAccessToken = "qui";
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