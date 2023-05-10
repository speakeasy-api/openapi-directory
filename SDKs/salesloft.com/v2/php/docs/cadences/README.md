# cadences

## Overview

Cadence Management

### Available Operations

* [getV2CadencesJson](#getv2cadencesjson) - List cadences
* [getV2CadencesIdJson](#getv2cadencesidjson) - Fetch a cadence

## getV2CadencesJson

Fetches multiple cadence records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CadencesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CadencesJsonRequest();
    $request->archived = false;
    $request->groupIds = 'totam';
    $request->ids = [
        424089,
        497678,
        554688,
        427834,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->name = [
        'possimus',
        'facilis',
    ];
    $request->ownedByGuid = [
        'commodi',
        'in',
        'corporis',
    ];
    $request->page = 968904;
    $request->peopleAddable = false;
    $request->perPage = 828657;
    $request->shared = false;
    $request->sortBy = 'nemo';
    $request->sortDirection = 'recusandae';
    $request->teamCadence = false;
    $request->updatedAt = [
        'aperiam',
        'cum',
    ];

    $response = $sdk->cadences->getV2CadencesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2CadencesIdJson

Fetches a cadence, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CadencesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CadencesIdJsonRequest();
    $request->id = '375ed4f6-fbee-441f-b331-7fe35b60eb1e';

    $response = $sdk->cadences->getV2CadencesIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
