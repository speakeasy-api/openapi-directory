# airQuality

### Available Operations

* [airQualityGet](#airqualityget) - Gets air quality data feed

## airQualityGet

Gets air quality data feed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AirQualityGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AirQualityGetResponse res = sdk.airQuality.airQualityGet();

            if (res.systemObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
