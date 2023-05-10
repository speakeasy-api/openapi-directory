# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreatorRolesListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatorRolesListRequest();
    $request->page = 548814;
    $request->pageSize = 592845;

    $response = $sdk->creatorRoles->creatorRolesList($request);

    if ($response->creatorRolesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [creatorRoles](docs/creatorroles/README.md)

* [creatorRolesList](docs/creatorroles/README.md#creatorroleslist) - Get a list of creator positions (jobs).

### [creators](docs/creators/README.md)

* [creatorsList](docs/creators/README.md#creatorslist) - Get a list of game creators.
* [creatorsRead](docs/creators/README.md#creatorsread) - Get details of the creator.

### [developers](docs/developers/README.md)

* [developersList](docs/developers/README.md#developerslist) - Get a list of game developers.
* [developersRead](docs/developers/README.md#developersread) - Get details of the developer.

### [games](docs/games/README.md)

* [gamesAchievementsRead](docs/games/README.md#gamesachievementsread) - Get a list of game achievements.
* [gamesAdditionsList](docs/games/README.md#gamesadditionslist) - Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
* [gamesDevelopmentTeamList](docs/games/README.md#gamesdevelopmentteamlist) - Get a list of individual creators that were part of the development team.
* [gamesGameSeriesList](docs/games/README.md#gamesgameserieslist) - Get a list of games that are part of the same series.
* [gamesList](docs/games/README.md#gameslist) - Get a list of games.
* [gamesMoviesRead](docs/games/README.md#gamesmoviesread) - Get a list of game trailers.
* [gamesParentGamesList](docs/games/README.md#gamesparentgameslist) - Get a list of parent games for DLC's and editions.
* [gamesRead](docs/games/README.md#gamesread) - Get details of the game.
* [gamesRedditRead](docs/games/README.md#gamesredditread) - Get a list of most recent posts from the game's subreddit.
* [gamesScreenshotsList](docs/games/README.md#gamesscreenshotslist) - Get screenshots for the game.
* [gamesStoresList](docs/games/README.md#gamesstoreslist) - Get links to the stores that sell the game.
* [gamesSuggestedRead](docs/games/README.md#gamessuggestedread) - Get a list of visually similar games, available only for business and enterprise API users.
* [gamesTwitchRead](docs/games/README.md#gamestwitchread) - Get streams on Twitch associated with the game, available only for business and enterprise API users.
* [gamesYoutubeRead](docs/games/README.md#gamesyoutuberead) - Get videos from YouTube associated with the game, available only for business and enterprise API users.

### [genres](docs/genres/README.md)

* [genresList](docs/genres/README.md#genreslist) - Get a list of video game genres.
* [genresRead](docs/genres/README.md#genresread) - Get details of the genre.

### [platforms](docs/platforms/README.md)

* [platformsList](docs/platforms/README.md#platformslist) - Get a list of video game platforms.
* [platformsListsParentsList](docs/platforms/README.md#platformslistsparentslist) - Get a list of parent platforms.
* [platformsRead](docs/platforms/README.md#platformsread) - Get details of the platform.

### [publishers](docs/publishers/README.md)

* [publishersList](docs/publishers/README.md#publisherslist) - Get a list of video game publishers.
* [publishersRead](docs/publishers/README.md#publishersread) - Get details of the publisher.

### [stores](docs/stores/README.md)

* [storesList](docs/stores/README.md#storeslist) - Get a list of video game storefronts.
* [storesRead](docs/stores/README.md#storesread) - Get details of the store.

### [tags](docs/tags/README.md)

* [tagsList](docs/tags/README.md#tagslist) - Get a list of tags.
* [tagsRead](docs/tags/README.md#tagsread) - Get details of the tag.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
