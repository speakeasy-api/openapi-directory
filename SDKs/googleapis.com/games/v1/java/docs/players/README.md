# players

### Available Operations

* [gamesPlayersGet](#gamesplayersget) - Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
* [gamesPlayersGetMultipleApplicationPlayerIds](#gamesplayersgetmultipleapplicationplayerids) - Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.
* [gamesPlayersGetScopedPlayerIds](#gamesplayersgetscopedplayerids) - Retrieves scoped player identifiers for currently authenticated user.
* [gamesPlayersList](#gamesplayerslist) - Get the collection of players for the currently authenticated user.

## gamesPlayersGet

Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesPlayersGetRequest;
import org.openapis.openapi.models.operations.GamesPlayersGetResponse;
import org.openapis.openapi.models.operations.GamesPlayersGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesPlayersGetRequest req = new GamesPlayersGetRequest("eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "earum";
                key = "modi";
                language = "iste";
                oauthToken = "dolorum";
                playerIdConsistencyToken = "deleniti";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "provident";
                uploadProtocol = "nobis";
            }};            

            GamesPlayersGetResponse res = sdk.players.gamesPlayersGet(req, new GamesPlayersGetSecurity("libero", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.player != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesPlayersGetMultipleApplicationPlayerIds

Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesPlayersGetMultipleApplicationPlayerIdsRequest;
import org.openapis.openapi.models.operations.GamesPlayersGetMultipleApplicationPlayerIdsResponse;
import org.openapis.openapi.models.operations.GamesPlayersGetMultipleApplicationPlayerIdsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesPlayersGetMultipleApplicationPlayerIdsRequest req = new GamesPlayersGetMultipleApplicationPlayerIdsRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                applicationIds = new String[]{{
                    add("dolorem"),
                }};
                callback = "dolor";
                fields = "qui";
                key = "ipsum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "cum";
                uploadProtocol = "voluptate";
            }};            

            GamesPlayersGetMultipleApplicationPlayerIdsResponse res = sdk.players.gamesPlayersGetMultipleApplicationPlayerIds(req, new GamesPlayersGetMultipleApplicationPlayerIdsSecurity("dignissimos", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getMultipleApplicationPlayerIdsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesPlayersGetScopedPlayerIds

Retrieves scoped player identifiers for currently authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesPlayersGetScopedPlayerIdsRequest;
import org.openapis.openapi.models.operations.GamesPlayersGetScopedPlayerIdsResponse;
import org.openapis.openapi.models.operations.GamesPlayersGetScopedPlayerIdsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesPlayersGetScopedPlayerIdsRequest req = new GamesPlayersGetScopedPlayerIdsRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "veritatis";
                fields = "ipsa";
                key = "ipsa";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "odio";
                uploadType = "quaerat";
                uploadProtocol = "accusamus";
            }};            

            GamesPlayersGetScopedPlayerIdsResponse res = sdk.players.gamesPlayersGetScopedPlayerIds(req, new GamesPlayersGetScopedPlayerIdsSecurity("quidem", "voluptatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scopedPlayerIds != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesPlayersList

Get the collection of players for the currently authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesPlayersListCollectionEnum;
import org.openapis.openapi.models.operations.GamesPlayersListRequest;
import org.openapis.openapi.models.operations.GamesPlayersListResponse;
import org.openapis.openapi.models.operations.GamesPlayersListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesPlayersListRequest req = new GamesPlayersListRequest(GamesPlayersListCollectionEnum.VISIBLE) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "sit";
                fields = "fugiat";
                key = "ab";
                language = "soluta";
                maxResults = 679393L;
                oauthToken = "iusto";
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "deleniti";
                uploadProtocol = "omnis";
            }};            

            GamesPlayersListResponse res = sdk.players.gamesPlayersList(req, new GamesPlayersListSecurity("necessitatibus", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.playerListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
