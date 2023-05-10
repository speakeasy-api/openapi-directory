# patterns

### Available Operations

* [patternsGetPatternByRun](#patternsgetpatternbyrun) - View the stopping pattern for a specific trip/service run

## patternsGetPatternByRun

View the stopping pattern for a specific trip/service run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatternsGetPatternByRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatternsGetPatternByRunExpandEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatternsGetPatternByRunRouteTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatternsGetPatternByRunRequest();
    $request->dateUtc = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-30T15:03:11.112Z');
    $request->devid = 'vitae';
    $request->expand = [
        PatternsGetPatternByRunExpandEnum::DISRUPTION,
        PatternsGetPatternByRunExpandEnum::ROUTE,
        PatternsGetPatternByRunExpandEnum::STOP,
    ];
    $request->includeGeopath = false;
    $request->includeSkippedStops = false;
    $request->routeType = PatternsGetPatternByRunRouteTypeEnum::THREE;
    $request->runRef = 'sequi';
    $request->signature = 'tenetur';
    $request->stopId = 368725;
    $request->token = 'id';

    $response = $sdk->patterns->patternsGetPatternByRun($request);

    if ($response->v3StoppingPattern !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
