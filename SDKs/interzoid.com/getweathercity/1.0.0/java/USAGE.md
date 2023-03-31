<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetweatherQueryParams;
import org.openapis.openapi.models.operations.GetweatherRequest;
import org.openapis.openapi.models.operations.GetweatherResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetweatherRequest req = new GetweatherRequest() {{
                queryParams = new GetweatherQueryParams() {{
                    city = "Laruecester";
                    license = "quibusdam";
                    state = "unde";
                }};
            }};            

            GetweatherResponse res = sdk.weatherByCityAndState.getweather(req);

            if (res.getweather200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->