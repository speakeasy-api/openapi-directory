# currentGlobalTime

### Available Operations

* [getglobaltime](#getglobaltime) - Gets the current time for a global locale

## getglobaltime

Gets the current time for a global locale (city, state, region, or country such as Chicago, London, Paris, Seoul, Spain, Buenos Aires, Hawaii, Moscow, Tokyo, Hanoi, etc.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetglobaltimeRequest;
import org.openapis.openapi.models.operations.GetglobaltimeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetglobaltimeRequest req = new GetglobaltimeRequest("distinctio", "quibusdam");            

            GetglobaltimeResponse res = sdk.currentGlobalTime.getglobaltime(req);

            if (res.getglobaltime200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
