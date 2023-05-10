# liveCurrencyRateConversion

### Available Operations

* [convertcurrency](#convertcurrency) - Converts amount in one currency to that of another

## convertcurrency

Provide an amount in one currency (EUR, GBP, CNY, JPY, AUD, etc.), and also a second currency to convert it to. The API will return the result using current foreign exchange rates. See the API home page for a list of all supported currencies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConvertcurrencyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConvertcurrencyRequest();
    $request->amount = 'unde';
    $request->from = 'nulla';
    $request->license = 'corrupti';
    $request->to = 'illum';

    $response = $sdk->liveCurrencyRateConversion->convertcurrency($request);

    if ($response->convertcurrency200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
