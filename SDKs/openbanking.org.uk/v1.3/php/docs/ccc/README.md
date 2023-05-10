# ccc

## Overview

Endpoint for getting Commercial Credit Card data

### Available Operations

* [getCommercialCreditCards](#getcommercialcreditcards) - Gets a list of all `Commerical Credit Card` objects.
* [headCommercialCreditCards](#headcommercialcreditcards) - Gets header information on the current set of `Commerical Credit Card` data

## getCommercialCreditCards

Gets a list of all `Commerical Credit Card` objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCommercialCreditCardsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCommercialCreditCardsRequest();
    $request->ifModifiedSince = 'debitis';
    $request->ifNoneMatch = 'ipsa';

    $response = $sdk->ccc->getCommercialCreditCards($request);

    if ($response->getCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## headCommercialCreditCards

Gets header information on the current set of `Commerical Credit Card` data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HeadCommercialCreditCardsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HeadCommercialCreditCardsRequest();
    $request->ifModifiedSince = 'delectus';
    $request->ifNoneMatch = 'tempora';

    $response = $sdk->ccc->headCommercialCreditCards($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
