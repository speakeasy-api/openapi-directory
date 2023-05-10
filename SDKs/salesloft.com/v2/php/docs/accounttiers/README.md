# accountTiers

## Overview

Account Tier Information

### Available Operations

* [getV2AccountTiersJson](#getv2accounttiersjson) - List Account Tiers
* [getV2AccountTiersIdJson](#getv2accounttiersidjson) - Fetch an account tier

## getV2AccountTiersJson

Fetches multiple account tier records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2AccountTiersJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2AccountTiersJsonRequest();
    $request->ids = [
        537373,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->name = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->page = 473600;
    $request->perPage = 264555;
    $request->sortBy = 'qui';
    $request->sortDirection = 'impedit';

    $response = $sdk->accountTiers->getV2AccountTiersJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2AccountTiersIdJson

Fetches an account tier, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2AccountTiersIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2AccountTiersIdJsonRequest();
    $request->id = 'b7392059-2939-46fe-a759-6eb10faaa235';

    $response = $sdk->accountTiers->getV2AccountTiersIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
