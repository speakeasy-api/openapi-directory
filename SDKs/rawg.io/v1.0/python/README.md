# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/rawg.io/v1.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreatorRolesListRequest(
    page=548814,
    page_size=592845,
)
    
res = s.creator_roles.creator_roles_list(req)

if res.creator_roles_list_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### creator_roles

* `creator_roles_list` - Get a list of creator positions (jobs).

### creators

* `creators_list` - Get a list of game creators.
* `creators_read` - Get details of the creator.

### developers

* `developers_list` - Get a list of game developers.
* `developers_read` - Get details of the developer.

### games

* `games_achievements_read` - Get a list of game achievements.
* `games_additions_list` - Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
* `games_development_team_list` - Get a list of individual creators that were part of the development team.
* `games_game_series_list` - Get a list of games that are part of the same series.
* `games_list` - Get a list of games.
* `games_movies_read` - Get a list of game trailers.
* `games_parent_games_list` - Get a list of parent games for DLC's and editions.
* `games_read` - Get details of the game.
* `games_reddit_read` - Get a list of most recent posts from the game's subreddit.
* `games_screenshots_list` - Get screenshots for the game.
* `games_stores_list` - Get links to the stores that sell the game.
* `games_suggested_read` - Get a list of visually similar games, available only for business and enterprise API users.
* `games_twitch_read` - Get streams on Twitch associated with the game, available only for business and enterprise API users.
* `games_youtube_read` - Get videos from YouTube associated with the game, available only for business and enterprise API users.

### genres

* `genres_list` - Get a list of video game genres.
* `genres_read` - Get details of the genre.

### platforms

* `platforms_list` - Get a list of video game platforms.
* `platforms_lists_parents_list` - Get a list of parent platforms.
* `platforms_read` - Get details of the platform.

### publishers

* `publishers_list` - Get a list of video game publishers.
* `publishers_read` - Get details of the publisher.

### stores

* `stores_list` - Get a list of video game storefronts.
* `stores_read` - Get details of the store.

### tags

* `tags_list` - Get a list of tags.
* `tags_read` - Get details of the tag.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
