# pairSim

## Overview

pairwise similarity between two entities

### Available Operations

* [getPairSimJaccardResource](#getpairsimjaccardresource) - Get pairwise similarity

## getPairSimJaccardResource

Get pairwise similarity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPairSimJaccardResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPairSimJaccardResourceRequest();
    $request->id1 = 'nemo';
    $request->id2 = 'est';
    $request->objectCategory = 'quo';

    $response = $sdk->pairSim->getPairSimJaccardResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
