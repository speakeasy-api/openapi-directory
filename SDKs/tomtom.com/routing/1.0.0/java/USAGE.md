<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams;
import org.openapis.openapi.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum;
import org.openapis.openapi.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams;
import org.openapis.openapi.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest;
import org.openapis.openapi.models.operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse;
import org.openapis.openapi.models.shared.WindingnessEnum;
import org.openapis.openapi.models.shared.TravelModeEnum;
import org.openapis.openapi.models.shared.RouteTypeEnum;
import org.openapis.openapi.models.shared.ReportEnum;
import org.openapis.openapi.models.shared.HillinessEnum;
import org.openapis.openapi.models.shared.VersionNumberEnum;
import org.openapis.openapi.models.shared.ContentTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest req = new GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest() {{
                pathParams = new GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams() {{
                    contentType = "json";
                    origin = "provident";
                    versionNumber = "1";
                }};
                queryParams = new GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams() {{
                    accelerationEfficiency = 7151.9;
                    arriveAt = "quibusdam";
                    auxiliaryPowerInLitersPerHour = 6027.63;
                    avoid = "nulla";
                    callback = "corrupti";
                    constantSpeedConsumptionInLitersPerHundredkm = "illum";
                    constantSpeedConsumptionInkWhPerHundredkm = "vel";
                    currentFuelInLiters = 6235.64;
                    decelerationEfficiency = 6458.94;
                    departAt = "suscipit";
                    downhillEfficiency = 4375.87;
                    energyBudgetInkWh = 2975.34;
                    fuelBudgetInLiters = 8917.73;
                    fuelEnergyDensityInMJoulesPerLiter = 567.13;
                    hilliness = "high";
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
                    windingness = "normal";
                }};
            }};            

            GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse res = sdk.routing.getRoutingVersionNumberCalculateReachableRangeOriginContentType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->