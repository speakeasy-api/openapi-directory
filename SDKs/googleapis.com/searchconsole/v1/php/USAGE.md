<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSearchanalyticsQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchAnalyticsQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchAnalyticsQueryRequestAggregationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchAnalyticsQueryRequestDataStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiDimensionFilterGroup;
use \OpenAPI\OpenAPI\Models\Shared\ApiDimensionFilter;
use \OpenAPI\OpenAPI\Models\Shared\ApiDimensionFilterDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiDimensionFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiDimensionFilterGroupGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchAnalyticsQueryRequestDimensionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchAnalyticsQueryRequestSearchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchAnalyticsQueryRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSearchanalyticsQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSearchanalyticsQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSearchanalyticsQuerySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSearchanalyticsQueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->searchAnalyticsQueryRequest = new SearchAnalyticsQueryRequest();
    $request->searchAnalyticsQueryRequest->aggregationType = SearchAnalyticsQueryRequestAggregationTypeEnum::BY_PROPERTY;
    $request->searchAnalyticsQueryRequest->dataState = SearchAnalyticsQueryRequestDataStateEnum::ALL;
    $request->searchAnalyticsQueryRequest->dimensionFilterGroups = [
        new ApiDimensionFilterGroup(),
        new ApiDimensionFilterGroup(),
        new ApiDimensionFilterGroup(),
        new ApiDimensionFilterGroup(),
    ];
    $request->searchAnalyticsQueryRequest->dimensions = [
        SearchAnalyticsQueryRequestDimensionsEnum::SEARCH_APPEARANCE,
        SearchAnalyticsQueryRequestDimensionsEnum::COUNTRY,
        SearchAnalyticsQueryRequestDimensionsEnum::SEARCH_APPEARANCE,
    ];
    $request->searchAnalyticsQueryRequest->endDate = 'vel';
    $request->searchAnalyticsQueryRequest->rowLimit = 623564;
    $request->searchAnalyticsQueryRequest->searchType = SearchAnalyticsQueryRequestSearchTypeEnum::NEWS;
    $request->searchAnalyticsQueryRequest->startDate = 'suscipit';
    $request->searchAnalyticsQueryRequest->startRow = 437587;
    $request->searchAnalyticsQueryRequest->type = SearchAnalyticsQueryRequestTypeEnum::IMAGE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->siteUrl = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

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