# callDataRecords

## Overview

Call Data Record Management

### Available Operations

* [getV2CallDataRecordsJson](#getv2calldatarecordsjson) - List call data records
* [getV2CallDataRecordsIdJson](#getv2calldatarecordsidjson) - Fetch a call data record

## getV2CallDataRecordsJson

Fetches multiple call data records. The records can be filtered, paged, and sorted according to
the respective parameters.

Call data records are records of all inbound and outbound calls through Salesloft. A call data record may
be associated with a call, but does not have to be.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CallDataRecordsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CallDataRecordsJsonRequest();
    $request->createdAt = [
        'maiores',
        'incidunt',
        'sed',
    ];
    $request->hasCall = false;
    $request->ids = [
        258702,
        896762,
        215529,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 406733;
    $request->perPage = 579912;
    $request->personId = [
        975752,
        271653,
        273009,
    ];
    $request->sortBy = 'voluptate';
    $request->sortDirection = 'reiciendis';
    $request->updatedAt = [
        'sit',
        'non',
    ];
    $request->userGuid = [
        'praesentium',
        'facilis',
        'quaerat',
        'incidunt',
    ];

    $response = $sdk->callDataRecords->getV2CallDataRecordsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2CallDataRecordsIdJson

Fetches a call data record, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CallDataRecordsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CallDataRecordsIdJsonRequest();
    $request->id = '5e80ca55-efd2-40e4-97e1-858b6a89fbe3';

    $response = $sdk->callDataRecords->getV2CallDataRecordsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
