# routing

### Available Operations

* [getRoutingVersionNumberCalculateReachableRangeOriginContentType](#getroutingversionnumbercalculatereachablerangeorigincontenttype) - Reachable Range
* [getRoutingVersionNumberCalculateRouteLocationsContentType](#getroutingversionnumbercalculateroutelocationscontenttype) - Calculate Route
* [postRoutingVersionNumberCalculateReachableRangeOriginContentTypeJson](#postroutingversionnumbercalculatereachablerangeorigincontenttypejson) - Reachable Range
* [postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw](#postroutingversionnumbercalculatereachablerangeorigincontenttyperaw) - Reachable Range
* [postRoutingVersionNumberCalculateRouteLocationsContentTypeJson](#postroutingversionnumbercalculateroutelocationscontenttypejson) - Calculate Route
* [postRoutingVersionNumberCalculateRouteLocationsContentTypeRaw](#postroutingversionnumbercalculateroutelocationscontenttyperaw) - Calculate Route

## getRoutingVersionNumberCalculateReachableRangeOriginContentType

Calculates a set of locations that can be reached from the origin point.

### Example Usage

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
    $request->accelerationEfficiency = 871.29;
    $request->arriveAt = 'deserunt';
    $request->auxiliaryPowerInLitersPerHour = 202.18;
    $request->avoid = 'ipsam';
    $request->callback = 'repellendus';
    $request->constantSpeedConsumptionInLitersPerHundredkm = 'sapiente';
    $request->constantSpeedConsumptionInkWhPerHundredkm = 'quo';
    $request->contentType = ContentTypeEnum::XML;
    $request->currentFuelInLiters = 8700.13;
    $request->decelerationEfficiency = 8700.88;
    $request->departAt = 'maiores';
    $request->downhillEfficiency = 4736.08;
    $request->energyBudgetInkWh = 7991.59;
    $request->fuelBudgetInLiters = 8009.11;
    $request->fuelEnergyDensityInMJoulesPerLiter = 4614.79;
    $request->hilliness = HillinessEnum::NORMAL;
    $request->origin = 'porro';
    $request->report = ReportEnum::EFFECTIVE_SETTINGS;
    $request->routeType = RouteTypeEnum::ECO;
    $request->timeBudgetInSec = 1182.74;
    $request->traffic = false;
    $request->travelMode = TravelModeEnum::MOTORCYCLE;
    $request->uphillEfficiency = 6399.21;
    $request->vehicleAxleWeight = 582020;
    $request->vehicleCommercial = false;
    $request->vehicleEngineType = GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum::COMBUSTION;
    $request->vehicleHeight = 5373.73;
    $request->vehicleLength = 9446.69;
    $request->vehicleLoadType = 'optio';
    $request->vehicleMaxSpeed = 521848;
    $request->vehicleWeight = 105907;
    $request->vehicleWidth = 4146.62;
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

## getRoutingVersionNumberCalculateRouteLocationsContentType

Calculates a route between an origin and a destination.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AlternativeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeTravelTimeForEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HillinessEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstructionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteRepresentationEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TravelModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VehicleEngineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindingnessEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest();
    $request->accelerationEfficiency = 2645.55;
    $request->alternativeType = AlternativeTypeEnum::ANY_ROUTE;
    $request->arriveAt = 'impedit';
    $request->auxiliaryPowerInLitersPerHour = 7369.18;
    $request->avoid = 'esse';
    $request->callback = 'ipsum';
    $request->computeBestOrder = false;
    $request->computeTravelTimeFor = ComputeTravelTimeForEnum::ALL;
    $request->constantSpeedConsumptionInLitersPerHundredkm = 'aspernatur';
    $request->constantSpeedConsumptionInkWhPerHundredkm = 'perferendis';
    $request->contentType = ContentTypeEnum::XML;
    $request->currentFuelInLiters = 6176.36;
    $request->decelerationEfficiency = 1496.75;
    $request->departAt = 'iste';
    $request->downhillEfficiency = 2223.21;
    $request->fuelEnergyDensityInMJoulesPerLiter = 6169.34;
    $request->hilliness = HillinessEnum::NORMAL;
    $request->instructionsType = InstructionsTypeEnum::TAGGED;
    $request->language = 'saepe';
    $request->locations = 'fuga';
    $request->maxAlternatives = 449950;
    $request->minDeviationDistance = 359508;
    $request->minDeviationTime = 613064;
    $request->report = ReportEnum::EFFECTIVE_SETTINGS;
    $request->routeRepresentation = RouteRepresentationEnum::POLYLINE;
    $request->routeType = RouteTypeEnum::THRILLING;
    $request->sectionType = 'quidem';
    $request->traffic = false;
    $request->travelMode = TravelModeEnum::CAR;
    $request->uphillEfficiency = 602.25;
    $request->vehicleAxleWeight = 969810;
    $request->vehicleCommercial = false;
    $request->vehicleEngineType = VehicleEngineTypeEnum::ELECTRIC;
    $request->vehicleHeading = 653140;
    $request->vehicleHeight = 6706.38;
    $request->vehicleLength = 1709.09;
    $request->vehicleLoadType = 'dolorem';
    $request->vehicleMaxSpeed = 358152;
    $request->vehicleWeight = 128926;
    $request->vehicleWidth = 7506.86;
    $request->versionNumber = VersionNumberEnum::ONE;
    $request->windingness = WindingnessEnum::LOW;

    $response = $sdk->routing->getRoutingVersionNumberCalculateRouteLocationsContentType($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRoutingVersionNumberCalculateReachableRangeOriginContentTypeJson

Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\CalculateReachableRangePostDataParameters;
use \OpenAPI\OpenAPI\Models\Shared\CalculateReachableRangePostDataParametersAvoidAreas;
use \OpenAPI\OpenAPI\Models\Shared\CalculateReachableRangePostDataParametersAvoidAreasRectangles;
use \OpenAPI\OpenAPI\Models\Shared\CalculateReachableRangePostDataParametersAvoidAreasRectanglesNorthEastCorner;
use \OpenAPI\OpenAPI\Models\Shared\CalculateReachableRangePostDataParametersAvoidAreasRectanglesSouthWestCorner;
use \OpenAPI\OpenAPI\Models\Shared\ContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HillinessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TravelModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJsonVehicleEngineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindingnessEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJsonRequest();
    $request->accelerationEfficiency = 6078.31;
    $request->arriveAt = 'nemo';
    $request->auxiliaryPowerInLitersPerHour = 3250.47;
    $request->avoid = 'excepturi';
    $request->calculateReachableRangePostDataParameters = new CalculateReachableRangePostDataParameters();
    $request->calculateReachableRangePostDataParameters->allowVignette = [
        'iure',
    ];
    $request->calculateReachableRangePostDataParameters->avoidAreas = new CalculateReachableRangePostDataParametersAvoidAreas();
    $request->calculateReachableRangePostDataParameters->avoidAreas->rectangles = [
        new CalculateReachableRangePostDataParametersAvoidAreasRectangles(),
        new CalculateReachableRangePostDataParametersAvoidAreasRectangles(),
        new CalculateReachableRangePostDataParametersAvoidAreasRectangles(),
    ];
    $request->calculateReachableRangePostDataParameters->avoidVignette = [
        'sapiente',
        'architecto',
        'mollitia',
        'dolorem',
    ];
    $request->callback = 'culpa';
    $request->constantSpeedConsumptionInLitersPerHundredkm = 'consequuntur';
    $request->constantSpeedConsumptionInkWhPerHundredkm = 'repellat';
    $request->contentType = ContentTypeEnum::JSON;
    $request->currentFuelInLiters = 5818.5;
    $request->decelerationEfficiency = 2532.91;
    $request->departAt = 'commodi';
    $request->downhillEfficiency = 4663.11;
    $request->energyBudgetInkWh = 4746.97;
    $request->fuelBudgetInLiters = 2444.25;
    $request->fuelEnergyDensityInMJoulesPerLiter = 6235.1;
    $request->hilliness = HillinessEnum::LOW;
    $request->origin = 'quis';
    $request->report = ReportEnum::EFFECTIVE_SETTINGS;
    $request->routeType = RouteTypeEnum::FASTEST;
    $request->timeBudgetInSec = 6747.52;
    $request->traffic = false;
    $request->travelMode = TravelModeEnum::MOTORCYCLE;
    $request->uphillEfficiency = 3172.02;
    $request->vehicleAxleWeight = 138183;
    $request->vehicleCommercial = false;
    $request->vehicleEngineType = PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJsonVehicleEngineTypeEnum::ELECTRIC;
    $request->vehicleHeight = 1965.82;
    $request->vehicleLength = 9495.72;
    $request->vehicleLoadType = 'ipsam';
    $request->vehicleMaxSpeed = 662527;
    $request->vehicleWeight = 820994;
    $request->vehicleWidth = 135.71;
    $request->versionNumber = VersionNumberEnum::ONE;
    $request->windingness = WindingnessEnum::LOW;

    $response = $sdk->routing->postRoutingVersionNumberCalculateReachableRangeOriginContentTypeJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw

Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HillinessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TravelModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawVehicleEngineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindingnessEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawRequest();
    $request->requestBody = 'error';
    $request->accelerationEfficiency = 8379.45;
    $request->arriveAt = 'laborum';
    $request->auxiliaryPowerInLitersPerHour = 960.98;
    $request->avoid = 'reiciendis';
    $request->callback = 'voluptatibus';
    $request->constantSpeedConsumptionInLitersPerHundredkm = 'vero';
    $request->constantSpeedConsumptionInkWhPerHundredkm = 'nihil';
    $request->contentType = ContentTypeEnum::JSON;
    $request->currentFuelInLiters = 9767.62;
    $request->decelerationEfficiency = 557.14;
    $request->departAt = 'omnis';
    $request->downhillEfficiency = 4511.59;
    $request->energyBudgetInkWh = 7392.64;
    $request->fuelBudgetInLiters = 199.87;
    $request->fuelEnergyDensityInMJoulesPerLiter = 391.87;
    $request->hilliness = HillinessEnum::NORMAL;
    $request->origin = 'ut';
    $request->report = ReportEnum::EFFECTIVE_SETTINGS;
    $request->routeType = RouteTypeEnum::THRILLING;
    $request->timeBudgetInSec = 1201.96;
    $request->traffic = false;
    $request->travelMode = TravelModeEnum::TAXI;
    $request->uphillEfficiency = 2961.4;
    $request->vehicleAxleWeight = 480894;
    $request->vehicleCommercial = false;
    $request->vehicleEngineType = PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawVehicleEngineTypeEnum::COMBUSTION;
    $request->vehicleHeight = 6886.61;
    $request->vehicleLength = 3179.83;
    $request->vehicleLoadType = 'accusamus';
    $request->vehicleMaxSpeed = 414263;
    $request->vehicleWeight = 918236;
    $request->vehicleWidth = 641.47;
    $request->versionNumber = VersionNumberEnum::ONE;
    $request->windingness = WindingnessEnum::LOW;

    $response = $sdk->routing->postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRoutingVersionNumberCalculateRouteLocationsContentTypeJson

Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostRoutingVersionNumberCalculateRouteLocationsContentTypeJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\AlternativeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CalculateRoutePostDataParameters;
use \OpenAPI\OpenAPI\Models\Shared\CalculateRoutePostDataParametersAvoidAreas;
use \OpenAPI\OpenAPI\Models\Shared\CalculateRoutePostDataParametersAvoidAreasRectangles;
use \OpenAPI\OpenAPI\Models\Shared\CalculateRoutePostDataParametersAvoidAreasRectanglesNorthEastCorner;
use \OpenAPI\OpenAPI\Models\Shared\CalculateRoutePostDataParametersAvoidAreasRectanglesSouthWestCorner;
use \OpenAPI\OpenAPI\Models\Shared\CalculateRoutePostDataParametersSupportingPoints;
use \OpenAPI\OpenAPI\Models\Shared\ComputeTravelTimeForEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HillinessEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstructionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteRepresentationEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TravelModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VehicleEngineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindingnessEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRoutingVersionNumberCalculateRouteLocationsContentTypeJsonRequest();
    $request->accelerationEfficiency = 6924.72;
    $request->alternativeType = AlternativeTypeEnum::BETTER_ROUTE;
    $request->arriveAt = 'excepturi';
    $request->auxiliaryPowerInLitersPerHour = 8651.03;
    $request->avoid = 'modi';
    $request->calculateRoutePostDataParameters = new CalculateRoutePostDataParameters();
    $request->calculateRoutePostDataParameters->allowVignette = [
        'rem',
        'voluptates',
        'quasi',
    ];
    $request->calculateRoutePostDataParameters->avoidAreas = new CalculateRoutePostDataParametersAvoidAreas();
    $request->calculateRoutePostDataParameters->avoidAreas->rectangles = [
        new CalculateRoutePostDataParametersAvoidAreasRectangles(),
        new CalculateRoutePostDataParametersAvoidAreasRectangles(),
        new CalculateRoutePostDataParametersAvoidAreasRectangles(),
        new CalculateRoutePostDataParametersAvoidAreasRectangles(),
    ];
    $request->calculateRoutePostDataParameters->avoidVignette = [
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->calculateRoutePostDataParameters->supportingPoints = [
        new CalculateRoutePostDataParametersSupportingPoints(),
        new CalculateRoutePostDataParametersSupportingPoints(),
    ];
    $request->callback = 'consequatur';
    $request->computeBestOrder = false;
    $request->computeTravelTimeFor = ComputeTravelTimeForEnum::ALL;
    $request->constantSpeedConsumptionInLitersPerHundredkm = 'quibusdam';
    $request->constantSpeedConsumptionInkWhPerHundredkm = 'explicabo';
    $request->contentType = ContentTypeEnum::JSON;
    $request->currentFuelInLiters = 7163.27;
    $request->decelerationEfficiency = 8413.86;
    $request->departAt = 'labore';
    $request->downhillEfficiency = 2647.3;
    $request->fuelEnergyDensityInMJoulesPerLiter = 1831.91;
    $request->hilliness = HillinessEnum::NORMAL;
    $request->instructionsType = InstructionsTypeEnum::TEXT;
    $request->language = 'quos';
    $request->locations = 'perferendis';
    $request->maxAlternatives = 164940;
    $request->minDeviationDistance = 828940;
    $request->minDeviationTime = 369808;
    $request->report = ReportEnum::EFFECTIVE_SETTINGS;
    $request->routeRepresentation = RouteRepresentationEnum::POLYLINE;
    $request->routeType = RouteTypeEnum::FASTEST;
    $request->sectionType = 'dolorum';
    $request->traffic = false;
    $request->travelMode = TravelModeEnum::VAN;
    $request->uphillEfficiency = 2700.08;
    $request->vehicleAxleWeight = 703737;
    $request->vehicleCommercial = false;
    $request->vehicleEngineType = VehicleEngineTypeEnum::ELECTRIC;
    $request->vehicleHeading = 288476;
    $request->vehicleHeight = 9621.89;
    $request->vehicleLength = 4332.88;
    $request->vehicleLoadType = 'non';
    $request->vehicleMaxSpeed = 756107;
    $request->vehicleWeight = 576157;
    $request->vehicleWidth = 3960.98;
    $request->versionNumber = VersionNumberEnum::ONE;
    $request->windingness = WindingnessEnum::NORMAL;

    $response = $sdk->routing->postRoutingVersionNumberCalculateRouteLocationsContentTypeJson($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRoutingVersionNumberCalculateRouteLocationsContentTypeRaw

Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostRoutingVersionNumberCalculateRouteLocationsContentTypeRawRequest;
use \OpenAPI\OpenAPI\Models\Shared\AlternativeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeTravelTimeForEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\HillinessEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstructionsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteRepresentationEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TravelModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VehicleEngineTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionNumberEnum;
use \OpenAPI\OpenAPI\Models\Shared\WindingnessEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRoutingVersionNumberCalculateRouteLocationsContentTypeRawRequest();
    $request->requestBody = 'necessitatibus';
    $request->accelerationEfficiency = 5722.52;
    $request->alternativeType = AlternativeTypeEnum::BETTER_ROUTE;
    $request->arriveAt = 'dolor';
    $request->auxiliaryPowerInLitersPerHour = 8915.55;
    $request->avoid = 'a';
    $request->callback = 'dolorum';
    $request->computeBestOrder = false;
    $request->computeTravelTimeFor = ComputeTravelTimeForEnum::NONE;
    $request->constantSpeedConsumptionInLitersPerHundredkm = 'in';
    $request->constantSpeedConsumptionInkWhPerHundredkm = 'illum';
    $request->contentType = ContentTypeEnum::JSONP;
    $request->currentFuelInLiters = 6994.79;
    $request->decelerationEfficiency = 1162.02;
    $request->departAt = 'magnam';
    $request->downhillEfficiency = 7670.24;
    $request->fuelEnergyDensityInMJoulesPerLiter = 8137.98;
    $request->hilliness = HillinessEnum::NORMAL;
    $request->instructionsType = InstructionsTypeEnum::TEXT;
    $request->language = 'laborum';
    $request->locations = 'accusamus';
    $request->maxAlternatives = 249796;
    $request->minDeviationDistance = 581273;
    $request->minDeviationTime = 313218;
    $request->report = ReportEnum::EFFECTIVE_SETTINGS;
    $request->routeRepresentation = RouteRepresentationEnum::NONE;
    $request->routeType = RouteTypeEnum::THRILLING;
    $request->sectionType = 'quidem';
    $request->traffic = false;
    $request->travelMode = TravelModeEnum::VAN;
    $request->uphillEfficiency = 7252.55;
    $request->vehicleAxleWeight = 659669;
    $request->vehicleCommercial = false;
    $request->vehicleEngineType = VehicleEngineTypeEnum::ELECTRIC;
    $request->vehicleHeading = 533206;
    $request->vehicleHeight = 9560.84;
    $request->vehicleLength = 2305.33;
    $request->vehicleLoadType = 'deserunt';
    $request->vehicleMaxSpeed = 394869;
    $request->vehicleWeight = 423855;
    $request->vehicleWidth = 6188.09;
    $request->versionNumber = VersionNumberEnum::ONE;
    $request->windingness = WindingnessEnum::NORMAL;

    $response = $sdk->routing->postRoutingVersionNumberCalculateRouteLocationsContentTypeRaw($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
