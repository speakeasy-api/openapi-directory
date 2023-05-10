# searchanalytics

### Available Operations

* [webmastersSearchanalyticsQuery](#webmasterssearchanalyticsquery) - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

## webmastersSearchanalyticsQuery

Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### Example Usage

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
        SearchAnalyticsQueryRequestDimensionsEnum::PAGE,
    ];
    $request->searchAnalyticsQueryRequest->endDate = 'veritatis';
    $request->searchAnalyticsQueryRequest->rowLimit = 648172;
    $request->searchAnalyticsQueryRequest->searchType = SearchAnalyticsQueryRequestSearchTypeEnum::WEB;
    $request->searchAnalyticsQueryRequest->startDate = 'ipsam';
    $request->searchAnalyticsQueryRequest->startRow = 832620;
    $request->searchAnalyticsQueryRequest->type = SearchAnalyticsQueryRequestTypeEnum::GOOGLE_NEWS;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'at';
    $request->key = 'maiores';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->siteUrl = 'quod';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'totam';

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
