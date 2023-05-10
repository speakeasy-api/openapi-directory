<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAddonEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLangEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPackageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->addon = [
        GetAddonEnum::GEOTARGETING,
        GetAddonEnum::COUNTRY_GROUPINGS,
        GetAddonEnum::COUNTRY_GROUPINGS,
    ];
    $request->format = GetFormatEnum::XML;
    $request->ip = '8.8.8.8';
    $request->key = 'nulla';
    $request->lang = GetLangEnum::JA;
    $request->package = GetPackageEnum::WS22;

    $response = $sdk->get($request);

    if ($response->get200ApplicationJSONString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->