<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeaturesFeatureIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeaturesFeatureIdRequest();
    $request->featureId = 548814;

    $response = $sdk->feature->getFeaturesFeatureId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->