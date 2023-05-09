# pageLoadPerformanceTime

### Available Operations

* [globalpageload](#globalpageload) - Gets page load (or an API call) performance from a specified global geography such as Paris, Tokyo, Virginia, Mumbai, Frankfurt, London, Seoul, California, Sao Paolo, and many more.

## globalpageload

Gets page load performance from a specified geography


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GlobalpageloadRequest;
import org.openapis.openapi.models.operations.GlobalpageloadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GlobalpageloadRequest req = new GlobalpageloadRequest("quibusdam", "unde", "nulla");            

            GlobalpageloadResponse res = sdk.pageLoadPerformanceTime.globalpageload(req);

            if (res.globalpageload200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
