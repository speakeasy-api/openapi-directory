# activityHistories

## Overview

Activity Histories

### Available Operations

* [getV2ActivityHistories](#getv2activityhistories) - List Past Activities

## getV2ActivityHistories

Fetches all of the customer's past activities for your application. Returns all the Activities that are found on the Salesloft Activity Feed. <a href="/activity-history.html" target="_blank" rel="noopener noreferrer">Visit here for more details</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2ActivityHistoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2ActivityHistoriesRequest();
    $request->resource = 'fugit';
    $request->includePagingCounts = false;
    $request->occurredAt = [
        'inventore' => 'non',
        'et' => 'dolorum',
        'laborum' => 'placeat',
        'velit' => 'eum',
    ];
    $request->page = 420539;
    $request->perPage = 752135;
    $request->pinned = false;
    $request->resourceId = [
        'assumenda',
        'nulla',
        'voluptas',
    ];
    $request->resourceType = 'libero';
    $request->sortBy = 'quasi';
    $request->sortDirection = 'tempora';
    $request->type = 'numquam';
    $request->updatedAt = [
        'provident' => 'ipsa',
    ];
    $request->userGuid = 'molestiae';

    $response = $sdk->activityHistories->getV2ActivityHistories($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
