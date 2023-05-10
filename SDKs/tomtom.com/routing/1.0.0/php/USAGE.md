<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HillinessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TravelModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindingnessEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest();
    $request->accelerationEfficiency = 5488.14;
    $request->arriveAt = 'provident';
    $request->auxiliaryPowerInLitersPerHour = 7151.9;
    $request->avoid = 'quibusdam';
    $request->callback = 'unde';
    $request->constantSpeedConsumptionInLitersPerHundredkm = 'nulla';
    $request->constantSpeedConsumptionInkWhPerHundredkm = 'corrupti';
    $request->contentType = ContentTypeEnum::JSONP;
    $request->currentFuelInLiters = 4236.55;
    $request->decelerationEfficiency = 6235.64;
    $request->departAt = 'deserunt';
    $request->downhillEfficiency = 3843.82;
    $request->energyBudgetInkWh = 4375.87;
    $request->fuelBudgetInLiters = 2975.34;
    $request->fuelEnergyDensityInMJoulesPerLiter = 8917.73;
    $request->hilliness = HillinessEnum::LOW;
    $request->origin = 'delectus';
    $request->report = ReportEnum::EFFECTIVE_SETTINGS;
    $request->routeType = RouteTypeEnum::SHORTEST;
    $request->timeBudgetInSec = 3834.41;
    $request->traffic = false;
    $request->travelMode = TravelModeEnum::BUS;
    $request->uphillEfficiency = 7917.25;
    $request->vehicleAxleWeight = 812169;
    $request->vehicleCommercial = false;
    $request->vehicleEngineType = GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum::ELECTRIC;
    $request->vehicleHeight = 4799.77;
    $request->vehicleLength = 5680.45;
    $request->vehicleLoadType = 'nisi';
    $request->vehicleMaxSpeed = 925597;
    $request->vehicleWeight = 836079;
    $request->vehicleWidth = 710.36;
    $request->versionNumber = VersionNumberEnum::ONE;
    $request->windingness = WindingnessEnum::NORMAL;

    $response = $sdk->routing->getRoutingVersionNumberCalculateReachableRangeOriginContentType($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->