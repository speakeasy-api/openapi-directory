# tokenVerification

## Overview

Ergo Platform Genuine Tokens Verification

EIP-21
<https://github.com/ergoplatform/eips/blob/master/eip-0021.md>
### Available Operations

* [checkToken](#checktoken) - Check a token verification
* [listBlocked](#listblocked) - Lists all blocked tokens
* [listGenuine](#listgenuine) - Lists all genuine tokens known

## checkToken

Check a token verification

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CheckTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckTokenRequest();
    $request->tokenId = 'quia';
    $request->tokenName = 'quis';

    $response = $sdk->tokenVerification->checkToken($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBlocked

Lists all blocked tokens

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->tokenVerification->listBlocked();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listGenuine

Lists all genuine tokens known

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->tokenVerification->listGenuine();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
