# ontolLabeler

## Overview

Assign labels to IDs

### Available Operations

* [getOntolLabelerResource](#getontollabelerresource) - Fetches a map from CURIEs/IDs to labels

## getOntolLabelerResource

Fetches a map from CURIEs/IDs to labels

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetOntolLabelerResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOntolLabelerResourceRequest();
    $request->id = [
        'libero',
        'omnis',
    ];

    $response = $sdk->ontolLabeler->getOntolLabelerResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
