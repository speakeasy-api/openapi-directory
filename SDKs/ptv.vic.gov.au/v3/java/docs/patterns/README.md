# patterns

### Available Operations

* [patternsGetPatternByRun](#patternsgetpatternbyrun) - View the stopping pattern for a specific trip/service run

## patternsGetPatternByRun

View the stopping pattern for a specific trip/service run

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatternsGetPatternByRunExpandEnum;
import org.openapis.openapi.models.operations.PatternsGetPatternByRunRequest;
import org.openapis.openapi.models.operations.PatternsGetPatternByRunResponse;
import org.openapis.openapi.models.operations.PatternsGetPatternByRunRouteTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatternsGetPatternByRunRequest req = new PatternsGetPatternByRunRequest(                new org.openapis.openapi.models.operations.PatternsGetPatternByRunExpandEnum[]{{
                                add(PatternsGetPatternByRunExpandEnum.RUN),
                                add(PatternsGetPatternByRunExpandEnum.DIRECTION),
                            }}, PatternsGetPatternByRunRouteTypeEnum.TWO, "velit") {{
                dateUtc = OffsetDateTime.parse("2022-09-06T22:51:09.401Z");
                devid = "quis";
                includeGeopath = false;
                includeSkippedStops = false;
                signature = "vitae";
                stopId = 674752;
                token = "animi";
            }};            

            PatternsGetPatternByRunResponse res = sdk.patterns.patternsGetPatternByRun(req);

            if (res.v3StoppingPattern != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
