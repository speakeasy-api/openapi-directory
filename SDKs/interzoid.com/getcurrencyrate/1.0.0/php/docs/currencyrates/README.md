# currencyRates

### Available Operations

* [getcurrencyrate](#getcurrencyrate) - Gets a foreign currency rate for one US Dollar

## getcurrencyrate

Use a currency symbol (EUR, GBP, CNY, JPY, AUD, etc.) to obtain a live currency foreign exchange rate for one US Dollar. See the API home page for list of all supported currencies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetcurrencyrateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetcurrencyrateRequest();
    $request->license = 'distinctio';
    $request->symbol = 'quibusdam';

    $response = $sdk->currencyRates->getcurrencyrate($request);

    if ($response->getcurrencyrate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
