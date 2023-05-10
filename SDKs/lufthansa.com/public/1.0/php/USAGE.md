<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest();
    $request->accept = 'corrupti';
    $request->destination = 'provident';
    $request->fromDate = 'distinctio';
    $request->origin = 'quibusdam';
    $request->productCode = CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum::YNB;

    $requestSecurity = new CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cargo->cargoGetRouteFromDateProductCodeByOriginAndDestinationGet($request, $requestSecurity);

    if ($response->cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->