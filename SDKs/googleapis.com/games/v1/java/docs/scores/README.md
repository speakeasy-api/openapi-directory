# scores

### Available Operations

* [gamesScoresGet](#gamesscoresget) - Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
* [gamesScoresList](#gamesscoreslist) - Lists the scores in a leaderboard, starting from the top.
* [gamesScoresListWindow](#gamesscoreslistwindow) - Lists the scores in a leaderboard around (and including) a player's score.
* [gamesScoresSubmit](#gamesscoressubmit) - Submits a score to the specified leaderboard.
* [gamesScoresSubmitMultiple](#gamesscoressubmitmultiple) - Submits multiple scores to leaderboards.

## gamesScoresGet

Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesScoresGetIncludeRankTypeEnum;
import org.openapis.openapi.models.operations.GamesScoresGetRequest;
import org.openapis.openapi.models.operations.GamesScoresGetResponse;
import org.openapis.openapi.models.operations.GamesScoresGetSecurity;
import org.openapis.openapi.models.operations.GamesScoresGetTimeSpanEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesScoresGetRequest req = new GamesScoresGetRequest("saepe", "suscipit", GamesScoresGetTimeSpanEnum.WEEKLY) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minima";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "similique";
                includeRankType = GamesScoresGetIncludeRankTypeEnum.INCLUDE_RANK_TYPE_UNSPECIFIED;
                key = "at";
                language = "quaerat";
                maxResults = 273542L;
                oauthToken = "vel";
                pageToken = "quod";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "qui";
                uploadProtocol = "dolorum";
            }};            

            GamesScoresGetResponse res = sdk.scores.gamesScoresGet(req, new GamesScoresGetSecurity("a", "esse") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.playerLeaderboardScoreListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesScoresList

Lists the scores in a leaderboard, starting from the top.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesScoresListCollectionEnum;
import org.openapis.openapi.models.operations.GamesScoresListRequest;
import org.openapis.openapi.models.operations.GamesScoresListResponse;
import org.openapis.openapi.models.operations.GamesScoresListSecurity;
import org.openapis.openapi.models.operations.GamesScoresListTimeSpanEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesScoresListRequest req = new GamesScoresListRequest(GamesScoresListCollectionEnum.SOCIAL, "iusto", GamesScoresListTimeSpanEnum.SCORE_TIME_SPAN_UNSPECIFIED) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tenetur";
                alt = AltEnum.JSON;
                callback = "tempore";
                fields = "accusamus";
                key = "numquam";
                language = "enim";
                maxResults = 213312L;
                oauthToken = "sapiente";
                pageToken = "totam";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "sit";
                uploadProtocol = "expedita";
            }};            

            GamesScoresListResponse res = sdk.scores.gamesScoresList(req, new GamesScoresListSecurity("neque", "sed") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.leaderboardScores != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesScoresListWindow

Lists the scores in a leaderboard around (and including) a player's score.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesScoresListWindowCollectionEnum;
import org.openapis.openapi.models.operations.GamesScoresListWindowRequest;
import org.openapis.openapi.models.operations.GamesScoresListWindowResponse;
import org.openapis.openapi.models.operations.GamesScoresListWindowSecurity;
import org.openapis.openapi.models.operations.GamesScoresListWindowTimeSpanEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesScoresListWindowRequest req = new GamesScoresListWindowRequest(GamesScoresListWindowCollectionEnum.PUBLIC_, "libero", GamesScoresListWindowTimeSpanEnum.ALL_TIME) {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quam";
                alt = AltEnum.JSON;
                callback = "incidunt";
                fields = "qui";
                key = "cupiditate";
                language = "maxime";
                maxResults = 863856L;
                oauthToken = "soluta";
                pageToken = "dicta";
                prettyPrint = false;
                quotaUser = "laborum";
                resultsAbove = 517379L;
                returnTopIfAbsent = false;
                uploadType = "incidunt";
                uploadProtocol = "aspernatur";
            }};            

            GamesScoresListWindowResponse res = sdk.scores.gamesScoresListWindow(req, new GamesScoresListWindowSecurity("dolores", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.leaderboardScores != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesScoresSubmit

Submits a score to the specified leaderboard.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesScoresSubmitRequest;
import org.openapis.openapi.models.operations.GamesScoresSubmitResponse;
import org.openapis.openapi.models.operations.GamesScoresSubmitSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesScoresSubmitRequest req = new GamesScoresSubmitRequest("facilis", "aliquid") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                callback = "qui";
                fields = "neque";
                key = "fugit";
                language = "magni";
                oauthToken = "odio";
                prettyPrint = false;
                quotaUser = "sunt";
                scoreTag = "ullam";
                uploadType = "nam";
                uploadProtocol = "hic";
            }};            

            GamesScoresSubmitResponse res = sdk.scores.gamesScoresSubmit(req, new GamesScoresSubmitSecurity("voluptatem", "cumque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.playerScoreResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesScoresSubmitMultiple

Submits multiple scores to leaderboards.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesScoresSubmitMultipleRequest;
import org.openapis.openapi.models.operations.GamesScoresSubmitMultipleResponse;
import org.openapis.openapi.models.operations.GamesScoresSubmitMultipleSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.PlayerScoreSubmissionList;
import org.openapis.openapi.models.shared.ScoreSubmission;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesScoresSubmitMultipleRequest req = new GamesScoresSubmitMultipleRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                playerScoreSubmissionList = new PlayerScoreSubmissionList() {{
                    kind = "nobis";
                    scores = new org.openapis.openapi.models.shared.ScoreSubmission[]{{
                        add(new ScoreSubmission() {{
                            kind = "saepe";
                            leaderboardId = "ipsum";
                            score = "veritatis";
                            scoreTag = "nobis";
                            signature = "quos";
                        }}),
                    }};
                }};;
                accessToken = "tempore";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "delectus";
                key = "dolorem";
                language = "dolore";
                oauthToken = "labore";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "dolorum";
                uploadProtocol = "architecto";
            }};            

            GamesScoresSubmitMultipleResponse res = sdk.scores.gamesScoresSubmitMultiple(req, new GamesScoresSubmitMultipleSecurity("quae", "aut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.playerScoreListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
