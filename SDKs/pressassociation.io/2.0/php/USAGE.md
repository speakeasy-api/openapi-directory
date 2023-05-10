<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAssetRequest();
    $request->aliases = false;
    $request->assetId = 'corrupti';

    $requestSecurity = new GetAssetSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->asset->getAsset($request, $requestSecurity);

    if ($response->getAsset200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->