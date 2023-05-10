# sme

## Overview

Endpoint for getting Unsecured SME Loan data

### Available Operations

* [getUnsecuredSmeLoans](#getunsecuredsmeloans) - Gets a list of all `Unsercured SME Lending` objects.
* [headUnsecuredSmeLoans](#headunsecuredsmeloans) - Gets header information on the current set of `Unsercured SME Lending` data

## getUnsecuredSmeLoans

Gets a list of all `Unsercured SME Lending` objects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUnsecuredSmeLoansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUnsecuredSmeLoansRequest();
    $request->ifModifiedSince = 'voluptatum';
    $request->ifNoneMatch = 'iusto';

    $response = $sdk->sme->getUnsecuredSmeLoans($request);

    if ($response->getUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## headUnsecuredSmeLoans

Gets header information on the current set of `Unsercured SME Lending` data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HeadUnsecuredSmeLoansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HeadUnsecuredSmeLoansRequest();
    $request->ifModifiedSince = 'excepturi';
    $request->ifNoneMatch = 'nisi';

    $response = $sdk->sme->headUnsecuredSmeLoans($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
