<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetForecastRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetForecastRequest();
    $request->alt = 1050;
    $request->dt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2018-02-04T04:39:06.467Z');
    $request->lat = 78.67;
    $request->lng = 115.67;
    $request->ozone = 304.5;
    $request->xAccessToken = 'corrupti';

    $response = $sdk->getForecast($request);

    if ($response->forecastResults !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->