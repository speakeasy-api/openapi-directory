# actions

## Overview

Actions

### Available Operations

* [getV2ActionsJson](#getv2actionsjson) - List actions
* [getV2ActionsIdJson](#getv2actionsidjson) - Fetch an action

## getV2ActionsJson

Fetches multiple action records. The records can be filtered, paged, and sorted according to
the respective parameters. Only actions that are currently "in_progess" will be returned by
this endpoint.

If the requester is not an admin, this endpoint will only return actions belonging to the requester.
If the request is an admin, this endpoint will return actions for the entire team. Additionaly, an admin
may use the user_guid parameter to request actions that belong to specific users on the team.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2ActionsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2ActionsJsonRequest();
    $request->cadenceId = [
        486160,
        630448,
        708548,
        874288,
    ];
    $request->dueOn = [
        'dolore',
        'quibusdam',
    ];
    $request->ids = [
        194342,
        617877,
        773326,
        13236,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->multitouchGroupId = [
        347233,
        862310,
        148141,
        780427,
    ];
    $request->page = 981830;
    $request->perPage = 985033;
    $request->personId = [
        753570,
        497391,
    ];
    $request->sortBy = 'alias';
    $request->sortDirection = 'officia';
    $request->stepId = 269479;
    $request->type = 'ipsam';
    $request->updatedAt = [
        'aspernatur',
        'vel',
    ];
    $request->userGuid = [
        'magnam',
        'ratione',
        'ex',
        'laudantium',
    ];

    $response = $sdk->actions->getV2ActionsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2ActionsIdJson

Fetches an action, by ID only.
This endpoint will only return actions that are in_progress or pending_activity.
Once an action is complete, the request for that action will return a 404 status code.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2ActionsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2ActionsIdJsonRequest();
    $request->id = '13f16d9f-5fce-46c5-9614-6c3e250fb008';

    $response = $sdk->actions->getV2ActionsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
