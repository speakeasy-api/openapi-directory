<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetChartRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetChartRequest();
    $request->backgroundColor = 'corrupti';
    $request->chart = 'provident';
    $request->format = 'distinctio';
    $request->height = 844266;
    $request->width = 602763;

    $response = $sdk->getChart($request);

    if ($response->getChart200ImageJpegBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->