# district

## Overview

Calls that return district, or district-related information.

### Available Operations

* [getDistrictEvents](#getdistrictevents) - Gets a list of events in the given district.
* [getDistrictEventsKeys](#getdistricteventskeys) - Gets a list of event keys for events in the given district.
* [getDistrictEventsSimple](#getdistricteventssimple) - Gets a short-form list of events in the given district.
* [getDistrictRankings](#getdistrictrankings) - Gets a list of team district rankings for the given district.
* [getDistrictTeams](#getdistrictteams) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsKeys](#getdistrictteamskeys) - Gets a list of `Team` objects that competed in events in the given district.
* [getDistrictTeamsSimple](#getdistrictteamssimple) - Gets a short-form list of `Team` objects that competed in events in the given district.
* [getDistrictsByYear](#getdistrictsbyyear) - Gets a list of districts and their corresponding district key, for the given year.
* [getEventDistrictPoints](#geteventdistrictpoints) - Gets a list of team rankings for the Event.
* [getTeamDistricts](#getteamdistricts) - Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

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

            GetDistrictEventsRequest req = new GetDistrictEventsRequest("unde") {{
                ifNoneMatch = "nulla";
            }};            

            GetDistrictEventsResponse res = sdk.district.getDistrictEvents(req, new GetDistrictEventsSecurity("corrupti") {{
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

            GetDistrictEventsKeysRequest req = new GetDistrictEventsKeysRequest("illum") {{
                ifNoneMatch = "vel";
            }};            

            GetDistrictEventsKeysResponse res = sdk.district.getDistrictEventsKeys(req, new GetDistrictEventsKeysSecurity("error") {{
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

            GetDistrictEventsSimpleRequest req = new GetDistrictEventsSimpleRequest("deserunt") {{
                ifNoneMatch = "suscipit";
            }};            

            GetDistrictEventsSimpleResponse res = sdk.district.getDistrictEventsSimple(req, new GetDistrictEventsSimpleSecurity("iure") {{
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

            GetDistrictRankingsRequest req = new GetDistrictRankingsRequest("magnam") {{
                ifNoneMatch = "debitis";
            }};            

            GetDistrictRankingsResponse res = sdk.district.getDistrictRankings(req, new GetDistrictRankingsSecurity("ipsa") {{
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

            GetDistrictTeamsRequest req = new GetDistrictTeamsRequest("delectus") {{
                ifNoneMatch = "tempora";
            }};            

            GetDistrictTeamsResponse res = sdk.district.getDistrictTeams(req, new GetDistrictTeamsSecurity("suscipit") {{
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

            GetDistrictTeamsKeysRequest req = new GetDistrictTeamsKeysRequest("molestiae") {{
                ifNoneMatch = "minus";
            }};            

            GetDistrictTeamsKeysResponse res = sdk.district.getDistrictTeamsKeys(req, new GetDistrictTeamsKeysSecurity("placeat") {{
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

            GetDistrictTeamsSimpleRequest req = new GetDistrictTeamsSimpleRequest("voluptatum") {{
                ifNoneMatch = "iusto";
            }};            

            GetDistrictTeamsSimpleResponse res = sdk.district.getDistrictTeamsSimple(req, new GetDistrictTeamsSimpleSecurity("excepturi") {{
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

## getDistrictsByYear

Gets a list of districts and their corresponding district key, for the given year.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDistrictsByYearRequest;
import org.openapis.openapi.models.operations.GetDistrictsByYearResponse;
import org.openapis.openapi.models.operations.GetDistrictsByYearSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDistrictsByYearRequest req = new GetDistrictsByYearRequest(392785L) {{
                ifNoneMatch = "recusandae";
            }};            

            GetDistrictsByYearResponse res = sdk.district.getDistrictsByYear(req, new GetDistrictsByYearSecurity("temporibus") {{
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

            GetEventDistrictPointsRequest req = new GetEventDistrictPointsRequest("ab") {{
                ifNoneMatch = "quis";
            }};            

            GetEventDistrictPointsResponse res = sdk.district.getEventDistrictPoints(req, new GetEventDistrictPointsSecurity("veritatis") {{
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

            GetTeamDistrictsRequest req = new GetTeamDistrictsRequest("deserunt") {{
                ifNoneMatch = "perferendis";
            }};            

            GetTeamDistrictsResponse res = sdk.district.getTeamDistricts(req, new GetTeamDistrictsSecurity("ipsam") {{
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
