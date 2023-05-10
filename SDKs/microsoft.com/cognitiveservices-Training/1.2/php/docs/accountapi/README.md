# accountApi

### Available Operations

* [getAccountInfo](#getaccountinfo) - Get basic information about your account

## getAccountInfo

Get basic information about your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountInfoRequest();
    $request->trainingKey = 'provident';

    $response = $sdk->accountApi->getAccountInfo($request);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
