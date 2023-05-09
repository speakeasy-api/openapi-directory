# event

## Overview

Calls that return event, or event-specific information.

### Available Operations

* [getDistrictEvents](#getdistrictevents) - Gets a list of events in the given district.
* [getDistrictEventsKeys](#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [getDistrictEventsSimple](#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [getEvent](#getevent) - Gets an Event.
* [getEventAlliances](#geteventalliances) - Gets a list of Elimination Alliances for the given Event.
* [getEventAwards](#geteventawards) - Gets a list of awards from the given event.
* [getEventDistrictPoints](#geteventdistrictpoints) - Gets a list of team rankings for the Event.
* [getEventInsights](#geteventinsights) - Gets a set of Event-specific insights for the given Event.
* [getEventMatchTimeseries](#geteventmatchtimeseries) - Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
*WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
*WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
* [getEventMatches](#geteventmatches) - Gets a list of matches for the given event.
* [getEventMatchesKeys](#geteventmatcheskeys) - Gets a list of match keys for the given event.
* [getEventMatchesSimple](#geteventmatchessimple) - Gets a short-form list of matches for the given event.
* [getEventOPRs](#geteventoprs) - Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.
* [getEventPredictions](#geteventpredictions) - Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.
* [getEventRankings](#geteventrankings) - Gets a list of team rankings for the Event.
* [getEventSimple](#geteventsimple) - Gets a short-form Event.
* [getEventTeams](#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [getEventTeamsKeys](#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [getEventTeamsSimple](#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [getEventTeamsStatuses](#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [getEventsByYear](#geteventsbyyear) - Gets a list of events in the given year.
* [getEventsByYearKeys](#geteventsbyyearkeys) - Gets a list of event keys in the given year.
* [getEventsByYearSimple](#geteventsbyyearsimple) - Gets a short-form list of events in the given year.
* [getTeamEventAwards](#getteameventawards) - Gets a list of awards the given team won at the given event.
* [getTeamEventMatches](#getteameventmatches) - Gets a list of matches for the given team and event.
* [getTeamEventMatchesKeys](#getteameventmatcheskeys) - Gets a list of match keys for matches for the given team and event.
* [getTeamEventMatchesSimple](#getteameventmatchessimple) - Gets a short-form list of matches for the given team and event.
* [getTeamEventStatus](#getteameventstatus) - Gets the competition rank and status of the team at the given event.
* [getTeamEvents](#getteamevents) - Gets a list of all events this team has competed at.
* [getTeamEventsByYear](#getteameventsbyyear) - Gets a list of events this team has competed at in the given year.
* [getTeamEventsByYearKeys](#getteameventsbyyearkeys) - Gets a list of the event keys for events this team has competed at in the given year.
* [getTeamEventsByYearSimple](#getteameventsbyyearsimple) - Gets a short-form list of events this team has competed at in the given year.
* [getTeamEventsKeys](#getteameventskeys) - Gets a list of the event keys for all events this team has competed at.
* [getTeamEventsSimple](#getteameventssimple) - Gets a short-form list of all events this team has competed at.
* [getTeamEventsStatusesByYear](#getteameventsstatusesbyyear) - Gets a key-value list of the event statuses for events this team has competed at in the given year.

## getDistrictEvents

Gets a list of events in the given district.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictEventsRequest;
import org.openapis.openapi.models.operations.GetDistrictEventsResponse;
import org.openapis.openapi.models.operations.GetDistrictEventsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDistrictEventsRequest req = new GetDistrictEventsRequest("repellendus") {{
                ifNoneMatch = "sapiente";
            }};            

            GetDistrictEventsResponse res = sdk.event.getDistrictEvents(req, new GetDistrictEventsSecurity("quo") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistrictEventsKeys

Gets a list of event keys for events in the given district.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictEventsKeysRequest;
import org.openapis.openapi.models.operations.GetDistrictEventsKeysResponse;
import org.openapis.openapi.models.operations.GetDistrictEventsKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDistrictEventsKeysRequest req = new GetDistrictEventsKeysRequest("odit") {{
                ifNoneMatch = "at";
            }};            

            GetDistrictEventsKeysResponse res = sdk.event.getDistrictEventsKeys(req, new GetDistrictEventsKeysSecurity("at") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getDistrictEventsKeys200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistrictEventsSimple

Gets a short-form list of events in the given district.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictEventsSimpleRequest;
import org.openapis.openapi.models.operations.GetDistrictEventsSimpleResponse;
import org.openapis.openapi.models.operations.GetDistrictEventsSimpleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDistrictEventsSimpleRequest req = new GetDistrictEventsSimpleRequest("maiores") {{
                ifNoneMatch = "molestiae";
            }};            

            GetDistrictEventsSimpleResponse res = sdk.event.getDistrictEventsSimple(req, new GetDistrictEventsSimpleSecurity("quod") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.eventSimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEvent

Gets an Event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventRequest;
import org.openapis.openapi.models.operations.GetEventResponse;
import org.openapis.openapi.models.operations.GetEventSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventRequest req = new GetEventRequest("quod") {{
                ifNoneMatch = "esse";
            }};            

            GetEventResponse res = sdk.event.getEvent(req, new GetEventSecurity("totam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.event != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventAlliances

Gets a list of Elimination Alliances for the given Event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventAlliancesRequest;
import org.openapis.openapi.models.operations.GetEventAlliancesResponse;
import org.openapis.openapi.models.operations.GetEventAlliancesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventAlliancesRequest req = new GetEventAlliancesRequest("porro") {{
                ifNoneMatch = "dolorum";
            }};            

            GetEventAlliancesResponse res = sdk.event.getEventAlliances(req, new GetEventAlliancesSecurity("dicta") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.eliminationAlliances != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventAwards

Gets a list of awards from the given event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventAwardsRequest;
import org.openapis.openapi.models.operations.GetEventAwardsResponse;
import org.openapis.openapi.models.operations.GetEventAwardsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventAwardsRequest req = new GetEventAwardsRequest("nam") {{
                ifNoneMatch = "officia";
            }};            

            GetEventAwardsResponse res = sdk.event.getEventAwards(req, new GetEventAwardsSecurity("occaecati") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.awards != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventDistrictPoints

Gets a list of team rankings for the Event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventDistrictPointsRequest;
import org.openapis.openapi.models.operations.GetEventDistrictPointsResponse;
import org.openapis.openapi.models.operations.GetEventDistrictPointsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventDistrictPointsRequest req = new GetEventDistrictPointsRequest("fugit") {{
                ifNoneMatch = "deleniti";
            }};            

            GetEventDistrictPointsResponse res = sdk.event.getEventDistrictPoints(req, new GetEventDistrictPointsSecurity("hic") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.eventDistrictPoints != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventInsights

Gets a set of Event-specific insights for the given Event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventInsightsRequest;
import org.openapis.openapi.models.operations.GetEventInsightsResponse;
import org.openapis.openapi.models.operations.GetEventInsightsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventInsightsRequest req = new GetEventInsightsRequest("optio") {{
                ifNoneMatch = "totam";
            }};            

            GetEventInsightsResponse res = sdk.event.getEventInsights(req, new GetEventInsightsSecurity("beatae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.eventInsights != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            GetEventMatchTimeseriesRequest req = new GetEventMatchTimeseriesRequest("commodi") {{
                ifNoneMatch = "molestiae";
            }};            

            GetEventMatchTimeseriesResponse res = sdk.event.getEventMatchTimeseries(req, new GetEventMatchTimeseriesSecurity("modi") {{
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

            GetEventMatchesRequest req = new GetEventMatchesRequest("qui") {{
                ifNoneMatch = "impedit";
            }};            

            GetEventMatchesResponse res = sdk.event.getEventMatches(req, new GetEventMatchesSecurity("cum") {{
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

            GetEventMatchesKeysRequest req = new GetEventMatchesKeysRequest("esse") {{
                ifNoneMatch = "ipsum";
            }};            

            GetEventMatchesKeysResponse res = sdk.event.getEventMatchesKeys(req, new GetEventMatchesKeysSecurity("excepturi") {{
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

            GetEventMatchesSimpleRequest req = new GetEventMatchesSimpleRequest("aspernatur") {{
                ifNoneMatch = "perferendis";
            }};            

            GetEventMatchesSimpleResponse res = sdk.event.getEventMatchesSimple(req, new GetEventMatchesSimpleSecurity("ad") {{
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

## getEventOPRs

Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventOPRsRequest;
import org.openapis.openapi.models.operations.GetEventOPRsResponse;
import org.openapis.openapi.models.operations.GetEventOPRsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventOPRsRequest req = new GetEventOPRsRequest("natus") {{
                ifNoneMatch = "sed";
            }};            

            GetEventOPRsResponse res = sdk.event.getEventOPRs(req, new GetEventOPRsSecurity("iste") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.eventOPRs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventPredictions

Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventPredictionsRequest;
import org.openapis.openapi.models.operations.GetEventPredictionsResponse;
import org.openapis.openapi.models.operations.GetEventPredictionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventPredictionsRequest req = new GetEventPredictionsRequest("dolor") {{
                ifNoneMatch = "natus";
            }};            

            GetEventPredictionsResponse res = sdk.event.getEventPredictions(req, new GetEventPredictionsSecurity("laboriosam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.eventPredictions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventRankings

Gets a list of team rankings for the Event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventRankingsRequest;
import org.openapis.openapi.models.operations.GetEventRankingsResponse;
import org.openapis.openapi.models.operations.GetEventRankingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventRankingsRequest req = new GetEventRankingsRequest("hic") {{
                ifNoneMatch = "saepe";
            }};            

            GetEventRankingsResponse res = sdk.event.getEventRankings(req, new GetEventRankingsSecurity("fuga") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.eventRanking != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventSimple

Gets a short-form Event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventSimpleRequest;
import org.openapis.openapi.models.operations.GetEventSimpleResponse;
import org.openapis.openapi.models.operations.GetEventSimpleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventSimpleRequest req = new GetEventSimpleRequest("in") {{
                ifNoneMatch = "corporis";
            }};            

            GetEventSimpleResponse res = sdk.event.getEventSimple(req, new GetEventSimpleSecurity("iste") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.eventSimple != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventTeams

Gets a list of `Team` objects that competed in the given event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventTeamsRequest;
import org.openapis.openapi.models.operations.GetEventTeamsResponse;
import org.openapis.openapi.models.operations.GetEventTeamsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventTeamsRequest req = new GetEventTeamsRequest("iure") {{
                ifNoneMatch = "saepe";
            }};            

            GetEventTeamsResponse res = sdk.event.getEventTeams(req, new GetEventTeamsSecurity("quidem") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventTeamsKeys

Gets a list of `Team` keys that competed in the given event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventTeamsKeysRequest;
import org.openapis.openapi.models.operations.GetEventTeamsKeysResponse;
import org.openapis.openapi.models.operations.GetEventTeamsKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventTeamsKeysRequest req = new GetEventTeamsKeysRequest("architecto") {{
                ifNoneMatch = "ipsa";
            }};            

            GetEventTeamsKeysResponse res = sdk.event.getEventTeamsKeys(req, new GetEventTeamsKeysSecurity("reiciendis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEventTeamsKeys200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventTeamsSimple

Gets a short-form list of `Team` objects that competed in the given event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventTeamsSimpleRequest;
import org.openapis.openapi.models.operations.GetEventTeamsSimpleResponse;
import org.openapis.openapi.models.operations.GetEventTeamsSimpleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventTeamsSimpleRequest req = new GetEventTeamsSimpleRequest("est") {{
                ifNoneMatch = "mollitia";
            }};            

            GetEventTeamsSimpleResponse res = sdk.event.getEventTeamsSimple(req, new GetEventTeamsSimpleSecurity("laborum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.teamSimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventTeamsStatuses

Gets a key-value list of the event statuses for teams competing at the given event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventTeamsStatusesRequest;
import org.openapis.openapi.models.operations.GetEventTeamsStatusesResponse;
import org.openapis.openapi.models.operations.GetEventTeamsStatusesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventTeamsStatusesRequest req = new GetEventTeamsStatusesRequest("dolores") {{
                ifNoneMatch = "dolorem";
            }};            

            GetEventTeamsStatusesResponse res = sdk.event.getEventTeamsStatuses(req, new GetEventTeamsStatusesSecurity("corporis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEventTeamsStatuses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventsByYear

Gets a list of events in the given year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsByYearRequest;
import org.openapis.openapi.models.operations.GetEventsByYearResponse;
import org.openapis.openapi.models.operations.GetEventsByYearSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsByYearRequest req = new GetEventsByYearRequest(128926L) {{
                ifNoneMatch = "nobis";
            }};            

            GetEventsByYearResponse res = sdk.event.getEventsByYear(req, new GetEventsByYearSecurity("enim") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventsByYearKeys

Gets a list of event keys in the given year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsByYearKeysRequest;
import org.openapis.openapi.models.operations.GetEventsByYearKeysResponse;
import org.openapis.openapi.models.operations.GetEventsByYearKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsByYearKeysRequest req = new GetEventsByYearKeysRequest(607831L) {{
                ifNoneMatch = "nemo";
            }};            

            GetEventsByYearKeysResponse res = sdk.event.getEventsByYearKeys(req, new GetEventsByYearKeysSecurity("minima") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getEventsByYearKeys200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventsByYearSimple

Gets a short-form list of events in the given year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsByYearSimpleRequest;
import org.openapis.openapi.models.operations.GetEventsByYearSimpleResponse;
import org.openapis.openapi.models.operations.GetEventsByYearSimpleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsByYearSimpleRequest req = new GetEventsByYearSimpleRequest(570197L) {{
                ifNoneMatch = "accusantium";
            }};            

            GetEventsByYearSimpleResponse res = sdk.event.getEventsByYearSimple(req, new GetEventsByYearSimpleSecurity("iure") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.eventSimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamEventAwards

Gets a list of awards the given team won at the given event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamEventAwardsRequest;
import org.openapis.openapi.models.operations.GetTeamEventAwardsResponse;
import org.openapis.openapi.models.operations.GetTeamEventAwardsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamEventAwardsRequest req = new GetTeamEventAwardsRequest("culpa", "doloribus") {{
                ifNoneMatch = "sapiente";
            }};            

            GetTeamEventAwardsResponse res = sdk.event.getTeamEventAwards(req, new GetTeamEventAwardsSecurity("architecto") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.awards != null) {
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

            GetTeamEventMatchesRequest req = new GetTeamEventMatchesRequest("mollitia", "dolorem") {{
                ifNoneMatch = "culpa";
            }};            

            GetTeamEventMatchesResponse res = sdk.event.getTeamEventMatches(req, new GetTeamEventMatchesSecurity("consequuntur") {{
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

            GetTeamEventMatchesKeysRequest req = new GetTeamEventMatchesKeysRequest("repellat", "mollitia") {{
                ifNoneMatch = "occaecati";
            }};            

            GetTeamEventMatchesKeysResponse res = sdk.event.getTeamEventMatchesKeys(req, new GetTeamEventMatchesKeysSecurity("numquam") {{
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

            GetTeamEventMatchesSimpleRequest req = new GetTeamEventMatchesSimpleRequest("commodi", "quam") {{
                ifNoneMatch = "molestiae";
            }};            

            GetTeamEventMatchesSimpleResponse res = sdk.event.getTeamEventMatchesSimple(req, new GetTeamEventMatchesSimpleSecurity("velit") {{
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

## getTeamEventStatus

Gets the competition rank and status of the team at the given event.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamEventStatusRequest;
import org.openapis.openapi.models.operations.GetTeamEventStatusResponse;
import org.openapis.openapi.models.operations.GetTeamEventStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamEventStatusRequest req = new GetTeamEventStatusRequest("error", "quia") {{
                ifNoneMatch = "quis";
            }};            

            GetTeamEventStatusResponse res = sdk.event.getTeamEventStatus(req, new GetTeamEventStatusSecurity("vitae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.teamEventStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamEvents

Gets a list of all events this team has competed at.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamEventsRequest;
import org.openapis.openapi.models.operations.GetTeamEventsResponse;
import org.openapis.openapi.models.operations.GetTeamEventsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamEventsRequest req = new GetTeamEventsRequest("laborum") {{
                ifNoneMatch = "animi";
            }};            

            GetTeamEventsResponse res = sdk.event.getTeamEvents(req, new GetTeamEventsSecurity("enim") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamEventsByYear

Gets a list of events this team has competed at in the given year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamEventsByYearRequest;
import org.openapis.openapi.models.operations.GetTeamEventsByYearResponse;
import org.openapis.openapi.models.operations.GetTeamEventsByYearSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamEventsByYearRequest req = new GetTeamEventsByYearRequest("odit", 778346L) {{
                ifNoneMatch = "sequi";
            }};            

            GetTeamEventsByYearResponse res = sdk.event.getTeamEventsByYear(req, new GetTeamEventsByYearSecurity("tenetur") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamEventsByYearKeys

Gets a list of the event keys for events this team has competed at in the given year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamEventsByYearKeysRequest;
import org.openapis.openapi.models.operations.GetTeamEventsByYearKeysResponse;
import org.openapis.openapi.models.operations.GetTeamEventsByYearKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamEventsByYearKeysRequest req = new GetTeamEventsByYearKeysRequest("ipsam", 662527L) {{
                ifNoneMatch = "possimus";
            }};            

            GetTeamEventsByYearKeysResponse res = sdk.event.getTeamEventsByYearKeys(req, new GetTeamEventsByYearKeysSecurity("aut") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTeamEventsByYearKeys200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamEventsByYearSimple

Gets a short-form list of events this team has competed at in the given year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamEventsByYearSimpleRequest;
import org.openapis.openapi.models.operations.GetTeamEventsByYearSimpleResponse;
import org.openapis.openapi.models.operations.GetTeamEventsByYearSimpleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamEventsByYearSimpleRequest req = new GetTeamEventsByYearSimpleRequest("quasi", 622846L) {{
                ifNoneMatch = "temporibus";
            }};            

            GetTeamEventsByYearSimpleResponse res = sdk.event.getTeamEventsByYearSimple(req, new GetTeamEventsByYearSimpleSecurity("laborum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.eventSimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamEventsKeys

Gets a list of the event keys for all events this team has competed at.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamEventsKeysRequest;
import org.openapis.openapi.models.operations.GetTeamEventsKeysResponse;
import org.openapis.openapi.models.operations.GetTeamEventsKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamEventsKeysRequest req = new GetTeamEventsKeysRequest("quasi") {{
                ifNoneMatch = "reiciendis";
            }};            

            GetTeamEventsKeysResponse res = sdk.event.getTeamEventsKeys(req, new GetTeamEventsKeysSecurity("voluptatibus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTeamEventsKeys200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamEventsSimple

Gets a short-form list of all events this team has competed at.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamEventsSimpleRequest;
import org.openapis.openapi.models.operations.GetTeamEventsSimpleResponse;
import org.openapis.openapi.models.operations.GetTeamEventsSimpleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamEventsSimpleRequest req = new GetTeamEventsSimpleRequest("vero") {{
                ifNoneMatch = "nihil";
            }};            

            GetTeamEventsSimpleResponse res = sdk.event.getTeamEventsSimple(req, new GetTeamEventsSimpleSecurity("praesentium") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.eventSimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamEventsStatusesByYear

Gets a key-value list of the event statuses for events this team has competed at in the given year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamEventsStatusesByYearRequest;
import org.openapis.openapi.models.operations.GetTeamEventsStatusesByYearResponse;
import org.openapis.openapi.models.operations.GetTeamEventsStatusesByYearSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamEventsStatusesByYearRequest req = new GetTeamEventsStatusesByYearRequest("voluptatibus", 55714L) {{
                ifNoneMatch = "omnis";
            }};            

            GetTeamEventsStatusesByYearResponse res = sdk.event.getTeamEventsStatusesByYear(req, new GetTeamEventsStatusesByYearSecurity("voluptate") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTeamEventsStatusesByYear200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
