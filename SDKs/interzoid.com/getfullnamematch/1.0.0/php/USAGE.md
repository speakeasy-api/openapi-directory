<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetfullnamematchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetfullnamematchRequest();
    $request->fullname = 'corrupti';
    $request->license = 'provident';

    $response = $sdk->fullNameMatchSimilarityKey->getfullnamematch($request);

    if ($response->getfullnamematch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->