# travelTime

### Available Operations

* [travelTimeGetCompareOverlay](#traveltimegetcompareoverlay) - Gets the TravelTime overlay.
* [travelTimeGetOverlay](#traveltimegetoverlay) - Gets the TravelTime overlay.

## travelTimeGetCompareOverlay

Gets the TravelTime overlay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelTimeGetCompareOverlayDirectionEnum;
import org.openapis.openapi.models.operations.TravelTimeGetCompareOverlayRequest;
import org.openapis.openapi.models.operations.TravelTimeGetCompareOverlayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelTimeGetCompareOverlayRequest req = new TravelTimeGetCompareOverlayRequest("ea", "accusantium", TravelTimeGetCompareOverlayDirectionEnum.AVERAGE, 982575, 6974.29, 3732.91, "voluptate", 4200.75, 7220.56, "eaque", "pariatur", 365496, 975522, 16627);            

            TravelTimeGetCompareOverlayResponse res = sdk.travelTime.travelTimeGetCompareOverlay(req);

            if (res.systemObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## travelTimeGetOverlay

Gets the TravelTime overlay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TravelTimeGetOverlayDirectionEnum;
import org.openapis.openapi.models.operations.TravelTimeGetOverlayRequest;
import org.openapis.openapi.models.operations.TravelTimeGetOverlayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelTimeGetOverlayRequest req = new TravelTimeGetOverlayRequest(TravelTimeGetOverlayDirectionEnum.TO, 230742, 117.14, 7649.12, "corporis", 9441.24, 7299.91, "nobis", "dolores", 339404, 521037, 489549);            

            TravelTimeGetOverlayResponse res = sdk.travelTime.travelTimeGetOverlay(req);

            if (res.systemObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
