# list

## Overview

Calls that return a list of records.

### Available Operations

* [getDistrictEvents](#getdistrictevents) - Gets a list of events in the given district.
* [getDistrictEventsKeys](#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [getDistrictEventsSimple](#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [getDistrictRankings](#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [getDistrictTeams](#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsKeys](#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsSimple](#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [getEventTeams](#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [getEventTeamsKeys](#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [getEventTeamsSimple](#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [getEventTeamsStatuses](#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [getEventsByYear](#geteventsbyyear) - Gets a list of events in the given year.
* [getEventsByYearKeys](#geteventsbyyearkeys) - Gets a list of event keys in the given year.
* [getEventsByYearSimple](#geteventsbyyearsimple) - Gets a short-form list of events in the given year.
* [getTeamEventsStatusesByYear](#getteameventsstatusesbyyear) - Gets a key-value list of the event statuses for events this team has competed at in the given year.
* [getTeams](#getteams) - Gets a list of `Team` objects, paginated in groups of 500.
* [getTeamsByYear](#getteamsbyyear) - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* [getTeamsByYearKeys](#getteamsbyyearkeys) - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* [getTeamsByYearSimple](#getteamsbyyearsimple) - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* [getTeamsKeys](#getteamskeys) - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* [getTeamsSimple](#getteamssimple) - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

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

            GetDistrictEventsRequest req = new GetDistrictEventsRequest("cum") {{
                ifNoneMatch = "perferendis";
            }};            

            GetDistrictEventsResponse res = sdk.list.getDistrictEvents(req, new GetDistrictEventsSecurity("doloremque") {{
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

            GetDistrictEventsKeysRequest req = new GetDistrictEventsKeysRequest("reprehenderit") {{
                ifNoneMatch = "ut";
            }};            

            GetDistrictEventsKeysResponse res = sdk.list.getDistrictEventsKeys(req, new GetDistrictEventsKeysSecurity("maiores") {{
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

            GetDistrictEventsSimpleRequest req = new GetDistrictEventsSimpleRequest("dicta") {{
                ifNoneMatch = "corporis";
            }};            

            GetDistrictEventsSimpleResponse res = sdk.list.getDistrictEventsSimple(req, new GetDistrictEventsSimpleSecurity("dolore") {{
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

## getDistrictRankings

Gets a list of team district rankings for the given district.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictRankingsRequest;
import org.openapis.openapi.models.operations.GetDistrictRankingsResponse;
import org.openapis.openapi.models.operations.GetDistrictRankingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDistrictRankingsRequest req = new GetDistrictRankingsRequest("iusto") {{
                ifNoneMatch = "dicta";
            }};            

            GetDistrictRankingsResponse res = sdk.list.getDistrictRankings(req, new GetDistrictRankingsSecurity("harum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.districtRankings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistrictTeams

Gets a list of `Team` objects that competed in events in the given district.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictTeamsRequest;
import org.openapis.openapi.models.operations.GetDistrictTeamsResponse;
import org.openapis.openapi.models.operations.GetDistrictTeamsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDistrictTeamsRequest req = new GetDistrictTeamsRequest("enim") {{
                ifNoneMatch = "accusamus";
            }};            

            GetDistrictTeamsResponse res = sdk.list.getDistrictTeams(req, new GetDistrictTeamsSecurity("commodi") {{
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

## getDistrictTeamsKeys

Gets a list of `Team` objects that competed in events in the given district.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictTeamsKeysRequest;
import org.openapis.openapi.models.operations.GetDistrictTeamsKeysResponse;
import org.openapis.openapi.models.operations.GetDistrictTeamsKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDistrictTeamsKeysRequest req = new GetDistrictTeamsKeysRequest("repudiandae") {{
                ifNoneMatch = "quae";
            }};            

            GetDistrictTeamsKeysResponse res = sdk.list.getDistrictTeamsKeys(req, new GetDistrictTeamsKeysSecurity("ipsum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getDistrictTeamsKeys200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDistrictTeamsSimple

Gets a short-form list of `Team` objects that competed in events in the given district.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictTeamsSimpleRequest;
import org.openapis.openapi.models.operations.GetDistrictTeamsSimpleResponse;
import org.openapis.openapi.models.operations.GetDistrictTeamsSimpleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDistrictTeamsSimpleRequest req = new GetDistrictTeamsSimpleRequest("quidem") {{
                ifNoneMatch = "molestias";
            }};            

            GetDistrictTeamsSimpleResponse res = sdk.list.getDistrictTeamsSimple(req, new GetDistrictTeamsSimpleSecurity("excepturi") {{
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

            GetEventTeamsRequest req = new GetEventTeamsRequest("pariatur") {{
                ifNoneMatch = "modi";
            }};            

            GetEventTeamsResponse res = sdk.list.getEventTeams(req, new GetEventTeamsSecurity("praesentium") {{
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

            GetEventTeamsKeysRequest req = new GetEventTeamsKeysRequest("rem") {{
                ifNoneMatch = "voluptates";
            }};            

            GetEventTeamsKeysResponse res = sdk.list.getEventTeamsKeys(req, new GetEventTeamsKeysSecurity("quasi") {{
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

            GetEventTeamsSimpleRequest req = new GetEventTeamsSimpleRequest("repudiandae") {{
                ifNoneMatch = "sint";
            }};            

            GetEventTeamsSimpleResponse res = sdk.list.getEventTeamsSimple(req, new GetEventTeamsSimpleSecurity("veritatis") {{
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

            GetEventTeamsStatusesRequest req = new GetEventTeamsStatusesRequest("itaque") {{
                ifNoneMatch = "incidunt";
            }};            

            GetEventTeamsStatusesResponse res = sdk.list.getEventTeamsStatuses(req, new GetEventTeamsStatusesSecurity("enim") {{
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

            GetEventsByYearRequest req = new GetEventsByYearRequest(9356L) {{
                ifNoneMatch = "est";
            }};            

            GetEventsByYearResponse res = sdk.list.getEventsByYear(req, new GetEventsByYearSecurity("quibusdam") {{
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

            GetEventsByYearKeysRequest req = new GetEventsByYearKeysRequest(131797L) {{
                ifNoneMatch = "deserunt";
            }};            

            GetEventsByYearKeysResponse res = sdk.list.getEventsByYearKeys(req, new GetEventsByYearKeysSecurity("distinctio") {{
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

            GetEventsByYearSimpleRequest req = new GetEventsByYearSimpleRequest(841386L) {{
                ifNoneMatch = "labore";
            }};            

            GetEventsByYearSimpleResponse res = sdk.list.getEventsByYearSimple(req, new GetEventsByYearSimpleSecurity("modi") {{
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

            GetTeamEventsStatusesByYearRequest req = new GetTeamEventsStatusesByYearRequest("qui", 397821L) {{
                ifNoneMatch = "cupiditate";
            }};            

            GetTeamEventsStatusesByYearResponse res = sdk.list.getTeamEventsStatusesByYear(req, new GetTeamEventsStatusesByYearSecurity("quos") {{
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

## getTeams

Gets a list of `Team` objects, paginated in groups of 500.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamsRequest;
import org.openapis.openapi.models.operations.GetTeamsResponse;
import org.openapis.openapi.models.operations.GetTeamsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamsRequest req = new GetTeamsRequest(20107L) {{
                ifNoneMatch = "magni";
            }};            

            GetTeamsResponse res = sdk.list.getTeams(req, new GetTeamsSecurity("assumenda") {{
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

## getTeamsByYear

Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamsByYearRequest;
import org.openapis.openapi.models.operations.GetTeamsByYearResponse;
import org.openapis.openapi.models.operations.GetTeamsByYearSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamsByYearRequest req = new GetTeamsByYearRequest(369808L, 4695L) {{
                ifNoneMatch = "fugit";
            }};            

            GetTeamsByYearResponse res = sdk.list.getTeamsByYear(req, new GetTeamsByYearSecurity("dolorum") {{
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

## getTeamsByYearKeys

Gets a list Team Keys that competed in the given year, paginated in groups of 500.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamsByYearKeysRequest;
import org.openapis.openapi.models.operations.GetTeamsByYearKeysResponse;
import org.openapis.openapi.models.operations.GetTeamsByYearKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamsByYearKeysRequest req = new GetTeamsByYearKeysRequest(569618L, 270008L) {{
                ifNoneMatch = "facilis";
            }};            

            GetTeamsByYearKeysResponse res = sdk.list.getTeamsByYearKeys(req, new GetTeamsByYearKeysSecurity("tempore") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTeamsByYearKeys200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamsByYearSimple

Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamsByYearSimpleRequest;
import org.openapis.openapi.models.operations.GetTeamsByYearSimpleResponse;
import org.openapis.openapi.models.operations.GetTeamsByYearSimpleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamsByYearSimpleRequest req = new GetTeamsByYearSimpleRequest(288476L, 962189L) {{
                ifNoneMatch = "eum";
            }};            

            GetTeamsByYearSimpleResponse res = sdk.list.getTeamsByYearSimple(req, new GetTeamsByYearSimpleSecurity("non") {{
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

## getTeamsKeys

Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamsKeysRequest;
import org.openapis.openapi.models.operations.GetTeamsKeysResponse;
import org.openapis.openapi.models.operations.GetTeamsKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamsKeysRequest req = new GetTeamsKeysRequest(756107L) {{
                ifNoneMatch = "sint";
            }};            

            GetTeamsKeysResponse res = sdk.list.getTeamsKeys(req, new GetTeamsKeysSecurity("aliquid") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTeamsKeys200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamsSimple

Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamsSimpleRequest;
import org.openapis.openapi.models.operations.GetTeamsSimpleResponse;
import org.openapis.openapi.models.operations.GetTeamsSimpleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamsSimpleRequest req = new GetTeamsSimpleRequest(592042L) {{
                ifNoneMatch = "necessitatibus";
            }};            

            GetTeamsSimpleResponse res = sdk.list.getTeamsSimple(req, new GetTeamsSimpleSecurity("sint") {{
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
