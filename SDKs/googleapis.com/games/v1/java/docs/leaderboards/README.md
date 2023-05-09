# leaderboards

### Available Operations

* [gamesLeaderboardsGet](#gamesleaderboardsget) - Retrieves the metadata of the leaderboard with the given ID.
* [gamesLeaderboardsList](#gamesleaderboardslist) - Lists all the leaderboard metadata for your application.

## gamesLeaderboardsGet

Retrieves the metadata of the leaderboard with the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesLeaderboardsGetRequest;
import org.openapis.openapi.models.operations.GamesLeaderboardsGetResponse;
import org.openapis.openapi.models.operations.GamesLeaderboardsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesLeaderboardsGetRequest req = new GamesLeaderboardsGetRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magni";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "illum";
                key = "pariatur";
                language = "maxime";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "odit";
                uploadProtocol = "ea";
            }};            

            GamesLeaderboardsGetResponse res = sdk.leaderboards.gamesLeaderboardsGet(req, new GamesLeaderboardsGetSecurity("accusantium", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.leaderboard != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesLeaderboardsList

Lists all the leaderboard metadata for your application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesLeaderboardsListRequest;
import org.openapis.openapi.models.operations.GamesLeaderboardsListResponse;
import org.openapis.openapi.models.operations.GamesLeaderboardsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesLeaderboardsListRequest req = new GamesLeaderboardsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "voluptate";
                fields = "autem";
                key = "nam";
                language = "eaque";
                maxResults = 866383L;
                oauthToken = "nemo";
                pageToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "fugiat";
                uploadProtocol = "amet";
            }};            

            GamesLeaderboardsListResponse res = sdk.leaderboards.gamesLeaderboardsList(req, new GamesLeaderboardsListSecurity("aut", "cumque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.leaderboardListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
