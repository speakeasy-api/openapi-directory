<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSearchanalyticsQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchAnalyticsQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiDimensionFilterGroup;
use \OpenAPI\OpenAPI\Models\Shared\ApiDimensionFilter;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSearchanalyticsQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSearchanalyticsQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSearchanalyticsQuerySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSearchanalyticsQueryRequest();
    $request->searchAnalyticsQueryRequest = new SearchAnalyticsQueryRequest();
    $request->searchAnalyticsQueryRequest->aggregationType = 'corrupti';
    $request->searchAnalyticsQueryRequest->dataState = 'provident';
    $request->searchAnalyticsQueryRequest->dimensionFilterGroups = [
        new ApiDimensionFilterGroup(),
        new ApiDimensionFilterGroup(),
        new ApiDimensionFilterGroup(),
    ];
    $request->searchAnalyticsQueryRequest->dimensions = [
        'unde',
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->searchAnalyticsQueryRequest->endDate = 'vel';
    $request->searchAnalyticsQueryRequest->rowLimit = 623564;
    $request->searchAnalyticsQueryRequest->searchType = 'deserunt';
    $request->searchAnalyticsQueryRequest->startDate = 'suscipit';
    $request->searchAnalyticsQueryRequest->startRow = 437587;
    $request->alt = AltEnum::JSON;
    $request->fields = 'magnam';
    $request->key = 'debitis';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->siteUrl = 'tempora';
    $request->userIp = 'suscipit';

    $requestSecurity = new WebmastersSearchanalyticsQuerySecurity();
    $requestSecurity->option1 = new WebmastersSearchanalyticsQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->searchanalytics->webmastersSearchanalyticsQuery($request, $requestSecurity);

    if ($response->searchAnalyticsQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->