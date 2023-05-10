# directoryAPI

## Overview

Endpoints to fetch podcasts data

### Available Operations

* [getBestPodcasts](#getbestpodcasts) - Fetch a list of best podcasts by genre
* [getCuratedPodcastById](#getcuratedpodcastbyid) - Fetch a curated list of podcasts by id
* [getCuratedPodcasts](#getcuratedpodcasts) - Fetch curated lists of podcasts
* [getEpisodeById](#getepisodebyid) - Fetch detailed meta data for an episode by id
* [getEpisodeRecommendations](#getepisoderecommendations) - Fetch recommendations for an episode
* [getEpisodesInBatch](#getepisodesinbatch) - Batch fetch basic meta data for episodes
* [getGenres](#getgenres) - Fetch a list of podcast genres
* [getLanguages](#getlanguages) - Fetch a list of supported languages for podcasts
* [getPodcastById](#getpodcastbyid) - Fetch detailed meta data and episodes for a podcast by id
* [getPodcastRecommendations](#getpodcastrecommendations) - Fetch recommendations for a podcast
* [getPodcastsInBatch](#getpodcastsinbatch) - Batch fetch basic meta data for podcasts
* [getRegions](#getregions) - Fetch a list of supported countries/regions for best podcasts
* [justListen](#justlisten) - Fetch a random podcast episode

## getBestPodcasts

Get a list of curated best podcasts by genre,
which are curated by Listen Notes staffs based on various signals from the Internet, e.g.,
top charts on other podcast platforms, recommendations from mainstream media,
user activities on listennotes.com...
You can get the genre ids from `GET /genres` endpoint.
This endpoint returns same data as https://www.listennotes.com/best-podcasts/


### Example Usage

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
    $request->xListenAPIKey = 'vel';
    $request->genreId = 'error';
    $request->language = 'deserunt';
    $request->page = 384382;
    $request->publisherRegion = 'iure';
    $request->region = 'magnam';
    $request->safeMode = SafeModeParamEnum::ONE;
    $request->sort = GetBestPodcastsSortEnum::RECENT_ADDED_FIRST;

    $response = $sdk->directoryAPI->getBestPodcasts($request);

    if ($response->bestPodcastsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCuratedPodcastById

Get detailed meta data of all podcasts in a specific curated list.
This endpoint returns same data as https://www.listennotes.com/curated-podcasts/


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCuratedPodcastByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCuratedPodcastByIdRequest();
    $request->xListenAPIKey = 'delectus';
    $request->id = '467cc879-6ed1-451a-85df-c2ddf7cc78ca';

    $response = $sdk->directoryAPI->getCuratedPodcastById($request);

    if ($response->curatedListFull !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCuratedPodcasts

A bunch of curated lists from online media. For each list, you'll get basic info of up to 5 podcasts. To get detailed meta data of all podcasts in a specific list, you need to use `GET /curated_podcasts/{id}`. We add new curated lists to the database on a daily basis.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCuratedPodcastsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCuratedPodcastsRequest();
    $request->xListenAPIKey = 'dicta';
    $request->page = 720633;

    $response = $sdk->directoryAPI->getCuratedPodcasts($request);

    if ($response->getCuratedPodcastsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEpisodeById

Fetch detailed meta data for a specific episode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEpisodeByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEpisodeByIdRequest();
    $request->xListenAPIKey = 'officia';
    $request->id = '928fc816-742c-4b73-9205-929396fea759';
    $request->showTranscript = 437032;

    $response = $sdk->directoryAPI->getEpisodeById($request);

    if ($response->episodeFull !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEpisodeRecommendations

Fetch up to 8 episode recommendations based on the given episode id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEpisodeRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SafeModeParamEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEpisodeRecommendationsRequest();
    $request->xListenAPIKey = 'saepe';
    $request->id = 'b10faaa2-352c-4595-9907-aff1a3a2fa94';
    $request->safeMode = SafeModeParamEnum::ZERO;

    $response = $sdk->directoryAPI->getEpisodeRecommendations($request);

    if ($response->getEpisodeRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEpisodesInBatch

Batch fetch basic meta data for up to 10 episodes. This endpoint could be used to implement custom playlists for individual episodes. For detailed meta data of an individual episode, you need to use `GET /episodes/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEpisodesInBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetEpisodesInBatchForm;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEpisodesInBatchRequest();
    $request->getEpisodesInBatchForm = new GetEpisodesInBatchForm();
    $request->getEpisodesInBatchForm->ids = 'quam';
    $request->xListenAPIKey = 'molestiae';

    $response = $sdk->directoryAPI->getEpisodesInBatch($request);

    if ($response->getEpisodesInBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenres

Get a list of podcast genres that are supported in Listen Notes.
The genre id can be passed to other endpoints as a parameter to get podcasts in a specific genre,
e.g., `GET /best_podcasts`, `GET /search`...
You may want to cache the list of genres on the client side.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenresRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGenresTopLevelOnlyEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenresRequest();
    $request->xListenAPIKey = 'velit';
    $request->topLevelOnly = GetGenresTopLevelOnlyEnum::ONE;

    $response = $sdk->directoryAPI->getGenres($request);

    if ($response->getGenresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLanguages

Get a list of languages that are supported in Listen Notes database. You can use the language string as query parameter in `GET /search`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetLanguagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLanguagesRequest();
    $request->xListenAPIKey = 'quia';

    $response = $sdk->directoryAPI->getLanguages($request);

    if ($response->getLanguagesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPodcastById

Fetch detailed meta data and episodes for a specific podcast (up to 10 episodes each time).
You can use the **next_episode_pub_date** parameter to do pagination and fetch more episodes.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPodcastByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPodcastByIdSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPodcastByIdRequest();
    $request->xListenAPIKey = 'quis';
    $request->id = '1aa52c3f-5ad0-419d-a1ff-e78f097b0074';
    $request->nextEpisodePubDate = 979587;
    $request->sort = GetPodcastByIdSortEnum::RECENT_FIRST;

    $response = $sdk->directoryAPI->getPodcastById($request);

    if ($response->podcastFull !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPodcastRecommendations

Fetch up to 8 podcast recommendations based on the given podcast id.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPodcastRecommendationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SafeModeParamEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPodcastRecommendationsRequest();
    $request->xListenAPIKey = 'corporis';
    $request->id = '471b5e6e-13b9-49d4-88e1-e91e450ad2ab';
    $request->safeMode = SafeModeParamEnum::ONE;

    $response = $sdk->directoryAPI->getPodcastRecommendations($request);

    if ($response->getPodcastRecommendationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPodcastsInBatch

Batch fetch basic meta data for up to 10 podcasts.
This endpoint could be used to build something like OPML import,
allowing users to import a bunch of podcasts via rss urls.
For detailed meta data (including episodes) of an individual podcast, you need to use `GET /podcasts/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPodcastsInBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPodcastsInBatchForm;
use \OpenAPI\OpenAPI\Models\Shared\GetPodcastsInBatchFormShowLatestEpisodesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPodcastsInBatchRequest();
    $request->getPodcastsInBatchForm = new GetPodcastsInBatchForm();
    $request->getPodcastsInBatchForm->ids = 'labore';
    $request->getPodcastsInBatchForm->itunesIds = 'modi';
    $request->getPodcastsInBatchForm->nextEpisodePubDate = 183191;
    $request->getPodcastsInBatchForm->rsses = 'aliquid';
    $request->getPodcastsInBatchForm->showLatestEpisodes = GetPodcastsInBatchFormShowLatestEpisodesEnum::ONE;
    $request->getPodcastsInBatchForm->spotifyIds = 'quos';
    $request->xListenAPIKey = 'perferendis';

    $response = $sdk->directoryAPI->getPodcastsInBatch($request);

    if ($response->getPodcastsInBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegions

It returns a dictionary of country codes (e.g., us, gb...) & country names (United States, United Kingdom...). The country code is used in the query parameter **region** of `GET /best_podcasts`.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRegionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRegionsRequest();
    $request->xListenAPIKey = 'magni';

    $response = $sdk->directoryAPI->getRegions($request);

    if ($response->getRegionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## justListen

Recently published episodes are more likely to be fetched. Good luck!

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JustListenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JustListenRequest();
    $request->xListenAPIKey = 'assumenda';

    $response = $sdk->directoryAPI->justListen($request);

    if ($response->episodeSimple !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
