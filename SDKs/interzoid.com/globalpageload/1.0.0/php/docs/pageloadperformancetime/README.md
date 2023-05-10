# pageLoadPerformanceTime

### Available Operations

* [globalpageload](#globalpageload) - Gets page load (or an API call) performance from a specified global geography such as Paris, Tokyo, Virginia, Mumbai, Frankfurt, London, Seoul, California, Sao Paolo, and many more.

## globalpageload

Gets page load performance from a specified geography


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GlobalpageloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GlobalpageloadRequest();
    $request->license = 'quibusdam';
    $request->origin = 'unde';
    $request->url = 'nulla';

    $response = $sdk->pageLoadPerformanceTime->globalpageload($request);

    if ($response->globalpageload200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
