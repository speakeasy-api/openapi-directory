<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsAggregateValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AggregateAssetsValuesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Aggregation;
use \OpenAPI\OpenAPI\Models\Shared\AggregationHistogram;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MigrationcenterProjectsLocationsAssetsAggregateValuesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->aggregateAssetsValuesRequest = new AggregateAssetsValuesRequest();
    $request->aggregateAssetsValuesRequest->aggregations = [
        new Aggregation(),
        new Aggregation(),
        new Aggregation(),
    ];
    $request->aggregateAssetsValuesRequest->filter = 'distinctio';
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'corrupti';
    $request->key = 'illum';
    $request->oauthToken = 'vel';
    $request->parent = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'deserunt';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iure';

    $requestSecurity = new MigrationcenterProjectsLocationsAssetsAggregateValuesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->migrationcenterProjectsLocationsAssetsAggregateValues($request, $requestSecurity);

    if ($response->aggregateAssetsValuesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->