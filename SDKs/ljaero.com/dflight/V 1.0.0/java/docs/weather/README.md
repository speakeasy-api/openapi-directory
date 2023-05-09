# weather

## Overview

#### Hourly forecast values for the following flight-impacting weather elements:
* Cloud Ceiling (CIG)
* Dewpoint Temperature (DEWPT)
* Cloud Cover (SKY)
* Air Temperature (TEMP)
* Visibility (VIS)
* Wind Direction (WINDDIR)
* Wind Speed (WINDSPEED)
* Wind Gust Speed (WINDGUST)

### Available Operations

* [wxByDistanceUsV1WxForecastDistanceQueryPost](#wxbydistanceusv1wxforecastdistancequerypost) - Retrieve forecast values within given distance of location for all requested weather elements and time periods.
* [wxByPolyUsV1WxForecastPolygonQueryPost](#wxbypolyusv1wxforecastpolygonquerypost) - Retrieve forecast values within given GeoJSON polygon for all requested weather elements and time periods.
* [wxByRouteUsV1WxForecastRouteQueryPost](#wxbyrouteusv1wxforecastroutequerypost) - Retrieve forecast values along a route for all requested weather elements and time periods.

## wxByDistanceUsV1WxForecastDistanceQueryPost

Retrieve forecast values for selected weather elements and time period. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)
* wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
* hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.


The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
* CIG: meters AGL
* DEWPT: degrees Celsius
* SKY: % cloud cover
* TEMP: degrees Celsius
* VIS: meters
* WINDDIR: degrees true
* WINDGUST: meters/sec
* WINDSPEED: meters/sec

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WxByDistanceUsV1WxForecastDistanceQueryPostRequest;
import org.openapis.openapi.models.operations.WxByDistanceUsV1WxForecastDistanceQueryPostResponse;
import org.openapis.openapi.models.shared.WxByDistance;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WxByDistanceUsV1WxForecastDistanceQueryPostRequest req = new WxByDistanceUsV1WxForecastDistanceQueryPostRequest(                new WxByDistance(93940L, 921158L, 83112L, 277718L,                 new String[]{{
                                                add("consequatur"),
                                                add("est"),
                                            }});) {{
                xApiKey = "quibusdam";
            }};            

            WxByDistanceUsV1WxForecastDistanceQueryPostResponse res = sdk.weather.wxByDistanceUsV1WxForecastDistanceQueryPost(req);

            if (res.wxDistanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## wxByPolyUsV1WxForecastPolygonQueryPost

Retrieve forecast values located within given area for requested weather elements and time period. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
* wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
* hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.


The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
* CIG: meters AGL
* DEWPT: degrees Celsius
* SKY: % cloud cover
* TEMP: degrees Celsius
* VIS: meters
* WINDDIR: degrees true
* WINDGUST: meters/sec
* WINDSPEED: meters/sec

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WxByPolyUsV1WxForecastPolygonQueryPostRequest;
import org.openapis.openapi.models.operations.WxByPolyUsV1WxForecastPolygonQueryPostResponse;
import org.openapis.openapi.models.shared.WxByPolygon;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WxByPolyUsV1WxForecastPolygonQueryPostRequest req = new WxByPolyUsV1WxForecastPolygonQueryPostRequest(                new WxByPolygon(131797L,                 new java.util.HashMap<String, Object>() {{
                                                put("distinctio", "quibusdam");
                                                put("labore", "modi");
                                                put("qui", "aliquid");
                                            }},                 new String[]{{
                                                add("quos"),
                                                add("perferendis"),
                                                add("magni"),
                                            }});) {{
                xApiKey = "assumenda";
            }};            

            WxByPolyUsV1WxForecastPolygonQueryPostResponse res = sdk.weather.wxByPolyUsV1WxForecastPolygonQueryPost(req);

            if (res.wxPolyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## wxByRouteUsV1WxForecastRouteQueryPost

Retrieve forecast values along route for requested weather elements and time period. Request body parameters are:
* route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
* wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
* hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.


The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
* CIG: meters AGL
* DEWPT: degrees Celsius
* SKY: % cloud cover
* TEMP: degrees Celsius
* VIS: meters
* WINDDIR: degrees true
* WINDGUST: meters/sec
* WINDSPEED: meters/sec

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WxByRouteUsV1WxForecastRouteQueryPostRequest;
import org.openapis.openapi.models.operations.WxByRouteUsV1WxForecastRouteQueryPostResponse;
import org.openapis.openapi.models.shared.WxByRoute;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WxByRouteUsV1WxForecastRouteQueryPostRequest req = new WxByRouteUsV1WxForecastRouteQueryPostRequest(                new WxByRoute(369808L,                 new java.util.HashMap<String, Object>() {{
                                                put("fugit", "dolorum");
                                            }},                 new String[]{{
                                                add("tempora"),
                                                add("facilis"),
                                                add("tempore"),
                                            }});) {{
                xApiKey = "labore";
            }};            

            WxByRouteUsV1WxForecastRouteQueryPostResponse res = sdk.weather.wxByRouteUsV1WxForecastRouteQueryPost(req);

            if (res.wxRouteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
