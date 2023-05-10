# tasks

## Overview

Tasks

### Available Operations

* [getV2TasksJson](#getv2tasksjson) - List tasks
* [getV2TasksIdJson](#getv2tasksidjson) - Fetch a task
* [postV2TasksJson](#postv2tasksjson) - Create a Task
* [putV2TasksIdJson](#putv2tasksidjson) - Update a Task

## getV2TasksJson

Fetches multiple task records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2TasksJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2TasksJsonRequest();
    $request->accountId = [
        774748,
        550338,
        994234,
        532326,
    ];
    $request->currentState = [
        'corporis',
        'accusantium',
        'illo',
    ];
    $request->idempotencyKey = 'aut';
    $request->ids = [
        342104,
        869848,
        823472,
        205499,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->locale = [
        'vel',
        'sapiente',
        'mollitia',
        'quae',
    ];
    $request->page = 552646;
    $request->perPage = 44571;
    $request->personId = [
        913284,
        324052,
    ];
    $request->sortBy = 'aliquam';
    $request->sortDirection = 'quisquam';
    $request->taskType = [
        'consequuntur',
        'maiores',
        'inventore',
    ];
    $request->timeIntervalFilter = 'aliquid';
    $request->userId = [
        665872,
        221329,
        400879,
    ];

    $response = $sdk->tasks->getV2TasksJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2TasksIdJson

Fetches a task, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2TasksIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2TasksIdJsonRequest();
    $request->id = '3c8873e4-8438-40b1-b6b8-ca275a60a04c';

    $response = $sdk->tasks->getV2TasksIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2TasksJson

Creates a task.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2TasksJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2TasksJsonRequestBody();
    $request->currentState = 'aliquam';
    $request->description = 'iste';
    $request->dueDate = 'ullam';
    $request->idempotencyKey = 'eligendi';
    $request->personId = 'placeat';
    $request->remindAt = 'voluptas';
    $request->subject = 'occaecati';
    $request->taskType = 'unde';
    $request->userId = 75277;

    $response = $sdk->tasks->postV2TasksJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2TasksIdJson

Updates a task.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2TasksIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2TasksIdJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2TasksIdJsonRequest();
    $request->requestBody = new PutV2TasksIdJsonRequestBody();
    $request->requestBody->currentState = 'nihil';
    $request->requestBody->description = 'inventore';
    $request->requestBody->dueDate = 'libero';
    $request->requestBody->isLogged = false;
    $request->requestBody->remindAt = 'ipsam';
    $request->requestBody->subject = 'quasi';
    $request->id = 'c1bdb1cf-4b88-48eb-9fc4-ccca99bc7fc0';

    $response = $sdk->tasks->putV2TasksIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
