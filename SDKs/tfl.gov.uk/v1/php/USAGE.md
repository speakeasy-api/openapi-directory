<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AccidentStatsGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccidentStatsGetRequest();
    $request->year = 548814;

    $response = $sdk->accidentStats->accidentStatsGet($request);

    if ($response->tflApiPresentationEntitiesAccidentStatsAccidentDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->