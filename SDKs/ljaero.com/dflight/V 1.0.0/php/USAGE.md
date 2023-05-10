<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\AerodromesByDistance;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest();
    $request->aerodromesByDistance = new AerodromesByDistance();
    $request->aerodromesByDistance->distance = 592845;
    $request->aerodromesByDistance->latitude = 844266;
    $request->aerodromesByDistance->longitude = 857946;
    $request->xApiKey = 'corrupti';

    $response = $sdk->aerodromes->aerodromesByDistanceUsV1AerodromesDistanceQueryPost($request);

    if ($response->aerodromeDistanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->