<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetForecastRequest;
import org.openapis.openapi.models.operations.GetForecastResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetForecastRequest req = new GetForecastRequest() {{
                alt = 1050;
                dt = "2018-02-04T04:39:06.467Z";
                lat = 78.67;
                lng = 115.67;
                ozone = 304.5;
                xAccessToken = "corrupti";
            }}            

            GetForecastResponse res = sdk.getForecast(req);

            if (res.forecastResults.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->