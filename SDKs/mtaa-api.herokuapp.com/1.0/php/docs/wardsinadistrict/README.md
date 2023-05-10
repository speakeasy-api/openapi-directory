# wardsInADistrict

### Available Operations

* [wardsInADistrict](#wardsinadistrict) - Returns all wards in a district

## wardsInADistrict

Returns all wards in a  specified district and district postcode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WardsInADistrictRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WardsInADistrictRequest();
    $request->country = 'Netherlands Antilles';
    $request->district = 'deserunt';
    $request->region = 'suscipit';

    $response = $sdk->wardsInADistrict->wardsInADistrict($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
