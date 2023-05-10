# roles

## Overview

Role Information

### Available Operations

* [getV2CustomRolesJson](#getv2customrolesjson) - List custom roles
* [getV2CustomRolesIdJson](#getv2customrolesidjson) - Fetch a custom role

## getV2CustomRolesJson

Fetches multiple custom role records. The records can be filtered, and sorted according to
the respective parameters. A custom role is any role that is not Admin or User.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CustomRolesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CustomRolesJsonRequest();
    $request->ids = [
        'quod',
        'laboriosam',
        'doloremque',
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 31574;
    $request->perPage = 816421;
    $request->sortBy = 'necessitatibus';
    $request->sortDirection = 'maxime';

    $response = $sdk->roles->getV2CustomRolesJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2CustomRolesIdJson

Fetches a custom role, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2CustomRolesIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2CustomRolesIdJsonRequest();
    $request->id = '001ac802-e2ec-409f-b8f0-f816ff3477c1';

    $response = $sdk->roles->getV2CustomRolesIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
