# SDK

## Overview

With the Movie Reviews API, you can search New York Times movie reviews by keyword and get lists of NYT Critics' Picks.

<http://developer.nytimes.com/>
### Available Operations

* [getCriticsResourceTypeJson](#getcriticsresourcetypejson)
* [getReviewsSearchJson](#getreviewssearchjson)
* [getReviewsResourceTypeJson](#getreviewsresourcetypejson)

## getCriticsResourceTypeJson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCriticsResourceTypeJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCriticsResourceTypeJsonRequest();
    $request->resourceType = 'provident';

    $response = $sdk->sdk->getCriticsResourceTypeJson($request);

    if ($response->getCriticsResourceTypeJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReviewsSearchJson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReviewsSearchJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetReviewsSearchJsonCriticsPickEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReviewsSearchJsonRequest();
    $request->criticsPick = GetReviewsSearchJsonCriticsPickEnum::N;
    $request->offset = 844266;
    $request->openingDate = 'unde';
    $request->order = 'nulla';
    $request->publicationDate = 'corrupti';
    $request->query = 'illum';
    $request->reviewer = 'vel';

    $response = $sdk->sdk->getReviewsSearchJson($request);

    if ($response->getReviewsSearchJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReviewsResourceTypeJson

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReviewsResourceTypeJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetReviewsResourceTypeJsonOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetReviewsResourceTypeJsonResourceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReviewsResourceTypeJsonRequest();
    $request->offset = 623564;
    $request->order = GetReviewsResourceTypeJsonOrderEnum::BY_PUBLICATION_DATE;
    $request->resourceType = GetReviewsResourceTypeJsonResourceTypeEnum::ALL;

    $response = $sdk->sdk->getReviewsResourceTypeJson($request);

    if ($response->getReviewsResourceTypeJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
