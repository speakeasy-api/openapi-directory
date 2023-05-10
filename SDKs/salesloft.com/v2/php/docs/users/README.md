# users

## Overview

User Management

### Available Operations

* [getV2UsersJson](#getv2usersjson) - List users
* [getV2UsersIdJson](#getv2usersidjson) - Fetch a user
* [putV2UsersIdJson](#putv2usersidjson) - Update a user

## getV2UsersJson

Non Admin: Lists only your user, or all on team depending on group visibility policy
Team Admin: Lists users associated with your team


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2UsersJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2UsersJsonRequest();
    $request->active = false;
    $request->groupId = [
        'nesciunt',
        'sit',
        'odio',
        'minus',
    ];
    $request->guid = [
        'recusandae',
        'voluptates',
        'praesentium',
        'dicta',
    ];
    $request->hasCrmUser = false;
    $request->ids = [
        25190,
    ];
    $request->includePagingCounts = false;
    $request->page = 396234;
    $request->perPage = 898638;
    $request->roleId = [
        'deleniti',
    ];
    $request->search = 'sunt';
    $request->sortBy = 'nesciunt';
    $request->sortDirection = 'delectus';
    $request->visibleOnly = false;
    $request->workCountry = [
        'aliquam',
        'deserunt',
        'modi',
    ];

    $response = $sdk->users->getV2UsersJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2UsersIdJson

Fetches a user, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2UsersIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2UsersIdJsonRequest();
    $request->id = '1c480d3f-2132-4af0-b102-d514f4cc6f18';

    $response = $sdk->users->getV2UsersIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2UsersIdJson

Updates a user.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2UsersIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2UsersIdJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2UsersIdJsonRequest();
    $request->requestBody = new PutV2UsersIdJsonRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->groupId = 711615;
    $request->requestBody->roleId = 'hic';
    $request->requestBody->workCountry = 'excepturi';
    $request->id = '621a6a4f-77a8-47ee-be4b-e752c65b3441';

    $response = $sdk->users->putV2UsersIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
