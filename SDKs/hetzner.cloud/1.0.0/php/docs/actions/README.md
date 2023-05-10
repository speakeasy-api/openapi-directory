# actions

## Overview

Actions show the results and progress of asynchronous requests to the API.

### Available Operations

* [getActions](#getactions) - Get all Actions
* [getActionsId](#getactionsid) - Get an Action

## getActions

Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetActionsSortParameterSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetActionsStatusParameterStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionsRequest();
    $request->id = 844266;
    $request->sort = GetActionsSortParameterSortEnum::PROGRESS_ASC;
    $request->status = GetActionsStatusParameterStatusEnum::ERROR;

    $response = $sdk->actions->getActions($request);

    if ($response->actionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActionsId

Returns a specific Action object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetActionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActionsIdRequest();
    $request->id = 544883;

    $response = $sdk->actions->getActionsId($request);

    if ($response->actionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
