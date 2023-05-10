# identifierPrefixes

## Overview

identifier prefixes

### Available Operations

* [getPrefixCollection](#getprefixcollection) - Returns list of prefixes
* [getPrefixContract](#getprefixcontract) - Returns contracted URI
* [getPrefixExpand](#getprefixexpand) - Returns expanded URI

## getPrefixCollection

Returns list of prefixes

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->identifierPrefixes->getPrefixCollection();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPrefixContract

Returns contracted URI

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPrefixContractRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPrefixContractRequest();
    $request->uri = 'https://expensive-cassava.net';

    $response = $sdk->identifierPrefixes->getPrefixContract($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPrefixExpand

Returns expanded URI

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPrefixExpandRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPrefixExpandRequest();
    $request->id = '78f15626-398a-40dc-b663-24ccb06c8ca1';

    $response = $sdk->identifierPrefixes->getPrefixExpand($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
