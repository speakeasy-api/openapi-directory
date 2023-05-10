# cargo

### Available Operations

* [cargoGetRouteFromDateProductCodeByOriginAndDestinationGet](#cargogetroutefromdateproductcodebyoriginanddestinationget) - Retrieve all flights
* [cargoShipmentTrackingByAWBPrefixAndAWBNumberGet](#cargoshipmenttrackingbyawbprefixandawbnumberget) - Shipment Tracking

## cargoGetRouteFromDateProductCodeByOriginAndDestinationGet

Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.

### Example Usage

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
    $request->accept = 'nulla';
    $request->destination = 'corrupti';
    $request->fromDate = 'illum';
    $request->origin = 'vel';
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

## cargoShipmentTrackingByAWBPrefixAndAWBNumberGet

With this tracking service you can easily retrieve your shipment or flight status information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CargoShipmentTrackingByAWBPrefixAndAWBNumberGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CargoShipmentTrackingByAWBPrefixAndAWBNumberGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CargoShipmentTrackingByAWBPrefixAndAWBNumberGetRequest();
    $request->accept = 'deserunt';
    $request->aWBNumber = 'suscipit';
    $request->aWBPrefix = 'iure';

    $requestSecurity = new CargoShipmentTrackingByAWBPrefixAndAWBNumberGetSecurity();
    $requestSecurity->auth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->cargo->cargoShipmentTrackingByAWBPrefixAndAWBNumberGet($request, $requestSecurity);

    if ($response->cargoShipmentTrackingByAWBPrefixAndAWBNumberGet200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
