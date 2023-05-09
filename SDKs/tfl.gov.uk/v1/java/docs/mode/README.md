# mode

### Available Operations

* [modeArrivals](#modearrivals) - Gets the next arrival predictions for all stops of a given mode
* [modeGetActiveServiceTypes](#modegetactiveservicetypes) - Returns the service type active for a mode.
            Currently only supports tube

## modeArrivals

Gets the next arrival predictions for all stops of a given mode

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModeArrivalsRequest;
import org.openapis.openapi.models.operations.ModeArrivalsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ModeArrivalsRequest req = new ModeArrivalsRequest("animi") {{
                count = 317202;
            }};            

            ModeArrivalsResponse res = sdk.mode.modeArrivals(req);

            if (res.tflApiPresentationEntitiesPredictions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modeGetActiveServiceTypes

Returns the service type active for a mode.
            Currently only supports tube

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModeGetActiveServiceTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ModeGetActiveServiceTypesResponse res = sdk.mode.modeGetActiveServiceTypes();

            if (res.tflApiPresentationEntitiesActiveServiceTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
