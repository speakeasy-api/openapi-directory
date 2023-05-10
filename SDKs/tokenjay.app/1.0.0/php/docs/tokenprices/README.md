# tokenPrices

### Available Operations

* [getTokenPrice](#gettokenprice) - Lists price and available volume for a certain token
* [getTokenPrices](#gettokenprices) - Lists all token prices and available volume

## getTokenPrice

Lists price and available volume for a certain token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTokenPriceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTokenPriceRequest();
    $request->tokenId = 'error';

    $response = $sdk->tokenPrices->getTokenPrice($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTokenPrices

Lists all token prices and available volume

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->tokenPrices->getTokenPrices();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
