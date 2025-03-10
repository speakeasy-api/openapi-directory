# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest;
import org.openapis.openapi.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse;
import org.openapis.openapi.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum;
import org.openapis.openapi.models.shared.ContentTypeEnum;
import org.openapis.openapi.models.shared.HillinessEnum;
import org.openapis.openapi.models.shared.ReportEnum;
import org.openapis.openapi.models.shared.RouteTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TravelModeEnum;
import org.openapis.openapi.models.shared.VersionNumberEnum;
import org.openapis.openapi.models.shared.WindingnessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest req = new GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest(ContentTypeEnum.JSON, "distinctio", VersionNumberEnum.ONE) {{
                accelerationEfficiency = 8442.66;
                arriveAt = "unde";
                auxiliaryPowerInLitersPerHour = 8579.46;
                avoid = "corrupti";
                callback = "illum";
                constantSpeedConsumptionInLitersPerHundredkm = "vel";
                constantSpeedConsumptionInkWhPerHundredkm = "error";
                currentFuelInLiters = 6458.94;
                decelerationEfficiency = 3843.82;
                departAt = "iure";
                downhillEfficiency = 2975.34;
                energyBudgetInkWh = 8917.73;
                fuelBudgetInLiters = 567.13;
                fuelEnergyDensityInMJoulesPerLiter = 9636.63;
                hilliness = HillinessEnum.LOW;
                report = ReportEnum.EFFECTIVE_SETTINGS;
                routeType = RouteTypeEnum.SHORTEST;
                timeBudgetInSec = 4776.65;
                traffic = false;
                travelMode = TravelModeEnum.BICYCLE;
                uphillEfficiency = 8121.69;
                vehicleAxleWeight = 528895L;
                vehicleCommercial = false;
                vehicleEngineType = GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum.COMBUSTION;
                vehicleHeight = 5680.45;
                vehicleLength = 3927.85;
                vehicleLoadType = "recusandae";
                vehicleMaxSpeed = 836079L;
                vehicleWeight = 71036L;
                vehicleWidth = 3373.96;
                windingness = WindingnessEnum.LOW;
            }};            

            GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse res = sdk.routing.getRoutingVersionNumberCalculateReachableRangeOriginContentType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [routing](docs/routing/README.md)

* [getRoutingVersionNumberCalculateReachableRangeOriginContentType](docs/routing/README.md#getroutingversionnumbercalculatereachablerangeorigincontenttype) - Reachable Range
* [getRoutingVersionNumberCalculateRouteLocationsContentType](docs/routing/README.md#getroutingversionnumbercalculateroutelocationscontenttype) - Calculate Route
* [postRoutingVersionNumberCalculateReachableRangeOriginContentTypeJson](docs/routing/README.md#postroutingversionnumbercalculatereachablerangeorigincontenttypejson) - Reachable Range
* [postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw](docs/routing/README.md#postroutingversionnumbercalculatereachablerangeorigincontenttyperaw) - Reachable Range
* [postRoutingVersionNumberCalculateRouteLocationsContentTypeJson](docs/routing/README.md#postroutingversionnumbercalculateroutelocationscontenttypejson) - Calculate Route
* [postRoutingVersionNumberCalculateRouteLocationsContentTypeRaw](docs/routing/README.md#postroutingversionnumbercalculateroutelocationscontenttyperaw) - Calculate Route
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
