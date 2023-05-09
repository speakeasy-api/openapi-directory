# fareEstimate

### Available Operations

* [fareEstimateGetFareEstimateByZone](#fareestimategetfareestimatebyzone) - Estimate a fare by zone

## fareEstimateGetFareEstimateByZone

Estimate a fare by zone

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FareEstimateGetFareEstimateByZoneRequest;
import org.openapis.openapi.models.operations.FareEstimateGetFareEstimateByZoneResponse;
import org.openapis.openapi.models.operations.FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FareEstimateGetFareEstimateByZoneRequest req = new FareEstimateGetFareEstimateByZoneRequest(210382, 358152) {{
                devid = "explicabo";
                isJourneyInFreeTramZone = false;
                journeyTouchOffUtc = OffsetDateTime.parse("2022-01-20T14:32:34.011Z");
                journeyTouchOnUtc = OffsetDateTime.parse("2022-04-10T11:47:13.463Z");
                signature = "minima";
                token = "excepturi";
                travelledRouteTypes = new org.openapis.openapi.models.operations.FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnum[]{{
                    add(FareEstimateGetFareEstimateByZoneTravelledRouteTypesEnum.TWO),
                }};
            }};            

            FareEstimateGetFareEstimateByZoneResponse res = sdk.fareEstimate.fareEstimateGetFareEstimateByZone(req);

            if (res.v3FareEstimateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
