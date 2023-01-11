<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest req = new GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest() {{
                pathParams = new GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams() {{
                    contentType = "xml";
                    origin = "voluptas";
                    versionNumber = 6050128673802995827;
                }};
                queryParams = new GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams() {{
                    accelerationEfficiency = 6.200000;
                    arriveAt = "dolor";
                    auxiliaryPowerInLitersPerHour = 67.199997;
                    avoid = "fugit";
                    callback = "et";
                    constantSpeedConsumptionInLitersPerHundredkm = "nihil";
                    constantSpeedConsumptionInkWhPerHundredkm = "rerum";
                    currentFuelInLiters = 59.099998;
                    decelerationEfficiency = 52.099998;
                    departAt = "ut";
                    downhillEfficiency = 50.099998;
                    energyBudgetInkWh = 94.199997;
                    fuelBudgetInLiters = 68.099998;
                    fuelEnergyDensityInMJoulesPerLiter = 80.199997;
                    hilliness = "low";
                    report = "effectiveSettings";
                    routeType = "fastest";
                    timeBudgetInSec = 91.099998;
                    traffic = true;
                    travelMode = "van";
                    uphillEfficiency = 45.099998;
                    vehicleAxleWeight = 2897681629866238117;
                    vehicleCommercial = false;
                    vehicleEngineType = "combustion";
                    vehicleHeight = 10.200000;
                    vehicleLength = 14.200000;
                    vehicleLoadType = "aut";
                    vehicleMaxSpeed = 6972732843819909978;
                    vehicleWeight = 5558237345453186302;
                    vehicleWidth = 19.200001;
                    windingness = "low";
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