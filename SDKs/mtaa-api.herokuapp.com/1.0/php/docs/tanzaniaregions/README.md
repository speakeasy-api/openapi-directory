# tanzaniaRegions

### Available Operations

* [tanzaniaRegions](#tanzaniaregions) - Returns all regions present in Tanzania

## tanzaniaRegions

Fetches all regions present in Tanzania and then return a response as json

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TanzaniaRegionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TanzaniaRegionsRequest();
    $request->country = 'Isle of Man';

    $response = $sdk->tanzaniaRegions->tanzaniaRegions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
