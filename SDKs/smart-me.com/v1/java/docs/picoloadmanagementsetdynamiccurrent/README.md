# picoLoadmanagementSetDynamicCurrent

### Available Operations

* [picoLoadmanagementSetDynamicCurrentPost](#picoloadmanagementsetdynamiccurrentpost) - Sets the dynamic current of a load management group or a single station.

## picoLoadmanagementSetDynamicCurrentPost

Sets the dynamic current of a load management group or a single station.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PicoLoadmanagementSetDynamicCurrentPostRequest;
import org.openapis.openapi.models.operations.PicoLoadmanagementSetDynamicCurrentPostResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PicoLoadmanagementSetDynamicCurrentPostRequest req = new PicoLoadmanagementSetDynamicCurrentPostRequest(370853, 133465L);            

            PicoLoadmanagementSetDynamicCurrentPostResponse res = sdk.picoLoadmanagementSetDynamicCurrent.picoLoadmanagementSetDynamicCurrentPost(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
