<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DistrictsInARegionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DistrictsInARegionRequest();
    $request->country = 'Malta';
    $request->region = 'provident';

    $response = $sdk->districtsInRegion->districtsInARegion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->