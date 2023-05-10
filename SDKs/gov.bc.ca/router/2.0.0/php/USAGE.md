<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatCriteriaEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatDistanceUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatOutputFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectionsOutputFormatOutputSrsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDirectionsOutputFormatRequest();
    $request->correctSide = false;
    $request->criteria = GetDirectionsOutputFormatCriteriaEnum::FASTEST;
    $request->departure = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-27T21:52:56.087Z');
    $request->disable = 'quibusdam';
    $request->distanceUnit = GetDirectionsOutputFormatDistanceUnitEnum::MI;
    $request->outputFormat = GetDirectionsOutputFormatOutputFormatEnum::HTML;
    $request->outputSRS = GetDirectionsOutputFormatOutputSrsEnum::TWENTY_SIX_THOUSAND_NINE_HUNDRED_AND_EIGHT;
    $request->points = 'illum';
    $request->roundTrip = false;
    $request->routeDescription = 'vel';

    $response = $sdk->directions->getDirectionsOutputFormat($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->