# search

### Available Operations

* [~~getSearchVersionNumberCSCategoryExt~~](#getsearchversionnumbercscategoryext) - Low Bandwith Category Search :warning: **Deprecated**
* [getSearchVersionNumberCategorySearchQueryExt](#getsearchversionnumbercategorysearchqueryext) - Category Search
* [getSearchVersionNumberGeometrySearchQueryExt](#getsearchversionnumbergeometrysearchqueryext) - Geometry Search
* [getSearchVersionNumberNearbySearchExt](#getsearchversionnumbernearbysearchext) - Nearby Search
* [getSearchVersionNumberPoiSearchQueryExt](#getsearchversionnumberpoisearchqueryext) - Points of Interest Search
* [~~getSearchVersionNumberRoutedSearchQueryPositionHeadingExt~~](#getsearchversionnumberroutedsearchquerypositionheadingext) - Routed Search :warning: **Deprecated**
* [~~getSearchVersionNumberSQueryExt~~](#getsearchversionnumbersqueryext) - Low bandwith Search :warning: **Deprecated**
* [getSearchVersionNumberSearchQueryExt](#getsearchversionnumbersearchqueryext) - Fuzzy Search
* [postSearchVersionNumberGeometrySearchQueryExt](#postsearchversionnumbergeometrysearchqueryext) - Geometry Search
* [postSearchVersionNumberSearchAlongRouteQueryExt](#postsearchversionnumbersearchalongroutequeryext) - Along Route Search

## ~~getSearchVersionNumberCSCategoryExt~~

Low Bandwith Category Search

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberCSCategoryExtRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberCSCategoryExtRequest();
    $request->btmRight = 'natus';
    $request->category = 'sed';
    $request->countrySet = 'iste';
    $request->ext = ExtEnum::JSON;
    $request->idxSet = 'natus';
    $request->language = 'laboriosam';
    $request->lat = 9437.49;
    $request->limit = 902599;
    $request->lon = 6818.2;
    $request->ofs = 449950;
    $request->radius = 359508;
    $request->topLeft = 'iste';
    $request->typeahead = false;
    $request->versionNumber = VersionNumberEnum::TWO;
    $request->view = ViewEnum::PK;

    $response = $sdk->search->getSearchVersionNumberCSCategoryExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchVersionNumberCategorySearchQueryExt

Category Search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberCategorySearchQueryExtRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberCategorySearchQueryExtRequest();
    $request->btmRight = 'saepe';
    $request->countrySet = 'quidem';
    $request->ext = ExtEnum::JSON;
    $request->extendedPostalCodesFor = 'ipsa';
    $request->language = 'reiciendis';
    $request->lat = 6667.67;
    $request->limit = 653140;
    $request->lon = 6706.38;
    $request->ofs = 170909;
    $request->query = 'dolorem';
    $request->radius = 358152;
    $request->topLeft = 'explicabo';
    $request->typeahead = false;
    $request->versionNumber = VersionNumberEnum::TWO;
    $request->view = ViewEnum::IL;

    $response = $sdk->search->getSearchVersionNumberCategorySearchQueryExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchVersionNumberGeometrySearchQueryExt

Geometry Search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberGeometrySearchQueryExtRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberGeometrySearchQueryExtRequest();
    $request->ext = ExtEnum::JSONP;
    $request->extendedPostalCodesFor = 'omnis';
    $request->geometryList = 'nemo';
    $request->idxSet = 'minima';
    $request->language = 'excepturi';
    $request->limit = 38425;
    $request->query = 'iure';
    $request->versionNumber = VersionNumberEnum::TWO;

    $response = $sdk->search->getSearchVersionNumberGeometrySearchQueryExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchVersionNumberNearbySearchExt

Nearby Search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberNearbySearchExtRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberNearbySearchExtRequest();
    $request->btmRight = 'culpa';
    $request->countrySet = 'doloribus';
    $request->ext = ExtEnum::XML;
    $request->extendedPostalCodesFor = 'architecto';
    $request->idxSet = 'mollitia';
    $request->language = 'dolorem';
    $request->lat = 6350.59;
    $request->limit = 161309;
    $request->lon = 9953;
    $request->maxFuzzyLevel = 653108;
    $request->minFuzzyLevel = 581850;
    $request->ofs = 253291;
    $request->radius = 414369;
    $request->topLeft = 'quam';
    $request->versionNumber = VersionNumberEnum::TWO;
    $request->view = ViewEnum::PK;

    $response = $sdk->search->getSearchVersionNumberNearbySearchExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchVersionNumberPoiSearchQueryExt

Points of Interest Search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberPoiSearchQueryExtRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberPoiSearchQueryExtRequest();
    $request->btmRight = 'velit';
    $request->countrySet = 'error';
    $request->ext = ExtEnum::JSON;
    $request->extendedPostalCodesFor = 'quis';
    $request->language = 'vitae';
    $request->lat = 6747.52;
    $request->limit = 656330;
    $request->lon = 3172.02;
    $request->ofs = 138183;
    $request->query = 'quo';
    $request->radius = 196582;
    $request->topLeft = 'tenetur';
    $request->typeahead = false;
    $request->versionNumber = VersionNumberEnum::TWO;
    $request->view = ViewEnum::IN;

    $response = $sdk->search->getSearchVersionNumberPoiSearchQueryExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getSearchVersionNumberRoutedSearchQueryPositionHeadingExt~~

Routed Search

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest();
    $request->ext = ExtEnum::JS;
    $request->extendedPostalCodesFor = 'possimus';
    $request->heading = 135.71;
    $request->idxSet = 'quasi';
    $request->language = 'error';
    $request->limit = 837945;
    $request->multiplier = 673660;
    $request->position = 'quasi';
    $request->query = 'reiciendis';
    $request->routingTimeout = 976460;
    $request->typeahead = false;
    $request->versionNumber = VersionNumberEnum::TWO;

    $response = $sdk->search->getSearchVersionNumberRoutedSearchQueryPositionHeadingExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~getSearchVersionNumberSQueryExt~~

Low bandwith Search

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberSQueryExtRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberSQueryExtRequest();
    $request->btmRight = 'vero';
    $request->countrySet = 'nihil';
    $request->ext = ExtEnum::JS;
    $request->idxSet = 'voluptatibus';
    $request->language = 'ipsa';
    $request->lat = 6048.46;
    $request->limit = 451159;
    $request->lon = 7392.64;
    $request->ofs = 19987;
    $request->query = 'doloremque';
    $request->radius = 441711;
    $request->topLeft = 'ut';
    $request->typeahead = false;
    $request->versionNumber = VersionNumberEnum::TWO;
    $request->view = ViewEnum::MA;

    $response = $sdk->search->getSearchVersionNumberSQueryExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSearchVersionNumberSearchQueryExt

Fuzzy Search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSearchVersionNumberSearchQueryExtRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\ViewEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSearchVersionNumberSearchQueryExtRequest();
    $request->btmRight = 'dicta';
    $request->countrySet = 'corporis';
    $request->ext = ExtEnum::JSONP;
    $request->extendedPostalCodesFor = 'iusto';
    $request->idxSet = 'dicta';
    $request->language = 'harum';
    $request->lat = 3179.83;
    $request->limit = 880476;
    $request->lon = 4142.63;
    $request->maxFuzzyLevel = 918236;
    $request->minFuzzyLevel = 64147;
    $request->ofs = 216822;
    $request->query = 'quidem';
    $request->radius = 565189;
    $request->topLeft = 'excepturi';
    $request->typeahead = false;
    $request->versionNumber = VersionNumberEnum::TWO;
    $request->view = ViewEnum::MA;

    $response = $sdk->search->getSearchVersionNumberSearchQueryExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSearchVersionNumberGeometrySearchQueryExt

Geometry Search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberGeometrySearchQueryExtRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberGeometrySearchQueryExtRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSearchVersionNumberGeometrySearchQueryExtRequest();
    $request->requestBody = new PostSearchVersionNumberGeometrySearchQueryExtRequestBody();
    $request->requestBody->geometryList = [
        new PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList(),
        new PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList(),
    ];
    $request->ext = ExtEnum::JS;
    $request->extendedPostalCodesFor = 'rem';
    $request->idxSet = 'voluptates';
    $request->language = 'quasi';
    $request->limit = 921158;
    $request->query = 'sint';
    $request->versionNumber = VersionNumberEnum::TWO;

    $response = $sdk->search->postSearchVersionNumberGeometrySearchQueryExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSearchVersionNumberSearchAlongRouteQueryExt

Along Route Search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberSearchAlongRouteQueryExtRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute;
use \OpenAPI\OpenAPI\Models\Operations\PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints;
use \OpenAPI\OpenAPI\Models\Shared\ExtEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSearchVersionNumberSearchAlongRouteQueryExtRequest();
    $request->requestBody = new PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody();
    $request->requestBody->route = new PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute();
    $request->requestBody->route->points = [
        new PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints(),
    ];
    $request->ext = ExtEnum::XML;
    $request->limit = 277718;
    $request->maxDetourTime = 318569;
    $request->query = 'consequatur';
    $request->versionNumber = VersionNumberEnum::TWO;

    $response = $sdk->search->postSearchVersionNumberSearchAlongRouteQueryExt($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
