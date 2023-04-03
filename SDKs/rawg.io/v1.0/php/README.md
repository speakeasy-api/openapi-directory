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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### creatorRoles

* `creatorRolesList` - Get a list of creator positions (jobs).

### creators

* `creatorsList` - Get a list of game creators.
* `creatorsRead` - Get details of the creator.

### developers

* `developersList` - Get a list of game developers.
* `developersRead` - Get details of the developer.

### games

* `gamesAchievementsRead` - Get a list of game achievements.
* `gamesAdditionsList` - Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
* `gamesDevelopmentTeamList` - Get a list of individual creators that were part of the development team.
* `gamesGameSeriesList` - Get a list of games that are part of the same series.
* `gamesList` - Get a list of games.
* `gamesMoviesRead` - Get a list of game trailers.
* `gamesParentGamesList` - Get a list of parent games for DLC's and editions.
* `gamesRead` - Get details of the game.
* `gamesRedditRead` - Get a list of most recent posts from the game's subreddit.
* `gamesScreenshotsList` - Get screenshots for the game.
* `gamesStoresList` - Get links to the stores that sell the game.
* `gamesSuggestedRead` - Get a list of visually similar games, available only for business and enterprise API users.
* `gamesTwitchRead` - Get streams on Twitch associated with the game, available only for business and enterprise API users.
* `gamesYoutubeRead` - Get videos from YouTube associated with the game, available only for business and enterprise API users.

### genres

* `genresList` - Get a list of video game genres.
* `genresRead` - Get details of the genre.

### platforms

* `platformsList` - Get a list of video game platforms.
* `platformsListsParentsList` - Get a list of parent platforms.
* `platformsRead` - Get details of the platform.

### publishers

* `publishersList` - Get a list of video game publishers.
* `publishersRead` - Get details of the publisher.

### stores

* `storesList` - Get a list of video game storefronts.
* `storesRead` - Get details of the store.

### tags

* `tagsList` - Get a list of tags.
* `tagsRead` - Get details of the tag.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
