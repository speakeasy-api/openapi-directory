# atm

## Overview

Endpoint for getting ATM data

### Available Operations

* [getAtms](#getatms) - Gets a list of all `ATM` objects.
* [headAtms](#headatms) - Gets header information on the current set of `ATM` data

## getAtms

Gets a list of all `ATM` objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAtmsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAtmsRequest();
    $request->ifModifiedSince = 'distinctio';
    $request->ifNoneMatch = 'quibusdam';

    $response = $sdk->atm->getAtms($request);

    if ($response->getAtms200ApplicationPrsOpenbankingOpendataV13PlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## headAtms

Gets header information on the current set of `ATM` data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HeadAtmsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HeadAtmsRequest();
    $request->ifModifiedSince = 'unde';
    $request->ifNoneMatch = 'nulla';

    $response = $sdk->atm->headAtms($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
