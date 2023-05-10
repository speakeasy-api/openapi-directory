# groups

## Overview

Group Management

### Available Operations

* [getV2GroupsJson](#getv2groupsjson) - List groups
* [getV2GroupsIdJson](#getv2groupsidjson) - Fetch a group

## getV2GroupsJson

Fetches multiple group records. The records can be filtered, and sorted according to
the respective parameters.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2GroupsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2GroupsJsonRequest();
    $request->ids = [
        66149,
    ];
    $request->sortBy = 'laudantium';
    $request->sortDirection = 'quae';

    $response = $sdk->groups->getV2GroupsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2GroupsIdJson

Fetches a group, by ID only.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2GroupsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2GroupsIdJsonRequest();
    $request->id = '3d5208ec-e7e2-453b-a684-51c6c6e205e1';

    $response = $sdk->groups->getV2GroupsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
