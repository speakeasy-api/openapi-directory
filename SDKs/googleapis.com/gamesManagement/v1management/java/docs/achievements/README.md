# achievements

### Available Operations

* [gamesManagementAchievementsReset](#gamesmanagementachievementsreset) - Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementAchievementsResetAll](#gamesmanagementachievementsresetall) - Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
* [gamesManagementAchievementsResetAllForAllPlayers](#gamesmanagementachievementsresetallforallplayers) - Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
* [gamesManagementAchievementsResetForAllPlayers](#gamesmanagementachievementsresetforallplayers) - Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
* [gamesManagementAchievementsResetMultipleForAllPlayers](#gamesmanagementachievementsresetmultipleforallplayers) - Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.

## gamesManagementAchievementsReset

Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetRequest;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetResponse;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementAchievementsResetRequest req = new GamesManagementAchievementsResetRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsa";
                alt = AltEnum.PROTO;
                callback = "tempora";
                fields = "suscipit";
                key = "molestiae";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "placeat";
                uploadType = "voluptatum";
                uploadProtocol = "iusto";
            }};            

            GamesManagementAchievementsResetResponse res = sdk.achievements.gamesManagementAchievementsReset(req, new GamesManagementAchievementsResetSecurity("excepturi", "nisi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.achievementResetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesManagementAchievementsResetAll

Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetAllRequest;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetAllResponse;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetAllSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementAchievementsResetAllRequest req = new GamesManagementAchievementsResetAllRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "veritatis";
                key = "deserunt";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "repellendus";
                uploadProtocol = "sapiente";
            }};            

            GamesManagementAchievementsResetAllResponse res = sdk.achievements.gamesManagementAchievementsResetAll(req, new GamesManagementAchievementsResetAllSecurity("quo", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.achievementResetAllResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesManagementAchievementsResetAllForAllPlayers

Resets all draft achievements for all players. This method is only available to user accounts for your developer console.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetAllForAllPlayersRequest;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetAllForAllPlayersResponse;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetAllForAllPlayersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementAchievementsResetAllForAllPlayersRequest req = new GamesManagementAchievementsResetAllForAllPlayersRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "at";
                alt = AltEnum.PROTO;
                callback = "molestiae";
                fields = "quod";
                key = "quod";
                oauthToken = "esse";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "porro";
                uploadProtocol = "dolorum";
            }};            

            GamesManagementAchievementsResetAllForAllPlayersResponse res = sdk.achievements.gamesManagementAchievementsResetAllForAllPlayers(req, new GamesManagementAchievementsResetAllForAllPlayersSecurity("dicta", "nam") {{
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

## gamesManagementAchievementsResetForAllPlayers

Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetForAllPlayersRequest;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetForAllPlayersResponse;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetForAllPlayersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementAchievementsResetForAllPlayersRequest req = new GamesManagementAchievementsResetForAllPlayersRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugit";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "optio";
                key = "totam";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "molestiae";
                uploadProtocol = "modi";
            }};            

            GamesManagementAchievementsResetForAllPlayersResponse res = sdk.achievements.gamesManagementAchievementsResetForAllPlayers(req, new GamesManagementAchievementsResetForAllPlayersSecurity("qui", "impedit") {{
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

## gamesManagementAchievementsResetMultipleForAllPlayers

Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetMultipleForAllPlayersRequest;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetMultipleForAllPlayersResponse;
import org.openapis.openapi.models.operations.GamesManagementAchievementsResetMultipleForAllPlayersSecurity;
import org.openapis.openapi.models.shared.AchievementResetMultipleForAllRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesManagementAchievementsResetMultipleForAllPlayersRequest req = new GamesManagementAchievementsResetMultipleForAllPlayersRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                achievementResetMultipleForAllRequest = new AchievementResetMultipleForAllRequest() {{
                    achievementIds = new String[]{{
                        add("ipsum"),
                        add("excepturi"),
                    }};
                    kind = "aspernatur";
                }};;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "natus";
                fields = "sed";
                key = "iste";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "laboriosam";
                uploadProtocol = "hic";
            }};            

            GamesManagementAchievementsResetMultipleForAllPlayersResponse res = sdk.achievements.gamesManagementAchievementsResetMultipleForAllPlayers(req, new GamesManagementAchievementsResetMultipleForAllPlayersSecurity("saepe", "fuga") {{
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
