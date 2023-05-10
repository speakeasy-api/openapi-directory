<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCountriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCountriesOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetCountriesSortEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCountriesRequest();
    $request->marketId = 'corrupti';
    $request->order = GetCountriesOrderEnum::DESCENDING;
    $request->regionName = 'distinctio';
    $request->regionTypeId = 844266;
    $request->sort = GetCountriesSortEnum::LABEL;

    $response = $sdk->v1->getCountries($request);

    if ($response->arrayOfCountrySummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->