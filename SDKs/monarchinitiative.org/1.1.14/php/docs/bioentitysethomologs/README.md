# bioentitysetHomologs

## Overview

Map gene IDs to their homologs

### Available Operations

* [getEntitySetHomologs](#getentitysethomologs) - Returns homology associations for a given input set of genes

## getEntitySetHomologs

Returns homology associations for a given input set of genes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitySetHomologsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEntitySetHomologsRequest();
    $request->subject = [
        'dignissimos',
        'fugit',
        'ratione',
        'possimus',
    ];

    $response = $sdk->bioentitysetHomologs->getEntitySetHomologs($request);

    if ($response->associationResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
