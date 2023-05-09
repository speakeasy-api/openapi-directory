# stopPoint

### Available Operations

* [stopPointArrivalDepartures](#stoppointarrivaldepartures) - Gets the list of arrival and departure predictions for the given stop point id (overground, Elizabeth line and thameslink only)
* [stopPointArrivals](#stoppointarrivals) - Gets the list of arrival predictions for the given stop point id
* [stopPointCrowding](#stoppointcrowding) - Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.
* [stopPointDirection](#stoppointdirection) - Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.
* [stopPointDisruption](#stoppointdisruption) - Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.
* [stopPointDisruptionByMode](#stoppointdisruptionbymode) - Gets a distinct list of disrupted stop points for the given modes
* [stopPointGet](#stoppointget) - Gets a list of StopPoints corresponding to the given list of stop ids.
* [stopPointGetByGeoPoint](#stoppointgetbygeopoint) - Gets a list of StopPoints within {radius} by the specified criteria
* [stopPointGetByMode](#stoppointgetbymode) - Gets a list of StopPoints filtered by the modes available at that StopPoint.
* [stopPointGetBySms](#stoppointgetbysms) - Gets a StopPoint for a given sms code.
* [stopPointGetByType](#stoppointgetbytype) - Gets all stop points of a given type
* [stopPointGetByTypeWithPagination](#stoppointgetbytypewithpagination) - Gets all the stop points of given type(s) with a page number
* [stopPointGetCarParksById](#stoppointgetcarparksbyid) - Get car parks corresponding to the given stop point id.
* [stopPointGetServiceTypes](#stoppointgetservicetypes) - Gets the service types for a given stoppoint
* [stopPointGetTaxiRanksByIds](#stoppointgettaxiranksbyids) - Gets a list of taxi ranks corresponding to the given stop point id.
* [stopPointMetaCategories](#stoppointmetacategories) - Gets the list of available StopPoint additional information categories
* [stopPointMetaModes](#stoppointmetamodes) - Gets the list of available StopPoint modes
* [stopPointMetaStopTypes](#stoppointmetastoptypes) - Gets the list of available StopPoint types
* [stopPointReachableFrom](#stoppointreachablefrom) - Gets Stopoints that are reachable from a station/line combination.
* [stopPointRoute](#stoppointroute) - Returns the route sections for all the lines that service the given stop point ids
* [stopPointSearch](#stoppointsearch) - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* [getStopPointSearch](#getstoppointsearch) - Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.
* [getStopPointIdPlaceTypes](#getstoppointidplacetypes) - Get a list of places corresponding to a given id and place types.

## stopPointArrivalDepartures

Gets the list of arrival and departure predictions for the given stop point id (overground, Elizabeth line and thameslink only)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointArrivalDeparturesRequest;
import org.openapis.openapi.models.operations.StopPointArrivalDeparturesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointArrivalDeparturesRequest req = new StopPointArrivalDeparturesRequest("in",                 new String[]{{
                                add("illum"),
                                add("maiores"),
                            }});            

            StopPointArrivalDeparturesResponse res = sdk.stopPoint.stopPointArrivalDepartures(req);

            if (res.tflApiPresentationEntitiesArrivalDepartures != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointArrivals

Gets the list of arrival predictions for the given stop point id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointArrivalsRequest;
import org.openapis.openapi.models.operations.StopPointArrivalsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointArrivalsRequest req = new StopPointArrivalsRequest("rerum");            

            StopPointArrivalsResponse res = sdk.stopPoint.stopPointArrivals(req);

            if (res.tflApiPresentationEntitiesPredictions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointCrowding

Gets all the Crowding data (static) for the StopPointId, plus crowding data for a given line and optionally a particular direction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointCrowdingDirectionEnum;
import org.openapis.openapi.models.operations.StopPointCrowdingRequest;
import org.openapis.openapi.models.operations.StopPointCrowdingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointCrowdingRequest req = new StopPointCrowdingRequest(StopPointCrowdingDirectionEnum.INBOUND, "magnam", "cumque");            

            StopPointCrowdingResponse res = sdk.stopPoint.stopPointCrowding(req);

            if (res.tflApiPresentationEntitiesStopPoints != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointDirection

Returns the canonical direction, "inbound" or "outbound", for a given pair of stop point Ids in the direction from -&gt; to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointDirectionRequest;
import org.openapis.openapi.models.operations.StopPointDirectionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointDirectionRequest req = new StopPointDirectionRequest("facere", "ea") {{
                lineId = "aliquid";
            }};            

            StopPointDirectionResponse res = sdk.stopPoint.stopPointDirection(req);

            if (res.stopPointDirection200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointDisruption

Gets all disruptions for the specified StopPointId, plus disruptions for any child Naptan records it may have.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointDisruptionRequest;
import org.openapis.openapi.models.operations.StopPointDisruptionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointDisruptionRequest req = new StopPointDisruptionRequest(                new String[]{{
                                add("accusamus"),
                                add("non"),
                                add("occaecati"),
                            }}) {{
                flattenResponse = false;
                getFamily = false;
                includeRouteBlockedStops = false;
            }};            

            StopPointDisruptionResponse res = sdk.stopPoint.stopPointDisruption(req);

            if (res.tflApiPresentationEntitiesDisruptedPoints != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointDisruptionByMode

Gets a distinct list of disrupted stop points for the given modes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointDisruptionByModeRequest;
import org.openapis.openapi.models.operations.StopPointDisruptionByModeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointDisruptionByModeRequest req = new StopPointDisruptionByModeRequest(                new String[]{{
                                add("accusamus"),
                                add("delectus"),
                            }}) {{
                includeRouteBlockedStops = false;
            }};            

            StopPointDisruptionByModeResponse res = sdk.stopPoint.stopPointDisruptionByMode(req);

            if (res.tflApiPresentationEntitiesDisruptedPoints != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointGet

Gets a list of StopPoints corresponding to the given list of stop ids.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointGetRequest;
import org.openapis.openapi.models.operations.StopPointGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointGetRequest req = new StopPointGetRequest(                new String[]{{
                                add("provident"),
                                add("nam"),
                                add("id"),
                            }}) {{
                includeCrowdingData = false;
            }};            

            StopPointGetResponse res = sdk.stopPoint.stopPointGet(req);

            if (res.tflApiPresentationEntitiesStopPoints != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointGetByGeoPoint

Gets a list of StopPoints within {radius} by the specified criteria

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointGetByGeoPointRequest;
import org.openapis.openapi.models.operations.StopPointGetByGeoPointResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointGetByGeoPointRequest req = new StopPointGetByGeoPointRequest(5013.24, 5332.06,                 new String[]{{
                                add("amet"),
                                add("deserunt"),
                                add("nisi"),
                                add("vel"),
                            }}) {{
                categories = new String[]{{
                    add("omnis"),
                    add("molestiae"),
                    add("perferendis"),
                }};
                modes = new String[]{{
                    add("magnam"),
                    add("distinctio"),
                }};
                radius = 660174;
                returnLines = false;
                useStopPointHierarchy = false;
            }};            

            StopPointGetByGeoPointResponse res = sdk.stopPoint.stopPointGetByGeoPoint(req);

            if (res.tflApiPresentationEntitiesStopPointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointGetByMode

Gets a list of StopPoints filtered by the modes available at that StopPoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointGetByModeRequest;
import org.openapis.openapi.models.operations.StopPointGetByModeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointGetByModeRequest req = new StopPointGetByModeRequest(                new String[]{{
                                add("labore"),
                                add("suscipit"),
                            }}) {{
                page = 618016;
            }};            

            StopPointGetByModeResponse res = sdk.stopPoint.stopPointGetByMode(req);

            if (res.tflApiPresentationEntitiesStopPointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointGetBySms

Gets a StopPoint for a given sms code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointGetBySmsRequest;
import org.openapis.openapi.models.operations.StopPointGetBySmsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointGetBySmsRequest req = new StopPointGetBySmsRequest("nobis") {{
                output = "eum";
            }};            

            StopPointGetBySmsResponse res = sdk.stopPoint.stopPointGetBySms(req);

            if (res.systemObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointGetByType

Gets all stop points of a given type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointGetByTypeRequest;
import org.openapis.openapi.models.operations.StopPointGetByTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointGetByTypeRequest req = new StopPointGetByTypeRequest(                new String[]{{
                                add("aspernatur"),
                                add("architecto"),
                                add("magnam"),
                                add("et"),
                            }});            

            StopPointGetByTypeResponse res = sdk.stopPoint.stopPointGetByType(req);

            if (res.tflApiPresentationEntitiesStopPoints != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointGetByTypeWithPagination

Gets all the stop points of given type(s) with a page number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointGetByTypeWithPaginationRequest;
import org.openapis.openapi.models.operations.StopPointGetByTypeWithPaginationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointGetByTypeWithPaginationRequest req = new StopPointGetByTypeWithPaginationRequest(569965,                 new String[]{{
                                add("provident"),
                                add("quos"),
                            }});            

            StopPointGetByTypeWithPaginationResponse res = sdk.stopPoint.stopPointGetByTypeWithPagination(req);

            if (res.tflApiPresentationEntitiesStopPoints != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointGetCarParksById

Get car parks corresponding to the given stop point id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointGetCarParksByIdRequest;
import org.openapis.openapi.models.operations.StopPointGetCarParksByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointGetCarParksByIdRequest req = new StopPointGetCarParksByIdRequest("sint");            

            StopPointGetCarParksByIdResponse res = sdk.stopPoint.stopPointGetCarParksById(req);

            if (res.tflApiPresentationEntitiesPlaces != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointGetServiceTypes

Gets the service types for a given stoppoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointGetServiceTypesRequest;
import org.openapis.openapi.models.operations.StopPointGetServiceTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointGetServiceTypesRequest req = new StopPointGetServiceTypesRequest("accusantium") {{
                lineIds = new String[]{{
                    add("reiciendis"),
                    add("mollitia"),
                    add("ad"),
                }};
                modes = new String[]{{
                    add("dolor"),
                    add("necessitatibus"),
                }};
            }};            

            StopPointGetServiceTypesResponse res = sdk.stopPoint.stopPointGetServiceTypes(req);

            if (res.tflApiPresentationEntitiesLineServiceTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointGetTaxiRanksByIds

Gets a list of taxi ranks corresponding to the given stop point id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointGetTaxiRanksByIdsRequest;
import org.openapis.openapi.models.operations.StopPointGetTaxiRanksByIdsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointGetTaxiRanksByIdsRequest req = new StopPointGetTaxiRanksByIdsRequest("odit");            

            StopPointGetTaxiRanksByIdsResponse res = sdk.stopPoint.stopPointGetTaxiRanksByIds(req);

            if (res.tflApiPresentationEntitiesPlaces != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointMetaCategories

Gets the list of available StopPoint additional information categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointMetaCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointMetaCategoriesResponse res = sdk.stopPoint.stopPointMetaCategories();

            if (res.tflApiPresentationEntitiesStopPointCategories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointMetaModes

Gets the list of available StopPoint modes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointMetaModesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointMetaModesResponse res = sdk.stopPoint.stopPointMetaModes();

            if (res.tflApiPresentationEntitiesModes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointMetaStopTypes

Gets the list of available StopPoint types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointMetaStopTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointMetaStopTypesResponse res = sdk.stopPoint.stopPointMetaStopTypes();

            if (res.stopPointMetaStopTypes200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointReachableFrom

Gets Stopoints that are reachable from a station/line combination.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointReachableFromRequest;
import org.openapis.openapi.models.operations.StopPointReachableFromResponse;
import org.openapis.openapi.models.operations.StopPointReachableFromServiceTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointReachableFromRequest req = new StopPointReachableFromRequest("nemo", "quasi") {{
                serviceTypes = new org.openapis.openapi.models.operations.StopPointReachableFromServiceTypesEnum[]{{
                    add(StopPointReachableFromServiceTypesEnum.NIGHT),
                    add(StopPointReachableFromServiceTypesEnum.NIGHT),
                }};
            }};            

            StopPointReachableFromResponse res = sdk.stopPoint.stopPointReachableFrom(req);

            if (res.tflApiPresentationEntitiesStopPoints != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointRoute

Returns the route sections for all the lines that service the given stop point ids

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointRouteRequest;
import org.openapis.openapi.models.operations.StopPointRouteResponse;
import org.openapis.openapi.models.operations.StopPointRouteServiceTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointRouteRequest req = new StopPointRouteRequest("eius") {{
                serviceTypes = new org.openapis.openapi.models.operations.StopPointRouteServiceTypesEnum[]{{
                    add(StopPointRouteServiceTypesEnum.NIGHT),
                    add(StopPointRouteServiceTypesEnum.NIGHT),
                    add(StopPointRouteServiceTypesEnum.REGULAR),
                    add(StopPointRouteServiceTypesEnum.REGULAR),
                }};
            }};            

            StopPointRouteResponse res = sdk.stopPoint.stopPointRoute(req);

            if (res.tflApiPresentationEntitiesStopPointRouteSections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopPointSearch

Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopPointSearchRequest;
import org.openapis.openapi.models.operations.StopPointSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StopPointSearchRequest req = new StopPointSearchRequest("architecto") {{
                faresOnly = false;
                includeHubs = false;
                lines = new String[]{{
                    add("ullam"),
                    add("expedita"),
                    add("nihil"),
                    add("repellat"),
                }};
                maxResults = 841140;
                modes = new String[]{{
                    add("saepe"),
                }};
                tflOperatedNationalRailStationsOnly = false;
            }};            

            StopPointSearchResponse res = sdk.stopPoint.stopPointSearch(req);

            if (res.tflApiPresentationEntitiesSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStopPointSearch

Search StopPoints by their common name, or their 5-digit Countdown Bus Stop Code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStopPointSearchRequest;
import org.openapis.openapi.models.operations.GetStopPointSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStopPointSearchRequest req = new GetStopPointSearchRequest("pariatur") {{
                faresOnly = false;
                includeHubs = false;
                lines = new String[]{{
                    add("consequuntur"),
                }};
                maxResults = 508315;
                modes = new String[]{{
                    add("magni"),
                    add("sunt"),
                    add("quo"),
                }};
                tflOperatedNationalRailStationsOnly = false;
            }};            

            GetStopPointSearchResponse res = sdk.stopPoint.getStopPointSearch(req);

            if (res.tflApiPresentationEntitiesSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStopPointIdPlaceTypes

Get a list of places corresponding to a given id and place types.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStopPointIdPlaceTypesRequest;
import org.openapis.openapi.models.operations.GetStopPointIdPlaceTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStopPointIdPlaceTypesRequest req = new GetStopPointIdPlaceTypesRequest("illum",                 new String[]{{
                                add("maxime"),
                                add("ea"),
                                add("excepturi"),
                                add("odit"),
                            }});            

            GetStopPointIdPlaceTypesResponse res = sdk.stopPoint.getStopPointIdPlaceTypes(req);

            if (res.tflApiPresentationEntitiesPlaces != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
