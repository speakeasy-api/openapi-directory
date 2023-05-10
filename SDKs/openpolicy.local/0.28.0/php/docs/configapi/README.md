# configAPI

### Available Operations

* [getConfig](#getconfig) - Get configurations

## getConfig

This API endpoint responds with active configuration (result response)

---
**Note**
The `credentials` field in the `services` configuration and

The `private_key` and `key` fields in the `keys` configuration will be omitted from the API response

---

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConfigRequest();
    $request->pretty = false;

    $response = $sdk->configAPI->getConfig($request);

    if ($response->twoHundredSingleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
