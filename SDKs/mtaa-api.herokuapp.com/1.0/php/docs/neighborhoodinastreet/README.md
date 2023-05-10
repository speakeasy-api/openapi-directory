# neighborhoodInAStreet

### Available Operations

* [neighborhoodInAStreet](#neighborhoodinastreet) - Returns all neighborhood in a street

## neighborhoodInAStreet

Returns all neighborhood in a specified street

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\NeighborhoodInAStreetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NeighborhoodInAStreetRequest();
    $request->country = 'Jamaica';
    $request->district = 'magnam';
    $request->region = 'debitis';
    $request->street = '92347 Lehner Lights';
    $request->ward = 'excepturi';

    $response = $sdk->neighborhoodInAStreet->neighborhoodInAStreet($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
