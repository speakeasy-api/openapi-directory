# airspace

## Overview

#### Information is available for the following types of airspace:
* **Controlled Airspace (CAS):** Class B, C, D, E2 airspace names, boundaries, altitude information, and LAANC availability
* **Special Use Airspace (SUA):** Names, boundaries, and altitude information for the following types of Special Use Airspace:
    - Alert Areas (AA)
    - Military Operations Areas (MOA)
    - National Security Areas (NSA)
    - Prohibited Areas (PA)
    - Restricted Areas (RA)
    - Warning Areas (WA)
* **Miscellaneous Activity Areas (MAA):** Names and boundary information for the following types of Miscellaneous Activity Areas:
    - Aerobatic Practice Areas (AEROBATIC PRACTICE)
    - Glider Operations Areas (GLIDER)
    - Hang Glider Operations Areas (HANG GLIDER)
    - Parachute Jump Areas (PARACHUTE JUMP AREA)
    - Space Launch Activity Areas (SPACE LAUNCH ACTIVITY)
* **Military Training Routes (MTR):** Names, route geometry, usage times, and corridor width information for both VFR and IFR Military Training Routes

### Available Operations

* [aspByDistanceUsV1AirspaceDistanceQueryPost](#aspbydistanceusv1airspacedistancequerypost) - Retrieve all requested types of airspace located within given distance of location.
* [aspByPolyUsV1AirspacePolygonQueryPost](#aspbypolyusv1airspacepolygonquerypost) - Retrieve all requested types of airspace located within given GeoJSON Polygon.
* [aspByRouteUsV1AirspaceRouteQueryPost](#aspbyrouteusv1airspaceroutequerypost) - Retrieve all requested types of airspace traversed by route.

## aspByDistanceUsV1AirspaceDistanceQueryPost

Retrieve selected types of airspace existing within given distance from a point. Request body parameters are:
* latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
* longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
* distance:  distance in meters (max allowed value is 25000)
* asptypes:  list of one or more airspace types you wish to retrieve. Allowed values are 'CAS', 'SUA', 'MAA', and 'MTR'.

Successful requests return a list of GeoJSON FeatureCollections, one for each Airspace type indicated in the request. Within each feature collection, there will be a separate Feature for each Airspace instance found. All Features will include a property indicating the *airspace_type*. Additional properties for each *airspace_type* are as follows:
* CAS (Controlled Airspace)
    - *name*
    - *cas_class*: B, C, D, or E2
    - *floor*: integer value in ft MSL
    - *ceiling*: integer value in ft MSL
    - *lannc*: true/false indicating whether or not authorization for this airspace may be obtained via LAANC
* SUA (Special Use Airspace)
    - *name*
    - *sua_type*: AA = Alert Area, MOA = Military Operations Area, NSA = National Security Area, PA = Prohibited Area, RA = Restricted Area, WA = Warning Area
    - *floor*: lower limit of the airspace
    - *floor_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)
    - *floor_ref*: reference level used for the numeric floor value: AGL, MSL, or STD (standard atmosphere, used for flight level values)
    - *ceiling*: upper limit of the airspace
    - *ceiling_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)
    - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)
    - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)
    - *schedule*: default activation days/times (other times by NOTAM)
* MAA (Miscellaneous Activity Area)
    - *name*
    - *maa_type*: one of the following - ULTRALIGHT, PARACHUTE JUMP AREA, AEROBATIC PRACTICE, GLIDER, HANG GLIDER, SPACE LAUNCH ACTIVITY
    - *use_times*: textual description of days/times when activity in the area should be expected
* MTR (Military Training Route)
    - *name*
    - *use_times*: textual description of days/times when MTR is active/hot
    - *terrain_following*: boolean value indicating whether terrain following activity occurs on the route
    - *max_extent_nm*: maximum distance that aircraft can deviate from route centerline

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AspByDistanceUsV1AirspaceDistanceQueryPostRequest;
import org.openapis.openapi.models.operations.AspByDistanceUsV1AirspaceDistanceQueryPostResponse;
import org.openapis.openapi.models.shared.AirspaceByDistance;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AspByDistanceUsV1AirspaceDistanceQueryPostRequest req = new AspByDistanceUsV1AirspaceDistanceQueryPostRequest(                new AirspaceByDistance(                new String[]{{
                                                add("ipsam"),
                                            }}, 957156L, 140350L, 870088L);) {{
                xApiKey = "maiores";
            }};            

            AspByDistanceUsV1AirspaceDistanceQueryPostResponse res = sdk.airspace.aspByDistanceUsV1AirspaceDistanceQueryPost(req);

            if (res.airspaceDistanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## aspByPolyUsV1AirspacePolygonQueryPost

Retrieve selected types of airspace located within given area. Request body parameters are:
* poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
* asptypes:  list of one or more airspace types you wish to retrieve. Allowed values are 'CAS', 'SUA', 'MAA', and 'MTR'.

Successful requests return a list of GeoJSON FeatureCollections, one for each Airspace type indicated in the request. Within each feature collection, there will be a separate Feature for each Airspace instance found. All Features will include a property indicating the *airspace_type*. Additional properties for each *airspace_type* are as follows:
* CAS (Controlled Airspace)
    - *name*
    - *cas_class*: B, C, D, or E2
    - *floor*: integer value in ft MSL
    - *ceiling*: integer value in ft MSL
    - *lannc*: true/false indicating whether or not authorization for this airspace may be obtained via LAANC
* SUA (Special Use Airspace)
    - *name*
    - *sua_type*: AA = Alert Area, MOA = Military Operations Area, NSA = National Security Area, PA = Prohibited Area, RA = Restricted Area, WA = Warning Area
    - *floor*: lower limit of the airspace
    - *floor_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)
    - *floor_ref*: reference level used for the numeric floor value: AGL, MSL, or STD (standard atmosphere, used for flight level values)
    - *ceiling*: upper limit of the airspace
    - *ceiling_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)
    - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)
    - *schedule*: default activation days/times (other times by NOTAM)
