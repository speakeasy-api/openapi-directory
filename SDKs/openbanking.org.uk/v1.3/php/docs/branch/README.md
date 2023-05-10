# branch

## Overview

Endpoint for getting Branch data

### Available Operations

* [getBranches](#getbranches) - Gets a list of all `Branch` objects.
* [headBranches](#headbranches) - Gets header information on the current set of `Branch` data

## getBranches

Gets a list of all `Branch` objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBranchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBranchesRequest();
    $request->ifModifiedSince = 'deserunt';
    $request->ifNoneMatch = 'suscipit';

    $response = $sdk->branch->getBranches($request);

    if ($response->getBranches200ApplicationPrsOpenbankingOpendataV13PlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## headBranches

Gets header information on the current set of `Branch` data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HeadBranchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HeadBranchesRequest();
    $request->ifModifiedSince = 'iure';
    $request->ifNoneMatch = 'magnam';

    $response = $sdk->branch->headBranches($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
