# searchAPI

## Overview

Endpoints to search podcasts

### Available Operations

* [getRelatedSearches](#getrelatedsearches) - Fetch related search terms
* [getTrendingSearches](#gettrendingsearches) - Fetch trending search terms
* [search](#search) - Full-text search
* [spellcheck](#spellcheck) - Spell check on a search term
* [typeahead](#typeahead) - Typeahead search

## getRelatedSearches

Suggest related search terms. The results are more comprehensive than from `GET /typeahead`. This endpoint is available only in the PRO/ENTERPRISE plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRelatedSearchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRelatedSearchesRequest();
    $request->xListenAPIKey = 'illum';
    $request->q = 'pariatur';

    $response = $sdk->searchAPI->getRelatedSearches($request);

    if ($response->relatedSearchesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrendingSearches

Fetch up to 10 most recent trending search terms on the Listen Notes platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTrendingSearchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrendingSearchesRequest();
    $request->xListenAPIKey = 'maxime';

    $response = $sdk->searchAPI->getTrendingSearches($request);

    if ($response->trendingSearchesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## search

Full-text search on episodes, podcasts, or curated lists of podcasts.
Use the `offset` parameter to paginate through search results.
The FREE plan allows to see up to 30 search results (or `offset` < 30) per query.
The PRO plan allows to see up to 300 search results (or `offset` < 300) per query.
The ENTERPRISE plan allows to see up to 10,000 search results (or `offset` < 10000) per query.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchSafeModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchSortByDateEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchUniquePodcastsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequest();
    $request->xListenAPIKey = 'ea';
    $request->episodeCountMax = 569101;
    $request->episodeCountMin = 139972;
    $request->genreIds = 'ea';
    $request->language = 'accusantium';
    $request->lenMax = 69167;
    $request->lenMin = 982575;
    $request->ncid = 'quidem';
    $request->ocid = 'ipsam';
    $request->offset = 453543;
    $request->onlyIn = 'autem';
    $request->pageSize = 722056;
    $request->publishedAfter = 50588;
    $request->publishedBefore = 866383;
    $request->q = 'nemo';
    $request->region = 'voluptatibus';
    $request->safeMode = SearchSafeModeEnum::ZERO;
    $request->sortByDate = SearchSortByDateEnum::ONE;
    $request->type = SearchTypeEnum::EPISODE;
    $request->uniquePodcasts = SearchUniquePodcastsEnum::ZERO;
    $request->updateFreqMax = 764912;
    $request->updateFreqMin = 359978;

    $response = $sdk->searchAPI->search($request);

    if ($response->searchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## spellcheck

Suggest a list of words that correct the spelling errors of a search term. This endpoint is available only in the PRO/ENTERPRISE plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SpellcheckRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SpellcheckRequest();
    $request->xListenAPIKey = 'hic';
    $request->q = 'libero';

    $response = $sdk->searchAPI->spellcheck($request);

    if ($response->spellCheckResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## typeahead

Suggest search terms, podcast genres, and podcasts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TypeaheadRequest;
use \OpenAPI\OpenAPI\Models\Operations\TypeaheadSafeModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\TypeaheadShowGenresEnum;
use \OpenAPI\OpenAPI\Models\Operations\TypeaheadShowPodcastsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TypeaheadRequest();
    $request->xListenAPIKey = 'nobis';
    $request->q = 'dolores';
    $request->safeMode = TypeaheadSafeModeEnum::ZERO;
    $request->showGenres = TypeaheadShowGenresEnum::ONE;
    $request->showPodcasts = TypeaheadShowPodcastsEnum::ZERO;

    $response = $sdk->searchAPI->typeahead($request);

    if ($response->typeaheadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
