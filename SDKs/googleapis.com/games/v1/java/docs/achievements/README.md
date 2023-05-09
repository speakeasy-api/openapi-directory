# achievements

### Available Operations

* [gamesAchievementsIncrement](#gamesachievementsincrement) - Increments the steps of the achievement with the given ID for the currently authenticated player.
* [gamesAchievementsList](#gamesachievementslist) - Lists the progress for all your application's achievements for the currently authenticated player.
* [gamesAchievementsReveal](#gamesachievementsreveal) - Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
* [gamesAchievementsSetStepsAtLeast](#gamesachievementssetstepsatleast) - Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
* [gamesAchievementsUnlock](#gamesachievementsunlock) - Unlocks this achievement for the currently authenticated player.
* [gamesAchievementsUpdateMultiple](#gamesachievementsupdatemultiple) - Updates multiple achievements for the currently authenticated player.

## gamesAchievementsIncrement

Increments the steps of the achievement with the given ID for the currently authenticated player.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesAchievementsIncrementRequest;
import org.openapis.openapi.models.operations.GamesAchievementsIncrementResponse;
import org.openapis.openapi.models.operations.GamesAchievementsIncrementSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesAchievementsIncrementRequest req = new GamesAchievementsIncrementRequest("veritatis", 648172L) {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsam";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "quo";
                key = "odit";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "at";
                requestId = "maiores";
                uploadType = "molestiae";
                uploadProtocol = "quod";
            }};            

            GamesAchievementsIncrementResponse res = sdk.achievements.gamesAchievementsIncrement(req, new GamesAchievementsIncrementSecurity("quod", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.achievementIncrementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesAchievementsList

Lists the progress for all your application's achievements for the currently authenticated player.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesAchievementsListRequest;
import org.openapis.openapi.models.operations.GamesAchievementsListResponse;
import org.openapis.openapi.models.operations.GamesAchievementsListSecurity;
import org.openapis.openapi.models.operations.GamesAchievementsListStateEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesAchievementsListRequest req = new GamesAchievementsListRequest("totam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "nam";
                fields = "officia";
                key = "occaecati";
                language = "fugit";
                maxResults = 537373L;
                oauthToken = "hic";
                pageToken = "optio";
                prettyPrint = false;
                quotaUser = "totam";
                state = GamesAchievementsListStateEnum.ALL;
                uploadType = "commodi";
                uploadProtocol = "molestiae";
            }};            

            GamesAchievementsListResponse res = sdk.achievements.gamesAchievementsList(req, new GamesAchievementsListSecurity("modi", "qui") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.playerAchievementListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesAchievementsReveal

Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesAchievementsRevealRequest;
import org.openapis.openapi.models.operations.GamesAchievementsRevealResponse;
import org.openapis.openapi.models.operations.GamesAchievementsRevealSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesAchievementsRevealRequest req = new GamesAchievementsRevealRequest("impedit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "aspernatur";
                key = "perferendis";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "natus";
                uploadType = "sed";
                uploadProtocol = "iste";
            }};            

            GamesAchievementsRevealResponse res = sdk.achievements.gamesAchievementsReveal(req, new GamesAchievementsRevealSecurity("dolor", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.achievementRevealResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesAchievementsSetStepsAtLeast

Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesAchievementsSetStepsAtLeastRequest;
import org.openapis.openapi.models.operations.GamesAchievementsSetStepsAtLeastResponse;
import org.openapis.openapi.models.operations.GamesAchievementsSetStepsAtLeastSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesAchievementsSetStepsAtLeastRequest req = new GamesAchievementsSetStepsAtLeastRequest("laboriosam", 943749L) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "iste";
                key = "iure";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "architecto";
                uploadProtocol = "ipsa";
            }};            

            GamesAchievementsSetStepsAtLeastResponse res = sdk.achievements.gamesAchievementsSetStepsAtLeast(req, new GamesAchievementsSetStepsAtLeastSecurity("reiciendis", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.achievementSetStepsAtLeastResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesAchievementsUnlock

Unlocks this achievement for the currently authenticated player.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesAchievementsUnlockRequest;
import org.openapis.openapi.models.operations.GamesAchievementsUnlockResponse;
import org.openapis.openapi.models.operations.GamesAchievementsUnlockSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesAchievementsUnlockRequest req = new GamesAchievementsUnlockRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolores";
                alt = AltEnum.JSON;
                callback = "corporis";
                fields = "explicabo";
                key = "nobis";
                oauthToken = "enim";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "nemo";
                uploadProtocol = "minima";
            }};            

            GamesAchievementsUnlockResponse res = sdk.achievements.gamesAchievementsUnlock(req, new GamesAchievementsUnlockSecurity("excepturi", "accusantium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.achievementUnlockResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesAchievementsUpdateMultiple

Updates multiple achievements for the currently authenticated player.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesAchievementsUpdateMultipleRequest;
import org.openapis.openapi.models.operations.GamesAchievementsUpdateMultipleResponse;
import org.openapis.openapi.models.operations.GamesAchievementsUpdateMultipleSecurity;
import org.openapis.openapi.models.shared.AchievementUpdateMultipleRequest;
import org.openapis.openapi.models.shared.AchievementUpdateRequest;
import org.openapis.openapi.models.shared.AchievementUpdateRequestUpdateTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GamesAchievementIncrement;
import org.openapis.openapi.models.shared.GamesAchievementSetStepsAtLeast;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesAchievementsUpdateMultipleRequest req = new GamesAchievementsUpdateMultipleRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                achievementUpdateMultipleRequest = new AchievementUpdateMultipleRequest() {{
                    kind = "culpa";
                    updates = new org.openapis.openapi.models.shared.AchievementUpdateRequest[]{{
                        add(new AchievementUpdateRequest() {{
                            achievementId = "sapiente";
                            incrementPayload = new GamesAchievementIncrement() {{
                                kind = "architecto";
                                requestId = "mollitia";
                                steps = 208876;
                            }};
                            kind = "culpa";
                            setStepsAtLeastPayload = new GamesAchievementSetStepsAtLeast() {{
                                kind = "consequuntur";
                                steps = 995300;
                            }};
                            updateType = AchievementUpdateRequestUpdateTypeEnum.INCREMENT;
                        }}),
                        add(new AchievementUpdateRequest() {{
                            achievementId = "occaecati";
                            incrementPayload = new GamesAchievementIncrement() {{
                                kind = "numquam";
                                requestId = "commodi";
                                steps = 466311;
                            }};
                            kind = "molestiae";
                            setStepsAtLeastPayload = new GamesAchievementSetStepsAtLeast() {{
                                kind = "velit";
                                steps = 623510;
                            }};
                            updateType = AchievementUpdateRequestUpdateTypeEnum.ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED;
                        }}),
                        add(new AchievementUpdateRequest() {{
                            achievementId = "quis";
                            incrementPayload = new GamesAchievementIncrement() {{
                                kind = "vitae";
                                requestId = "laborum";
                                steps = 656330;
                            }};
                            kind = "enim";
                            setStepsAtLeastPayload = new GamesAchievementSetStepsAtLeast() {{
                                kind = "odit";
                                steps = 778346;
                            }};
                            updateType = AchievementUpdateRequestUpdateTypeEnum.ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED;
                        }}),
                        add(new AchievementUpdateRequest() {{
                            achievementId = "tenetur";
                            incrementPayload = new GamesAchievementIncrement() {{
                                kind = "ipsam";
                                requestId = "id";
                                steps = 820994;
                            }};
                            kind = "aut";
                            setStepsAtLeastPayload = new GamesAchievementSetStepsAtLeast() {{
                                kind = "quasi";
                                steps = 622846;
                            }};
                            updateType = AchievementUpdateRequestUpdateTypeEnum.SET_STEPS_AT_LEAST;
                        }}),
                    }};
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "voluptatibus";
                key = "vero";
                oauthToken = "nihil";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "voluptatibus";
                uploadProtocol = "ipsa";
            }};            

            GamesAchievementsUpdateMultipleResponse res = sdk.achievements.gamesAchievementsUpdateMultiple(req, new GamesAchievementsUpdateMultipleSecurity("omnis", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.achievementUpdateMultipleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
