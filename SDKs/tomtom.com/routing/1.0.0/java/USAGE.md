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
                    contentType = "jsonp";
                    origin = "architecto";
                    versionNumber = 9207329833049742865;
                }};
                queryParams = new GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams() {{
                    accelerationEfficiency = 46.099998;
                    arriveAt = "et";
                    auxiliaryPowerInLitersPerHour = 61.200001;
                    avoid = "in";
                    callback = "quibusdam";
                    constantSpeedConsumptionInLitersPerHundredkm = "asperiores";
                    constantSpeedConsumptionInkWhPerHundredkm = "quo";
                    currentFuelInLiters = 2.100000;
                    decelerationEfficiency = 8.100000;
                    departAt = "blanditiis";
                    downhillEfficiency = 48.099998;
                    energyBudgetInkWh = 55.200001;
                    fuelBudgetInLiters = 93.199997;
                    fuelEnergyDensityInMJoulesPerLiter = 47.099998;
                    hilliness = "normal";
                    report = "effectiveSettings";
                    routeType = "eco";
                    timeBudgetInSec = 94.099998;
                    traffic = true;
                    travelMode = "pedestrian";
                    uphillEfficiency = 72.199997;
                    vehicleAxleWeight = 4723077349289610856;
                    vehicleCommercial = false;
                    vehicleEngineType = "electric";
                    vehicleHeight = 15.200000;
                    vehicleLength = 10.200000;
                    vehicleLoadType = "magni";
                    vehicleMaxSpeed = 6901636176146439792;
                    vehicleWeight = 8662026721107688812;
                    vehicleWidth = 11.200000;
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