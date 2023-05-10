<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetfullnameparsedmatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetfullnameparsedmatchRequest();
    $request->firstname = 'Katharina';
    $request->lastname = 'Medhurst';
    $request->license = 'distinctio';

    $response = $sdk->fullNameParsedSimilarityKey->getfullnameparsedmatch($request);

    if ($response->getfullnameparsedmatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->