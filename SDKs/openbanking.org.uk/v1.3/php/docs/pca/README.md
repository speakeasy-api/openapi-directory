# pca

## Overview

Endpoint for getting Personal Current Account data

### Available Operations

* [getPersonalCurrentAccounts](#getpersonalcurrentaccounts) - Gets a list of all `Personal Current Account` objects.
* [headPersonalCurrentAccounts](#headpersonalcurrentaccounts) - Gets header information on the current set of `Personal Current Account` data

## getPersonalCurrentAccounts

Gets a list of all `Personal Current Account` objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPersonalCurrentAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPersonalCurrentAccountsRequest();
    $request->ifModifiedSince = 'suscipit';
    $request->ifNoneMatch = 'molestiae';

    $response = $sdk->pca->getPersonalCurrentAccounts($request);

    if ($response->getPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## headPersonalCurrentAccounts

Gets header information on the current set of `Personal Current Account` data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HeadPersonalCurrentAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HeadPersonalCurrentAccountsRequest();
    $request->ifModifiedSince = 'minus';
    $request->ifNoneMatch = 'placeat';

    $response = $sdk->pca->headPersonalCurrentAccounts($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
