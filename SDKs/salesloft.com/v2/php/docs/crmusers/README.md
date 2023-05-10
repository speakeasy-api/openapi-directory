# crmUsers

## Overview

Crm Users

### Available Operations

* [getV2CrmUsersJson](#getv2crmusersjson) - List crm users

## getV2CrmUsersJson

Crm Users


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CrmUsersJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CrmUsersJsonRequest();
    $request->crmId = [
        'labore',
        'reiciendis',
        'doloremque',
        'repudiandae',
    ];
    $request->ids = [
        36033,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 106429;
    $request->perPage = 174772;
    $request->sortBy = 'enim';
    $request->sortDirection = 'laboriosam';
    $request->userGuid = [
        'a',
    ];
    $request->userId = [
        300029,
        906355,
        160467,
    ];

    $response = $sdk->crmUsers->getV2CrmUsersJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
