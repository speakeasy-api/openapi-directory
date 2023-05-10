# userMediaLists

## Overview

Get media from user generated lists.

### Available Operations

* [getResourcesUserMediaListsIdJson](#getresourcesusermedialistsidjson) - Get UserMediaList by ID

## getResourcesUserMediaListsIdJson

Get a specific user media list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesUserMediaListsIdJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesUserMediaListsIdJsonRequest();
    $request->displayMethod = 'molestias';
    $request->id = 566602;

    $response = $sdk->userMediaLists->getResourcesUserMediaListsIdJson($request);

    if ($response->mediaItemWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
