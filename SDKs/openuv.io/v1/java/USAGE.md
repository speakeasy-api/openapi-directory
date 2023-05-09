<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetForecastRequest;
import org.openapis.openapi.models.operations.GetForecastResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetForecastRequest req = new GetForecastRequest(78.67, 115.67, "corrupti") {{
                alt = 1050;
                dt = OffsetDateTime.parse("2018-02-04T04:39:06.467Z");
                ozone = 304.5;
            }};            

            GetForecastResponse res = sdk.getForecast(req);

            if (res.forecastResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->