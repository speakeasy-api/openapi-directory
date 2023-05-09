# match

## Overview

Calls that return match, or match-specific information.

### Available Operations

* [getEventMatchTimeseries](#geteventmatchtimeseries) - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [getEventMatches](#geteventmatches) - Gets a list of matches for the given event.
* [getEventMatchesKeys](#geteventmatcheskeys) - Gets a list of match keys for the given event.
* [getEventMatchesSimple](#geteventmatchessimple) - Gets a short-form list of matches for the given event.
* [getMatch](#getmatch) - Gets a `Match` object for the given match key.
* [getMatchSimple](#getmatchsimple) - Gets a short-form `Match` object for the given match key.
* [getMatchTimeseries](#getmatchtimeseries) - Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [getMatchZebra](#getmatchzebra) - Gets Zebra MotionWorks data for a Match for the given match key.
* [getTeamEventMatches](#getteameventmatches) - Gets a list of matches for the given team and event.
* [getTeamEventMatchesKeys](#getteameventmatcheskeys) - Gets a list of match keys for matches for the given team and event.
* [getTeamEventMatchesSimple](#getteameventmatchessimple) - Gets a short-form list of matches for the given team and event.
* [getTeamMatchesByYear](#getteammatchesbyyear) - Gets a list of matches for the given team and year.
* [getTeamMatchesByYearKeys](#getteammatchesbyyearkeys) - Gets a list of match keys for matches for the given team and year.
* [getTeamMatchesByYearSimple](#getteammatchesbyyearsimple) - Gets a short-form list of matches for the given team and year.

## getEventMatchTimeseries

Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventMatchTimeseriesRequest;
import org.openapis.openapi.models.operations.GetEventMatchTimeseriesResponse;
import org.openapis.openapi.models.operations.GetEventMatchTimeseriesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventMatchTimeseriesRequest req = new GetEventMatchTimeseriesRequest("officia") {{
                ifNoneMatch = "dolor";
            }};            

            GetEventMatchTimeseriesResponse res = sdk.match.getEventMatchTimeseries(req, new GetEventMatchTimeseriesSecurity("debitis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEventMatchTimeseries200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventMatches

Gets a list of matches for the given event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventMatchesRequest;
import org.openapis.openapi.models.operations.GetEventMatchesResponse;
import org.openapis.openapi.models.operations.GetEventMatchesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventMatchesRequest req = new GetEventMatchesRequest("a") {{
                ifNoneMatch = "dolorum";
            }};            

            GetEventMatchesResponse res = sdk.match.getEventMatches(req, new GetEventMatchesSecurity("in") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.matches != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventMatchesKeys

Gets a list of match keys for the given event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventMatchesKeysRequest;
import org.openapis.openapi.models.operations.GetEventMatchesKeysResponse;
import org.openapis.openapi.models.operations.GetEventMatchesKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventMatchesKeysRequest req = new GetEventMatchesKeysRequest("in") {{
                ifNoneMatch = "illum";
            }};            

            GetEventMatchesKeysResponse res = sdk.match.getEventMatchesKeys(req, new GetEventMatchesKeysSecurity("maiores") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEventMatchesKeys200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventMatchesSimple

Gets a short-form list of matches for the given event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventMatchesSimpleRequest;
import org.openapis.openapi.models.operations.GetEventMatchesSimpleResponse;
import org.openapis.openapi.models.operations.GetEventMatchesSimpleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventMatchesSimpleRequest req = new GetEventMatchesSimpleRequest("rerum") {{
                ifNoneMatch = "dicta";
            }};            

            GetEventMatchesSimpleResponse res = sdk.match.getEventMatchesSimple(req, new GetEventMatchesSimpleSecurity("magnam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.matchSimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMatch

Gets a `Match` object for the given match key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMatchRequest;
import org.openapis.openapi.models.operations.GetMatchResponse;
import org.openapis.openapi.models.operations.GetMatchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMatchRequest req = new GetMatchRequest("cumque") {{
                ifNoneMatch = "facere";
            }};            

            GetMatchResponse res = sdk.match.getMatch(req, new GetMatchSecurity("ea") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.match != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMatchSimple

Gets a short-form `Match` object for the given match key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMatchSimpleRequest;
import org.openapis.openapi.models.operations.GetMatchSimpleResponse;
import org.openapis.openapi.models.operations.GetMatchSimpleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMatchSimpleRequest req = new GetMatchSimpleRequest("aliquid") {{
                ifNoneMatch = "laborum";
            }};            

            GetMatchSimpleResponse res = sdk.match.getMatchSimple(req, new GetMatchSimpleSecurity("accusamus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.matchSimple != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMatchTimeseries

Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMatchTimeseriesRequest;
import org.openapis.openapi.models.operations.GetMatchTimeseriesResponse;
import org.openapis.openapi.models.operations.GetMatchTimeseriesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMatchTimeseriesRequest req = new GetMatchTimeseriesRequest("non") {{
                ifNoneMatch = "occaecati";
            }};            

            GetMatchTimeseriesResponse res = sdk.match.getMatchTimeseries(req, new GetMatchTimeseriesSecurity("enim") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getMatchTimeseries200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMatchZebra

Gets Zebra MotionWorks data for a Match for the given match key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMatchZebraRequest;
import org.openapis.openapi.models.operations.GetMatchZebraResponse;
import org.openapis.openapi.models.operations.GetMatchZebraSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMatchZebraRequest req = new GetMatchZebraRequest("accusamus") {{
                ifNoneMatch = "delectus";
            }};            

            GetMatchZebraResponse res = sdk.match.getMatchZebra(req, new GetMatchZebraSecurity("quidem") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.zebra != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamEventMatches

Gets a list of matches for the given team and event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamEventMatchesRequest;
import org.openapis.openapi.models.operations.GetTeamEventMatchesResponse;
import org.openapis.openapi.models.operations.GetTeamEventMatchesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamEventMatchesRequest req = new GetTeamEventMatchesRequest("provident", "nam") {{
                ifNoneMatch = "id";
            }};            

            GetTeamEventMatchesResponse res = sdk.match.getTeamEventMatches(req, new GetTeamEventMatchesSecurity("blanditiis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.matches != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamEventMatchesKeys

Gets a list of match keys for matches for the given team and event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamEventMatchesKeysRequest;
import org.openapis.openapi.models.operations.GetTeamEventMatchesKeysResponse;
import org.openapis.openapi.models.operations.GetTeamEventMatchesKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamEventMatchesKeysRequest req = new GetTeamEventMatchesKeysRequest("deleniti", "sapiente") {{
                ifNoneMatch = "amet";
            }};            

            GetTeamEventMatchesKeysResponse res = sdk.match.getTeamEventMatchesKeys(req, new GetTeamEventMatchesKeysSecurity("deserunt") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTeamEventMatchesKeys200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamEventMatchesSimple

Gets a short-form list of matches for the given team and event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamEventMatchesSimpleRequest;
import org.openapis.openapi.models.operations.GetTeamEventMatchesSimpleResponse;
import org.openapis.openapi.models.operations.GetTeamEventMatchesSimpleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamEventMatchesSimpleRequest req = new GetTeamEventMatchesSimpleRequest("nisi", "vel") {{
                ifNoneMatch = "natus";
            }};            

            GetTeamEventMatchesSimpleResponse res = sdk.match.getTeamEventMatchesSimple(req, new GetTeamEventMatchesSimpleSecurity("omnis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.matches != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamMatchesByYear

Gets a list of matches for the given team and year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamMatchesByYearRequest;
import org.openapis.openapi.models.operations.GetTeamMatchesByYearResponse;
import org.openapis.openapi.models.operations.GetTeamMatchesByYearSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamMatchesByYearRequest req = new GetTeamMatchesByYearRequest("molestiae", 19193L) {{
                ifNoneMatch = "nihil";
            }};            

            GetTeamMatchesByYearResponse res = sdk.match.getTeamMatchesByYear(req, new GetTeamMatchesByYearSecurity("magnam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.matches != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamMatchesByYearKeys

Gets a list of match keys for matches for the given team and year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamMatchesByYearKeysRequest;
import org.openapis.openapi.models.operations.GetTeamMatchesByYearKeysResponse;
import org.openapis.openapi.models.operations.GetTeamMatchesByYearKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamMatchesByYearKeysRequest req = new GetTeamMatchesByYearKeysRequest("distinctio", 660174L) {{
                ifNoneMatch = "labore";
            }};            

            GetTeamMatchesByYearKeysResponse res = sdk.match.getTeamMatchesByYearKeys(req, new GetTeamMatchesByYearKeysSecurity("labore") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTeamMatchesByYearKeys200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamMatchesByYearSimple

Gets a short-form list of matches for the given team and year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamMatchesByYearSimpleRequest;
import org.openapis.openapi.models.operations.GetTeamMatchesByYearSimpleResponse;
import org.openapis.openapi.models.operations.GetTeamMatchesByYearSimpleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamMatchesByYearSimpleRequest req = new GetTeamMatchesByYearSimpleRequest("suscipit", 618016L) {{
                ifNoneMatch = "nobis";
            }};            

            GetTeamMatchesByYearSimpleResponse res = sdk.match.getTeamMatchesByYearSimple(req, new GetTeamMatchesByYearSimpleSecurity("eum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.matchSimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
