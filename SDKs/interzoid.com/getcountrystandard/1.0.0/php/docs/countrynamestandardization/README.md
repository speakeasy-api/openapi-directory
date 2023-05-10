# countryNameStandardization

### Available Operations

* [getcountrystandard](#getcountrystandard) - Gets country name standard

## getcountrystandard

Gets a pre-selected country name standard for various permutations of a given country name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetcountrystandardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetcountrystandardRequest();
    $request->country = 'Portugal';
    $request->license = 'quibusdam';

    $response = $sdk->countryNameStandardization->getcountrystandard($request);

    if ($response->getcountrystandard200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
