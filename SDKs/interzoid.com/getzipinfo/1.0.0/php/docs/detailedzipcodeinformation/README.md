# detailedZipCodeInformation

### Available Operations

* [getzipcodeinfo](#getzipcodeinfo) - Gets detailed zip code information

## getzipcodeinfo

For a given zip code, detailed information is returned, including city, state, latitude, longitude, area size, and various population demographics, including income, age, and presence of farming data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetzipcodeinfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetzipcodeinfoRequest();
    $request->license = 'distinctio';
    $request->zip = 'quibusdam';

    $response = $sdk->detailedZipCodeInformation->getzipcodeinfo($request);

    if ($response->getzipcodeinfo200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
