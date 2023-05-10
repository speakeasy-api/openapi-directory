# currencies

### Available Operations

* [listSupportedCurrenciesV2](#listsupportedcurrenciesv2) - List Supported Currencies

## listSupportedCurrenciesV2

List the supported currencies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->currencies->listSupportedCurrenciesV2();

    if ($response->supportedCurrencyResponseV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
