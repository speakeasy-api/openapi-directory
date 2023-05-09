# routing

### Available Operations

* [getRoutingVersionNumberCalculateReachableRangeOriginContentType](#getroutingversionnumbercalculatereachablerangeorigincontenttype) - Reachable Range
* [getRoutingVersionNumberCalculateRouteLocationsContentType](#getroutingversionnumbercalculateroutelocationscontenttype) - Calculate Route
* [postRoutingVersionNumberCalculateReachableRangeOriginContentTypeJson](#postroutingversionnumbercalculatereachablerangeorigincontenttypejson) - Reachable Range
* [postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw](#postroutingversionnumbercalculatereachablerangeorigincontenttyperaw) - Reachable Range
* [postRoutingVersionNumberCalculateRouteLocationsContentTypeJson](#postroutingversionnumbercalculateroutelocationscontenttypejson) - Calculate Route
* [postRoutingVersionNumberCalculateRouteLocationsContentTypeRaw](#postroutingversionnumbercalculateroutelocationscontenttyperaw) - Calculate Route

## getRoutingVersionNumberCalculateReachableRangeOriginContentType

Calculates a set of locations that can be reached from the origin point.

### Example Usage

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
                .setSecurity(new Security("deserunt") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest req = new GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest(ContentTypeEnum.XML, "ipsam", VersionNumberEnum.ONE) {{
                accelerationEfficiency = 8326.2;
                arriveAt = "sapiente";
                auxiliaryPowerInLitersPerHour = 7781.57;
                avoid = "odit";
                callback = "at";
                constantSpeedConsumptionInLitersPerHundredkm = "at";
                constantSpeedConsumptionInkWhPerHundredkm = "maiores";
                currentFuelInLiters = 4736.08;
                decelerationEfficiency = 7991.59;
                departAt = "quod";
                downhillEfficiency = 4614.79;
                energyBudgetInkWh = 5204.78;
                fuelBudgetInLiters = 7805.29;
                fuelEnergyDensityInMJoulesPerLiter = 6788.8;
                hilliness = HillinessEnum.LOW;
                report = ReportEnum.EFFECTIVE_SETTINGS;
                routeType = RouteTypeEnum.ECO;
                timeBudgetInSec = 6399.21;
                traffic = false;
                travelMode = TravelModeEnum.VAN;
                uphillEfficiency = 1433.53;
                vehicleAxleWeight = 537373L;
                vehicleCommercial = false;
                vehicleEngineType = GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum.ELECTRIC;
                vehicleHeight = 7586.16;
                vehicleLength = 5218.48;
                vehicleLoadType = "beatae";
                vehicleMaxSpeed = 414662L;
                vehicleWeight = 473600L;
                vehicleWidth = 2645.55;
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

## getRoutingVersionNumberCalculateRouteLocationsContentType

Calculates a route between an origin and a destination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest;
import org.openapis.openapi.models.operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse;
import org.openapis.openapi.models.shared.AlternativeTypeEnum;
import org.openapis.openapi.models.shared.ComputeTravelTimeForEnum;
import org.openapis.openapi.models.shared.ContentTypeEnum;
import org.openapis.openapi.models.shared.HillinessEnum;
import org.openapis.openapi.models.shared.InstructionsTypeEnum;
import org.openapis.openapi.models.shared.ReportEnum;
import org.openapis.openapi.models.shared.RouteRepresentationEnum;
import org.openapis.openapi.models.shared.RouteTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TravelModeEnum;
import org.openapis.openapi.models.shared.VehicleEngineTypeEnum;
import org.openapis.openapi.models.shared.VersionNumberEnum;
import org.openapis.openapi.models.shared.WindingnessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest req = new GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest(ContentTypeEnum.JSONP, "esse", VersionNumberEnum.ONE) {{
                accelerationEfficiency = 2165.5;
                alternativeType = AlternativeTypeEnum.BETTER_ROUTE;
                arriveAt = "aspernatur";
                auxiliaryPowerInLitersPerHour = 187.89;
                avoid = "ad";
                callback = "natus";
                computeBestOrder = false;
                computeTravelTimeFor = ComputeTravelTimeForEnum.NONE;
                constantSpeedConsumptionInLitersPerHundredkm = "iste";
                constantSpeedConsumptionInkWhPerHundredkm = "dolor";
                currentFuelInLiters = 6169.34;
                decelerationEfficiency = 3864.89;
                departAt = "hic";
                downhillEfficiency = 9025.99;
                fuelEnergyDensityInMJoulesPerLiter = 6818.2;
                hilliness = HillinessEnum.NORMAL;
                instructionsType = InstructionsTypeEnum.TEXT;
                language = "iste";
                maxAlternatives = 437032L;
                minDeviationDistance = 902349L;
                minDeviationTime = 697631L;
                report = ReportEnum.EFFECTIVE_SETTINGS;
                routeRepresentation = RouteRepresentationEnum.POLYLINE;
                routeType = RouteTypeEnum.FASTEST;
                sectionType = "reiciendis";
                traffic = false;
                travelMode = TravelModeEnum.MOTORCYCLE;
                uphillEfficiency = 6531.4;
                vehicleAxleWeight = 670638L;
                vehicleCommercial = false;
                vehicleEngineType = VehicleEngineTypeEnum.COMBUSTION;
                vehicleHeading = 210382L;
                vehicleHeight = 3581.52;
                vehicleLength = 1289.26;
                vehicleLoadType = "nobis";
                vehicleMaxSpeed = 315428L;
                vehicleWeight = 607831L;
                vehicleWidth = 3637.11;
                windingness = WindingnessEnum.LOW;
            }};            

            GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse res = sdk.routing.getRoutingVersionNumberCalculateRouteLocationsContentType(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRoutingVersionNumberCalculateReachableRangeOriginContentTypeJson

Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJsonRequest;
import org.openapis.openapi.models.operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJsonResponse;
import org.openapis.openapi.models.operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJsonVehicleEngineTypeEnum;
import org.openapis.openapi.models.shared.CalculateReachableRangePostDataParameters;
import org.openapis.openapi.models.shared.CalculateReachableRangePostDataParametersAvoidAreas;
import org.openapis.openapi.models.shared.CalculateReachableRangePostDataParametersAvoidAreasRectangles;
import org.openapis.openapi.models.shared.CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner;
import org.openapis.openapi.models.shared.CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner;
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
                .setSecurity(new Security("excepturi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJsonRequest req = new PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJsonRequest(ContentTypeEnum.XML, "iure", VersionNumberEnum.ONE) {{
                accelerationEfficiency = 6342.74;
                arriveAt = "doloribus";
                auxiliaryPowerInLitersPerHour = 9589.5;
                avoid = "architecto";
                calculateReachableRangePostDataParameters = new CalculateReachableRangePostDataParameters() {{
                    allowVignette = new String[]{{
                        add("dolorem"),
                        add("culpa"),
                        add("consequuntur"),
                    }};
                    avoidAreas = new CalculateReachableRangePostDataParametersAvoidAreas() {{
                        rectangles = new org.openapis.openapi.models.shared.CalculateReachableRangePostDataParametersAvoidAreasRectangles[]{{
                            add(new CalculateReachableRangePostDataParametersAvoidAreasRectangles() {{
                                northEastCorner = new CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner() {{
                                    latitude = "mollitia";
                                    longitude = "occaecati";
                                }};
                                southWestCorner = new CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner() {{
                                    latitude = "numquam";
                                    longitude = "commodi";
                                }};
                            }}),
                            add(new CalculateReachableRangePostDataParametersAvoidAreasRectangles() {{
                                northEastCorner = new CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner() {{
                                    latitude = "quam";
                                    longitude = "molestiae";
                                }};
                                southWestCorner = new CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner() {{
                                    latitude = "velit";
                                    longitude = "error";
                                }};
                            }}),
                            add(new CalculateReachableRangePostDataParametersAvoidAreasRectangles() {{
                                northEastCorner = new CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner() {{
                                    latitude = "quia";
                                    longitude = "quis";
                                }};
                                southWestCorner = new CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner() {{
                                    latitude = "vitae";
                                    longitude = "laborum";
                                }};
                            }}),
                            add(new CalculateReachableRangePostDataParametersAvoidAreasRectangles() {{
                                northEastCorner = new CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner() {{
                                    latitude = "animi";
                                    longitude = "enim";
                                }};
                                southWestCorner = new CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner() {{
                                    latitude = "odit";
                                    longitude = "quo";
                                }};
                            }}),
                        }};
                    }};;
                    avoidVignette = new String[]{{
                        add("tenetur"),
                    }};
                }};;
                callback = "ipsam";
                constantSpeedConsumptionInLitersPerHundredkm = "id";
                constantSpeedConsumptionInkWhPerHundredkm = "possimus";
                currentFuelInLiters = 135.71;
                decelerationEfficiency = 971.01;
                departAt = "error";
                downhillEfficiency = 8379.45;
                energyBudgetInkWh = 6736.6;
                fuelBudgetInLiters = 960.98;
                fuelEnergyDensityInMJoulesPerLiter = 9719.45;
                hilliness = HillinessEnum.HIGH;
                report = ReportEnum.EFFECTIVE_SETTINGS;
                routeType = RouteTypeEnum.THRILLING;
                timeBudgetInSec = 4686.51;
                traffic = false;
                travelMode = TravelModeEnum.VAN;
                uphillEfficiency = 9767.62;
                vehicleAxleWeight = 55714L;
                vehicleCommercial = false;
                vehicleEngineType = PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJsonVehicleEngineTypeEnum.ELECTRIC;
                vehicleHeight = 4511.59;
                vehicleLength = 7392.64;
                vehicleLoadType = "perferendis";
                vehicleMaxSpeed = 39187L;
                vehicleWeight = 441711L;
                vehicleWidth = 2828.07;
                windingness = WindingnessEnum.HIGH;
            }};            

            PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJsonResponse res = sdk.routing.postRoutingVersionNumberCalculateReachableRangeOriginContentTypeJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw

Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawRequest;
import org.openapis.openapi.models.operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawResponse;
import org.openapis.openapi.models.operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawVehicleEngineTypeEnum;
import org.openapis.openapi.models.shared.CalculateReachableRangePostDataParameters;
import org.openapis.openapi.models.shared.CalculateReachableRangePostDataParametersAvoidAreas;
import org.openapis.openapi.models.shared.CalculateReachableRangePostDataParametersAvoidAreasRectangles;
import org.openapis.openapi.models.shared.CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner;
import org.openapis.openapi.models.shared.CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner;
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
                .setSecurity(new Security("dicta") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawRequest req = new PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawRequest(ContentTypeEnum.JSON, "dolore", VersionNumberEnum.ONE) {{
                requestBody = "iusto".getBytes();
                accelerationEfficiency = 1187.27;
                arriveAt = "harum";
                auxiliaryPowerInLitersPerHour = 3179.83;
                avoid = "accusamus";
                callback = "commodi";
                constantSpeedConsumptionInLitersPerHundredkm = "repudiandae";
                constantSpeedConsumptionInkWhPerHundredkm = "quae";
                currentFuelInLiters = 2168.22;
                decelerationEfficiency = 6924.72;
                departAt = "molestias";
                downhillEfficiency = 5666.02;
                energyBudgetInkWh = 8651.03;
                fuelBudgetInLiters = 2653.89;
                fuelEnergyDensityInMJoulesPerLiter = 5089.69;
                hilliness = HillinessEnum.NORMAL;
                report = ReportEnum.EFFECTIVE_SETTINGS;
                routeType = RouteTypeEnum.THRILLING;
                timeBudgetInSec = 939.4;
                traffic = false;
                travelMode = TravelModeEnum.PEDESTRIAN;
                uphillEfficiency = 5759.47;
                vehicleAxleWeight = 83112L;
                vehicleCommercial = false;
                vehicleEngineType = PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawVehicleEngineTypeEnum.ELECTRIC;
                vehicleHeight = 2777.18;
                vehicleLength = 3185.69;
                vehicleLoadType = "consequatur";
                vehicleMaxSpeed = 667411L;
                vehicleWeight = 842342L;
                vehicleWidth = 1317.97;
                windingness = WindingnessEnum.NORMAL;
            }};            

            PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawResponse res = sdk.routing.postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRoutingVersionNumberCalculateRouteLocationsContentTypeJson

Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeJsonRequest;
import org.openapis.openapi.models.operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeJsonResponse;
import org.openapis.openapi.models.shared.AlternativeTypeEnum;
import org.openapis.openapi.models.shared.CalculateRoutePostDataParameters;
import org.openapis.openapi.models.shared.CalculateRoutePostDataParametersAvoidAreas;
import org.openapis.openapi.models.shared.CalculateRoutePostDataParametersAvoidAreasRectangles;
import org.openapis.openapi.models.shared.CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner;
import org.openapis.openapi.models.shared.CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner;
import org.openapis.openapi.models.shared.CalculateRoutePostDataParametersSupportingPoints;
import org.openapis.openapi.models.shared.ComputeTravelTimeForEnum;
import org.openapis.openapi.models.shared.ContentTypeEnum;
import org.openapis.openapi.models.shared.HillinessEnum;
import org.openapis.openapi.models.shared.InstructionsTypeEnum;
import org.openapis.openapi.models.shared.ReportEnum;
import org.openapis.openapi.models.shared.RouteRepresentationEnum;
import org.openapis.openapi.models.shared.RouteTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TravelModeEnum;
import org.openapis.openapi.models.shared.VehicleEngineTypeEnum;
import org.openapis.openapi.models.shared.VersionNumberEnum;
import org.openapis.openapi.models.shared.WindingnessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostRoutingVersionNumberCalculateRouteLocationsContentTypeJsonRequest req = new PostRoutingVersionNumberCalculateRouteLocationsContentTypeJsonRequest(ContentTypeEnum.JSONP, "labore", VersionNumberEnum.ONE) {{
                accelerationEfficiency = 2647.3;
                alternativeType = AlternativeTypeEnum.ANY_ROUTE;
                arriveAt = "aliquid";
                auxiliaryPowerInLitersPerHour = 5865.13;
                avoid = "quos";
                calculateRoutePostDataParameters = new CalculateRoutePostDataParameters() {{
                    allowVignette = new String[]{{
                        add("magni"),
                    }};
                    avoidAreas = new CalculateRoutePostDataParametersAvoidAreas() {{
                        rectangles = new org.openapis.openapi.models.shared.CalculateRoutePostDataParametersAvoidAreasRectangles[]{{
                            add(new CalculateRoutePostDataParametersAvoidAreasRectangles() {{
                                northEastCorner = new CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner() {{
                                    latitude = "ipsam";
                                    longitude = "alias";
                                }};
                                southWestCorner = new CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner() {{
                                    latitude = "fugit";
                                    longitude = "dolorum";
                                }};
                            }}),
                            add(new CalculateRoutePostDataParametersAvoidAreasRectangles() {{
                                northEastCorner = new CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner() {{
                                    latitude = "excepturi";
                                    longitude = "tempora";
                                }};
                                southWestCorner = new CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner() {{
                                    latitude = "facilis";
                                    longitude = "tempore";
                                }};
                            }}),
                            add(new CalculateRoutePostDataParametersAvoidAreasRectangles() {{
                                northEastCorner = new CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner() {{
                                    latitude = "labore";
                                    longitude = "delectus";
                                }};
                                southWestCorner = new CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner() {{
                                    latitude = "eum";
                                    longitude = "non";
                                }};
                            }}),
                            add(new CalculateRoutePostDataParametersAvoidAreasRectangles() {{
                                northEastCorner = new CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner() {{
                                    latitude = "eligendi";
                                    longitude = "sint";
                                }};
                                southWestCorner = new CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner() {{
                                    latitude = "aliquid";
                                    longitude = "provident";
                                }};
                            }}),
                        }};
                    }};;
                    avoidVignette = new String[]{{
                        add("sint"),
                        add("officia"),
                        add("dolor"),
                        add("debitis"),
                    }};
                    supportingPoints = new org.openapis.openapi.models.shared.CalculateRoutePostDataParametersSupportingPoints[]{{
                        add(new CalculateRoutePostDataParametersSupportingPoints() {{
                            latitude = "dolorum";
                            longitude = "in";
                        }}),
                        add(new CalculateRoutePostDataParametersSupportingPoints() {{
                            latitude = "in";
                            longitude = "illum";
                        }}),
                        add(new CalculateRoutePostDataParametersSupportingPoints() {{
                            latitude = "maiores";
                            longitude = "rerum";
                        }}),
                        add(new CalculateRoutePostDataParametersSupportingPoints() {{
                            latitude = "dicta";
                            longitude = "magnam";
                        }}),
                    }};
                }};;
                callback = "cumque";
                computeBestOrder = false;
                computeTravelTimeFor = ComputeTravelTimeForEnum.ALL;
                constantSpeedConsumptionInLitersPerHundredkm = "ea";
                constantSpeedConsumptionInkWhPerHundredkm = "aliquid";
                currentFuelInLiters = 6754.39;
                decelerationEfficiency = 8811.04;
                departAt = "non";
                downhillEfficiency = 5812.73;
                fuelEnergyDensityInMJoulesPerLiter = 3132.18;
                hilliness = HillinessEnum.HIGH;
                instructionsType = InstructionsTypeEnum.TAGGED;
                language = "quidem";
                maxAlternatives = 588465L;
                minDeviationDistance = 725255L;
                minDeviationTime = 659669L;
                report = ReportEnum.EFFECTIVE_SETTINGS;
                routeRepresentation = RouteRepresentationEnum.NONE;
                routeType = RouteTypeEnum.ECO;
                sectionType = "sapiente";
                traffic = false;
                travelMode = TravelModeEnum.TRUCK;
                uphillEfficiency = 6439.9;
                vehicleAxleWeight = 394869L;
                vehicleCommercial = false;
                vehicleEngineType = VehicleEngineTypeEnum.COMBUSTION;
                vehicleHeading = 618809L;
                vehicleHeight = 6063.93;
                vehicleLength = 4748.67;
                vehicleLoadType = "perferendis";
                vehicleMaxSpeed = 470132L;
                vehicleWeight = 301575L;
                vehicleWidth = 7160.75;
                windingness = WindingnessEnum.NORMAL;
            }};            

            PostRoutingVersionNumberCalculateRouteLocationsContentTypeJsonResponse res = sdk.routing.postRoutingVersionNumberCalculateRouteLocationsContentTypeJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRoutingVersionNumberCalculateRouteLocationsContentTypeRaw

Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRawRequest;
import org.openapis.openapi.models.operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRawResponse;
import org.openapis.openapi.models.shared.AlternativeTypeEnum;
import org.openapis.openapi.models.shared.CalculateRoutePostDataParameters;
import org.openapis.openapi.models.shared.CalculateRoutePostDataParametersAvoidAreas;
import org.openapis.openapi.models.shared.CalculateRoutePostDataParametersAvoidAreasRectangles;
import org.openapis.openapi.models.shared.CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner;
import org.openapis.openapi.models.shared.CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner;
import org.openapis.openapi.models.shared.CalculateRoutePostDataParametersSupportingPoints;
import org.openapis.openapi.models.shared.ComputeTravelTimeForEnum;
import org.openapis.openapi.models.shared.ContentTypeEnum;
import org.openapis.openapi.models.shared.HillinessEnum;
import org.openapis.openapi.models.shared.InstructionsTypeEnum;
import org.openapis.openapi.models.shared.ReportEnum;
import org.openapis.openapi.models.shared.RouteRepresentationEnum;
import org.openapis.openapi.models.shared.RouteTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TravelModeEnum;
import org.openapis.openapi.models.shared.VehicleEngineTypeEnum;
import org.openapis.openapi.models.shared.VersionNumberEnum;
import org.openapis.openapi.models.shared.WindingnessEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostRoutingVersionNumberCalculateRouteLocationsContentTypeRawRequest req = new PostRoutingVersionNumberCalculateRouteLocationsContentTypeRawRequest(ContentTypeEnum.XML, "suscipit", VersionNumberEnum.ONE) {{
                requestBody = "natus".getBytes();
                accelerationEfficiency = 7491.7;
                alternativeType = AlternativeTypeEnum.ANY_ROUTE;
                arriveAt = "vero";
                auxiliaryPowerInLitersPerHour = 1354.74;
                avoid = "architecto";
                callback = "magnam";
                computeBestOrder = false;
                computeTravelTimeFor = ComputeTravelTimeForEnum.NONE;
                constantSpeedConsumptionInLitersPerHundredkm = "excepturi";
                constantSpeedConsumptionInkWhPerHundredkm = "ullam";
                currentFuelInLiters = 5908.73;
                decelerationEfficiency = 5518.16;
                departAt = "sint";
                downhillEfficiency = 336.25;
                fuelEnergyDensityInMJoulesPerLiter = 6532.01;
                hilliness = HillinessEnum.HIGH;
                instructionsType = InstructionsTypeEnum.TEXT;
                language = "ad";
                maxAlternatives = 431418L;
                minDeviationDistance = 221262L;
                minDeviationTime = 896547L;
                report = ReportEnum.EFFECTIVE_SETTINGS;
                routeRepresentation = RouteRepresentationEnum.POLYLINE;
                routeType = RouteTypeEnum.SHORTEST;
                sectionType = "quasi";
                traffic = false;
                travelMode = TravelModeEnum.BUS;
                uphillEfficiency = 9840.43;
                vehicleAxleWeight = 891924L;
                vehicleCommercial = false;
                vehicleEngineType = VehicleEngineTypeEnum.COMBUSTION;
                vehicleHeading = 806194L;
                vehicleHeight = 5370.23;
                vehicleLength = 7038.89;
                vehicleLoadType = "in";
                vehicleMaxSpeed = 100226L;
                vehicleWeight = 99569L;
                vehicleWidth = 9194.83;
                windingness = WindingnessEnum.NORMAL;
            }};            

            PostRoutingVersionNumberCalculateRouteLocationsContentTypeRawResponse res = sdk.routing.postRoutingVersionNumberCalculateRouteLocationsContentTypeRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
