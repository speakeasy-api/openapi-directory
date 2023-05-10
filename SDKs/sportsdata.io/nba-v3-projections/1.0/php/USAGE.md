<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DepthChartsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DepthChartsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DepthChartsRequest();
    $request->format = DepthChartsFormatEnum::JSON;

    $response = $sdk->depthCharts($request);

    if ($response->teamDepthCharts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->