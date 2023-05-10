# crmActivities

## Overview

CRM Activity Management

### Available Operations

* [getV2CrmActivitiesJson](#getv2crmactivitiesjson) - List crm activities
* [getV2CrmActivitiesIdJson](#getv2crmactivitiesidjson) - Fetch a crm activity

## getV2CrmActivitiesJson

Fetches multiple crm activity records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CrmActivitiesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CrmActivitiesJsonRequest();
    $request->ids = [
        959434,
        174112,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 645570;
    $request->perPage = 475289;
    $request->sortBy = 'accusantium';
    $request->sortDirection = 'porro';
    $request->updatedAt = [
        'quas',
        'praesentium',
    ];

    $response = $sdk->crmActivities->getV2CrmActivitiesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2CrmActivitiesIdJson

Fetches a crm activity, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CrmActivitiesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CrmActivitiesIdJsonRequest();
    $request->id = '282aa482-562f-4222-a981-7ee17cbe61e6';

    $response = $sdk->crmActivities->getV2CrmActivitiesIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
