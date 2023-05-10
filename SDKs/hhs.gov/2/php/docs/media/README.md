# media

## Overview

Information about media

### Available Operations

* [getResourcesMediaJson](#getresourcesmediajson) - Get MediaItems
* [getResourcesMediaFeaturedJson](#getresourcesmediafeaturedjson) - Get the list of featured content in the syndication system
* [getResourcesMediaMostPopularMediaFormat](#getresourcesmediamostpopularmediaformat) - Get MediaItems by popularity
* [getResourcesMediaSearchResultsJson](#getresourcesmediasearchresultsjson) - Get MediaItems by search query
* [getResourcesMediaIdJson](#getresourcesmediaidjson) - Get MediaItem by ID
* [getResourcesMediaIdContent](#getresourcesmediaidcontent) - Get content for MediaItem
* [getResourcesMediaIdEmbedJson](#getresourcesmediaidembedjson) - Get embed code for MediaItem
* [getResourcesMediaIdPreviewJpg](#getresourcesmediaidpreviewjpg) - Get Tag by ID
* [getResourcesMediaIdRelatedMediaFormat](#getresourcesmediaidrelatedmediaformat) - Get related MediaItems by ID
* [getResourcesMediaIdSyndicateFormat](#getresourcesmediaidsyndicateformat) - Get syndicated content for MediaItem
* [getResourcesMediaIdThumbnailJpg](#getresourcesmediaidthumbnailjpg) - Get JPG thumbnail for MediaItem
* [getResourcesMediaIdYoutubeMetaDataJson](#getresourcesmediaidyoutubemetadatajson) - Get Youtube metadata for MediaItem

## getResourcesMediaJson

Media Items Listings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesMediaJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesMediaJsonRequest();
    $request->collectionId = 383441;
    $request->contentAuthoredBeforeDate = DateTime::createFromFormat('Y-m-d', '2022-03-18');
    $request->contentAuthoredInRange = 'placeat';
    $request->contentAuthoredSinceDate = DateTime::createFromFormat('Y-m-d', '2022-01-15');
    $request->contentPublishedBeforeDate = DateTime::createFromFormat('Y-m-d', '2022-03-20');
    $request->contentPublishedInRange = 'recusandae';
    $request->contentPublishedSinceDate = DateTime::createFromFormat('Y-m-d', '2022-10-15');
    $request->contentReviewedBeforeDate = DateTime::createFromFormat('Y-m-d', '2022-11-30');
    $request->contentReviewedInRange = 'deserunt';
    $request->contentReviewedSinceDate = DateTime::createFromFormat('Y-m-d', '2022-08-19');
    $request->contentUpdatedBeforeDate = DateTime::createFromFormat('Y-m-d', '2020-02-17');
    $request->contentUpdatedInRange = 'quo';
    $request->contentUpdatedSinceDate = DateTime::createFromFormat('Y-m-d', '2022-02-17');
    $request->createdBy = 'at';
    $request->customThumbnailUrl = 'maiores';
    $request->customThumbnailUrlContains = 'molestiae';
    $request->dateContentAuthored = DateTime::createFromFormat('Y-m-d', '2020-08-07');
    $request->dateContentPublished = DateTime::createFromFormat('Y-m-d', '2022-06-25');
    $request->dateContentReviewed = DateTime::createFromFormat('Y-m-d', '2020-12-18');
    $request->dateContentUpdated = DateTime::createFromFormat('Y-m-d', '2022-04-12');
    $request->dateSyndicationCaptured = DateTime::createFromFormat('Y-m-d', '2021-11-02');
    $request->dateSyndicationUpdated = DateTime::createFromFormat('Y-m-d', '2022-06-18');
    $request->descriptionContains = 'hic';
    $request->hash = 'optio';
    $request->hashContains = 'totam';
    $request->languageId = 105907;
    $request->languageIsoCode = 'commodi';
    $request->languageName = 'molestiae';
    $request->max = 264555;
    $request->mediaTypes = 'qui';
    $request->name = 'Jonathon Klocko';
    $request->nameContains = 'aspernatur';
    $request->offset = 18789;
    $request->order = 'ad';
    $request->restrictToSet = 'natus';
    $request->sort = 'sed';
    $request->sourceAcronym = 'iste';
    $request->sourceAcronymContains = 'dolor';
    $request->sourceId = 616934;
    $request->sourceName = 'laboriosam';
    $request->sourceNameContains = 'hic';
    $request->sourceUrl = 'saepe';
    $request->sourceUrlContains = 'fuga';
    $request->syndicationCapturedBeforeDate = DateTime::createFromFormat('Y-m-d', '2022-08-22');
    $request->syndicationCapturedInRange = 'iste';
    $request->syndicationCapturedSinceDate = DateTime::createFromFormat('Y-m-d', '2022-02-05');
    $request->syndicationUpdatedBeforeDate = DateTime::createFromFormat('Y-m-d', '2022-10-20');
    $request->syndicationUpdatedInRange = 'ipsa';
    $request->syndicationUpdatedSinceDate = DateTime::createFromFormat('Y-m-d', '2020-12-31');
    $request->syndicationVisibleBeforeDate = DateTime::createFromFormat('Y-m-d', '2021-08-29');
    $request->syndicationVisibleInRange = DateTime::createFromFormat('Y-m-d', '2022-10-16');
    $request->syndicationVisibleSinceDate = DateTime::createFromFormat('Y-m-d', '2022-11-14');
    $request->tagIds = 'nobis';

    $response = $sdk->media->getResourcesMediaJson($request);

    if ($response->mediaItemWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesMediaFeaturedJson

Get the list of featured content in the syndication system

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesMediaFeaturedJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesMediaFeaturedJsonRequest();
    $request->max = 315428;
    $request->offset = 607831;
    $request->sort = 'nemo';

    $response = $sdk->media->getResourcesMediaFeaturedJson($request);

    if ($response->mediaItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesMediaMostPopularMediaFormat

Get the media with the highest ratings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesMediaMostPopularMediaFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesMediaMostPopularMediaFormatRequest();
    $request->format = 'minima';
    $request->max = 570197;
    $request->offset = 38425;

    $response = $sdk->media->getResourcesMediaMostPopularMediaFormat($request);

    if ($response->mediaItemWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesMediaSearchResultsJson

Full search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesMediaSearchResultsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesMediaSearchResultsJsonRequest();
    $request->max = 438601;
    $request->offset = 634274;
    $request->q = 'doloribus';

    $response = $sdk->media->getResourcesMediaSearchResultsJson($request);

    if ($response->mediaItemWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesMediaIdJson

Information about a specific media item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesMediaIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesMediaIdJsonRequest();
    $request->id = 958950;

    $response = $sdk->media->getResourcesMediaIdJson($request);

    if ($response->mediaItemWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesMediaIdContent

The actual media content (html, image, etc...)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesMediaIdContentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesMediaIdContentRequest();
    $request->calledByBuild = false;
    $request->id = 102044;

    $response = $sdk->media->getResourcesMediaIdContent($request);

    if ($response->getResourcesMediaIdContent200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesMediaIdEmbedJson

Get the javascript or iframe embed code for this item (to embed it on a web page).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesMediaIdEmbedJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesMediaIdEmbedJsonRequest();
    $request->displayMethod = 'mollitia';
    $request->divId = 'dolorem';
    $request->excludeDiv = false;
    $request->excludeJquery = false;
    $request->flavor = 'culpa';
    $request->height = 161309;
    $request->id = 995300;
    $request->iframeName = 'mollitia';
    $request->width = 581850;

    $response = $sdk->media->getResourcesMediaIdEmbedJson($request);

    if ($response->getResourcesMediaIdEmbedJSON200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesMediaIdPreviewJpg

Get the jpg preview of the content item where applicable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesMediaIdPreviewJpgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesMediaIdPreviewJpgRequest();
    $request->id = 253291;

    $response = $sdk->media->getResourcesMediaIdPreviewJpg($request);

    if ($response->getResourcesMediaIdPreviewJpg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesMediaIdRelatedMediaFormat

Get the media related to the current media item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesMediaIdRelatedMediaFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesMediaIdRelatedMediaFormatRequest();
    $request->format = 'commodi';
    $request->id = 466311;
    $request->max = 474697;
    $request->offset = 244425;
    $request->sort = 'error';

    $response = $sdk->media->getResourcesMediaIdRelatedMediaFormat($request);

    if ($response->mediaItemWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesMediaIdSyndicateFormat

Get syndicated content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesMediaIdSyndicateFormatRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesMediaIdSyndicateFormatRequest();
    $request->autoplay = false;
    $request->cssClass = 'quia';
    $request->fontSize = 338007;
    $request->format = 'vitae';
    $request->id = 674752;
    $request->imageFloat = 'animi';
    $request->imageMargin = 'enim';
    $request->rel = false;
    $request->stripBreaks = false;
    $request->stripClasses = false;
    $request->stripImages = false;
    $request->stripScripts = false;
    $request->stripStyles = false;

    $response = $sdk->media->getResourcesMediaIdSyndicateFormat($request);

    if ($response->syndicateMarshallerWrapped !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesMediaIdThumbnailJpg

Get the jpg thumbnail of the content item where applicable.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesMediaIdThumbnailJpgRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesMediaIdThumbnailJpgRequest();
    $request->id = 138183;

    $response = $sdk->media->getResourcesMediaIdThumbnailJpg($request);

    if ($response->getResourcesMediaIdThumbnailJpg200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcesMediaIdYoutubeMetaDataJson

Youtube meta-data for a video item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesMediaIdYoutubeMetaDataJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesMediaIdYoutubeMetaDataJsonRequest();
    $request->id = 778346;

    $response = $sdk->media->getResourcesMediaIdYoutubeMetaDataJson($request);

    if ($response->getResourcesMediaIdYoutubeMetaDataJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
