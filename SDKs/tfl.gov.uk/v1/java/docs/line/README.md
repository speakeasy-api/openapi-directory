# line

### Available Operations

* [lineArrivals](#linearrivals) - Get the list of arrival predictions for given line ids based at the given stop
* [lineDisruption](#linedisruption) - Get disruptions for the given line ids
* [lineDisruptionByMode](#linedisruptionbymode) - Get disruptions for all lines of the given modes.
* [lineGet](#lineget) - Gets lines that match the specified line ids.
* [lineGetByMode](#linegetbymode) - Gets lines that serve the given modes.
* [lineLineRoutesByIds](#linelineroutesbyids) - Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.
* [lineMetaDisruptionCategories](#linemetadisruptioncategories) - Gets a list of valid disruption categories
* [lineMetaModes](#linemetamodes) - Gets a list of valid modes
* [lineMetaServiceTypes](#linemetaservicetypes) - Gets a list of valid ServiceTypes to filter on
* [lineMetaSeverity](#linemetaseverity) - Gets a list of valid severity codes
* [lineRoute](#lineroute) - Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.
* [lineRouteByMode](#lineroutebymode) - Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route
* [lineRouteSequence](#lineroutesequence) - Gets all valid routes for given line id, including the sequence of stops on each route.
* [lineSearch](#linesearch) - Search for lines or routes matching the query string
* [lineStatus](#linestatus) - Gets the line status for given line ids during the provided dates e.g Minor Delays
* [lineStatusByIds](#linestatusbyids) - Gets the line status of for given line ids e.g Minor Delays
* [lineStatusByMode](#linestatusbymode) - Gets the line status of for all lines for the given modes
* [lineStatusBySeverity](#linestatusbyseverity) - Gets the line status for all lines with a given severity
            A list of valid severity codes can be obtained from a call to Line/Meta/Severity
* [lineStopPoints](#linestoppoints) - Gets a list of the stations that serve the given line id
* [lineTimetable](#linetimetable) - Gets the timetable for a specified station on the give line
* [lineTimetableTo](#linetimetableto) - Gets the timetable for a specified station on the give line with specified destination

## lineArrivals

Get the list of arrival predictions for given line ids based at the given stop

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineArrivalsDirectionEnum;
import org.openapis.openapi.models.operations.LineArrivalsRequest;
import org.openapis.openapi.models.operations.LineArrivalsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineArrivalsRequest req = new LineArrivalsRequest(                new String[]{{
                                add("molestiae"),
                                add("quod"),
                                add("quod"),
                                add("esse"),
                            }}, "totam") {{
                destinationStationId = "porro";
                direction = LineArrivalsDirectionEnum.ALL;
            }};            

            LineArrivalsResponse res = sdk.line.lineArrivals(req);

            if (res.tflApiPresentationEntitiesPredictions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineDisruption

Get disruptions for the given line ids

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineDisruptionRequest;
import org.openapis.openapi.models.operations.LineDisruptionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineDisruptionRequest req = new LineDisruptionRequest(                new String[]{{
                                add("nam"),
                            }});            

            LineDisruptionResponse res = sdk.line.lineDisruption(req);

            if (res.tflApiPresentationEntitiesDisruptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineDisruptionByMode

Get disruptions for all lines of the given modes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineDisruptionByModeRequest;
import org.openapis.openapi.models.operations.LineDisruptionByModeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineDisruptionByModeRequest req = new LineDisruptionByModeRequest(                new String[]{{
                                add("occaecati"),
                                add("fugit"),
                                add("deleniti"),
                            }});            

            LineDisruptionByModeResponse res = sdk.line.lineDisruptionByMode(req);

            if (res.tflApiPresentationEntitiesDisruptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineGet

Gets lines that match the specified line ids.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineGetRequest;
import org.openapis.openapi.models.operations.LineGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineGetRequest req = new LineGetRequest(                new String[]{{
                                add("optio"),
                                add("totam"),
                                add("beatae"),
                                add("commodi"),
                            }});            

            LineGetResponse res = sdk.line.lineGet(req);

            if (res.tflApiPresentationEntitiesLines != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineGetByMode

Gets lines that serve the given modes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineGetByModeRequest;
import org.openapis.openapi.models.operations.LineGetByModeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineGetByModeRequest req = new LineGetByModeRequest(                new String[]{{
                                add("modi"),
                                add("qui"),
                            }});            

            LineGetByModeResponse res = sdk.line.lineGetByMode(req);

            if (res.tflApiPresentationEntitiesLines != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineLineRoutesByIds

Get all valid routes for given line ids, including the name and id of the originating and terminating stops for each route.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineLineRoutesByIdsRequest;
import org.openapis.openapi.models.operations.LineLineRoutesByIdsResponse;
import org.openapis.openapi.models.operations.LineLineRoutesByIdsServiceTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineLineRoutesByIdsRequest req = new LineLineRoutesByIdsRequest(                new String[]{{
                                add("cum"),
                                add("esse"),
                                add("ipsum"),
                                add("excepturi"),
                            }}) {{
                serviceTypes = new org.openapis.openapi.models.operations.LineLineRoutesByIdsServiceTypesEnum[]{{
                    add(LineLineRoutesByIdsServiceTypesEnum.REGULAR),
                }};
            }};            

            LineLineRoutesByIdsResponse res = sdk.line.lineLineRoutesByIds(req);

            if (res.tflApiPresentationEntitiesLines != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineMetaDisruptionCategories

Gets a list of valid disruption categories

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineMetaDisruptionCategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineMetaDisruptionCategoriesResponse res = sdk.line.lineMetaDisruptionCategories();

            if (res.lineMetaDisruptionCategories200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineMetaModes

Gets a list of valid modes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineMetaModesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineMetaModesResponse res = sdk.line.lineMetaModes();

            if (res.tflApiPresentationEntitiesModes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineMetaServiceTypes

Gets a list of valid ServiceTypes to filter on

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineMetaServiceTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineMetaServiceTypesResponse res = sdk.line.lineMetaServiceTypes();

            if (res.lineMetaServiceTypes200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineMetaSeverity

Gets a list of valid severity codes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineMetaSeverityResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineMetaSeverityResponse res = sdk.line.lineMetaSeverity();

            if (res.tflApiPresentationEntitiesStatusSeverities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineRoute

Get all valid routes for all lines, including the name and id of the originating and terminating stops for each route.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineRouteRequest;
import org.openapis.openapi.models.operations.LineRouteResponse;
import org.openapis.openapi.models.operations.LineRouteServiceTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineRouteRequest req = new LineRouteRequest() {{
                serviceTypes = new org.openapis.openapi.models.operations.LineRouteServiceTypesEnum[]{{
                    add(LineRouteServiceTypesEnum.NIGHT),
                    add(LineRouteServiceTypesEnum.REGULAR),
                }};
            }};            

            LineRouteResponse res = sdk.line.lineRoute(req);

            if (res.tflApiPresentationEntitiesLines != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineRouteByMode

Gets all lines and their valid routes for given modes, including the name and id of the originating and terminating stops for each route

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineRouteByModeRequest;
import org.openapis.openapi.models.operations.LineRouteByModeResponse;
import org.openapis.openapi.models.operations.LineRouteByModeServiceTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineRouteByModeRequest req = new LineRouteByModeRequest(                new String[]{{
                                add("dolor"),
                                add("natus"),
                                add("laboriosam"),
                            }}) {{
                serviceTypes = new org.openapis.openapi.models.operations.LineRouteByModeServiceTypesEnum[]{{
                    add(LineRouteByModeServiceTypesEnum.NIGHT),
                    add(LineRouteByModeServiceTypesEnum.NIGHT),
                    add(LineRouteByModeServiceTypesEnum.REGULAR),
                    add(LineRouteByModeServiceTypesEnum.REGULAR),
                }};
            }};            

            LineRouteByModeResponse res = sdk.line.lineRouteByMode(req);

            if (res.tflApiPresentationEntitiesLines != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineRouteSequence

Gets all valid routes for given line id, including the sequence of stops on each route.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineRouteSequenceDirectionEnum;
import org.openapis.openapi.models.operations.LineRouteSequenceRequest;
import org.openapis.openapi.models.operations.LineRouteSequenceResponse;
import org.openapis.openapi.models.operations.LineRouteSequenceServiceTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineRouteSequenceRequest req = new LineRouteSequenceRequest(LineRouteSequenceDirectionEnum.OUTBOUND, "iure") {{
                excludeCrowding = false;
                serviceTypes = new org.openapis.openapi.models.operations.LineRouteSequenceServiceTypesEnum[]{{
                    add(LineRouteSequenceServiceTypesEnum.NIGHT),
                    add(LineRouteSequenceServiceTypesEnum.REGULAR),
                    add(LineRouteSequenceServiceTypesEnum.REGULAR),
                    add(LineRouteSequenceServiceTypesEnum.NIGHT),
                }};
            }};            

            LineRouteSequenceResponse res = sdk.line.lineRouteSequence(req);

            if (res.tflApiPresentationEntitiesRouteSequence != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineSearch

Search for lines or routes matching the query string

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineSearchRequest;
import org.openapis.openapi.models.operations.LineSearchResponse;
import org.openapis.openapi.models.operations.LineSearchServiceTypesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineSearchRequest req = new LineSearchRequest("est") {{
                modes = new String[]{{
                    add("laborum"),
                    add("dolores"),
                    add("dolorem"),
                }};
                serviceTypes = new org.openapis.openapi.models.operations.LineSearchServiceTypesEnum[]{{
                    add(LineSearchServiceTypesEnum.REGULAR),
                    add(LineSearchServiceTypesEnum.NIGHT),
                }};
            }};            

            LineSearchResponse res = sdk.line.lineSearch(req);

            if (res.tflApiPresentationEntitiesRouteSearchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineStatus

Gets the line status for given line ids during the provided dates e.g Minor Delays

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineStatusRequest;
import org.openapis.openapi.models.operations.LineStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineStatusRequest req = new LineStatusRequest("enim", "omnis", "nemo",                 new String[]{{
                                add("excepturi"),
                                add("accusantium"),
                            }}, "iure") {{
                dateRangeEndDate = OffsetDateTime.parse("2021-01-09T11:41:25.666Z");
                dateRangeStartDate = OffsetDateTime.parse("2022-09-11T06:15:44.019Z");
                detail = false;
            }};            

            LineStatusResponse res = sdk.line.lineStatus(req);

            if (res.tflApiPresentationEntitiesLines != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineStatusByIds

Gets the line status of for given line ids e.g Minor Delays

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineStatusByIdsRequest;
import org.openapis.openapi.models.operations.LineStatusByIdsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineStatusByIdsRequest req = new LineStatusByIdsRequest(                new String[]{{
                                add("dolorem"),
                                add("culpa"),
                                add("consequuntur"),
                            }}) {{
                detail = false;
            }};            

            LineStatusByIdsResponse res = sdk.line.lineStatusByIds(req);

            if (res.tflApiPresentationEntitiesLines != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineStatusByMode

Gets the line status of for all lines for the given modes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineStatusByModeRequest;
import org.openapis.openapi.models.operations.LineStatusByModeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineStatusByModeRequest req = new LineStatusByModeRequest(                new String[]{{
                                add("mollitia"),
                                add("occaecati"),
                                add("numquam"),
                                add("commodi"),
                            }}) {{
                detail = false;
                severityLevel = "quam";
            }};            

            LineStatusByModeResponse res = sdk.line.lineStatusByMode(req);

            if (res.tflApiPresentationEntitiesLines != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineStatusBySeverity

Gets the line status for all lines with a given severity
            A list of valid severity codes can be obtained from a call to Line/Meta/Severity

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineStatusBySeverityRequest;
import org.openapis.openapi.models.operations.LineStatusBySeverityResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineStatusBySeverityRequest req = new LineStatusBySeverityRequest(474697);            

            LineStatusBySeverityResponse res = sdk.line.lineStatusBySeverity(req);

            if (res.tflApiPresentationEntitiesLines != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineStopPoints

Gets a list of the stations that serve the given line id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineStopPointsRequest;
import org.openapis.openapi.models.operations.LineStopPointsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineStopPointsRequest req = new LineStopPointsRequest("velit") {{
                tflOperatedNationalRailStationsOnly = false;
            }};            

            LineStopPointsResponse res = sdk.line.lineStopPoints(req);

            if (res.tflApiPresentationEntitiesStopPoints != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineTimetable

Gets the timetable for a specified station on the give line

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineTimetableRequest;
import org.openapis.openapi.models.operations.LineTimetableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineTimetableRequest req = new LineTimetableRequest("error", "quia");            

            LineTimetableResponse res = sdk.line.lineTimetable(req);

            if (res.tflApiPresentationEntitiesTimetableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineTimetableTo

Gets the timetable for a specified station on the give line with specified destination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineTimetableToRequest;
import org.openapis.openapi.models.operations.LineTimetableToResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineTimetableToRequest req = new LineTimetableToRequest("quis", "vitae", "laborum");            

            LineTimetableToResponse res = sdk.line.lineTimetableTo(req);

            if (res.tflApiPresentationEntitiesTimetableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
