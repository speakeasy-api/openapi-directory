# Games

### Available Operations

* [GamesAchievementsRead](#gamesachievementsread) - Get a list of game achievements.
* [GamesAdditionsList](#gamesadditionslist) - Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
* [GamesDevelopmentTeamList](#gamesdevelopmentteamlist) - Get a list of individual creators that were part of the development team.
* [GamesGameSeriesList](#gamesgameserieslist) - Get a list of games that are part of the same series.
* [GamesList](#gameslist) - Get a list of games.
* [GamesMoviesRead](#gamesmoviesread) - Get a list of game trailers.
* [GamesParentGamesList](#gamesparentgameslist) - Get a list of parent games for DLC's and editions.
* [GamesRead](#gamesread) - Get details of the game.
* [GamesRedditRead](#gamesredditread) - Get a list of most recent posts from the game's subreddit.
* [GamesScreenshotsList](#gamesscreenshotslist) - Get screenshots for the game.
* [GamesStoresList](#gamesstoreslist) - Get links to the stores that sell the game.
* [GamesSuggestedRead](#gamessuggestedread) - Get a list of visually similar games, available only for business and enterprise API users.
* [GamesTwitchRead](#gamestwitchread) - Get streams on Twitch associated with the game, available only for business and enterprise API users.
* [GamesYoutubeRead](#gamesyoutuberead) - Get videos from YouTube associated with the game, available only for business and enterprise API users.

## GamesAchievementsRead

Get a list of game achievements.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.GamesAchievementsRead(ctx, operations.GamesAchievementsReadRequest{
        ID: "f7cc78ca-1ba9-428f-8816-742cb7392059",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ParentAchievement != nil {
        // handle response
    }
}
```

## GamesAdditionsList

Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.GamesAdditionsList(ctx, operations.GamesAdditionsListRequest{
        GamePk: "sed",
        Page: sdk.Int64(612096),
        PageSize: sdk.Int64(222321),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GamesAdditionsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GamesDevelopmentTeamList

Get a list of individual creators that were part of the development team.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.GamesDevelopmentTeamList(ctx, operations.GamesDevelopmentTeamListRequest{
        GamePk: "natus",
        Ordering: sdk.String("laboriosam"),
        Page: sdk.Int64(943749),
        PageSize: sdk.Int64(902599),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GamesDevelopmentTeamList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GamesGameSeriesList

Get a list of games that are part of the same series.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.GamesGameSeriesList(ctx, operations.GamesGameSeriesListRequest{
        GamePk: "fuga",
        Page: sdk.Int64(449950),
        PageSize: sdk.Int64(359508),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GamesGameSeriesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GamesList

Get a list of games.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.GamesList(ctx, operations.GamesListRequest{
        Creators: sdk.String("iste"),
        Dates: sdk.String("iure"),
        Developers: sdk.String("saepe"),
        ExcludeAdditions: sdk.Bool(false),
        ExcludeCollection: sdk.Int64(697631),
        ExcludeGameSeries: sdk.Bool(false),
        ExcludeParents: sdk.Bool(false),
        ExcludeStores: sdk.String("architecto"),
        Genres: sdk.String("ipsa"),
        Metacritic: sdk.String("reiciendis"),
        Ordering: sdk.String("est"),
        Page: sdk.Int64(653140),
        PageSize: sdk.Int64(670638),
        ParentPlatforms: sdk.String("dolores"),
        Platforms: sdk.String("dolorem"),
        PlatformsCount: sdk.Int64(358152),
        Publishers: sdk.String("explicabo"),
        Search: sdk.String("nobis"),
        SearchExact: sdk.Bool(false),
        SearchPrecise: sdk.Bool(false),
        Stores: sdk.String("enim"),
        Tags: sdk.String("omnis"),
        Updated: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GamesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GamesMoviesRead

Get a list of game trailers.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.GamesMoviesRead(ctx, operations.GamesMoviesReadRequest{
        ID: "5907aff1-a3a2-4fa9-8677-39251aa52c3f",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Movie != nil {
        // handle response
    }
}
```

## GamesParentGamesList

Get a list of parent games for DLC's and editions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.GamesParentGamesList(ctx, operations.GamesParentGamesListRequest{
        GamePk: "ipsam",
        Page: sdk.Int64(662527),
        PageSize: sdk.Int64(820994),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GamesParentGamesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GamesRead

Get details of the game.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.GamesRead(ctx, operations.GamesReadRequest{
        ID: "019da1ff-e78f-4097-b007-4f15471b5e6e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GameSingle != nil {
        // handle response
    }
}
```

## GamesRedditRead

Get a list of most recent posts from the game's subreddit.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.GamesRedditRead(ctx, operations.GamesRedditReadRequest{
        ID: "13b99d48-8e1e-491e-850a-d2abd4426980",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Reddit != nil {
        // handle response
    }
}
```

## GamesScreenshotsList

Get screenshots for the game.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.GamesScreenshotsList(ctx, operations.GamesScreenshotsListRequest{
        GamePk: "magni",
        Ordering: sdk.String("assumenda"),
        Page: sdk.Int64(369808),
        PageSize: sdk.Int64(4695),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GamesScreenshotsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GamesStoresList

Get links to the stores that sell the game.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.GamesStoresList(ctx, operations.GamesStoresListRequest{
        GamePk: "fugit",
        Ordering: sdk.String("dolorum"),
        Page: sdk.Int64(569618),
        PageSize: sdk.Int64(270008),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GamesStoresList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GamesSuggestedRead

Get a list of visually similar games, available only for business and enterprise API users.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.GamesSuggestedRead(ctx, operations.GamesSuggestedReadRequest{
        ID: "bb4f63c9-69e9-4a3e-ba77-dfb14cd66ae3",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GameSingle != nil {
        // handle response
    }
}
```

## GamesTwitchRead

Get streams on Twitch associated with the game, available only for business and enterprise API users.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.GamesTwitchRead(ctx, operations.GamesTwitchReadRequest{
        ID: "95efb9ba-88f3-4a66-9970-74ba4469b6e2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Twitch != nil {
        // handle response
    }
}
```

## GamesYoutubeRead

Get videos from YouTube associated with the game, available only for business and enterprise API users.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.GamesYoutubeRead(ctx, operations.GamesYoutubeReadRequest{
        ID: "14195989-0afa-4563-a251-6fe4c8b711e5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Youtube != nil {
        // handle response
    }
}
```
