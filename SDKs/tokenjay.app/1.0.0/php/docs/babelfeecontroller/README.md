# babelFeeController

### Available Operations

* [checkForNotifications](#checkfornotifications)
* [ergoPayCreateBabelBox1](#ergopaycreatebabelbox1)
* [getBabelFeeOverview](#getbabelfeeoverview)

## checkForNotifications

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->babelFeeController->checkForNotifications();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ergoPayCreateBabelBox1

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ErgoPayCreateBabelBox1Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ErgoPayCreateBabelBox1Request();
    $request->boxId = 'nisi';

    $response = $sdk->babelFeeController->ergoPayCreateBabelBox1($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBabelFeeOverview

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->babelFeeController->getBabelFeeOverview();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
