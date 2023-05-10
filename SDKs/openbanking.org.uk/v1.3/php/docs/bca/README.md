# bca

## Overview

Endpoint for getting Business Current Account data

### Available Operations

* [getBusinessCurrentAccounts](#getbusinesscurrentaccounts) - Gets a list of all `Branch Current Account` objects.
* [headBusinessCurrentAccounts](#headbusinesscurrentaccounts) - Gets header information on the current set of `Business Current Account` data

## getBusinessCurrentAccounts

Gets a list of all `Branch Current Account` objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBusinessCurrentAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBusinessCurrentAccountsRequest();
    $request->ifModifiedSince = 'corrupti';
    $request->ifNoneMatch = 'illum';

    $response = $sdk->bca->getBusinessCurrentAccounts($request);

    if ($response->getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## headBusinessCurrentAccounts

Gets header information on the current set of `Business Current Account` data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HeadBusinessCurrentAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HeadBusinessCurrentAccountsRequest();
    $request->ifModifiedSince = 'vel';
    $request->ifNoneMatch = 'error';

    $response = $sdk->bca->headBusinessCurrentAccounts($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
