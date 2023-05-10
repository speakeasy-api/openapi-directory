# marketsThisMarketplace

### Available Operations

* [getMarketsThis](#getmarketsthis) - Returns the current marketplace

## getMarketsThis

Returns the current marketplace

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
    $response = $sdk->marketsThisMarketplace->getMarketsThis();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
