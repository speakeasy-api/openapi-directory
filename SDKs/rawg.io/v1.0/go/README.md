# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/rawg.io/v1.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.CreatorRoles.CreatorRolesList(ctx, operations.CreatorRolesListRequest{
        Page: sdk.Int64(548814),
        PageSize: sdk.Int64(592845),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatorRolesList200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [CreatorRoles](docs/creatorroles/README.md)

* [CreatorRolesList](docs/creatorroles/README.md#creatorroleslist) - Get a list of creator positions (jobs).

### [Creators](docs/creators/README.md)

* [CreatorsList](docs/creators/README.md#creatorslist) - Get a list of game creators.
* [CreatorsRead](docs/creators/README.md#creatorsread) - Get details of the creator.

### [Developers](docs/developers/README.md)

* [DevelopersList](docs/developers/README.md#developerslist) - Get a list of game developers.
* [DevelopersRead](docs/developers/README.md#developersread) - Get details of the developer.

### [Games](docs/games/README.md)

* [GamesAchievementsRead](docs/games/README.md#gamesachievementsread) - Get a list of game achievements.
* [GamesAdditionsList](docs/games/README.md#gamesadditionslist) - Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
* [GamesDevelopmentTeamList](docs/games/README.md#gamesdevelopmentteamlist) - Get a list of individual creators that were part of the development team.
* [GamesGameSeriesList](docs/games/README.md#gamesgameserieslist) - Get a list of games that are part of the same series.
* [GamesList](docs/games/README.md#gameslist) - Get a list of games.
* [GamesMoviesRead](docs/games/README.md#gamesmoviesread) - Get a list of game trailers.
* [GamesParentGamesList](docs/games/README.md#gamesparentgameslist) - Get a list of parent games for DLC's and editions.
* [GamesRead](docs/games/README.md#gamesread) - Get details of the game.
* [GamesRedditRead](docs/games/README.md#gamesredditread) - Get a list of most recent posts from the game's subreddit.
* [GamesScreenshotsList](docs/games/README.md#gamesscreenshotslist) - Get screenshots for the game.
* [GamesStoresList](docs/games/README.md#gamesstoreslist) - Get links to the stores that sell the game.
* [GamesSuggestedRead](docs/games/README.md#gamessuggestedread) - Get a list of visually similar games, available only for business and enterprise API users.
* [GamesTwitchRead](docs/games/README.md#gamestwitchread) - Get streams on Twitch associated with the game, available only for business and enterprise API users.
* [GamesYoutubeRead](docs/games/README.md#gamesyoutuberead) - Get videos from YouTube associated with the game, available only for business and enterprise API users.

### [Genres](docs/genres/README.md)

* [GenresList](docs/genres/README.md#genreslist) - Get a list of video game genres.
* [GenresRead](docs/genres/README.md#genresread) - Get details of the genre.

### [Platforms](docs/platforms/README.md)

* [PlatformsList](docs/platforms/README.md#platformslist) - Get a list of video game platforms.
* [PlatformsListsParentsList](docs/platforms/README.md#platformslistsparentslist) - Get a list of parent platforms.
* [PlatformsRead](docs/platforms/README.md#platformsread) - Get details of the platform.

### [Publishers](docs/publishers/README.md)

* [PublishersList](docs/publishers/README.md#publisherslist) - Get a list of video game publishers.
* [PublishersRead](docs/publishers/README.md#publishersread) - Get details of the publisher.

### [Stores](docs/stores/README.md)

* [StoresList](docs/stores/README.md#storeslist) - Get a list of video game storefronts.
* [StoresRead](docs/stores/README.md#storesread) - Get details of the store.

### [Tags](docs/tags/README.md)

* [TagsList](docs/tags/README.md#tagslist) - Get a list of tags.
* [TagsRead](docs/tags/README.md#tagsread) - Get details of the tag.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
