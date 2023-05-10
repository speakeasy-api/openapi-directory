# resources

## Overview

Global Search

### Available Operations

* [getResourcesJson](#getresourcesjson) - Get Resources by search query

## getResourcesJson

Global search

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcesJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcesJsonRequest();
    $request->q = 'tenetur';

    $response = $sdk->resources->getResourcesJson($request);

    if ($response->resourceWrappeds !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
