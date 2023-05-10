<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelimpactmodelFlightsComputeFlightEmissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeFlightEmissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Flight;
use \OpenAPI\OpenAPI\Models\Shared\Date;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelimpactmodelFlightsComputeFlightEmissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->computeFlightEmissionsRequest = new ComputeFlightEmissionsRequest();
    $request->computeFlightEmissionsRequest->flights = [
        new Flight(),
        new Flight(),
        new Flight(),
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'nulla';
    $request->key = 'corrupti';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'vel';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'deserunt';

    $response = $sdk->flights->travelimpactmodelFlightsComputeFlightEmissions($request);

    if ($response->computeFlightEmissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->