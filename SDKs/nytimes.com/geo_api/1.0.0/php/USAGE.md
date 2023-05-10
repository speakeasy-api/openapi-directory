<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQueryJsonFacetsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQueryJsonRequest();
    $request->dateRange = 'corrupti';
    $request->elevation = 592845;
    $request->facets = GetQueryJsonFacetsEnum::ONE;
    $request->filter = 'quibusdam';
    $request->latitude = 'unde';
    $request->limit = 857946;
    $request->longitude = 'corrupti';
    $request->name = 'Ben Mueller';
    $request->offset = 437587;
    $request->query = 'magnam';
    $request->sort = 'debitis';
    $request->sw = 'ipsa';

    $response = $sdk->events->getQueryJson($request);

    if ($response->getQueryJSON200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->