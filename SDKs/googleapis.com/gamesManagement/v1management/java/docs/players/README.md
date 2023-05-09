# players

### Available Operations

* [gamesManagementPlayersHide](#gamesmanagementplayershide) - Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
* [gamesManagementPlayersUnhide](#gamesmanagementplayersunhide) - Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

## gamesManagementPlayersHide

Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementPlayersHideRequest;
import org.openapis.openapi.models.operations.GamesManagementPlayersHideResponse;
import org.openapis.openapi.models.operations.GamesManagementPlayersHideSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementPlayersHideRequest req = new GamesManagementPlayersHideRequest("harum", "enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "commodi";
                alt = AltEnum.PROTO;
                callback = "quae";
                fields = "ipsum";
                key = "quidem";
                oauthToken = "molestias";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "pariatur";
                uploadProtocol = "modi";
            }};            

            GamesManagementPlayersHideResponse res = sdk.players.gamesManagementPlayersHide(req, new GamesManagementPlayersHideSecurity("praesentium", "rem") {{
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

## gamesManagementPlayersUnhide

Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementPlayersUnhideRequest;
import org.openapis.openapi.models.operations.GamesManagementPlayersUnhideResponse;
import org.openapis.openapi.models.operations.GamesManagementPlayersUnhideSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementPlayersUnhideRequest req = new GamesManagementPlayersUnhideRequest("voluptates", "quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "itaque";
                fields = "incidunt";
                key = "enim";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quibusdam";
                uploadProtocol = "explicabo";
            }};            

            GamesManagementPlayersUnhideResponse res = sdk.players.gamesManagementPlayersUnhide(req, new GamesManagementPlayersUnhideSecurity("deserunt", "distinctio") {{
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
