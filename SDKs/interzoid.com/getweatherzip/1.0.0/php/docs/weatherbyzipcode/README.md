# weatherByZipCode

### Available Operations

* [getweatherzipcode](#getweatherzipcode) - Gets current weather information for a US zip code

## getweatherzipcode

Use a US zip code to retrieve current weather information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetweatherzipcodeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetweatherzipcodeRequest();
    $request->license = 'distinctio';
    $request->zip = 'quibusdam';

    $response = $sdk->weatherByZipCode->getweatherzipcode($request);

    if ($response->getweatherzipcode200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
