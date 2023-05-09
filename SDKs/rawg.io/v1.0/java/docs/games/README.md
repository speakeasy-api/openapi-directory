# games

### Available Operations

* [gamesAchievementsRead](#gamesachievementsread) - Get a list of game achievements.
* [gamesAdditionsList](#gamesadditionslist) - Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
* [gamesDevelopmentTeamList](#gamesdevelopmentteamlist) - Get a list of individual creators that were part of the development team.
* [gamesGameSeriesList](#gamesgameserieslist) - Get a list of games that are part of the same series.
* [gamesList](#gameslist) - Get a list of games.
* [gamesMoviesRead](#gamesmoviesread) - Get a list of game trailers.
* [gamesParentGamesList](#gamesparentgameslist) - Get a list of parent games for DLC's and editions.
* [gamesRead](#gamesread) - Get details of the game.
* [gamesRedditRead](#gamesredditread) - Get a list of most recent posts from the game's subreddit.
* [gamesScreenshotsList](#gamesscreenshotslist) - Get screenshots for the game.
* [gamesStoresList](#gamesstoreslist) - Get links to the stores that sell the game.
* [gamesSuggestedRead](#gamessuggestedread) - Get a list of visually similar games, available only for business and enterprise API users.
* [gamesTwitchRead](#gamestwitchread) - Get streams on Twitch associated with the game, available only for business and enterprise API users.
* [gamesYoutubeRead](#gamesyoutuberead) - Get videos from YouTube associated with the game, available only for business and enterprise API users.

## gamesAchievementsRead

Get a list of game achievements.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesAchievementsReadRequest;
import org.openapis.openapi.models.operations.GamesAchievementsReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesAchievementsReadRequest req = new GamesAchievementsReadRequest("deserunt");            

            GamesAchievementsReadResponse res = sdk.games.gamesAchievementsRead(req);

            if (res.parentAchievement != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesAdditionsList

Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesAdditionsListRequest;
import org.openapis.openapi.models.operations.GamesAdditionsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesAdditionsListRequest req = new GamesAdditionsListRequest("suscipit") {{
                page = 437587L;
                pageSize = 297534L;
            }};            

            GamesAdditionsListResponse res = sdk.games.gamesAdditionsList(req);

            if (res.gamesAdditionsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesDevelopmentTeamList

Get a list of individual creators that were part of the development team.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesDevelopmentTeamListRequest;
import org.openapis.openapi.models.operations.GamesDevelopmentTeamListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesDevelopmentTeamListRequest req = new GamesDevelopmentTeamListRequest("debitis") {{
                ordering = "ipsa";
                page = 963663L;
                pageSize = 272656L;
            }};            

            GamesDevelopmentTeamListResponse res = sdk.games.gamesDevelopmentTeamList(req);

            if (res.gamesDevelopmentTeamList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesGameSeriesList

Get a list of games that are part of the same series.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesGameSeriesListRequest;
import org.openapis.openapi.models.operations.GamesGameSeriesListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesGameSeriesListRequest req = new GamesGameSeriesListRequest("suscipit") {{
                page = 477665L;
                pageSize = 791725L;
            }};            

            GamesGameSeriesListResponse res = sdk.games.gamesGameSeriesList(req);

            if (res.gamesGameSeriesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesList

Get a list of games.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesListRequest;
import org.openapis.openapi.models.operations.GamesListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesListRequest req = new GamesListRequest() {{
                creators = "placeat";
                dates = "voluptatum";
                developers = "iusto";
                excludeAdditions = false;
                excludeCollection = 568045L;
                excludeGameSeries = false;
                excludeParents = false;
                excludeStores = "nisi";
                genres = "recusandae";
                metacritic = "temporibus";
                ordering = "ab";
                page = 337396L;
                pageSize = 87129L;
                parentPlatforms = "deserunt";
                platforms = "perferendis";
                platformsCount = 368241L;
                publishers = "repellendus";
                search = "sapiente";
                searchExact = false;
                searchPrecise = false;
                stores = "quo";
                tags = "odit";
                updated = "at";
            }};            

            GamesListResponse res = sdk.games.gamesList(req);

            if (res.gamesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesMoviesRead

Get a list of game trailers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesMoviesReadRequest;
import org.openapis.openapi.models.operations.GamesMoviesReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesMoviesReadRequest req = new GamesMoviesReadRequest("at");            

            GamesMoviesReadResponse res = sdk.games.gamesMoviesRead(req);

            if (res.movie != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesParentGamesList

Get a list of parent games for DLC's and editions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesParentGamesListRequest;
import org.openapis.openapi.models.operations.GamesParentGamesListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesParentGamesListRequest req = new GamesParentGamesListRequest("maiores") {{
                page = 473608L;
                pageSize = 799159L;
            }};            

            GamesParentGamesListResponse res = sdk.games.gamesParentGamesList(req);

            if (res.gamesParentGamesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesRead

Get details of the game.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesReadRequest;
import org.openapis.openapi.models.operations.GamesReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesReadRequest req = new GamesReadRequest("quod");            

            GamesReadResponse res = sdk.games.gamesRead(req);

            if (res.gameSingle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesRedditRead

Get a list of most recent posts from the game's subreddit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesRedditReadRequest;
import org.openapis.openapi.models.operations.GamesRedditReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesRedditReadRequest req = new GamesRedditReadRequest("esse");            

            GamesRedditReadResponse res = sdk.games.gamesRedditRead(req);

            if (res.reddit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesScreenshotsList

Get screenshots for the game.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesScreenshotsListRequest;
import org.openapis.openapi.models.operations.GamesScreenshotsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesScreenshotsListRequest req = new GamesScreenshotsListRequest("totam") {{
                ordering = "porro";
                page = 678880L;
                pageSize = 118274L;
            }};            

            GamesScreenshotsListResponse res = sdk.games.gamesScreenshotsList(req);

            if (res.gamesScreenshotsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesStoresList

Get links to the stores that sell the game.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesStoresListRequest;
import org.openapis.openapi.models.operations.GamesStoresListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesStoresListRequest req = new GamesStoresListRequest("nam") {{
                ordering = "officia";
                page = 582020L;
                pageSize = 143353L;
            }};            

            GamesStoresListResponse res = sdk.games.gamesStoresList(req);

            if (res.gamesStoresList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesSuggestedRead

Get a list of visually similar games, available only for business and enterprise API users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesSuggestedReadRequest;
import org.openapis.openapi.models.operations.GamesSuggestedReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesSuggestedReadRequest req = new GamesSuggestedReadRequest("deleniti");            

            GamesSuggestedReadResponse res = sdk.games.gamesSuggestedRead(req);

            if (res.gameSingle != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesTwitchRead

Get streams on Twitch associated with the game, available only for business and enterprise API users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesTwitchReadRequest;
import org.openapis.openapi.models.operations.GamesTwitchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesTwitchReadRequest req = new GamesTwitchReadRequest("hic");            

            GamesTwitchReadResponse res = sdk.games.gamesTwitchRead(req);

            if (res.twitch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gamesYoutubeRead

Get videos from YouTube associated with the game, available only for business and enterprise API users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GamesYoutubeReadRequest;
import org.openapis.openapi.models.operations.GamesYoutubeReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GamesYoutubeReadRequest req = new GamesYoutubeReadRequest("optio");            

            GamesYoutubeReadResponse res = sdk.games.gamesYoutubeRead(req);

            if (res.youtube != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
