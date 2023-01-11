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

            GetweatherRequest req = new GetweatherRequest() {{
                queryParams = new GetweatherQueryParams() {{
                    city = "enim";
                    license = "id";
                    state = "officia";
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