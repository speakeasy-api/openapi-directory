# streetsInAWard

### Available Operations

* [streetsInAWard](#streetsinaward) - Returns all streets in a ward

## streetsInAWard

Returns all streets in a specified ward and ward postcode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\StreetsInAWardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StreetsInAWardRequest();
    $request->country = 'Mozambique';
    $request->district = 'nulla';
    $request->region = 'corrupti';
    $request->ward = 'illum';

    $response = $sdk->streetsInAWard->streetsInAWard($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
