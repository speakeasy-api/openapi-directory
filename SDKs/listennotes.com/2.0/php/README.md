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
use \OpenAPI\OpenAPI\Models\Operations\GetBestPodcastsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SafeModeParamEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBestPodcastsSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBestPodcastsRequest();
    $request->xListenAPIKey = 'corrupti';
    $request->genreId = 'provident';
    $request->language = 'distinctio';
    $request->page = 844266;
    $request->publisherRegion = 'unde';
    $request->region = 'nulla';
    $request->safeMode = SafeModeParamEnum::ONE;
    $request->sort = GetBestPodcastsSortEnum::LISTEN_SCORE;

    $response = $sdk->directoryAPI->getBestPodcasts($request);

    if ($response->bestPodcastsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [directoryAPI](docs/directoryapi/README.md)

* [getBestPodcasts](docs/directoryapi/README.md#getbestpodcasts) - Fetch a list of best podcasts by genre
* [getCuratedPodcastById](docs/directoryapi/README.md#getcuratedpodcastbyid) - Fetch a curated list of podcasts by id
* [getCuratedPodcasts](docs/directoryapi/README.md#getcuratedpodcasts) - Fetch curated lists of podcasts
* [getEpisodeById](docs/directoryapi/README.md#getepisodebyid) - Fetch detailed meta data for an episode by id
* [getEpisodeRecommendations](docs/directoryapi/README.md#getepisoderecommendations) - Fetch recommendations for an episode
* [getEpisodesInBatch](docs/directoryapi/README.md#getepisodesinbatch) - Batch fetch basic meta data for episodes
* [getGenres](docs/directoryapi/README.md#getgenres) - Fetch a list of podcast genres
* [getLanguages](docs/directoryapi/README.md#getlanguages) - Fetch a list of supported languages for podcasts
* [getPodcastById](docs/directoryapi/README.md#getpodcastbyid) - Fetch detailed meta data and episodes for a podcast by id
* [getPodcastRecommendations](docs/directoryapi/README.md#getpodcastrecommendations) - Fetch recommendations for a podcast
* [getPodcastsInBatch](docs/directoryapi/README.md#getpodcastsinbatch) - Batch fetch basic meta data for podcasts
* [getRegions](docs/directoryapi/README.md#getregions) - Fetch a list of supported countries/regions for best podcasts
* [justListen](docs/directoryapi/README.md#justlisten) - Fetch a random podcast episode

### [insightsAPI](docs/insightsapi/README.md)

* [getPodcastAudience](docs/insightsapi/README.md#getpodcastaudience) - Fetch audience demographics for a podcast
* [getPodcastsByDomainName](docs/insightsapi/README.md#getpodcastsbydomainname) - Fetch podcasts by a publisher's domain name

### [playlistAPI](docs/playlistapi/README.md)

* [getPlaylistById](docs/playlistapi/README.md#getplaylistbyid) - Fetch a playlist's info and items (i.e., episodes or podcasts).
* [getPlaylists](docs/playlistapi/README.md#getplaylists) - Fetch a list of your playlists.

### [podcasterAPI](docs/podcasterapi/README.md)

* [deletePodcastById](docs/podcasterapi/README.md#deletepodcastbyid) - Request to delete a podcast
* [submitPodcast](docs/podcasterapi/README.md#submitpodcast) - Submit a podcast to Listen Notes database

### [searchAPI](docs/searchapi/README.md)

* [getRelatedSearches](docs/searchapi/README.md#getrelatedsearches) - Fetch related search terms
* [getTrendingSearches](docs/searchapi/README.md#gettrendingsearches) - Fetch trending search terms
* [search](docs/searchapi/README.md#search) - Full-text search
* [spellcheck](docs/searchapi/README.md#spellcheck) - Spell check on a search term
* [typeahead](docs/searchapi/README.md#typeahead) - Typeahead search
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
