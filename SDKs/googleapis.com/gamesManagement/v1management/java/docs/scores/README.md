# scores

### Available Operations

* [gamesManagementScoresReset](#gamesmanagementscoresreset) - Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementScoresResetAll](#gamesmanagementscoresresetall) - Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementScoresResetAllForAllPlayers](#gamesmanagementscoresresetallforallplayers) - Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
* [gamesManagementScoresResetForAllPlayers](#gamesmanagementscoresresetforallplayers) - Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
* [gamesManagementScoresResetMultipleForAllPlayers](#gamesmanagementscoresresetmultipleforallplayers) - Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.

## gamesManagementScoresReset

Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementScoresResetRequest;
import org.openapis.openapi.models.operations.GamesManagementScoresResetResponse;
import org.openapis.openapi.models.operations.GamesManagementScoresResetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementScoresResetRequest req = new GamesManagementScoresResetRequest("quibusdam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "aliquid";
                fields = "cupiditate";
                key = "quos";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "assumenda";
                uploadProtocol = "ipsam";
            }};            

            GamesManagementScoresResetResponse res = sdk.scores.gamesManagementScoresReset(req, new GamesManagementScoresResetSecurity("alias", "fugit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.playerScoreResetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesManagementScoresResetAll

Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementScoresResetAllRequest;
import org.openapis.openapi.models.operations.GamesManagementScoresResetAllResponse;
import org.openapis.openapi.models.operations.GamesManagementScoresResetAllSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementScoresResetAllRequest req = new GamesManagementScoresResetAllRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "tempore";
                key = "labore";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "non";
                uploadProtocol = "eligendi";
            }};            

            GamesManagementScoresResetAllResponse res = sdk.scores.gamesManagementScoresResetAll(req, new GamesManagementScoresResetAllSecurity("sint", "aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.playerScoreResetAllResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesManagementScoresResetAllForAllPlayers

Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementScoresResetAllForAllPlayersRequest;
import org.openapis.openapi.models.operations.GamesManagementScoresResetAllForAllPlayersResponse;
import org.openapis.openapi.models.operations.GamesManagementScoresResetAllForAllPlayersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementScoresResetAllForAllPlayersRequest req = new GamesManagementScoresResetAllForAllPlayersRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "necessitatibus";
                alt = AltEnum.MEDIA;
                callback = "officia";
                fields = "dolor";
                key = "debitis";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "in";
                uploadProtocol = "in";
            }};            

            GamesManagementScoresResetAllForAllPlayersResponse res = sdk.scores.gamesManagementScoresResetAllForAllPlayers(req, new GamesManagementScoresResetAllForAllPlayersSecurity("illum", "maiores") {{
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

## gamesManagementScoresResetForAllPlayers

Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementScoresResetForAllPlayersRequest;
import org.openapis.openapi.models.operations.GamesManagementScoresResetForAllPlayersResponse;
import org.openapis.openapi.models.operations.GamesManagementScoresResetForAllPlayersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementScoresResetForAllPlayersRequest req = new GamesManagementScoresResetForAllPlayersRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.PROTO;
                callback = "facere";
                fields = "ea";
                key = "aliquid";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "non";
                uploadProtocol = "occaecati";
            }};            

            GamesManagementScoresResetForAllPlayersResponse res = sdk.scores.gamesManagementScoresResetForAllPlayers(req, new GamesManagementScoresResetForAllPlayersSecurity("enim", "accusamus") {{
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

## gamesManagementScoresResetMultipleForAllPlayers

Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementScoresResetMultipleForAllPlayersRequest;
import org.openapis.openapi.models.operations.GamesManagementScoresResetMultipleForAllPlayersResponse;
import org.openapis.openapi.models.operations.GamesManagementScoresResetMultipleForAllPlayersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ScoresResetMultipleForAllRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementScoresResetMultipleForAllPlayersRequest req = new GamesManagementScoresResetMultipleForAllPlayersRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                scoresResetMultipleForAllRequest = new ScoresResetMultipleForAllRequest() {{
                    kind = "quidem";
                    leaderboardIds = new String[]{{
                        add("nam"),
                        add("id"),
                        add("blanditiis"),
                    }};
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "deserunt";
                key = "nisi";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "omnis";
                uploadProtocol = "molestiae";
            }};            

            GamesManagementScoresResetMultipleForAllPlayersResponse res = sdk.scores.gamesManagementScoresResetMultipleForAllPlayers(req, new GamesManagementScoresResetMultipleForAllPlayersSecurity("perferendis", "nihil") {{
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
