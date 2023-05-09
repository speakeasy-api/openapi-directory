# weatherByCityAndState

### Available Operations

* [getweather](#getweather) - Gets current weather information for a US city and state

## getweather

Use city and state to retrieve current US weather information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetweatherRequest;
import org.openapis.openapi.models.operations.GetweatherResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetweatherRequest req = new GetweatherRequest("quibusdam", "unde", "nulla");            

            GetweatherResponse res = sdk.weatherByCityAndState.getweather(req);

            if (res.getweather200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
