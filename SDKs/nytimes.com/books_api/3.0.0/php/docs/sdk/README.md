# SDK

## Overview

The Books API provides information about book reviews and The New York Times bestsellers lists.

<http://developer.nytimes.com/>
### Available Operations

* [getListsBestSellersHistoryJson](#getlistsbestsellershistoryjson) - Best Seller History List
* [getListsDateListJson](#getlistsdatelistjson) - Best Seller List by Date
* [getListsFormat](#getlistsformat) - Best Seller List
* [getListsNamesFormat](#getlistsnamesformat) - Best Seller List Names
* [getListsOverviewFormat](#getlistsoverviewformat) - Best Seller List Overview
* [getReviewsFormat](#getreviewsformat) - Reviews

## getListsBestSellersHistoryJson

Best Seller History List

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETListsBestSellersHistoryJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListsBestSellersHistoryJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListsBestSellersHistoryJsonRequest();
    $request->ageGroup = 'illum';
    $request->author = 'vel';
    $request->contributor = 'error';
    $request->isbn = 'deserunt';
    $request->price = 'suscipit';
    $request->publisher = 'iure';
    $request->title = 'Mrs.';

    $requestSecurity = new GETListsBestSellersHistoryJsonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getListsBestSellersHistoryJson($request, $requestSecurity);

    if ($response->getListsBestSellersHistoryJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListsDateListJson

Best Seller List by Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETListsDateListJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListsDateListJsonSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListsDateListJsonSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListsDateListJsonRequest();
    $request->bestsellersDate = 'debitis';
    $request->date = 'ipsa';
    $request->isbn = 963663;
    $request->list = 'tempora';
    $request->listName = 'suscipit';
    $request->offset = 477665;
    $request->publishedDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-07-25T16:12:20.938Z');
    $request->rank = 'voluptatum';
    $request->rankLastWeek = 479977;
    $request->sortOrder = GETListsDateListJsonSortOrderEnum::DESC;
    $request->weeksOnList = 392785;

    $requestSecurity = new GETListsDateListJsonSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getListsDateListJson($request, $requestSecurity);

    if ($response->getListsDateListJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListsFormat

Best Seller List

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETListsFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListsFormatFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListsFormatSortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListsFormatSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListsFormatRequest();
    $request->bestsellersDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-29T11:50:59.674Z');
    $request->date = 'ab';
    $request->format = GETListsFormatFormatEnum::JSON;
    $request->isbn = 'veritatis';
    $request->list = 'deserunt';
    $request->offset = 20218;
    $request->publishedDate = 'ipsam';
    $request->rank = 832620;
    $request->rankLastWeek = 957156;
    $request->sortOrder = GETListsFormatSortOrderEnum::DESC;
    $request->weeksOnList = 140350;

    $requestSecurity = new GETListsFormatSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getListsFormat($request, $requestSecurity);

    if ($response->getListsFormat200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListsNamesFormat

Best Seller List Names

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETListsNamesFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListsNamesFormatFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListsNamesFormatSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListsNamesFormatRequest();
    $request->apiKey = 'at';
    $request->format = GETListsNamesFormatFormatEnum::JSONP;

    $requestSecurity = new GETListsNamesFormatSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getListsNamesFormat($request, $requestSecurity);

    if ($response->getListsNamesFormat200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListsOverviewFormat

Best Seller List Overview

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETListsOverviewFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETListsOverviewFormatFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETListsOverviewFormatSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETListsOverviewFormatRequest();
    $request->apiKey = 'maiores';
    $request->format = GETListsOverviewFormatFormatEnum::JSON;
    $request->publishedDate = 'quod';

    $requestSecurity = new GETListsOverviewFormatSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getListsOverviewFormat($request, $requestSecurity);

    if ($response->getListsOverviewFormat200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReviewsFormat

Reviews

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GETReviewsFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETReviewsFormatFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETReviewsFormatSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETReviewsFormatRequest();
    $request->apiKey = 'quod';
    $request->author = 'esse';
    $request->format = GETReviewsFormatFormatEnum::JSONP;
    $request->isbn = 780529;
    $request->title = 'Miss';

    $requestSecurity = new GETReviewsFormatSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getReviewsFormat($request, $requestSecurity);

    if ($response->getReviewsFormat200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
