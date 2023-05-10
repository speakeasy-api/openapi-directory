<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindPlacesFindPlacesGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindPlacesFindPlacesGetLanguageLanguageEnum;
use \OpenAPI\OpenAPI\Models\Operations\FindPlacesFindPlacesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindPlacesFindPlacesGetRequest();
    $request->key = 'corrupti';
    $request->language = FindPlacesFindPlacesGetLanguageLanguageEnum::FR;
    $request->text = 'distinctio';

    $requestSecurity = new FindPlacesFindPlacesGetSecurity();
    $requestSecurity->apiKeyHeader = 'YOUR_API_KEY_HERE';

    $response = $sdk->locationEndpoints->findPlacesFindPlacesGet($request, $requestSecurity);

    if ($response->findPlacesModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->