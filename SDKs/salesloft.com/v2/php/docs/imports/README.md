# imports

## Overview

Import Management

### Available Operations

* [deleteV2ImportsIdJson](#deletev2importsidjson) - Delete an import
* [getV2ImportsJson](#getv2importsjson) - List imports
* [getV2ImportsIdJson](#getv2importsidjson) - Fetch an import
* [postV2ImportsJson](#postv2importsjson) - Create an import
* [putV2ImportsIdJson](#putv2importsidjson) - Update an import

## deleteV2ImportsIdJson

Deletes an import, by ID only. The associated people can be deleted as part of the deletion process.

Admin users can access imports for the entire team, but non-admin users can only access their own imports.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteV2ImportsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteV2ImportsIdJsonRequest();
    $request->id = '6deab3fe-c957-48a6-8584-273a8418d162';
    $request->undo = 'consectetur';

    $response = $sdk->imports->deleteV2ImportsIdJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2ImportsJson

Fetches multiple imports.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2ImportsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2ImportsJsonRequest();
    $request->ids = [
        585432,
    ];
    $request->includePagingCounts = false;
    $request->limitPagingCounts = false;
    $request->page = 970732;
    $request->perPage = 746837;
    $request->sortBy = 'alias';
    $request->sortDirection = 'omnis';
    $request->userIds = [
        579011,
    ];

    $response = $sdk->imports->getV2ImportsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2ImportsIdJson

Fetches an import, by ID only.

Admin users can access imports for the entire team, but non-admin users can only access their own imports.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2ImportsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2ImportsIdJsonRequest();
    $request->id = '921aefb9-f58c-44d8-ae68-e4be056013f5';

    $response = $sdk->imports->getV2ImportsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2ImportsJson

Creates an import.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostV2ImportsJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostV2ImportsJsonRequestBody();
    $request->name = 'Orville Nolan';
    $request->userId = 444587;

    $response = $sdk->imports->postV2ImportsJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putV2ImportsIdJson

Updates an import, by ID only.

Admin users can access imports for the entire team, but non-admin users can only access their own imports.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutV2ImportsIdJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutV2ImportsIdJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutV2ImportsIdJsonRequest();
    $request->requestBody = new PutV2ImportsIdJsonRequestBody();
    $request->requestBody->name = 'Alvin Marquardt';
    $request->requestBody->userId = 945027;
    $request->id = 'ef66ef1c-aa33-483c-abeb-477373c8d72f';

    $response = $sdk->imports->putV2ImportsIdJson($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
