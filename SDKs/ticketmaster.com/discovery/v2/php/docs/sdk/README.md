# SDK

## Overview

The Ticketmaster Discovery API allows you to search for events, attractions, or venues.

### Available Operations

* [find](#find) - Attraction Search
* [get](#get) - Get Attraction Details
* [getGenre](#getgenre) - Get Genre Details
* [getImages](#getimages) - Get Event Images
* [getSegment](#getsegment) - Get Segment Details
* [getSubgenre](#getsubgenre) - Get Sub-Genre Details
* [getDiscoveryV2Classifications](#getdiscoveryv2classifications) - Classification Search
* [getDiscoveryV2ClassificationsId](#getdiscoveryv2classificationsid) - Get Classification Details
* [getDiscoveryV2Events](#getdiscoveryv2events) - Event Search
* [getDiscoveryV2EventsId](#getdiscoveryv2eventsid) - Get Event Details
* [getDiscoveryV2Venues](#getdiscoveryv2venues) - Venue Search
* [getDiscoveryV2VenuesId](#getdiscoveryv2venuesid) - Get Venue Details

## find

Find attractions (artists, sports, packages, plays and so on) and filter your search by name, and much more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindIncludeLicensedContentEnum;
use \OpenAPI\OpenAPI\Models\Operations\FindIncludeSpellcheckEnum;
use \OpenAPI\OpenAPI\Models\Operations\FindIncludeTestEnum;
use \OpenAPI\OpenAPI\Models\Operations\FindSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindRequest();
    $request->classificationId = [
        'nam',
    ];
    $request->classificationName = [
        'occaecati',
        'fugit',
        'deleniti',
    ];
    $request->id = 'fc816742-cb73-4920-9929-396fea7596eb';
    $request->includeLicensedContent = FindIncludeLicensedContentEnum::YES;
    $request->includeSpellcheck = FindIncludeSpellcheckEnum::YES;
    $request->includeTest = FindIncludeTestEnum::ONLY;
    $request->keyword = 'est';
    $request->locale = 'mollitia';
    $request->page = 'laborum';
    $request->size = 'dolores';
    $request->sort = 'dolorem';
    $request->source = FindSourceEnum::UNIVERSE;

    $response = $sdk->sdk->find($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## get

Get details for a specific attraction using the unique identifier for the attraction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetIncludeLicensedContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->id = '2c595590-7aff-41a3-a2fa-9467739251aa';
    $request->includeLicensedContent = GetIncludeLicensedContentEnum::YES;
    $request->locale = 'odit';

    $response = $sdk->sdk->get($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGenre

Get details for a specific genre using its unique identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetGenreRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGenreIncludeLicensedContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGenreRequest();
    $request->id = 'c3f5ad01-9da1-4ffe-b8f0-97b0074f1547';
    $request->includeLicensedContent = GetGenreIncludeLicensedContentEnum::YES;
    $request->locale = 'harum';

    $response = $sdk->sdk->getGenre($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getImages

Get images for a specific event using the unique identifier for the event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetImagesIncludeLicensedContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetImagesRequest();
    $request->id = '5e6e13b9-9d48-48e1-a91e-450ad2abd442';
    $request->includeLicensedContent = GetImagesIncludeLicensedContentEnum::YES;
    $request->locale = 'cupiditate';

    $response = $sdk->sdk->getImages($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSegment

Get details for a specific segment using its unique identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSegmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSegmentIncludeLicensedContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSegmentRequest();
    $request->id = '802d502a-94bb-44f6-bc96-9e9a3efa77df';
    $request->includeLicensedContent = GetSegmentIncludeLicensedContentEnum::NO;
    $request->locale = 'dicta';

    $response = $sdk->sdk->getSegment($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubgenre

Get details for a specific sub-genre using its unique identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubgenreRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSubgenreIncludeLicensedContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubgenreRequest();
    $request->id = '4cd66ae3-95ef-4b9b-a88f-3a66997074ba';
    $request->includeLicensedContent = GetSubgenreIncludeLicensedContentEnum::YES;
    $request->locale = 'labore';

    $response = $sdk->sdk->getSubgenre($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiscoveryV2Classifications

Find classifications and filter your search by name, and much more. Classifications help define the nature of attractions and events.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2ClassificationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2ClassificationsIncludeLicensedContentEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2ClassificationsIncludeSpellcheckEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2ClassificationsIncludeTestEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2ClassificationsSourceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiscoveryV2ClassificationsRequest();
    $request->id = '69b6e214-1959-4890-afa5-63e2516fe4c8';
    $request->includeLicensedContent = GetDiscoveryV2ClassificationsIncludeLicensedContentEnum::NO;
    $request->includeSpellcheck = GetDiscoveryV2ClassificationsIncludeSpellcheckEnum::YES;
    $request->includeTest = GetDiscoveryV2ClassificationsIncludeTestEnum::YES;
    $request->keyword = 'architecto';
    $request->locale = 'repudiandae';
    $request->page = 'ullam';
    $request->size = 'expedita';
    $request->sort = 'nihil';
    $request->source = GetDiscoveryV2ClassificationsSourceEnum::TMR;

    $response = $sdk->sdk->getDiscoveryV2Classifications($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiscoveryV2ClassificationsId

Get details for a specific segment, genre, or sub-genre using its unique identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2ClassificationsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2ClassificationsIdIncludeLicensedContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiscoveryV2ClassificationsIdRequest();
    $request->id = 'd2ed0289-21cd-4dc6-9260-1fb576b0d5f0';
    $request->includeLicensedContent = GetDiscoveryV2ClassificationsIdIncludeLicensedContentEnum::NO;
    $request->locale = 'amet';

    $response = $sdk->sdk->getDiscoveryV2ClassificationsId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiscoveryV2Events

Find events and filter your search by location, date, availability, and much more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2EventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2EventsIncludeLicensedContentEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2EventsIncludeSpellcheckEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2EventsIncludeTbaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2EventsIncludeTbdEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2EventsIncludeTestEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2EventsSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2EventsUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiscoveryV2EventsRequest();
    $request->attractionId = 'aut';
    $request->city = 'Hesselshire';
    $request->classificationId = [
        'nobis',
        'dolores',
        'quis',
    ];
    $request->classificationName = [
        'dignissimos',
        'eaque',
        'quis',
    ];
    $request->clientVisibility = 'nesciunt';
    $request->countryCode = 'CK';
    $request->dmaId = 'perferendis';
    $request->endDateTime = 'dolores';
    $request->geoPoint = 'minus';
    $request->id = '73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48';
    $request->includeLicensedContent = GetDiscoveryV2EventsIncludeLicensedContentEnum::YES;
    $request->includeSpellcheck = GetDiscoveryV2EventsIncludeSpellcheckEnum::YES;
    $request->includeTBA = GetDiscoveryV2EventsIncludeTbaEnum::YES;
    $request->includeTBD = GetDiscoveryV2EventsIncludeTbdEnum::YES;
    $request->includeTest = GetDiscoveryV2EventsIncludeTestEnum::YES;
    $request->keyword = 'ipsum';
    $request->latlong = 'hic';
    $request->locale = 'excepturi';
    $request->marketId = 'cum';
    $request->onsaleEndDateTime = 'voluptate';
    $request->onsaleOnAfterStartDate = 'dignissimos';
    $request->onsaleOnStartDate = 'reiciendis';
    $request->onsaleStartDateTime = 'amet';
    $request->page = 'dolorum';
    $request->postalCode = '00044';
    $request->promoterId = 'quaerat';
    $request->radius = 'accusamus';
    $request->segmentId = 'quidem';
    $request->segmentName = 'voluptatibus';
    $request->size = 'voluptas';
    $request->sort = 'natus';
    $request->source = GetDiscoveryV2EventsSourceEnum::TICKETMASTER;
    $request->startDateTime = 'atque';
    $request->stateCode = 'sit';
    $request->unit = GetDiscoveryV2EventsUnitEnum::KM;
    $request->venueId = 'ab';

    $response = $sdk->sdk->getDiscoveryV2Events($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiscoveryV2EventsId

Get details for a specific event using the unique identifier for the event. This includes the venue and location, the attraction(s), and the Ticketmaster Website URL for purchasing tickets for the event.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2EventsIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2EventsIdIncludeLicensedContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiscoveryV2EventsIdRequest();
    $request->id = 'ba77a89e-bf73-47ae-8203-ce5e6a95d8a0';
    $request->includeLicensedContent = GetDiscoveryV2EventsIdIncludeLicensedContentEnum::NO;
    $request->locale = 'quaerat';

    $response = $sdk->sdk->getDiscoveryV2EventsId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiscoveryV2Venues

Find venues and filter your search by name, and much more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2VenuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2VenuesIncludeLicensedContentEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2VenuesIncludeSpellcheckEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2VenuesIncludeTestEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2VenuesSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2VenuesUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiscoveryV2VenuesRequest();
    $request->countryCode = 'ET';
    $request->geoPoint = 'vel';
    $request->id = 'ce2af7a7-3cf3-4be4-93f8-70b326b5a734';
    $request->includeLicensedContent = GetDiscoveryV2VenuesIncludeLicensedContentEnum::YES;
    $request->includeSpellcheck = GetDiscoveryV2VenuesIncludeSpellcheckEnum::NO;
    $request->includeTest = GetDiscoveryV2VenuesIncludeTestEnum::ONLY;
    $request->keyword = 'pariatur';
    $request->latlong = 'soluta';
    $request->locale = 'dicta';
    $request->page = 'laborum';
    $request->radius = 'totam';
    $request->size = 'incidunt';
    $request->sort = 'aspernatur';
    $request->source = GetDiscoveryV2VenuesSourceEnum::TICKETMASTER;
    $request->stateCode = 'distinctio';
    $request->unit = GetDiscoveryV2VenuesUnitEnum::KM;

    $response = $sdk->sdk->getDiscoveryV2Venues($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDiscoveryV2VenuesId

Get details for a specific venue using the unique identifier for the venue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2VenuesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDiscoveryV2VenuesIdIncludeLicensedContentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDiscoveryV2VenuesIdRequest();
    $request->id = '679d2322-715b-4f0c-bb1e-31b8b90f3443';
    $request->includeLicensedContent = GetDiscoveryV2VenuesIdIncludeLicensedContentEnum::NO;
    $request->locale = 'architecto';

    $response = $sdk->sdk->getDiscoveryV2VenuesId($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