* MAA (Miscellaneous Activity Area)
    - *name*
    - *maa_type*: one of the following - ULTRALIGHT, PARACHUTE JUMP AREA, AEROBATIC PRACTICE, GLIDER, HANG GLIDER, SPACE LAUNCH ACTIVITY
    - *use_times*: textual description of days/times when activity in the area should be expected
* MTR (Military Training Route)
    - *name*
    - *use_times*: textual description of days/times when MTR is active/hot
    - *terrain_following*: boolean value indicating whether terrain following activity occurs on the route
    - *max_extent_nm*: maximum distance that aircraft can deviate from route centerline

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AspByPolyUsV1AirspacePolygonQueryPostRequest;
import org.openapis.openapi.models.operations.AspByPolyUsV1AirspacePolygonQueryPostResponse;
import org.openapis.openapi.models.shared.AirspaceByPolygon;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AspByPolyUsV1AirspacePolygonQueryPostRequest req = new AspByPolyUsV1AirspacePolygonQueryPostRequest(                new AirspaceByPolygon(                new String[]{{
                                                add("quod"),
                                                add("quod"),
                                            }},                 new java.util.HashMap<String, Object>() {{
                                                put("totam", "porro");
                                                put("dolorum", "dicta");
                                            }});) {{
                xApiKey = "nam";
            }};            

            AspByPolyUsV1AirspacePolygonQueryPostResponse res = sdk.airspace.aspByPolyUsV1AirspacePolygonQueryPost(req);

            if (res.airspacePolyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## aspByRouteUsV1AirspaceRouteQueryPost

Retrieve selected types of airspace traversed by route. Request body parameters are:
* route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
* asptypes:  list of one or more airspace types you wish to retrieve. Allowed values are 'CAS', 'SUA', 'MAA', and 'MTR'.

Successful requests return a list of GeoJSON FeatureCollections, one for each Airspace type indicated in the request. Within each feature collection, there will be a separate Feature for each Airspace instance found. All Features will include a property indicating the *airspace_type*. Additional properties for each *airspace_type* are as follows:
* CAS (Controlled Airspace)
    - *name*
    - *cas_class*: B, C, D, or E2
    - *floor*: integer value in ft MSL
    - *ceiling*: integer value in ft MSL
    - *lannc*: true/false indicating whether or not authorization for this airspace may be obtained via LAANC
* SUA (Special Use Airspace)
    - *name*
    - *sua_type*: AA = Alert Area, MOA = Military Operations Area, NSA = National Security Area, PA = Prohibited Area, RA = Restricted Area, WA = Warning Area
    - *floor*: lower limit of the airspace
    - *floor_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)
    - *floor_ref*: reference level used for the numeric floor value: AGL, MSL, or STD (standard atmosphere, used for flight level values)
    - *ceiling*: upper limit of the airspace
    - *ceiling_uom*: unit of measure used for the numeric floor value: FT (feet) or FL (flight level)
    - *ceiling_ref*: reference level used for the numeric ceiling value: AGL, MSL, or STD (standard atmosphere, used for flight level values)
    - *schedule*: default activation days/times (other times by NOTAM)
* MAA (Miscellaneous Activity Area)
    - *name*
    - *maa_type*: one of the following - ULTRALIGHT, PARACHUTE JUMP AREA, AEROBATIC PRACTICE, GLIDER, HANG GLIDER, SPACE LAUNCH ACTIVITY
    - *use_times*: textual description of days/times when activity in the area should be expected
* MTR (Military Training Route)
    - *name*
    - *use_times*: textual description of days/times when MTR is active/hot
    - *terrain_following*: boolean value indicating whether terrain following activity occurs on the route
    - *max_extent_nm*: maximum distance that aircraft can deviate from route centerline

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AspByRouteUsV1AirspaceRouteQueryPostRequest;
import org.openapis.openapi.models.operations.AspByRouteUsV1AirspaceRouteQueryPostResponse;
import org.openapis.openapi.models.shared.AirspaceByRoute;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AspByRouteUsV1AirspaceRouteQueryPostRequest req = new AspByRouteUsV1AirspaceRouteQueryPostRequest(                new AirspaceByRoute(                new String[]{{
                                                add("occaecati"),
                                                add("fugit"),
                                                add("deleniti"),
                                            }},                 new java.util.HashMap<String, Object>() {{
                                                put("optio", "totam");
                                                put("beatae", "commodi");
                                                put("molestiae", "modi");
                                                put("qui", "impedit");
                                            }});) {{
                xApiKey = "cum";
            }};            

            AspByRouteUsV1AirspaceRouteQueryPostResponse res = sdk.airspace.aspByRouteUsV1AirspaceRouteQueryPost(req);

            if (res.airspaceRouteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
