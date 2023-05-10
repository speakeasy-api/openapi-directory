# genomeFeatures

## Overview

Operations to retrieve sequence features

### Available Operations

* [getFeaturesWithinResource](#getfeatureswithinresource) - Returns list of matches

## getFeaturesWithinResource

Returns list of matches

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturesWithinResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeaturesWithinResourceRequest();
    $request->begin = 'molestiae';
    $request->build = 'optio';
    $request->end = 'saepe';
    $request->reference = 'maiores';

    $response = $sdk->genomeFeatures->getFeaturesWithinResource($request);

    if ($response->sequenceFeatures !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
