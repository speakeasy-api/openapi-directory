<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->dailyMetrics = [
        BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum::BUSINESS_FOOD_ORDERS,
        BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum::BUSINESS_DIRECTION_REQUESTS,
        BusinessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeriesDailyMetricsEnum::BUSINESS_FOOD_ORDERS,
    ];
    $request->dailyRangeEndDateDay = 423655;
    $request->dailyRangeEndDateMonth = 623564;
    $request->dailyRangeEndDateYear = 645894;
    $request->dailyRangeStartDateDay = 384382;
    $request->dailyRangeStartDateMonth = 437587;
    $request->dailyRangeStartDateYear = 297534;
    $request->fields = 'debitis';
    $request->key = 'ipsa';
    $request->location = 'delectus';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'minus';

    $response = $sdk->locations->businessprofileperformanceLocationsFetchMultiDailyMetricsTimeSeries($request);

    if ($response->fetchMultiDailyMetricsTimeSeriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->