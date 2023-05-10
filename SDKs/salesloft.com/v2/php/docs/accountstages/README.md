# accountStages

## Overview

Account Stage Management

### Available Operations

* [getV2AccountStagesJson](#getv2accountstagesjson) - List account stages
* [getV2AccountStagesIdJson](#getv2accountstagesidjson) - Fetch an account stage

## getV2AccountStagesJson

Fetches multiple account stage records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2AccountStagesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2AccountStagesJsonRequest();
    $request->ids = [
        437587,
        297534,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 891773;
    $request->perPage = 56713;
    $request->sortBy = 'delectus';
    $request->sortDirection = 'tempora';
    $request->updatedAt = [
        'molestiae',
        'minus',
    ];

    $response = $sdk->accountStages->getV2AccountStagesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2AccountStagesIdJson

Fetches an account stage, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2AccountStagesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2AccountStagesIdJsonRequest();
    $request->id = 'c8796ed1-51a0-45df-82dd-f7cc78ca1ba9';

    $response = $sdk->accountStages->getV2AccountStagesIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
