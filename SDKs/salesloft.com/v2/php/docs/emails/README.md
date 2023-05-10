# emails

## Overview

Email Management

### Available Operations

* [getV2ActivitiesEmailsJson](#getv2activitiesemailsjson) - List emails
* [getV2ActivitiesEmailsIdJson](#getv2activitiesemailsidjson) - Fetch an email

## getV2ActivitiesEmailsJson

Fetches multiple email records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2ActivitiesEmailsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2ActivitiesEmailsJsonRequest();
    $request->actionId = [
        399667,
        639187,
        381397,
    ];
    $request->bounced = false;
    $request->cadenceId = [
        21973,
        431760,
    ];
    $request->crmActivityId = [
        614528,
        661607,
    ];
    $request->emailAddresses = [
        'error',
    ];
    $request->ids = [
        913992,
        653421,
        671794,
        726343,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->oneOff = false;
    $request->page = 324083;
    $request->perPage = 536923;
    $request->personId = [
        110477,
        833316,
    ];
    $request->personalization = [
        'quo',
        'ex',
    ];
    $request->scopedFields = [
        'ad',
        'expedita',
    ];
    $request->sentAt = [
        'molestias',
    ];
    $request->sortBy = 'cum';
    $request->sortDirection = 'aliquid';
    $request->status = [
        'voluptatum',
    ];
    $request->stepId = [
        85233,
        703218,
        665678,
    ];
    $request->updatedAt = [
        'voluptatem',
        'sapiente',
        'officiis',
    ];
    $request->userId = [
        682119,
    ];

    $response = $sdk->emails->getV2ActivitiesEmailsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2ActivitiesEmailsIdJson

Fetches an email, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2ActivitiesEmailsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2ActivitiesEmailsIdJsonRequest();
    $request->id = 'de008e6f-8c5f-4350-98cd-b5a341814301';

    $response = $sdk->emails->getV2ActivitiesEmailsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
