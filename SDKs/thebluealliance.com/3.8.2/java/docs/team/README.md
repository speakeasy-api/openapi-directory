# team

## Overview

Calls that return team or team-specific information.

### Available Operations

* [getDistrictRankings](#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [getDistrictTeams](#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsKeys](#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsSimple](#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [getEventTeams](#geteventteams) - Gets a list of `Team` objects that competed in the given event.
* [getEventTeamsKeys](#geteventteamskeys) - Gets a list of `Team` keys that competed in the given event.
* [getEventTeamsSimple](#geteventteamssimple) - Gets a short-form list of `Team` objects that competed in the given event.
* [getEventTeamsStatuses](#geteventteamsstatuses) - Gets a key-value list of the event statuses for teams competing at the given event.
* [getTeam](#getteam) - Gets a `Team` object for the team referenced by the given key.
* [getTeamAwards](#getteamawards) - Gets a list of awards the given team has won.
* [getTeamAwardsByYear](#getteamawardsbyyear) - Gets a list of awards the given team has won in a given year.
* [getTeamDistricts](#getteamdistricts) - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
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
* [getTeamMatchesByYear](#getteammatchesbyyear) - Gets a list of matches for the given team and year.
* [getTeamMatchesByYearKeys](#getteammatchesbyyearkeys) - Gets a list of match keys for matches for the given team and year.
* [getTeamMatchesByYearSimple](#getteammatchesbyyearsimple) - Gets a short-form list of matches for the given team and year.
* [getTeamMediaByTag](#getteammediabytag) - Gets a list of Media (videos / pictures) for the given team and tag.
* [getTeamMediaByTagYear](#getteammediabytagyear) - Gets a list of Media (videos / pictures) for the given team, tag and year.
* [getTeamMediaByYear](#getteammediabyyear) - Gets a list of Media (videos / pictures) for the given team and year.
* [getTeamRobots](#getteamrobots) - Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
* [getTeamSimple](#getteamsimple) - Gets a `Team_Simple` object for the team referenced by the given key.
* [getTeamSocialMedia](#getteamsocialmedia) - Gets a list of Media (social media) for the given team.
* [getTeamYearsParticipated](#getteamyearsparticipated) - Gets a list of years in which the team participated in at least one competition.
* [getTeams](#getteams) - Gets a list of `Team` objects, paginated in groups of 500.
* [getTeamsByYear](#getteamsbyyear) - Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
* [getTeamsByYearKeys](#getteamsbyyearkeys) - Gets a list Team Keys that competed in the given year, paginated in groups of 500.
* [getTeamsByYearSimple](#getteamsbyyearsimple) - Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
* [getTeamsKeys](#getteamskeys) - Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
* [getTeamsSimple](#getteamssimple) - Gets a list of short form `Team_Simple` objects, paginated in groups of 500.

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

            GetDistrictRankingsRequest req = new GetDistrictRankingsRequest("vero") {{
                ifNoneMatch = "aspernatur";
            }};            

            GetDistrictRankingsResponse res = sdk.team.getDistrictRankings(req, new GetDistrictRankingsSecurity("architecto") {{
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

            GetDistrictTeamsRequest req = new GetDistrictTeamsRequest("magnam") {{
                ifNoneMatch = "et";
            }};            

            GetDistrictTeamsResponse res = sdk.team.getDistrictTeams(req, new GetDistrictTeamsSecurity("excepturi") {{
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

            GetDistrictTeamsKeysRequest req = new GetDistrictTeamsKeysRequest("ullam") {{
                ifNoneMatch = "provident";
            }};            

            GetDistrictTeamsKeysResponse res = sdk.team.getDistrictTeamsKeys(req, new GetDistrictTeamsKeysSecurity("quos") {{
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

            GetDistrictTeamsSimpleRequest req = new GetDistrictTeamsSimpleRequest("sint") {{
                ifNoneMatch = "accusantium";
            }};            

            GetDistrictTeamsSimpleResponse res = sdk.team.getDistrictTeamsSimple(req, new GetDistrictTeamsSimpleSecurity("mollitia") {{
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

            GetEventTeamsRequest req = new GetEventTeamsRequest("reiciendis") {{
                ifNoneMatch = "mollitia";
            }};            

            GetEventTeamsResponse res = sdk.team.getEventTeams(req, new GetEventTeamsSecurity("ad") {{
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

            GetEventTeamsKeysRequest req = new GetEventTeamsKeysRequest("eum") {{
                ifNoneMatch = "dolor";
            }};            

            GetEventTeamsKeysResponse res = sdk.team.getEventTeamsKeys(req, new GetEventTeamsKeysSecurity("necessitatibus") {{
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

            GetEventTeamsSimpleRequest req = new GetEventTeamsSimpleRequest("odit") {{
                ifNoneMatch = "nemo";
            }};            

            GetEventTeamsSimpleResponse res = sdk.team.getEventTeamsSimple(req, new GetEventTeamsSimpleSecurity("quasi") {{
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

            GetEventTeamsStatusesRequest req = new GetEventTeamsStatusesRequest("iure") {{
                ifNoneMatch = "doloribus";
            }};            

            GetEventTeamsStatusesResponse res = sdk.team.getEventTeamsStatuses(req, new GetEventTeamsStatusesSecurity("debitis") {{
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

## getTeam

Gets a `Team` object for the team referenced by the given key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamRequest;
import org.openapis.openapi.models.operations.GetTeamResponse;
import org.openapis.openapi.models.operations.GetTeamSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamRequest req = new GetTeamRequest("eius") {{
                ifNoneMatch = "maxime";
            }};            

            GetTeamResponse res = sdk.team.getTeam(req, new GetTeamSecurity("deleniti") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.team != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamAwards

Gets a list of awards the given team has won.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamAwardsRequest;
import org.openapis.openapi.models.operations.GetTeamAwardsResponse;
import org.openapis.openapi.models.operations.GetTeamAwardsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamAwardsRequest req = new GetTeamAwardsRequest("facilis") {{
                ifNoneMatch = "in";
            }};            

            GetTeamAwardsResponse res = sdk.team.getTeamAwards(req, new GetTeamAwardsSecurity("architecto") {{
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

## getTeamAwardsByYear

Gets a list of awards the given team has won in a given year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamAwardsByYearRequest;
import org.openapis.openapi.models.operations.GetTeamAwardsByYearResponse;
import org.openapis.openapi.models.operations.GetTeamAwardsByYearSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamAwardsByYearRequest req = new GetTeamAwardsByYearRequest("architecto", 919483L) {{
                ifNoneMatch = "ullam";
            }};            

            GetTeamAwardsByYearResponse res = sdk.team.getTeamAwardsByYear(req, new GetTeamAwardsByYearSecurity("expedita") {{
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

## getTeamDistricts

Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamDistrictsRequest;
import org.openapis.openapi.models.operations.GetTeamDistrictsResponse;
import org.openapis.openapi.models.operations.GetTeamDistrictsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamDistrictsRequest req = new GetTeamDistrictsRequest("nihil") {{
                ifNoneMatch = "repellat";
            }};            

            GetTeamDistrictsResponse res = sdk.team.getTeamDistricts(req, new GetTeamDistrictsSecurity("quibusdam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.districtLists != null) {
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

            GetTeamEventAwardsRequest req = new GetTeamEventAwardsRequest("sed", "saepe") {{
                ifNoneMatch = "pariatur";
            }};            

            GetTeamEventAwardsResponse res = sdk.team.getTeamEventAwards(req, new GetTeamEventAwardsSecurity("accusantium") {{
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

            GetTeamEventMatchesRequest req = new GetTeamEventMatchesRequest("consequuntur", "praesentium") {{
                ifNoneMatch = "natus";
            }};            

            GetTeamEventMatchesResponse res = sdk.team.getTeamEventMatches(req, new GetTeamEventMatchesSecurity("magni") {{
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

            GetTeamEventMatchesKeysRequest req = new GetTeamEventMatchesKeysRequest("sunt", "quo") {{
                ifNoneMatch = "illum";
            }};            

            GetTeamEventMatchesKeysResponse res = sdk.team.getTeamEventMatchesKeys(req, new GetTeamEventMatchesKeysSecurity("pariatur") {{
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

            GetTeamEventMatchesSimpleRequest req = new GetTeamEventMatchesSimpleRequest("maxime", "ea") {{
                ifNoneMatch = "excepturi";
            }};            

            GetTeamEventMatchesSimpleResponse res = sdk.team.getTeamEventMatchesSimple(req, new GetTeamEventMatchesSimpleSecurity("odit") {{
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

            GetTeamEventStatusRequest req = new GetTeamEventStatusRequest("ea", "accusantium") {{
                ifNoneMatch = "ab";
            }};            

            GetTeamEventStatusResponse res = sdk.team.getTeamEventStatus(req, new GetTeamEventStatusSecurity("maiores") {{
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

            GetTeamEventsRequest req = new GetTeamEventsRequest("quidem") {{
                ifNoneMatch = "ipsam";
            }};            

            GetTeamEventsResponse res = sdk.team.getTeamEvents(req, new GetTeamEventsSecurity("voluptate") {{
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

            GetTeamEventsByYearRequest req = new GetTeamEventsByYearRequest("autem", 722056L) {{
                ifNoneMatch = "eaque";
            }};            

            GetTeamEventsByYearResponse res = sdk.team.getTeamEventsByYear(req, new GetTeamEventsByYearSecurity("pariatur") {{
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

            GetTeamEventsByYearKeysRequest req = new GetTeamEventsByYearKeysRequest("nemo", 975522L) {{
                ifNoneMatch = "perferendis";
            }};            

            GetTeamEventsByYearKeysResponse res = sdk.team.getTeamEventsByYearKeys(req, new GetTeamEventsByYearKeysSecurity("fugiat") {{
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

            GetTeamEventsByYearSimpleRequest req = new GetTeamEventsByYearSimpleRequest("amet", 11714L) {{
                ifNoneMatch = "cumque";
            }};            

            GetTeamEventsByYearSimpleResponse res = sdk.team.getTeamEventsByYearSimple(req, new GetTeamEventsByYearSimpleSecurity("corporis") {{
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

            GetTeamEventsKeysRequest req = new GetTeamEventsKeysRequest("hic") {{
                ifNoneMatch = "libero";
            }};            

            GetTeamEventsKeysResponse res = sdk.team.getTeamEventsKeys(req, new GetTeamEventsKeysSecurity("nobis") {{
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

            GetTeamEventsSimpleRequest req = new GetTeamEventsSimpleRequest("dolores") {{
                ifNoneMatch = "quis";
            }};            

            GetTeamEventsSimpleResponse res = sdk.team.getTeamEventsSimple(req, new GetTeamEventsSimpleSecurity("totam") {{
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

            GetTeamEventsStatusesByYearRequest req = new GetTeamEventsStatusesByYearRequest("dignissimos", 54338L) {{
                ifNoneMatch = "quis";
            }};            

            GetTeamEventsStatusesByYearResponse res = sdk.team.getTeamEventsStatusesByYear(req, new GetTeamEventsStatusesByYearSecurity("nesciunt") {{
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

            GetTeamMatchesByYearRequest req = new GetTeamMatchesByYearRequest("eos", 18521L) {{
                ifNoneMatch = "dolores";
            }};            

            GetTeamMatchesByYearResponse res = sdk.team.getTeamMatchesByYear(req, new GetTeamMatchesByYearSecurity("minus") {{
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

            GetTeamMatchesByYearKeysRequest req = new GetTeamMatchesByYearKeysRequest("quam", 223924L) {{
                ifNoneMatch = "vero";
            }};            

            GetTeamMatchesByYearKeysResponse res = sdk.team.getTeamMatchesByYearKeys(req, new GetTeamMatchesByYearKeysSecurity("nostrum") {{
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

            GetTeamMatchesByYearSimpleRequest req = new GetTeamMatchesByYearSimpleRequest("hic", 928082L) {{
                ifNoneMatch = "omnis";
            }};            

            GetTeamMatchesByYearSimpleResponse res = sdk.team.getTeamMatchesByYearSimple(req, new GetTeamMatchesByYearSimpleSecurity("facilis") {{
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

## getTeamMediaByTag

Gets a list of Media (videos / pictures) for the given team and tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamMediaByTagRequest;
import org.openapis.openapi.models.operations.GetTeamMediaByTagResponse;
import org.openapis.openapi.models.operations.GetTeamMediaByTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamMediaByTagRequest req = new GetTeamMediaByTagRequest("perspiciatis", "voluptatem") {{
                ifNoneMatch = "porro";
            }};            

            GetTeamMediaByTagResponse res = sdk.team.getTeamMediaByTag(req, new GetTeamMediaByTagSecurity("consequuntur") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.media != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamMediaByTagYear

Gets a list of Media (videos / pictures) for the given team, tag and year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamMediaByTagYearRequest;
import org.openapis.openapi.models.operations.GetTeamMediaByTagYearResponse;
import org.openapis.openapi.models.operations.GetTeamMediaByTagYearSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamMediaByTagYearRequest req = new GetTeamMediaByTagYearRequest("blanditiis", "error", 50370L) {{
                ifNoneMatch = "occaecati";
            }};            

            GetTeamMediaByTagYearResponse res = sdk.team.getTeamMediaByTagYear(req, new GetTeamMediaByTagYearSecurity("rerum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.media != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamMediaByYear

Gets a list of Media (videos / pictures) for the given team and year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamMediaByYearRequest;
import org.openapis.openapi.models.operations.GetTeamMediaByYearResponse;
import org.openapis.openapi.models.operations.GetTeamMediaByYearSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamMediaByYearRequest req = new GetTeamMediaByYearRequest("adipisci", 992397L) {{
                ifNoneMatch = "earum";
            }};            

            GetTeamMediaByYearResponse res = sdk.team.getTeamMediaByYear(req, new GetTeamMediaByYearSecurity("modi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.media != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamRobots

Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamRobotsRequest;
import org.openapis.openapi.models.operations.GetTeamRobotsResponse;
import org.openapis.openapi.models.operations.GetTeamRobotsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamRobotsRequest req = new GetTeamRobotsRequest("iste") {{
                ifNoneMatch = "dolorum";
            }};            

            GetTeamRobotsResponse res = sdk.team.getTeamRobots(req, new GetTeamRobotsSecurity("deleniti") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.teamRobots != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamSimple

Gets a `Team_Simple` object for the team referenced by the given key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamSimpleRequest;
import org.openapis.openapi.models.operations.GetTeamSimpleResponse;
import org.openapis.openapi.models.operations.GetTeamSimpleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamSimpleRequest req = new GetTeamSimpleRequest("pariatur") {{
                ifNoneMatch = "provident";
            }};            

            GetTeamSimpleResponse res = sdk.team.getTeamSimple(req, new GetTeamSimpleSecurity("nobis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.teamSimple != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamSocialMedia

Gets a list of Media (social media) for the given team.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamSocialMediaRequest;
import org.openapis.openapi.models.operations.GetTeamSocialMediaResponse;
import org.openapis.openapi.models.operations.GetTeamSocialMediaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamSocialMediaRequest req = new GetTeamSocialMediaRequest("libero") {{
                ifNoneMatch = "delectus";
            }};            

            GetTeamSocialMediaResponse res = sdk.team.getTeamSocialMedia(req, new GetTeamSocialMediaSecurity("quaerat") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.media != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamYearsParticipated

Gets a list of years in which the team participated in at least one competition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamYearsParticipatedRequest;
import org.openapis.openapi.models.operations.GetTeamYearsParticipatedResponse;
import org.openapis.openapi.models.operations.GetTeamYearsParticipatedSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTeamYearsParticipatedRequest req = new GetTeamYearsParticipatedRequest("quos") {{
                ifNoneMatch = "aliquid";
            }};            

            GetTeamYearsParticipatedResponse res = sdk.team.getTeamYearsParticipated(req, new GetTeamYearsParticipatedSecurity("dolorem") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTeamYearsParticipated200ApplicationJSONIntegers != null) {
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

            GetTeamsRequest req = new GetTeamsRequest(209843L) {{
                ifNoneMatch = "dolor";
            }};            

            GetTeamsResponse res = sdk.team.getTeams(req, new GetTeamsSecurity("qui") {{
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

            GetTeamsByYearRequest req = new GetTeamsByYearRequest(218749L, 944373L) {{
                ifNoneMatch = "excepturi";
            }};            

            GetTeamsByYearResponse res = sdk.team.getTeamsByYear(req, new GetTeamsByYearSecurity("cum") {{
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

            GetTeamsByYearKeysRequest req = new GetTeamsByYearKeysRequest(452109L, 490459L) {{
                ifNoneMatch = "reiciendis";
            }};            

            GetTeamsByYearKeysResponse res = sdk.team.getTeamsByYearKeys(req, new GetTeamsByYearKeysSecurity("amet") {{
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

            GetTeamsByYearSimpleRequest req = new GetTeamsByYearSimpleRequest(680545L, 254356L) {{
                ifNoneMatch = "veritatis";
            }};            

            GetTeamsByYearSimpleResponse res = sdk.team.getTeamsByYearSimple(req, new GetTeamsByYearSimpleSecurity("ipsa") {{
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

            GetTeamsKeysRequest req = new GetTeamsKeysRequest(56418L) {{
                ifNoneMatch = "iure";
            }};            

            GetTeamsKeysResponse res = sdk.team.getTeamsKeys(req, new GetTeamsKeysSecurity("odio") {{
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

            GetTeamsSimpleRequest req = new GetTeamsSimpleRequest(311796L) {{
                ifNoneMatch = "accusamus";
            }};            

            GetTeamsSimpleResponse res = sdk.team.getTeamsSimple(req, new GetTeamsSimpleSecurity("quidem") {{
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
