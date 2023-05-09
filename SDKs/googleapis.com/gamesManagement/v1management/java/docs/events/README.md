# events

### Available Operations

* [gamesManagementEventsReset](#gamesmanagementeventsreset) - Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementEventsResetAll](#gamesmanagementeventsresetall) - Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementEventsResetAllForAllPlayers](#gamesmanagementeventsresetallforallplayers) - Resets all draft events for all players. This method is only available to user accounts for your developer console.
* [gamesManagementEventsResetForAllPlayers](#gamesmanagementeventsresetforallplayers) - Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
* [gamesManagementEventsResetMultipleForAllPlayers](#gamesmanagementeventsresetmultipleforallplayers) - Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

## gamesManagementEventsReset

Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementEventsResetRequest;
import org.openapis.openapi.models.operations.GamesManagementEventsResetResponse;
import org.openapis.openapi.models.operations.GamesManagementEventsResetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementEventsResetRequest req = new GamesManagementEventsResetRequest("explicabo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "enim";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "minima";
                key = "excepturi";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "culpa";
                uploadProtocol = "doloribus";
            }};            

            GamesManagementEventsResetResponse res = sdk.events.gamesManagementEventsReset(req, new GamesManagementEventsResetSecurity("sapiente", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesManagementEventsResetAll

Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementEventsResetAllRequest;
import org.openapis.openapi.models.operations.GamesManagementEventsResetAllResponse;
import org.openapis.openapi.models.operations.GamesManagementEventsResetAllSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementEventsResetAllRequest req = new GamesManagementEventsResetAllRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "consequuntur";
                fields = "repellat";
                key = "mollitia";
                oauthToken = "occaecati";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "commodi";
                uploadProtocol = "quam";
            }};            

            GamesManagementEventsResetAllResponse res = sdk.events.gamesManagementEventsResetAll(req, new GamesManagementEventsResetAllSecurity("molestiae", "velit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesManagementEventsResetAllForAllPlayers

Resets all draft events for all players. This method is only available to user accounts for your developer console.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementEventsResetAllForAllPlayersRequest;
import org.openapis.openapi.models.operations.GamesManagementEventsResetAllForAllPlayersResponse;
import org.openapis.openapi.models.operations.GamesManagementEventsResetAllForAllPlayersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementEventsResetAllForAllPlayersRequest req = new GamesManagementEventsResetAllForAllPlayersRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "laborum";
                key = "animi";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "quo";
                uploadProtocol = "sequi";
            }};            

            GamesManagementEventsResetAllForAllPlayersResponse res = sdk.events.gamesManagementEventsResetAllForAllPlayers(req, new GamesManagementEventsResetAllForAllPlayersSecurity("tenetur", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesManagementEventsResetForAllPlayers

Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementEventsResetForAllPlayersRequest;
import org.openapis.openapi.models.operations.GamesManagementEventsResetForAllPlayersResponse;
import org.openapis.openapi.models.operations.GamesManagementEventsResetForAllPlayersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementEventsResetForAllPlayersRequest req = new GamesManagementEventsResetForAllPlayersRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "temporibus";
                key = "laborum";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "reiciendis";
                uploadType = "voluptatibus";
                uploadProtocol = "vero";
            }};            

            GamesManagementEventsResetForAllPlayersResponse res = sdk.events.gamesManagementEventsResetForAllPlayers(req, new GamesManagementEventsResetForAllPlayersSecurity("nihil", "praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesManagementEventsResetMultipleForAllPlayers

Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementEventsResetMultipleForAllPlayersRequest;
import org.openapis.openapi.models.operations.GamesManagementEventsResetMultipleForAllPlayersResponse;
import org.openapis.openapi.models.operations.GamesManagementEventsResetMultipleForAllPlayersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EventsResetMultipleForAllRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementEventsResetMultipleForAllPlayersRequest req = new GamesManagementEventsResetMultipleForAllPlayersRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                eventsResetMultipleForAllRequest = new EventsResetMultipleForAllRequest() {{
                    eventIds = new String[]{{
                        add("omnis"),
                    }};
                    kind = "voluptate";
                }};;
                accessToken = "cum";
                alt = AltEnum.JSON;
                callback = "doloremque";
                fields = "reprehenderit";
                key = "ut";
                oauthToken = "maiores";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "corporis";
                uploadProtocol = "dolore";
            }};            

            GamesManagementEventsResetMultipleForAllPlayersResponse res = sdk.events.gamesManagementEventsResetMultipleForAllPlayers(req, new GamesManagementEventsResetMultipleForAllPlayersSecurity("iusto", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
