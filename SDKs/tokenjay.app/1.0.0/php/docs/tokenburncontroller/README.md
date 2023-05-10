# tokenBurnController

### Available Operations

* [getBurningTransaction](#getburningtransaction)
* [mainApp](#mainapp)
* [prepareTransaction](#preparetransaction)

## getBurningTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBurningTransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBurningTransactionRequest();
    $request->uuid = '7596eb10-faaa-4235-ac59-55907aff1a3a';

    $response = $sdk->tokenBurnController->getBurningTransaction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mainApp

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->tokenBurnController->mainApp();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## prepareTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'repellat' => [
            'occaecati' => 'numquam',
            'commodi' => 'quam',
            'molestiae' => 'velit',
        ],
    ]

    $response = $sdk->tokenBurnController->prepareTransaction($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
