# cityDataStandardization

### Available Operations

* [getcitystandard](#getcitystandard) - Gets a city name standard for US and international cities

## getcitystandard

Gets a pre-selected city name standard for US and international cities for various permutations of a given city name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetcitystandardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetcitystandardRequest();
    $request->city = 'Stiedemannstad';
    $request->license = 'illum';

    $response = $sdk->cityDataStandardization->getcitystandard($request);

    if ($response->getcitystandard200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
