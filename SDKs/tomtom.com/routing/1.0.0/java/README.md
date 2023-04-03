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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum;
import org.openapis.openapi.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest;
import org.openapis.openapi.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse;
import org.openapis.openapi.models.shared.WindingnessEnum;
import org.openapis.openapi.models.shared.VersionNumberEnum;
import org.openapis.openapi.models.shared.TravelModeEnum;
import org.openapis.openapi.models.shared.RouteTypeEnum;
import org.openapis.openapi.models.shared.ReportEnum;
import org.openapis.openapi.models.shared.HillinessEnum;
import org.openapis.openapi.models.shared.ContentTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest req = new GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest() {{
                accelerationEfficiency = 5488.14;
                arriveAt = "provident";
                auxiliaryPowerInLitersPerHour = 7151.9;
                avoid = "quibusdam";
                callback = "unde";
                constantSpeedConsumptionInLitersPerHundredkm = "nulla";
                constantSpeedConsumptionInkWhPerHundredkm = "corrupti";
                contentType = "jsonp";
                currentFuelInLiters = 4236.55;
                decelerationEfficiency = 6235.64;
                departAt = "deserunt";
                downhillEfficiency = 3843.82;
                energyBudgetInkWh = 4375.87;
                fuelBudgetInLiters = 2975.34;
                fuelEnergyDensityInMJoulesPerLiter = 8917.73;
                hilliness = "low";
                origin = "delectus";
                report = "effectiveSettings";
                routeType = "shortest";
                timeBudgetInSec = 3834.41;
                traffic = false;
                travelMode = "bus";
                uphillEfficiency = 7917.25;
                vehicleAxleWeight = 812169;
                vehicleCommercial = false;
                vehicleEngineType = "electric";
                vehicleHeight = 4799.77;
                vehicleLength = 5680.45;
                vehicleLoadType = "nisi";
                vehicleMaxSpeed = 925597;
                vehicleWeight = 836079;
                vehicleWidth = 710.36;
                versionNumber = "1";
                windingness = "normal";
            }}            

            GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse res = sdk.routing.getRoutingVersionNumberCalculateReachableRangeOriginContentType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### routing

* `getRoutingVersionNumberCalculateReachableRangeOriginContentType` - Reachable Range
* `getRoutingVersionNumberCalculateRouteLocationsContentType` - Calculate Route
* `postRoutingVersionNumberCalculateReachableRangeOriginContentTypeJson` - Reachable Range
* `postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw` - Reachable Range
* `postRoutingVersionNumberCalculateRouteLocationsContentTypeJson` - Calculate Route
* `postRoutingVersionNumberCalculateRouteLocationsContentTypeRaw` - Calculate Route
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
