# calls

## Overview

Call Management

### Available Operations

* [getV2ActivitiesCallsJson](#getv2activitiescallsjson) - List calls
* [getV2ActivitiesCallsIdJson](#getv2activitiescallsidjson) - Fetch a call
* [postV2ActivitiesCallsJson](#postv2activitiescallsjson) - Create a call

## getV2ActivitiesCallsJson

Fetches multiple call records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2ActivitiesCallsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2ActivitiesCallsJsonRequest();
    $request->createdAt = [
        'consequatur',
        'esse',
    ];
    $request->disposition = [
        'sit',
        'voluptatum',
    ];
    $request->ids = [
        922112,
        361151,
        89494,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 502710;
    $request->perPage = 405942;
    $request->personId = [
        24313,
    ];
    $request->sentiment = [
        'nostrum',
        'saepe',
    ];
    $request->sortBy = 'error';
    $request->sortDirection = 'consequatur';
    $request->updatedAt = [
        'reiciendis',
        'dolorem',
    ];
    $request->userGuid = [
        'dicta',
        'architecto',
        'occaecati',
    ];

    $response = $sdk->calls->getV2ActivitiesCallsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2ActivitiesCallsIdJson

Fetches a call, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2ActivitiesCallsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2ActivitiesCallsIdJsonRequest();
    $request->id = '4b8abf60-3a79-4f9d-be0a-b7da8a50ce18';

    $response = $sdk->calls->getV2ActivitiesCallsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2ActivitiesCallsJson

Creates a call. The parameters of this endpoint can be used to create an action
and ensure that the CRM Task is mapped correctly.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2ActivitiesCallsJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2ActivitiesCallsJsonRequestBody();
    $request->actionId = 442036;
    $request->crmParams = [
        'totam' => 'suscipit',
        'quidem' => 'maxime',
        'et' => 'esse',
        'amet' => 'assumenda',
    ];
    $request->disposition = 'ea';
    $request->duration = 539118;
    $request->linkedCallDataRecordIds = [
        887265,
        886961,
        880107,
    ];
    $request->notes = 'natus';
    $request->personId = 328303;
    $request->sentiment = 'aspernatur';
    $request->to = 'ex';
    $request->userGuid = 'maiores';

    $response = $sdk->calls->postV2ActivitiesCallsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
